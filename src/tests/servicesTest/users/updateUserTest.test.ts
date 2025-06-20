import { dbPool } from "../../../db";
import { dynamicQuery } from "../../../utils/dynamicQuery";
import { updateUser } from "../../../services/users";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("updateUser", () => {
  it("It has to update an User", async () => {
    const mockedUser = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await updateUser(1, {
      name: "habit habit",
      email: "hm",
      password: "fffff",
    });
    const { query, values } = await dynamicQuery(
      { name: "habit habit", email: "hm", password: "fffff" },
      1,
      "Users"
    );
    values[2] = expect.any(String);
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(query, values);
  });
});
