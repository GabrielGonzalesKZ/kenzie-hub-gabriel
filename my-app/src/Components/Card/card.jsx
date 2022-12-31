import { useContext } from "react";
import { ContextTechList } from "../../Context/TechContext/ContextTech";

export const Card = ({ item }) => {
  const { setShowModalEdit, setTechId, setTechName } =
    useContext(ContextTechList);

  const openModal = (id, name) => {
    setShowModalEdit(true);
    setTechId(id);
    setTechName(name);
  };

  return (
    <li
      onClick={() => openModal(item.id, item.title)}
      key={item.length}
      id={item.id}
      name={item.title}
    >
      <p>{item.title}</p>
      <span>{item.status}</span>
    </li>
  );
};
