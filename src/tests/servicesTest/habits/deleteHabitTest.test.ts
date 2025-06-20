import { dbPool } from "../../../db";
import { deleteHabit } from "../../../services/habits";
import { deleteHabitQuery } from "../../../queries/habitQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("deleteHabit", () => {
  it("It has to delete an Habit", async () => {
    const mockedhabit = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedhabit]);
    const result = await deleteHabit(1, 1);
    expect(result).toEqual(mockedhabit);
    expect(dbPool.execute).toHaveBeenCalledWith(deleteHabitQuery, [1, 1]);
  });
});
