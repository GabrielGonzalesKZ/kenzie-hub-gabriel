import { RoutesMain as Routes } from './routes';
import { GlobalStyle } from './styles/Global';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { api } from "./services/api"
import { useNavigate } from 'react-router-dom';

export const App = () => {

  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true)
      const response = await api.post("/sessions", formData)
      setUser(response.data.user)
      toast.success("Login realizado com sucesso")
      navigate("/home")
    } catch (error) {
      toast.error("Senha ou email inválidos")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Routes userLogin={userLogin} user={user} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};