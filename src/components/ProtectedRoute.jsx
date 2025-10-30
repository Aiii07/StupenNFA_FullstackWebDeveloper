import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken")
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  useEffect(() => {
    if (!token || !userInfo) {
      navigate("/login");
    } else if (allowedRoles && !allowedRoles.includes(userInfo.role)) {
      navigate("/");
    }
  }, [token, userInfo, allowedRoles, navigate]);

  return children;
}