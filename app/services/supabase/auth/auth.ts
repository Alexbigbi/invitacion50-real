import clientSupabase from "../client/supabase-client";
import { z } from "zod";
import { redirect } from "react-router";

export const UserPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type UserPayload = z.infer<typeof UserPayloadSchema>;


export const AuthenticatedUserSchema = z.object({
    id: z.string(),
    email: z.string(),
})

type AuthUserPayload = z.infer<typeof AuthenticatedUserSchema>;

const isClient = () => typeof window !== 'undefined';

export class AuthService {

}

export async function getAuthenticatedUser(): Promise<AuthUserPayload | null> {
  if (!isClient()) return null; // SSR guard
  const { data: { session }, error } = await clientSupabase.auth.getSession();

  if (error || !session?.user) {
    return null;
  }

  return session.user ? {
    id: session.user.id,
    email: session.user.email || "",
  } : null;
};


export async function requireAuth(): Promise<AuthUserPayload> {
    const user = await getAuthenticatedUser();
    if (!user) {
      throw redirect('/login');
    }
    return user;
  }


export async function logout(): Promise<void> {
  const { error } = await clientSupabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
};

export async function signInWithPassword(email: string, password: string) {
  const { data, error } = await clientSupabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error || !data.user) {
    throw new Error(error?.message || 'Login failed');
  }
  return data;
};


const REDIRECT_URL = import.meta.env.SUPABASE_REDIRECT_URL;


export async function signUpUser(userPayload: UserPayload) {  
    const { data, error } = await clientSupabase.auth.signUp({
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
