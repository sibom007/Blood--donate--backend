export type TErrorSource = {
  path: string | number;
  message: string;
};

export type TErrorSources = TErrorSource[];

export type TGenericErrorResponse = {
  success?: false;
  message: string;
  errorSources: TErrorSources;
  err?: {
    statusCode?: number;
  };
  stack?: string;
};

export type TApiResponse<T = unknown> = {
  success: true;
  message: string;
  data: T;
};

export type TApiResult<T> = TApiResponse<T> | TGenericErrorResponse;
