import getSupabaseClient from "../client/supabase-client";
import { z } from "zod";

export const UserPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

type UserPayload = z.infer<typeof UserPayloadSchema>;



export const signUpUser = async (userPayload: UserPayload) => {  
    const supabase = getSupabaseClient();
    const REDIRECT_URL = window.ENV.SUPABASE_REDIRECT_URL;
    const { data, error } = await supabase.auth.signUp({
        email: userPayload.email,
        password: userPayload.password,
        options: {
        emailRedirectTo: REDIRECT_URL,
        data: {
            email: userPayload.email,
        },
        },
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
