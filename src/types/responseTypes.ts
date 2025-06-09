export type responseType = {
  data?: any;
  message: string;
  success: boolean;
  errorMessage?: string;
  error?: unknown;
};

export type habitType = {
  id?: number;
  user_id: number;
  name: string;
  description: string;
};
