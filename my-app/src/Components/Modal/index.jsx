import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ContextTechList } from "../../Context/TechContext/ListTech";
import { api } from "../../services/api";
import { StyledModal } from "./styled";


export const Modal = () => {
  const {register, handleSubmit, formState: { erros }} = useForm();
  const { list, setList } = useContext(ContextTechList);
 
  const listTech = (data) => {
    addTech(data);
  };

  const addTech = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia cadastrada")
      setList([...list, response.data]);
    } catch (error) {
      console.error(error);
      toast.error("Essa tecnologia já foi cadastrada")
    }
  };

  return (
    <StyledModal>
      <div>
        <p>Cadastrar Tecnologia</p>
        <span>X</span>
      </div>
      <form onSubmit={handleSubmit(listTech)}>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" name="name" placeholder="Tecnologia" required {...register("title")}/>
        <label htmlFor="select">Selecionar Status</label>
        <select id="select" name="title" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </StyledModal>
  );
};
