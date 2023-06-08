import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors, {
  origin: "*",
  methods: "GET,POST,PUT,PATCH,DELETE",
});
app.register(appRoutes);

const host = "0.0.0.0"; // Ou você pode especificar o seu endereço IP diretamente aqui
const port = 3333; // Porta em que o servidor irá escutar

app.listen(port, host).then(() => {
  console.log(`Servidor Fastify em execução em ${host}:${port}`);
});
