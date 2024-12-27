import userRoutes from "./v1/user.js";

export default async function routes(server) {
  server.register(userRoutes);
}
