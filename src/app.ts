import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import router from './routes';
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://blood-donate-frontend-nine.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Blood-donate Is Runing",
  });
});

app.use("/api/v1", router);
app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})

export default app