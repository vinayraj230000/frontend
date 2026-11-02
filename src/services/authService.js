import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const api = axios.create({
  baseURL: API,
});

// Automatically attach JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Signup API
export const signupUser = async (userData) => {
  const response = await api.post("/signup", userData);
  return response.data;
};

// Login API
export const loginUser = async (userData) => {
  const response = await api.post("/login", userData);

  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return response.data;
};

// Get logged-in user
export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};

// Get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};