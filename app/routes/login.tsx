import { redirect, type ActionFunctionArgs } from "react-router"
import { LoginForm } from "~/components/forms/login-form"
import { handleZodValidation, type ValidationError } from "~/utils/handleZodValidation";
import { getAuthenticatedUser, signInWithPassword, UserPayloadSchema } from "~/services/supabase/auth/auth";
import type { Route } from "./+types/login";
import { loginUser } from "~/lib/auth";

export async function clientLoader() {
  const user = await getAuthenticatedUser();
  if (user) {
    throw redirect('/asistentes');
  }
  return {};
}

export async function clientAction ({ request }: Route.ClientActionArgs) {
  const formData = Object.fromEntries(await request.formData());
  let userPayload: { data?: any; error?: ValidationError<typeof UserPayloadSchema>} = {};
  handleZodValidation({
        data: formData,
        schema: UserPayloadSchema,
        onSuccess: (data) => {
            userPayload.data = data;
        },
        onError: (error) => {
            userPayload.error = error as ValidationError<typeof UserPayloadSchema>;
        }
    });

  if (userPayload.error) {
      return { error: userPayload.error };
  }

  try {
    // Kevin's signIn pattern
    await loginUser(
      userPayload.data.email, 
      userPayload.data.password
    );
    return redirect('/asistentes');
  } catch (error) {
    return { 
      error: { 
        general: error instanceof Error ? error.message : 'Login failed' 
      } 
    };
  }
}


export default function Login({ actionData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh  bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {actionData?.error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {typeof actionData.error === 'string' 
              ? actionData.error 
              : 'Login failed'
            }
          </div>
        )}
        <LoginForm />
      </div>
    </div>
  );
}
