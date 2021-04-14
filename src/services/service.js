import axios from "axios";


export const login = async (email, password) => {
  const response = await axios.post("http://localhost:5000/user/login", {
    email: email,
    password: password,
  });
  return response.data;
};