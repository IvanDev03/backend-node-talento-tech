const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
