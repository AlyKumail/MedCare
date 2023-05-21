import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  console.log("In authservice/register");
  // console.log(userData);
  const response = await axios.post(API_URL, userData);
  console.log(response.data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  console.log("before auth/service/login");

  const response = await axios.post(API_URL + "login", userData);
  console.log("auth/service/login");

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// add address
const addAddress = async (data) => {
  console.log("before auth/service/addAddress");

  const response = await axios.post(API_URL + "addAddress", data);
  console.log("auth/service/addAddress");

  return response.data;
};

// get data shared
const getDataShared = async (token) => {
  console.log("before auth/service/getDataShared");
  console.log("token", token.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };
  const response = await axios.get(API_URL + "getDataShared", config);
  console.log("after auth/service/getDataShared");

  return response.data;
};

// remove data shared
const removeDataShared = async (data) => {
  console.log("before auth/service/removeDataShared");
  console.log("token", data.token);
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  const response = await axios.put(API_URL + "removeDataShared", data, config);
  console.log("after auth/service/removeDataShared");

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  addAddress,
  getDataShared,
  removeDataShared,
};

export default authService;
