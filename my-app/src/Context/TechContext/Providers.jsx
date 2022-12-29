import { UserProvider } from "./UserContext";
import { UserRegisterProvider } from "./UserRegisterContext";

const Providers = ({children}) => {
    return (
        <UserProvider>
            <UserRegisterProvider>
                {children}
            </UserRegisterProvider>
        </UserProvider>
    )
}

export default Providers 