// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createPdf } from "../../services/scores";

type Data = {
  name: string;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  createPdf({
    name: "Bob smith",
    choir: "Choral",
    qty: 2,
  }).then((doc) => {
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=jingle-bells.pdf",
      "Content-Length": doc.length,
    });
    res.end(doc);
  });
}
