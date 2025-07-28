import ACTIONS from "./index";
import API from './../../utils/axios';

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const fetchUser = async (token) => {
  const res = await API.get("/api/user/infor", {
    headers: { Authorization: token },
  });
  return res;
};

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
      isAdmin: res.data.role === 1 ? true : false,
      isCustomer: res.data.role === 0 ? true : false,
      isReviewer: res.data.role === 2 ? true : false,
    },
  };
};
