import { createClient } from "@supabase/supabase-js";

import { getServerEnv } from "~/utils/env.server";

export const supabase = createClient(getServerEnv().VITE_SUPABASE_URL, getServerEnv().VITE_SUPABASE_ANON_KEY);

