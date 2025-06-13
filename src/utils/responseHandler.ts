/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { responseType } from "../types/responseTypes";

export function handleSuccessResponse(
  data: any,
  message: string
): responseType {
  const isData = data.length > 0 ? true : false;
  return {
    success: true,
    data: data,
    message: isData ? message : "No data found",
    // message: message,
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
