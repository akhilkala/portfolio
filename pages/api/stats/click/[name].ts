import { route } from "../../../../middleware/route";
import Stats from "../../../../models/Stats";
import { Method } from "../../../../utils/types";

interface IResponse {}

const allowedMethods: Method[] = ["PATCH"];

const handler = route<IResponse>(async (req, res) => {
  const key = "clicks." + req.query.name;
  await Stats.updateOne(
    { _id: "ID" },
    { $inc: { [key]: 1 } },
    { upsert: true }
  );
  res.status(200);
  res.end();
}, allowedMethods);

export default handler;
