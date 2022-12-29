import { RoutesMain as Routes } from "./routes";
import { GlobalStyle } from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/TechContext/ContextAPI";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};
