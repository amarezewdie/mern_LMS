import useAuth from "./useAuth"; // Custom hook for accessing auth context
import axios from "axios";
const useRefreshToken = () => {
  const { setAuth, auth, backend_url } = useAuth(); // Access setAuth from context

  const refresh = async () => {
    try {
      // Send a request to the backend to get a new access token using the refresh token
      const response = await axios.get(`${backend_url}/api/auth/refresh`, {
        withCredentials: true, // Include credentials (cookies)
      });

      // Update the auth context with the new access token and role
      console.log(auth);
      setAuth((prev) => {
        console.log("Previous access token:", prev.accessToken);
        console.log("New access token:", response?.data?.accessToken);
        return {
          ...prev, // Keep the existing context
          accessToken: response?.data?.accessToken, // Update the access token
        };
      });
      console.log(auth);

      return response?.data?.accessToken; // Return the new access token
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error; // Propagate the error if the refresh fails
    }
  };

  return refresh;
};

export default useRefreshToken;
