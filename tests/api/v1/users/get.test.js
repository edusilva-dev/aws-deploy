import { app } from "../../../../src/server";

describe("GET /api/v1/users", () => {
  it("should return all users", async () => {
    const request = await app.inject({
      method: "GET",
      url: "/api/v1/users",
      headers: {
        "content-type": "application/json",
      },
    });
    const requestBody = await request.json();

    expect(request.statusCode).toBe(200);
    expect(requestBody).toEqual({
      users: [],
    });
  });
});
