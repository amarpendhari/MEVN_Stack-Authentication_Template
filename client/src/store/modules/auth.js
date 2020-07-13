import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { vm } from "@/main";

const state = {
  user: "",
  Auth: false,
  loading: false,
  error: null,
  token: localStorage.getItem("token")
};

const getters = {
  Errors: state => state.error,
  User: state => state.user
};

const actions = {
  async registerUser({ dispatch, commit }, user) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        user,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      localStorage.setItem("token", response.data.token);
      commit("userAdded", response.data.token);
      await dispatch("loadUser");
    } catch (err) {
      if (err.response.data.msg) {
        commit("Alert", err.response.data.msg);
      } else {
        commit("Alert", err.response.data.errors[0].msg);
      }
    }
  },

  async LoginUser({ dispatch, commit }, user) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth",
        user,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      localStorage.setItem("token", response.data.token);
      commit("loggedIN", response.data.token);
      await dispatch("loadUser");
    } catch (err) {
      if (err.response.data.msg) {
        commit("Alert", err.response.data.msg);
      } else {
        commit("Alert", err.response.data.errors[0].msg);
      }
    }
  },

  async loadUser({ commit }) {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("http://localhost:5000/api/auth");
      commit("setUser", res.data);
      vm.$router.push({ path: "/dashboard" }).catch(() => {});
    } catch (err) {
      //vm.$router.push({ path: "/login" });
      vm.$router.go(-1);
      commit("Alert", err.response.data.msg);
    }
  },

  setAlert({ commit }, error) {
    commit("Alert", error);
  }
};

const mutations = {
  userAdded: (state, token) => {
    state.token = token;
  },
  loggedIN: (state, token) => {
    state.token = token;
  },
  setUser: (state, user) => {
    (state.Auth = true), (state.user = user);
  },
  Logout: state => {
    vm.$router.push({ path: "/login" });
    localStorage.removeItem("token");
    (state.Auth = false), (state.user = {}), (state.token = null);
  },
  Alert: (state, error) => {
    localStorage.removeItem("token");
    state.error = error;
    state.Auth = false;
    state.user = {};
    setTimeout(
      function() {
        state.error = null;
      }.bind(this),
      5000
    );
  },
  ClearAlert: state => (state.error = null)
};

export default {
  state,
  getters,
  actions,
  mutations
};
