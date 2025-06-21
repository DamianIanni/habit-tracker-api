import { handleSuccessResponse } from "../../../utils/responseHandler";
import { insertHabit } from "../../../services/habits";
import { insertHabitController } from "../../../controllers/habits";

jest.mock("../../../services/habits", () => ({
  insertHabit: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("insertHabitController", () => {
  it("should create an habit and return a success response", async () => {
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
      message: "Habit created successfully",
    };

    (insertHabit as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await insertHabitController(mockHabit);

    expect(insertHabit).toHaveBeenCalledWith(mockHabit);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "Habit created successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
