const { fetch, fetchAll } = require("../connection/connect.js");
const {
  SELECT,
  SELECT_ID,
  SELECT_LIKE,
  SELECT_POST,
  SELECT_PUT,
  SELECT_DELETE,
} = require("../model/teacher.js");

module.exports = {
  GET: async (req, res) => {
    try {
      const { id } = req.params;
      const { t_name } = req.query;
      let data;

      if (id) {
        data = await fetch(SELECT_ID, id);
      } else if (t_name) {
        data = await fetch(SELECT_LIKE, "%" + t_name + "%");
      } else data = await fetchAll(SELECT);

      if (typeof data === "string") throw new Error(data);

      res.send({
        status: 200,
        data: data,
        message: "success",
      });
    } catch (error) {
      res.send({
        status: 400,
        data: null,
        message: error.message,
      });
    }
  },

  POST: async (req, res) => {
    try {
      const { t_name, age } = req.body;
      let data = await fetchAll(SELECT_POST, t_name, age);

      if (typeof data === "string") throw new Error(data);

      res.send({
        status: 200,
        data: data,
        message: "success",
      });
    } catch (error) {
      res.send({
        status: 400,
        data: null,
        message: error.message,
      });
    }
  },

  PUT: async (req, res) => {
    try {
      const { t_name, age } = req.body;
      const { id } = req.params;
      let data = await fetchAll(SELECT_PUT, t_name, age, id);

      if (typeof data === "string") throw new Error(data);

      res.send({
        status: 200,
        data: data,
        message: "success",
      });
    } catch (error) {
      res.send({
        status: 400,
        data: null,
        message: error.message,
      });
    }
  },

  DELETE: async (req, res) => {
    try {
      const { id } = req.params;
      let data = await fetch(SELECT_DELETE, id);

      if (typeof data === "string") throw new Error(data);

      res.send({
        status: 200,
        data: data,
        message: "success",
      });
    } catch (error) {
      res.send({
        status: 400,
        data: null,
        message: error.message,
      });
    }
  },
};
