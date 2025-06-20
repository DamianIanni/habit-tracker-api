import { dbPool } from "../../../db";
import { insertUserQuery } from "../../../queries/userQueries";
import { insertUser } from "../../../services/auth";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("insertuser", () => {
  it("It has to insert a new User", async () => {
    const mockedUser = [
      {
        name: "habit test",
        email: "test@test.com",
        password: "fafa",
      },
    ];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await insertUser({
      name: "habit test",
      email: "test@test.com",
      password: "fafa",
    });
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(insertUserQuery, [
      "habit test",
      "test@test.com",
      expect.any(String),
    ]);
  });
});
