import axios from 'axios';

const getURL = 'http://localhost:3001/capivaras/';
const URL = 'http://localhost:3001/capivara/';

export const getCapivaras = async () => {
  return axios.get(getURL);
}

export const getCapivaraByHabitat = async (habitat) => {
  return axios.get(`${getURL}?habitat=${habitat}`);
}

export const createCapivara = async (newCapivara) => {
  return axios.post(URL, newCapivara);
}

export const updateCapivara = async (id, newInfo) => {
  return axios.put(`${URL}${id}`, newInfo);
}

export const deleteCapivara = async (id) => {
  return axios.delete(`${URL}${id}`);
}
