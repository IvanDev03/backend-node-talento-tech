const Tarea = require("../models/Tareas.js");

exports.createTarea = async (req, res) => {
  try {
    const tareaExistente = await Tarea.findOne({ name: req.body.name });
    if (tareaExistente) {
      return res.status(400).send({
        message: "Ya existe una tarea con ese nombre, por favor elige otro nombre",
      });
    }
    let tarea = new Tarea(req.body);
    await tarea.save();
    res.status(201).json(tarea);
  } catch (error) {
    res
      .status(500)
      .send({
        message: "Error al agregar la tarea, por favor revisa los logs",
      });
  }
};

exports.getTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res
      .status(500)
      .send({
        message: "Error al obtener las tareas, por favor revisa los logs",
      });
  }
};

exports.getTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) return res.status(404).send({ message: "Tarea no encontrada" });
    res.json(tarea);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!tarea) return res.status(404).send({ message: "Tarea no encontrada" });
    res.json(tarea);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndDelete(req.params.id);
    if (!tarea) return res.status(404).send({ message: "Tarea no encontrada" });
    res.json({ message: "Tarea eliminada!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
