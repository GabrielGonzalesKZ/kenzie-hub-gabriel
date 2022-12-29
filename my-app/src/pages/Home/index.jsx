import { useContext } from "react"
import { Link } from "react-router-dom"
import { Technology } from "../../Components/Technology/Technology"
import { ContextAPI } from "../../Context/TechContext/ContextAPI"
import { StyledHome } from "./styled"

export const Home = () => {

    const { user } = useContext(ContextAPI)
    const deletToken = () => {
        localStorage.removeItem("@TOKEN");
    } 

    return (
        <StyledHome className="animate__animated animate__fadeInDown">
            <div className="nav">
                <h1>Kenzie Hub</h1>
                <button onClick={deletToken}>{user && <Link to="/login">Sair</Link>}</button>
            </div>
            <div className="user">
                <div className="text">
                    <h4>Olá, {user.name}</h4>
                    <p>{user.course_module}</p>
                </div>
            </div>
            <Technology />
        </StyledHome>
    )
}