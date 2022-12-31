import { createContext } from "react";

export const UserRegisterContext = createContext({});

export const UserRegisterProvider = ({ children }) => {
  return (
    <UserRegisterContext.Provider value={{}}>
      {children}
    </UserRegisterContext.Provider>
  );
};
