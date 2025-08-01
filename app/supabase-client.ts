import { createClient } from "@supabase/supabase-js";
import { getServerEnv } from "./utils/env.server";

export const supabase = createClient(getServerEnv().SUPABASE_URL, getServerEnv().SUPABASE_ANON_KEY);
