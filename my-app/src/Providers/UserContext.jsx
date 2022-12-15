import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", response.data.token);
      setUser(response.data.user);
      toast.success("Login realizado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error("Senha ou email inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{user, setUser, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
