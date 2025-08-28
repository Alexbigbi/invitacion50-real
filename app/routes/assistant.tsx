import { supabase } from "~/services/supabase/server/supabase-server";
import type { Route } from "./+types/assistant";
import { Form, redirect, type ActionFunctionArgs } from "react-router";

export function meta({ params }: Route.MetaArgs) {
    return [
        {title: `Editar Asistente ${params.id}`},
        {name: "description", content: "Edita o borra un asistente confirmado para la boda."},
    ];
}


export async function loader({ params }: Route.LoaderArgs) {
    const { id } = params;

    if (!id) {
        return { error: "No item found." };
    }

    const { data, error } = await supabase
    .from("test-table")
    .select("*")
    .eq("id", id)
    .single();

    if (error) {
        return { error: error.message };
    }

    return { assistant: data };

}

export async function action({ request, params }: Route.ActionArgs) {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const intent = formData.get("intent");

    if (intent === "delete") {
        const { error } = await supabase.from("test-table").delete().eq("id", params.id);
        if (error) {
            return { error: error.message };
        }
        return redirect("/asistentes");
    } else if (intent === "update") {
        const { error } = await supabase.from("test-table").update({ title, description }).eq("id", params.id);
        if (error) {
            return { error: error.message };
        }
        return { updated: true };
    }
    return {};
}



export default function Assistant({ loaderData, actionData }: Route.ComponentProps) {
    const { assistant } = loaderData;

    return (
        <div>
            <h2> Editar Asistente </h2>
            {actionData?.error && (
                <div className="bg-red-200 text-red-900 p-2 mb-4 rounded">
                    {actionData.error}
                </div>
            )}
            {actionData?.updated && (
                <div className="bg-green-200 text-green-900 p-2 mb-4 rounded">
                    Asistente actualizado correctamente!
                </div>
            )}

            <Form method="post">
                <div>
                    <label> Title </label>
                    <input type="text" name="title" defaultValue={assistant.title} required />
                </div>
                <div>
                    <label> Description </label>
                    <textarea name="description" defaultValue={assistant.description} required/>
                </div>
                <button type="submit" name="intent" value="update"> Actualizar Asistente </button>
                <button type="submit" name="intent" value="delete"> Borrar Asistente </button>
            </Form>
        </div>
    )

}
