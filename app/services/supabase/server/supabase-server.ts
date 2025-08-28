import { createClient } from "@supabase/supabase-js";
import type { Database } from "../client/database.types";

import { getServerEnv } from "~/utils/env.server";

export const supabase = createClient<Database>(getServerEnv().SUPABASE_URL, getServerEnv().SUPABASE_ANON_KEY);
