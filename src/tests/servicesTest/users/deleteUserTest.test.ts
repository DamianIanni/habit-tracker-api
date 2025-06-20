import { dbPool } from "../../../db";
import { deleteUserQuery } from "../../../queries/userQueries";
import { deleteUser } from "../../../services/users";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("deleteUser", () => {
  it("It has to delete an User", async () => {
    const mockedUser = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedUser]);
    const result = await deleteUser(1);
    expect(result).toEqual(mockedUser);
    expect(dbPool.execute).toHaveBeenCalledWith(deleteUserQuery, [1]);
  });
});
