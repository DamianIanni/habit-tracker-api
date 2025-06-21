import { updateUserController } from "../../../controllers/users";
import { updateUser } from "../../../services/users";
import { handleSuccessResponse } from "../../../utils/responseHandler";

jest.mock("../../../services/users", () => ({
  updateUser: jest.fn(),
}));

jest.mock("../../../utils/responseHandler", () => ({
  handleSuccessResponse: jest.fn(),
}));

describe("updateUserController", () => {
  it("should update a user and return a success response", async () => {
    const mockId = 1;
    const mockUser = {
      name: "Damian",
      email: "damian@test.com",
    };
    const mockResult = { affectedRows: 1, changedRows: 1 };
    const mockResponse = {
      success: true,
      data: mockResult,
      message: "User updated successfully",
    };

    (updateUser as jest.Mock).mockResolvedValue(mockResult);
    (handleSuccessResponse as jest.Mock).mockReturnValue(mockResponse);

    const result = await updateUserController(mockId, mockUser);

    expect(updateUser).toHaveBeenCalledWith(mockId, mockUser);
    expect(handleSuccessResponse).toHaveBeenCalledWith(
      mockResult,
      "User updated successfully"
    );
    expect(result).toEqual(mockResponse);
  });
});
