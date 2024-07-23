const express = require("express");
const dotenv = require ("dotenv");
const cors = require ("cors");
const connectDB = require ("../config/db.js");

const app = express();
const port = +process.env.PORT || 3000;

dotenv.config();  
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/tareas", require("../routes/tareasRoutes.js"));
app.use("/api/usuario", require('../routes/usuarioRoutes.js'));

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});


