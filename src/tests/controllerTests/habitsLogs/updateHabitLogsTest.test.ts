import { handleSuccessResponse } from "../../../utils/responseHandler";
import { updateHabitLogs } from "../../../services/habitsLogs";
import { updateHabitLogsControllers } from "../../../controllers/habitsLogs";

jest.mock("../../../services/habitsLogs", () => ({
  updateHabitLogs: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("updateHabitLogsController", () => {
  it("should update an habit log and return a success response", async () => {
    const mockId = 1;
    const mockUserId = 1;
    const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockResult,
      message: "Habit Logs updated successfully",
    };

    (updateHabitLogs as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await updateHabitLogsControllers(mockId, mockUserId, true);

    expect(updateHabitLogs).toHaveBeenCalledWith(mockId, mockUserId, true);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "Habit Logs updated successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
