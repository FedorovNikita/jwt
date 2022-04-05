import axios from "axios";
import { API_URL } from "../../api";
import {
  getTokens,
  removeTokens,
  setAcsessTokens,
  setTokens,
} from "../../helpers/setAndRemoveToken";
import AuthService from "../../services/AuthService";
import { changeAuthAction, changeLoadingAction } from "../reducers/auth";

export const login = (username, password) => {
  return async function (dispatch) {
    try {
      dispatch(changeLoadingAction(true));
      const response = await AuthService.login(username, password);
      const { access, refresh } = response.data;
      setTokens(access, refresh);
      dispatch(changeAuthAction(true));
      dispatch(changeLoadingAction(false))
    } catch (err) {
      console.log(err);
      console.log(err.response?.data);
      dispatch(changeLoadingAction(false))
    }
  };
};

export const logout = () => {
  return async function (dispatch) {
    try {
      // const response = await AuthService.logout();
      removeTokens();
      dispatch(changeAuthAction(false));
    } catch (err) {
      console.log(err);
      console.log(err.response?.data);
    }
  };
};

export const checkAuth = () => {
  return async function (dispatch) {
    try {
      dispatch(changeLoadingAction(true));
      const { refreshToken } = getTokens();
      const response = await axios.post(`${API_URL}/api/token/refresh/`, {
        refresh: refreshToken,
      });
      setAcsessTokens(response.data.access);
      dispatch(changeAuthAction(true));
      dispatch(changeLoadingAction(false));
    } catch (err) {
      console.log(err);
      console.log(err.response?.data);
      dispatch(changeLoadingAction(false));
    }
  };
};
