import { handleSuccessResponse } from "../../../utils/responseHandler";
import { updateHabit } from "../../../services/habits";
import { updateHabitController } from "../../../controllers/habits";

jest.mock("../../../services/habits", () => ({
  updateHabit: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("updateHabitController", () => {
  it("should update a habit and return a success response", async () => {
    const mockId = 1;
    const mockUserId = 1;
    const mockHabit = {
      user_id: 1,
      name: "Damian",
      description: "This habit test",
    };
    const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockResult,
      message: "Habit updated successfully",
    };

    (updateHabit as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await updateHabitController(mockHabit, mockId, mockUserId);

    expect(updateHabit).toHaveBeenCalledWith(mockHabit, mockId, mockUserId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "Habit updated successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
