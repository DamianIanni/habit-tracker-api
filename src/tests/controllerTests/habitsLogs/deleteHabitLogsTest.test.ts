import { handleSuccessResponse } from "../../../utils/responseHandler";
import { deleteHabitLogs } from "../../../services/habitsLogs";
import { deleteHabitLogsController } from "../../../controllers/habitsLogs";

jest.mock("../../../services/habitsLogs", () => ({
  deleteHabitLogs: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("deleteHabitLogsController", () => {
  it("should delete an habit log and return a success response", async () => {
    const mockId = 1;
    const mockUserId = 1;
    const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockResult,
      message: "Habit Logs deleted successfully",
    };

    (deleteHabitLogs as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await deleteHabitLogsController(mockId, mockUserId);

    expect(deleteHabitLogs).toHaveBeenCalledWith(mockUserId, mockId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "Habit Logs deleted successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
