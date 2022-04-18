import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/Users.js";
import todolistsRoutes from "./routes/Todolists.js";
import todosRoutes from "./routes/Todos.js";
const app = express();
dotenv.config();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/users", userRoutes);
app.use("/todolists", todolistsRoutes);
app.use("/todos", todosRoutes);
mongoose
  .connect(process.env.CONNEXION_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port: ${process.env.PORT}`)
    );
  })
  .catch((error) => console.log(error.message));
