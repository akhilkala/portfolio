import { route } from "../../middleware/route";
import Error from "../../models/Error";
import { Method } from "../../utils/types";

const allowedMethods: Method[] = ["POST"];

const handler = route(async (req, res) => {
  await new Error({ endpont: req.body.endpoint }).save();
  res.status(200);
  res.end();
}, allowedMethods);

export default handler;
