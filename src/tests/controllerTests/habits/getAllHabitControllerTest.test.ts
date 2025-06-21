import { handleSuccessResponse } from "../../../utils/responseHandler";
import { getAllHabits } from "../../../services/habits";
import { getAllHabitsController } from "../../../controllers/habits";

jest.mock("../../../services/habits", () => ({
  getAllHabits: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("getAllHabitController", () => {
  it("should get all habits from an user and return them", async () => {
    const mockId = 1;
    const mockUserId = 1;
    const mockHabit = [
      {
        id: 1,
        name: "habit test",
        description: "test description",
        created_at: "2023-08-01T12:00:00.000Z",
        user_id: 1,
      },
    ];
    // const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockHabit,
      message: "Habits retrieved successfully",
    };

    (getAllHabits as jest.Mock).mockResolvedValue(mockHabit);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await getAllHabitsController(mockUserId);

    expect(getAllHabits).toHaveBeenCalledWith(mockUserId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockHabit,
      "Habits retrieved successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
