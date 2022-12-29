import { createContext, useContext, useEffect, useState } from "react";
import { ContextAPI } from "./ContextAPI";
import { api } from "../../services/api";
import { StyledTechnology } from "../../Components/Technology/styled";
import { Card } from "../../Components/Card";
import { Modal } from "../../Components/Modal";


export const ContextTechList = createContext()

export const TechnologyList = () => {
  const [list, setList] = useState([]);
  const { user } = useContext(ContextAPI);

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

  return (
    <ContextTechList.Provider value={{list, setList}}>
      <Modal />
      <StyledTechnology>
        <div className="tech">
          <p>Tecnologias</p>
          <button >+</button>
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
