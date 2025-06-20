import { dbPool } from "../../../db";
import { getUserHelper } from "../../../services/helpers";
import { getUserByEmailQuery } from "../../../queries/userQueries";

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
        id: 1,
        password_hash:
          "$2b$10$3e27489c5047f183485022084131b4a16774c359e2586929649",
      },
    ];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await getUserHelper("test@test.com");
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(getUserByEmailQuery, [
      "test@test.com",
    ]);
  });
});
