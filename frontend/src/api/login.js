import api from "./api";

export const googleAuth = (code) => {
  try {
    const res = api.get(`/auth/google?code=${code}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
