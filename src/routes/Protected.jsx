import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

function Protected({ children }) {
  const authToken = useAuth();

  if (!authToken) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

export default Protected;
