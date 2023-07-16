type Error = {
  message: string;
};

export type DataResponse<T = undefined> = {
  data?: T;
  error?: Error;
};
