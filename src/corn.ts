import cron from "node-cron";

const PING_URL: string = "https://lsf-city.onrender.com";

cron.schedule("*/5 * * * *", async () => {
  try {
    console.log("Pinging backend to keep it alive...");
    const { default: fetch } = await import("node-fetch");
    const response = await fetch(PING_URL);
    const text = await response.text();
    console.log("Ping response:", text);
  } catch (error) {
    console.error("Error pinging backend:", (error as Error).message);
  }
});

console.log("Cron job is set up and running.");
