import { createContext, useContext, useEffect, useState } from "react";
import { ContextAPI } from "./ContextAPI";
import { api } from "../../services/api";
import { StyledTechnology } from "../../Components/Technology/styled";
import { Card } from "../../Components/Card/card";
import { Modal } from "../../Components/Modal/modalNewTech";
import { ModalEdit } from "../../Components/Modal/modalEdit";
import { toast } from "react-toastify";

export const ContextTechList = createContext();

export const TechnologyList = () => {
  const [list, setList] = useState([]);
  const [techID, setTechId] = useState();
  const [techName, setTechName] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const { user } = useContext(ContextAPI);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const ListTechnology = async () => {
      try {
        const response = await api.get(`users/${user.id}`);
        setList(response.data.techs);
      } catch (error) {
        console.error(error);
      }
    };

    ListTechnology();
  }, []);

  const addTech = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia cadastrada");
      setList([...list, response.data]);
      setShowModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Essa tecnologia já foi cadastrada");
    }
  };

  const editTech = async (id, data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.put(`users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowModalEdit(false);
      toast.success("Status Alterado");
      setList(
        list.map((item) => {
          return item.id === response.data.id ? response.data : item;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deletTech = async (id) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const DeletListTechs = list.filter((item) => item.id !== id);
      setList(DeletListTechs);
      toast.success("Tecnologia Deletada");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContextTechList.Provider
      value={{
        list,
        setList,
        showModal,
        setShowModal,
        showModalEdit,
        setShowModalEdit,
        addTech,
        editTech,
        techID,
        setTechId,
        techName,
        setTechName,
        deletTech,
      }}
    >
      <Modal />
      <ModalEdit />
      <StyledTechnology>
        <div className="tech">
          <p>Tecnologias</p>
          <button onClick={openModal}>+</button>
        </div>
        <ul>
          {list.length == 0 ? (
            <p className="description">Sem tecnologias cadastradas</p>
          ) : (
            list.map((item) => {
              return <Card item={item} key={item.id} />;
            })
          )}
        </ul>
      </StyledTechnology>
    </ContextTechList.Provider>
  );
};
