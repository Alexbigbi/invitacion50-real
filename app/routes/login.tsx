import { redirect, type ActionFunctionArgs } from "react-router"
import { LoginForm } from "~/components/forms/login-form"
import { signUpUser } from "~/services/supabase/auth/auth";
import { handleZodValidation, type ValidationError } from "~/utils/handleZodValidation";
import { UserPayloadSchema } from "~/services/supabase/auth/auth";



export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
