import axios from "axios";

const url = "http://localhost:3003/classdata";

export const getData = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const saveData = async (object) => {
  return await axios.post(url, object);
};

export const deleteData = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const editData = async (id, object) => {
  return await axios.put(`${url}/${id}`, object);
};
