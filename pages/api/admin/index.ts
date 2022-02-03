import { route } from "../../../middleware/route";
import Stats, { IStat } from "../../../models/Stats";
import { HTTPError, HttpStatusCode } from "../../../utils/apiUtils";
import { Method } from "../../../utils/types";

interface IResponse {
  //   data: IStat & {
  //     _id: any;
  //   };
}

const allowedMethods: Method[] = ["GET"];

const handler = route<IResponse>(async (req, res) => {
  const stats = await Stats.findById("ID");
  if (!stats) throw new HTTPError(HttpStatusCode.NOT_FOUND, "Data not found");

  res.status(200).json({
    data: "stats",
  });
}, allowedMethods);

export default handler;
