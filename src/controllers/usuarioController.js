const usuarioService = require('../services/usuarioService');

exports.createUsuario = async (req, res) => {
  usuarioService.createUsuario(req, res);
};

exports.getUsuarios = async (req, res) => {
  usuarioService.getUsuarios(req, res);
};

exports.getUsuario = async (req, res) => {
  usuarioService.getUsuario(req, res);
};

exports.updateUsuario = async (req, res) => {
  usuarioService.updateUsuario(req, res);
};
exports.deleteUsuario = async (req, res) => {
  usuarioService.deleteUsuario(req, res);
};
