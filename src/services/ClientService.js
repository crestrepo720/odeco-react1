import http from '../config/http-common';

const getAll = () => {
  return http.get("/clients");
};

const get = id => {
  return http.get(`/clients/${id}`);
};

const create = data => {
  return http.post("/clients", data);
};

const update = (id, data) => {
  return http.put(`/clients/${id}`, data);
};

const remove = id => {
  return http.delete(`/clients/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
