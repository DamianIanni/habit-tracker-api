import { handleSuccessResponse } from "../../../utils/responseHandler";
import { getHabit } from "../../../services/habits";
import { getHabitController } from "../../../controllers/habits";

jest.mock("../../../services/habits", () => ({
  getHabit: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("getHabitController", () => {
  it("should get an habit and return it", async () => {
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
      message: "Habit retrieved successfully",
    };

    (getHabit as jest.Mock).mockResolvedValue(mockHabit);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await getHabitController(mockId, mockUserId);

    expect(getHabit).toHaveBeenCalledWith(mockId, mockUserId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockHabit,
      "Habit retrieved successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
