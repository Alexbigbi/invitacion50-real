import * as auth from "../services/supabase/auth/auth";
import { redirect } from "react-router";

interface User {
  id: string;
}
const isClient = () => typeof window !== 'undefined';

/**
 * Sets the user cookie with a 15-minute expiration.
 * @param user - The user object to store.
 */
const setUserCookie = async (user: User): Promise<void> => {
  if (!isClient()) return;
  const { default: Cookies } = await import('js-cookie');
  const signedData = btoa(JSON.stringify(user));
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  Cookies.set("user", signedData, {
    path: "/",
    sameSite: "strict",
    expires: expiresAt,
    secure: import.meta.env.PROD,
  });
};

/**
 * Gets the raw user cookie string, if present.
 * @returns The base64-encoded user cookie or undefined.
 */
const getUserCookie = async (): Promise<string | undefined> => {
    if (!isClient()) return undefined;
  const { default: Cookies } = await import('js-cookie');

  return Cookies.get("user");
};

/**
 * Removes the user cookie.
 */
const clearUserCookie = async (): Promise<void> => {
    if (!isClient()) return;

  const { default: Cookies } = await import('js-cookie');
  Cookies.remove("user");
};

/**
 * Parses and returns the decoded user object from the cookie.
 * @returns The user object or null if not found or invalid.
 */
const getUserFromCookie = async (): Promise<User | null> => {
  const signedData = await getUserCookie();
  if (!signedData) return null;

  try {
    const data = atob(signedData);
    return JSON.parse(data) as User;
  } catch (error) {
    console.error("Invalid user cookie", error);
    return null;
  }
};

/**
 * Gets the currently authenticated user from Supabase and stores it in the cookie.
 * @returns The user object if authenticated, otherwise null.
 */

/**
 * Returns the current user session from cookie if valid,
 * otherwise fetches from Supabase and sets the cookie.
 * @returns The user object or null.
 */

export const getUserSession = async (): Promise<User | null> => {
  if (!isClient()) return null;
  
  // Always check with Supabase first (security fix)
  const supabaseUser = await auth.getAuthenticatedUser();
  
  if (supabaseUser) {
    // Update cookie with fresh session
    await setUserCookie({ id: supabaseUser.id });
    return { id: supabaseUser.id };
  }
  
  // Clear invalid cookie
  await clearUserCookie();
  return null;
};


export const requireUserSession = async () => {
  const user = await getUserSession();

  if (!user) {
    throw redirect('/login');
  }
  return user;
};

export const logout = async () => {
  await auth.logout();
  await clearUserCookie();
};

export const loginUser = async (email: string, password: string) => {
  await auth.signInWithPassword(email, password);
};

export const signUpUser = async (userPayload: { email: string; password: string }) => {
  await auth.signUpUser({
    email: userPayload.email,
    password: userPayload.password,
  });
};
