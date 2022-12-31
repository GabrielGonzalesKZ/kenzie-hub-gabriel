import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextTechList } from "../../Context/TechContext/ContextTech";
import { StyledModal } from "./styled";

export const ContextTechEdit = createContext();

export const ModalEdit = () => {
  const { register, handleSubmit } = useForm();
  const {
    techName,
    showModalEdit,
    setShowModalEdit,
    techID,
    editTech,
    deletTech,
  } = useContext(ContextTechList);

  const editTechList = (data) => {
    editTech(techID, data);
  };

  const closeModal = () => {
    setShowModalEdit(false);
  };

  const delet = (id) => {
    deletTech(id);
    setShowModalEdit(false);
  };

  if (!showModalEdit) {
    return null;
  } else {
    return (
      <StyledModal className="animate__animated animate__fadeInDown">
        <div>
          <p>Tecnologia Detalhes</p>
          <span onClick={closeModal}>X</span>
        </div>
        <form onSubmit={handleSubmit(editTechList)}>
          <label htmlFor="name">Nome do Projeto</label>
          <div className="techName">
            <p>{techName}</p>
          </div>

          <label htmlFor="select">Status</label>
          <select id="select" name="title" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="buttons">
            <button type="submit">Salvar Alterações</button>
            <button onClick={() => {delet(techID);}} className="delet"type="button">Excluir</button>
          </div>
        </form>
      </StyledModal>
    );
  }
};
