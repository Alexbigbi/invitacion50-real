import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'
import { getServerEnv } from '~/utils/env.server'
export function createSupabaseServerClient(request: Request) {
  const headers = new Headers()

  const supabase = createServerClient(
    getServerEnv().SUPABASE_URL,
    getServerEnv().SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
          )
        },
      },
    }
  )

  return { supabase, headers }
}
