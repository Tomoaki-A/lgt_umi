import { createClient } from "microcms-js-sdk";

export const microCmsClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});
