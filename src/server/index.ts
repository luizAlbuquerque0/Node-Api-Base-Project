import express from "express";
import cors from "cors";
import { routeAdapter } from "./adapters/routeAdapter";
import { makeSignUpController } from "../factories/auth/makeSignUpController";
import { makeSignInController } from "../factories/auth/makeSignInController";
import { log, LogType } from "../application/libs/logger/logger";


const app = express();

app.use(cors());
app.use(express.json());

// Porta que o servidor vai rodar
const PORT = 3000;

app.get("/health", (req, res) => {
  res.send("OK");
});


app.post("/sign-up", routeAdapter(makeSignUpController()));
app.post("/sign-in", routeAdapter(makeSignInController()));

// Inicia o servidor
app.listen(PORT, () => {
  log(`Servidor rodando em http://localhost:${PORT}`, LogType.SUCCESS);
});
