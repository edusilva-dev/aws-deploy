import { app } from "../../../../src/server";

describe("POST /api/v1/users", () => {
  it("should create user with valid data", async () => {
    const request = await app.inject({
      method: "POST",
      url: "/api/v1/users",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: "validmail@valid.com",
        password: "validpassword",
      }),
    });
    const requestBody = await request.json();

    expect(request.statusCode).toBe(201);
    expect(requestBody).toEqual({
      message: "Usuário criado com sucesso!",
    });
  });
});
