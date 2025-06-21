import { handleSuccessResponse } from "../../../utils/responseHandler";
import { deleteHabit } from "../../../services/habits";
import { deleteHabitController } from "../../../controllers/habits";

jest.mock("../../../services/habits", () => ({
  deleteHabit: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("deleteHabitController", () => {
  it("should delete an habit and return a success response", async () => {
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
      message: "Habit deleted successfully",
    };

    (deleteHabit as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await deleteHabitController(mockId, mockUserId);

    expect(deleteHabit).toHaveBeenCalledWith(mockId, mockUserId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "Habit deleted successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
