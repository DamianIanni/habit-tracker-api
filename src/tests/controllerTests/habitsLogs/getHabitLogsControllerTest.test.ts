import { handleSuccessResponse } from "../../../utils/responseHandler";
import { getHabitLogs } from "../../../services/habitsLogs";
import { getHabitLogsController } from "../../../controllers/habitsLogs";

jest.mock("../../../services/habitsLogs", () => ({
  getHabitLogs: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("getHabitLogsController", () => {
  it("should get all habit logs and return it", async () => {
    const mockId = 1;
    const mockHabitLog = [
      {
        is_completed: true,
        habit_id: 1,
        log_date: new Date("2025-06-15"),
      },
    ];
    // const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockHabitLog,
      message: "Successfully retrieved habit logs",
    };

    (getHabitLogs as jest.Mock).mockResolvedValue(mockHabitLog);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await getHabitLogsController(mockId);

    expect(getHabitLogs).toHaveBeenCalledWith(mockId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockHabitLog,
      "Successfully retrieved habit logs"
    );
    expect(result).toEqual(mockResponse);
  });
});
