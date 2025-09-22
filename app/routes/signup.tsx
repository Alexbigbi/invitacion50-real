import { redirect, type ActionFunctionArgs } from "react-router"
import { signUpUser } from "~/lib/auth";
import { handleZodValidation, type ValidationError } from "~/utils/handleZodValidation";
import { UserPayloadSchema } from "~/services/supabase/auth/auth";
import type { Route } from "./+types/signup";
import { SignupForm } from "~/components/forms/signup-form";

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

  await signUpUser(userPayload.data);
  return redirect('/login');

} 

export default function Signup() {
    
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">

      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
