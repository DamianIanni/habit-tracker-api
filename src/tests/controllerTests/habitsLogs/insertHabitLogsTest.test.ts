import { handleSuccessResponse } from "../../../utils/responseHandler";
import { insertHabitLogs } from "../../../services/habitsLogs";
import { insertHabitLogsController } from "../../../controllers/habitsLogs";

jest.mock("../../../services/habitsLogs", () => ({
  insertHabitLogs: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("insertHabitLogsController", () => {
  it("should insert an habit log and return a success response", async () => {
    const mockId = 1;
    const mockUserId = 1;
    const mockHabitLog = {
      is_completed: true,
      habit_id: 1,
      log_date: new Date("2025-06-15"),
    };
    const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockResult,
      message: "Habit logs inserted successfully",
    };

    (insertHabitLogs as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await insertHabitLogsController(mockHabitLog);

    expect(insertHabitLogs).toHaveBeenCalledWith(mockHabitLog);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "Habit logs inserted successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
