import { Server } from "http";

import config from "./config";
import app from "./app";

async function main() {
  const server: Server = app.listen(config.port, () => {
    console.log(`server is runing in port ${config.port}`);
  });
}
main()