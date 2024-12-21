import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useAuth = () => {
  return useContext(AppContext);
};

export default useAuth;
