import { supabase } from "~/services/supabase/server/supabase-server";
import { handleZodValidation , type ValidationError} from "~/utils/handleZodValidation";
import { ConfirmationFormSchema } from "~/routes/resources/confirmationFormSchema";
import type { Route } from "./+types/newAssistant";


export function meta() {
    return [
        {title: "Nuevo Asistente"},
        {name: "description", content: "Confirma tu asistencia a la boda de oro de Sacra y Licha"},
    ];
}


export async function action({ request }: Route.ActionArgs) {
    const formData = Object.fromEntries(await request.formData());
    let validationResult: { data?: any; error?: ValidationError<typeof ConfirmationFormSchema>} = {};
    handleZodValidation({
        data: formData,
        schema: ConfirmationFormSchema,
        onSuccess: (data) => {
            validationResult.data = data;
        },
        onError: (error) => {
            validationResult.error = error as ValidationError<typeof ConfirmationFormSchema>;
        }
    });

    if (validationResult.error) {
        return { error: validationResult.error };
    }
    const dataToInsert = {
        ...validationResult.data,
        telefono: parseInt(validationResult.data.telefono, 10)
    }
    const { error } = await supabase.from("confirmaciones-test").insert({ ...dataToInsert });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}
