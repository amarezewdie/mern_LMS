import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const value = {
    navigate,
    token,
    setToken,
    doctors
  };
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
