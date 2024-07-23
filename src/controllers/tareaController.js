const tareaService = require("../service/tareas-service.js");

exports.createTarea = async (req, res) => {
  tareaService.createTarea(req, res);
};

exports.getTareas = async (req, res) => {
  tareaService.getTareas(req, res);
};

exports.getTarea = async (req, res) => {
  tareaService.getTarea(req, res);
};

exports.updateTarea = async (req, res) => {
  tareaService.updateTarea(req, res);
};

exports.deleteTarea = async (req, res) => {
  tareaService.deleteTarea(req, res);
};
