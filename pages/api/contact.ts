import { route } from "../../middleware/route";
import Submission from "../../models/Submission";
import { mailTemplate } from "../../utils/apiUtils";
import mailer from "../../utils/mailer";
import { Method } from "../../utils/types";

const allowedMethods: Method[] = ["POST"];

const handler = route(async (req, res) => {
  const { name, email, message } = req.body;
  await new Submission({
    name,
    email,
    message,
  });

  await mailer({
    subject: "Portfolio Response",
    to: "kalaakki@gmail.com",
    html: mailTemplate(name, email, message),
  });

  res.status(200);
  res.end();
}, allowedMethods);

export default handler;
