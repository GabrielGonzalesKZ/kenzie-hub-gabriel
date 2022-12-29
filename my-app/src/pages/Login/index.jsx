import { StyledLogin } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Components/Schemas/LoginSchema";
import { ContextAPI } from "../../Context/TechContext/ContextAPI";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(ContextAPI);
  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors },} = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit = (data) => {
    userLogin(data, setLoading);
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <StyledLogin className="animate__animated animate__fadeInDown">
      <h1>Kenzie Hub</h1>
      <div>
        <h4>Login</h4>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Insira seu email."
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error">{errors.email.message}</p>
          )}
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Insira sua senha."
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error">{errors.password.message}</p>
          )}
          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <span>
          <Link to="/register">Ainda não possui uma conta ?</Link>
        </span>
        <button>
          <Link to="/register">Cadastre-se</Link>
        </button>
      </div>
    </StyledLogin>
  );
};
