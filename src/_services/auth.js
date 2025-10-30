import { useJwt } from "react-jwt"
import { API } from "../_api"

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post('/login', {email, password})
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export  const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "token expired",
        data: null
      }
    }

    return {
      success: true,
      message: "token valid",
      data: decodedToken
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null
    }
  }
}

export const logout = async ({ token }) => {
  try {
    const { data } = await API.post('/logout', { token }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    return data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const getUserRole = () => {
  const user = localStorage.getItem("userInfo");
  if (!user) return null;
  return JSON.parse(user)?.role || null;
}