// git commit -m "PBL-848 set up base"

export type IErrorResponse = {
  status: boolean;
  error: {
    code: string;
    message: string;
  };
};
