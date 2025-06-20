import { dbPool } from "../../../db";
import { getUser } from "../../../services/users/getUser";
import { getUserByIdQuery } from "../../../queries/userQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("getUser", () => {
  it("It has to return an User", async () => {
    const mockedUser = [
      {
        name: "habit test",
        email: "test@test.com",
      },
    ];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await getUser(1);
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(getUserByIdQuery, [1]);
  });
});
