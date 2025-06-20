import { dbPool } from "../../../db";
import { updateHabit } from "../../../services/habits";
import { dynamicQuery } from "../../../utils/dynamicQuery";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("updateHabit", () => {
  it("It has to update an Habit", async () => {
    const mockedhabit = [{ affectedRows: 1, changedRows: 1 }];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedhabit]);
    const result = await updateHabit(
      { name: "habit habit", description: "hm" },
      1,
      1
    );
    const { query, values } = await dynamicQuery(
      { name: "habit habit", description: "hm" },
      1,
      "Habits",
      1
    );
    expect(result).toEqual(mockedhabit);
    expect(dbPool.execute).toHaveBeenCalledWith(query, values);
  });
});
