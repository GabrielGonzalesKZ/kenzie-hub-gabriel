import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "./ContextApi";
import { createContext } from "react";
import { api } from "../../services/api"; 

export const ContextTech = createContext();

export const TechProviders = ({children}) => {

    const [showModal, setShowModal] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const {techList , setTechList} = useContext(ContextAPI)
    const [techEdit , setTechEdit] = useState()

    
    const addTech = async (data) =>{
     try {
            const token = localStorage.getItem("@TOKEN");
            const response = await api.post("users/techs", data , {
            headers:{
              Authorization: `Bearer ${token}`
                     }
            })
            setTechList([...techList, response.data])
            
      
     } catch (error) {
      
     }
    }
    
    const deleteTech = async (id) => {
      
      try {
            const token = localStorage.getItem("@TOKEN:");
            const response = await api.delete(`users/techs/${id}`, {
              headers:{
                Authorization: `Bearer ${token}`
              }
            })

            const AttListTechs = techList.filter(item => item.id !== id);
            setTechList(AttListTechs)
        
      } catch (error) {
        
      }
    }

      const editTech = async (id, data) => {
        
          try {
            const token = localStorage.getItem("@TOKEN:");
            const response = await api.put(`users/techs/${id}`, data, {
              headers:{
                Authorization: `Bearer ${token}`
              }
            })
            setTechList(techList.map(item => {
              return item.id === response.data.id ? response.data : item
            }))
           
          } catch (error) {
            
          }

       }

  

    return(
        <ContextTech.Provider value={{show, setShow, addTech, deleteTech, showEdit, setShowEdit, editTech, techEdit , setTechEdit}}>
            {children}
        </ContextTech.Provider>

    )
}