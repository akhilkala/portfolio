import { route } from "../../../middleware/route";
import Stats from "../../../models/Stats";
import Visit from "../../../models/Visit";
import { Method } from "../../../utils/types";

const allowedMethods: Method[] = ["PATCH"];

const handler = route(async (req, res) => {
  await new Visit().save();
  res.status(200);
  res.end();
}, allowedMethods);

export default handler;
