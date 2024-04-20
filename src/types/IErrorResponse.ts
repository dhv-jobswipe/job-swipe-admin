export type IErrorResponse = {
  status: boolean;
  error: {
    code: string;
    message: string;
  };
};
