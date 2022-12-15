import { RoutesMain as Routes } from './routes';
import { GlobalStyle } from './styles/Global';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Routes/>
    </>
  );
};