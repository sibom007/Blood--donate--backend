import { Server } from "http";

import config from "./config";
import app from "./app";
import setupCronJobs from "./app/cron";

async function main() {
  const server: Server = app.listen(config.port, () => {
    console.log(`server is runing in port ${config.port}`);
  });
  // setupCronJobs();
}
main()
