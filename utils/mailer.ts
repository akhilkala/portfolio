import nodemailer from "nodemailer";
import { IMailOptions } from "./types";

const mailer = (options: IMailOptions) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "akhildoesdev@gmail.com",
        pass: "akhil9669",
      },
    });

    const mailOptions = {
      from: "akhildoesdev",
      ...options,
    };

    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(info);
    });
  });
};

export default mailer;
