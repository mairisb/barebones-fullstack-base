import express, { Express, Request, Response } from "express";

import { helloFromCommon } from "@barebones-fullstack-base/common";

const app: Express = express();
const port = 3333;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server" + helloFromCommon());
});

app.listen(port, () => {
  console.log(`api is running at http://localhost:${port}`);
});
