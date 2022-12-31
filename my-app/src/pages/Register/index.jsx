import { StyledRegister } from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../Components/Schemas/RegisterSchema";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
      contact: "",
      course_module: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      toast.success("Conta cadastrada com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error("Não foi possível criar sua conta");
    } finally {
      setLoading(false);
    }
  };

  const submit = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <>
      <StyledRegister className="animate__animated animate__fadeInDown">
        <div className="nav">
          <h1>Kenzie Hub</h1>
          <button>
            <Link to="/login">Voltar</Link>
          </button>
        </div>
        <div className="form">
          <h4>Crie sua conta</h4>
          <p>Rápido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <label>Nome</label>
            <input
              type="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="error">{errors.name.message}</p>
            )}
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="error">{errors.email.message}</p>
            )}
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="error">{errors.password.message}</p>
            )}
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
            <label>BIO</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio?.message && (
              <p className="error">{errors.bio.message}</p>
            )}
            <label>Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact?.message && (
              <p className="error">{errors.contact.message}</p>
            )}
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
              <option value="">Selecionar Módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
            {errors.course_module?.message && (
              <p className="error">{errors.course_module.message}</p>
            )}
            <button type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </StyledRegister>
    </>
  );
};
