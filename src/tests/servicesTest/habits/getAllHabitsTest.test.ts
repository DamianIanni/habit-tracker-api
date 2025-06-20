import { dbPool } from "../../../db";
import { getAllHabits } from "../../../services/habits";
import { getAllHabitQuery } from "../../../queries/habitQueries";

jest.mock("../../../db", () => ({
  dbPool: {
    execute: jest.fn(),
  },
}));

describe("getAllHabit", () => {
  it("It has to return all the Habits of an user", async () => {
    const mockedhabit = [
      {
        id: 1,
        name: "habit test",
        description: "test description",
        created_at: "2023-08-01T12:00:00.000Z",
        user_id: 1,
      },
    ];
    (dbPool.execute as jest.Mock).mockResolvedValue([mockedhabit]);
    const result = await getAllHabits(1);
    expect(result).toEqual(mockedhabit);
    expect(dbPool.execute).toHaveBeenCalledWith(getAllHabitQuery, [1]);
  });
});
