import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
  const auth=localStorage.getItem('token')
  if (!auth) {
  
    return <Navigate to="/app/v1/login" />;
  }
  return children;
};