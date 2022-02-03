import type { NextApiRequest, NextApiResponse } from "next";

export type Route<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => any;

export type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export interface IMailOptions {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}
