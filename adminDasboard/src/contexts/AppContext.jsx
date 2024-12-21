import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : null;
  });
  console.log(auth);
  const backend_url =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const logOut = () => {
    setAuth(null)
    localStorage.clear();
  };

  const value = {
    backend_url,
    logOut,
    auth,
    setAuth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
