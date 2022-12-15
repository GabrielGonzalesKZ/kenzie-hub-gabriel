import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser(){
        const token = localStorage.getItem("@TOKEN");

        if(!token) {
            setLoading(false)
            return
        }

        try {
            const { data } = await api.get("/profile", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            setUser(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    loadUser()
  },[])

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
    <AuthContext.Provider value={{ userLogin, user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
