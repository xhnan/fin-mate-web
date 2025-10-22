export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  code?: number;
  timestamp?: number;
}

export type ApiResponseData<T> = ApiResponse<T>;

export function isSuccess<T>(res: ApiResponse<T>): res is ApiResponse<T> {
  return res && res.success === true;
}
