import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    name: username,
    email: email,
    password: password,
    avatar: {
      public_id: 2,
      url: "fdfdfe",
    },
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      email: username,
      password: password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: response.data.user.name,
            email: response.data.user.email,
            token: response.data.token,
          })
        );
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
