import { MongoServerError } from "mongodb";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleDuplicateError = (err: MongoServerError): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match?.[1] ?? "Duplicate value";

  const errorSources: TErrorSources = [
    {
      path: Object.keys(err.keyPattern ?? {})[0] ?? "",
      message: `${extractedMessage} already exists`,
    },
  ];

  return {
    err: {
      statusCode: 400,
    },
    message: "Duplicate entry",
    errorSources,
  };
};

export default handleDuplicateError;
