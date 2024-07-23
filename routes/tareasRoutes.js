const express = require("express");
const tareaController = require("../src/controllers/tareaController.js");
const router = express.Router();

router.post("/", tareaController.createTarea);
router.get("/", tareaController.getTareas);
router.get("/:id", tareaController.getTarea);
router.put("/:id", tareaController.updateTarea);
router.delete("/:id", tareaController.deleteTarea);

module.exports = router;    