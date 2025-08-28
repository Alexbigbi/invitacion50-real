import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./database.types";

export default function getSupabaseClient() {
  if (typeof window === "undefined") {
    throw new Error("getSupabaseClient must be called in the browser");
  }

  return createBrowserClient<Database>(window.ENV.SUPABASE_PROJECT_URL, window.ENV.SUPABASE_ANON_KEY_2);
}
