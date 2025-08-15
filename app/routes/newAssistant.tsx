import { Form, redirect, type ActionFunctionArgs } from "react-router";
import { supabase } from "~/supabase-client";
import { z } from "zod";
import ConfirmationDialog from "~/components/ui/confirmationDialog";
import { useFetcher } from "react-router";

//ui imports
import { Dialog, 
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger, 
} from "~/components/ui/dialog";

import { Button } from "~/components/ui/button";

const schema = z.object({
    familyName: z.string().min(1, "*El apellido de familia es obligatorio"),
    asistentes: z.string().min(1, "*El número de personas es obligatorio"),
    phone: z.string().min(1, "*El número de teléfono es obligatorio"),
})

export function meta() {
    return [
        {title: "Nuevo Asistente"},
        {name: "description", content: "Confirma tu asistencia a la boda de oro de Sacra y Licha"},
    ];
}

export async function action({request}:ActionFunctionArgs) {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    

    if (!title || !description) {
        return {error: "Title and description are required"};
    }
    const { error } = await supabase.from("test-table").insert({ title, description });

    if (error) {
        return { error: error.message };
    }

    return redirect("/");
}

export default function NewAssistant() {
    const fetcher = useFetcher();
    let isSubmitting = fetcher.state === "submitting";
    return (
        <div>
            <fetcher.Form method="post">
                <div>
                    <label> Apellido de Familia</label>
                    <input type="text" name="title" required />
                </div>
                <div>
                    <label> Número de Personas </label>
                    <textarea name="description" required/>
                </div>
                <Button type="submit" disabled={isSubmitting}> {isSubmitting ? "Confirmando..." : "Confirmar Asistencia"} </Button>
            </fetcher.Form>
        </div>
    )
}

