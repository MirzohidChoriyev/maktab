import axios from "axios";

const url = "http://localhost:3003/classdata";

export const getData = async () => {
  return await axios.get(url);
};

export const saveData = async (object) => {
  return await axios.post(url, object);
};
