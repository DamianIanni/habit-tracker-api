import { deleteUserController } from "../../../controllers/users";
import { deleteUser } from "../../../services/users";
import { handleSuccessResponse } from "../../../utils/responseHandler";

jest.mock("../../../services/users", () => ({
  deleteUser: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("deleteUserController", () => {
  it("should delete a user and return a success response", async () => {
    const mockId = 1;
    const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockResult,
      message: "User deleted successfully",
    };

    (deleteUser as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await deleteUserController(mockId);

    expect(deleteUser).toHaveBeenCalledWith(mockId);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "User deleted successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
