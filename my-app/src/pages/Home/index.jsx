import { Link } from "react-router-dom"
import { StyledHome } from "./styled"

export const Home = ({ user }) => {
    return (
        <StyledHome >
            <div className="nav">
                <h1>Kenzie Hub</h1>
                <button>{user && <Link to="/login">Sair</Link>}</button>
            </div>
            <div className="user">
                <div className="text">
                    <h4>Olá, {user.name}</h4>
                    <p>{user.course_module}</p>
                </div>
            </div>
            <div>
                <h2>Tecnologias em desenvolvimento</h2>
            </div>
        </StyledHome>
    )
}