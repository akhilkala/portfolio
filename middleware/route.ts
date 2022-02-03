import type { NextApiRequest, NextApiResponse } from "next";
import { HTTPError, HttpStatusCode, IErrorResponse } from "../utils/apiUtils";
import connectDB from "../utils/db";
import { Method, Route } from "../utils/types";

export const route =
  <T = any>(handler: Route<T>, methods?: Method[]) =>
  async (req: NextApiRequest, res: NextApiResponse<T | IErrorResponse>) => {
    try {
      if (methods && req.method && !methods.includes(req.method as Method))
        throw new HTTPError(
          HttpStatusCode.METHOD_NOT_ALLOWED,
          `${req.method} not allowed`
        );
      connectDB();
      await handler(req, res);
    } catch (err: any) {
      if (!err.httpCode) {
        console.log(err);
        return res.status(HttpStatusCode.INTERNAL_SERVER).json({
          statusCode: HttpStatusCode.INTERNAL_SERVER,
          message: "Something went wrong!",
          method: req.method,
        });
      }

      res.status(err.httpCode).json({
        statusCode: err.httpCode,
        message: err.message,
        method: req.method,
      });
    }
  };
