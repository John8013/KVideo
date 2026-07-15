// open-next.config.ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Disable R2 incremental cache to avoid R2 permission issues
  incrementalCache: {
    type: "dummy",
  },
});