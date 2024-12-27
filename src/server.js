import Fastify from "fastify";
import routes from "./routes/index.js";

export const app = Fastify({
  logger: true,
});

app.register(routes, { prefix: "/api/v1" });

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(address);
});
