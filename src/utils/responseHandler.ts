/* eslint-disable prettier/prettier */
import { responseType } from "../types/responseTypes";

export function handleSuccessResponse(
  data: any,
  message: string
): responseType {
  return {
    success: true,
    data: data,
    message: message,
  };
}

export function handleErrorResponse(
  error: unknown,
  message: string
): responseType {
  return {
    success: false,
    error: error,
    message: message,
  };
}
