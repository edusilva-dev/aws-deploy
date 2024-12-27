import { z } from "zod";

const users = [];

export default async function userRoutes(server) {
  server.post("/users", (request, reply) => {
    const createUserBodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const { data, error } = createUserBodySchema.safeParse(request.body);

    if (error) {
      return reply.status(400).send(data);
    }

    users.push(data);

    return reply.status(201).send({
      message: "Usuário criado com sucesso!",
    });
  });

  server.get("/users", (_, reply) => {
    return reply.status(200).send({ users });
  });
}
