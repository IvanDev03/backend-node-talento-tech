const Usuario = require("../models/Usuario");

exports.createUsuario = async (req, res) => {
  try {
    const usuarioExistente = await Usuario.findOne({
      nombreUsuario: req.body.nombreUsuario,
    });

    if (usuarioExistente) {
      return res.status(400).send({
        message:
          "Ya existe un usuario con ese nombre, por favor elige otro nombre",
      });
    }
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).send({
      message: "Error al agregar el usuario, por favor revisa los logs",
    });
  }
};

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send({
      message: "Error al obtener los usuarios, por favor revisa los logs",
    });
  }
};

exports.getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario)
      return res.status(404).send({ message: "Usuario no encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!usuario)
      return res.status(404).send({ message: "Usuario no encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario)
      return res.status(404).send({ message: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
