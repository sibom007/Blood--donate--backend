import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import router from './routes';
const app = express();

const allowedOrigins = ["http://localhost:3000", process.env.CORS_URL].filter(
  Boolean,
);

app.set("trust proxy", 1);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
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