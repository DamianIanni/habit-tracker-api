import { dbPool } from "../../../db";
import { insertHabit } from "../../../services/habits";
import { insertHabitQuery } from "../../../queries/habitQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("insertHabit", () => {
  it("It has to insert an Habit", async () => {
    const mockedhabit = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedhabit]);
    const result = await insertHabit({
      user_id: 1,
      name: "habit test",
      description: "test description",
    });
    expect(result).toEqual(mockedhabit);
    expect(dbPool.execute).toHaveBeenCalledWith(insertHabitQuery, [
      1,
      "habit test",
      "test description",
    ]);
  });
});
