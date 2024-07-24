const mongoose = require("mongoose");

const tareasSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    responsable: {
      type: String,
      required: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
    fechaCreacion: {
      type: Date,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Tareas", tareasSchema);
