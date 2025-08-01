import { z } from 'zod'

const envSchema = z.object({
	NODE_ENV: z.enum(['production', 'development', 'test'] as const).default('development'),
	APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),

	// APP SECRETS
	COOKIE_SECRET: z.string(),

	// SEO
	ALLOW_INDEXING: z.enum(['true', 'false']).optional(),

    // SUPABASE
    SUPABASE_URL: z.string(),
    SUPABASE_ANON_KEY: z.string(),
})

type ServerEnv = z.infer<typeof envSchema>
let env: ServerEnv

/**
 * Initializes and parses given environment variables using zod
 * @returns Initialized env vars
 */
export function initEnv() {
	// biome-ignore lint/nursery/noProcessEnv: This should be the only place to use process.env directly
	const parsed = envSchema.safeParse(process.env)

	if (parsed.success === false) {
		// biome-ignore lint/suspicious/noConsole: We want this to be logged
		console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors)
		throw new Error('Invalid environment variables')
	}

	env = parsed.data
	Object.freeze(env)

	return env
}

export function getServerEnv() {
	if (env) return env
	return initEnv()
}

/**
 * Helper function which returns a subset of the environment vars which are safe expose to the client.
 * Dont expose any secrets or sensitive data here.
 * Otherwise you would expose your server vars to the client if you returned them from here as this is
 * directly sent in the root to the client and set on the window.env
 * @returns Subset of the whole process.env to be passed to the client and used there
 */

export function getClientEnv() {
	const serverEnv = getServerEnv()
	return {
		MODE: serverEnv.NODE_ENV,
		ALLOW_INDEXING: serverEnv.ALLOW_INDEXING,
	}
}

type ClientEnvVars = ReturnType<typeof getClientEnv>

declare global {
	var ENV: ClientEnvVars
	interface Window {
		ENV: ClientEnvVars
	}
}
