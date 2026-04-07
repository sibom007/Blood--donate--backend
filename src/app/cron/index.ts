import cron from "node-cron";
import { DonorService } from "../module/donor/donor.service";

const setupCronJobs = () => {
  // This runs every minute: '* * * * *'
  // For production, you might want every 1 hour: '0 * * * *'
  cron.schedule("* * * * *", async () => {
    console.log("------------------------------------------");
    console.log("⏰ [CRON] Starting Expired Assignment Check...");

    try {
      // We pass 'internal' or a bypass key since this is calling the logic locally
      const count = await DonorService.processExpiredAssignments();

      console.log(`✅ [CRON] Success: ${count} assignments timed out.`);
    } catch (error) {
      console.error("❌ [CRON] Error during execution:", error);
    }
    console.log("------------------------------------------");
  });
};

export default setupCronJobs;
