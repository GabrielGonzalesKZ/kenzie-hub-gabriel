import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextTechList } from "../../Context/TechContext/ContextTech";
import { StyledModal } from "./styled";

export const Modal = () => {
  const { register, handleSubmit } = useForm();
  const { addTech, showModal, setShowModal } = useContext(ContextTechList);

  const listTech = (data) => {
    addTech(data);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  } else {
    return (
      <StyledModal className="animate__animated animate__fadeInDown">
        <div>
          <p>Cadastrar Tecnologia</p>
          <span onClick={closeModal}>X</span>
        </div>
        <form onSubmit={handleSubmit(listTech)}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Tecnologia"
            required
            {...register("title")}
          />
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
  }
};
