import { Form, redirect, type ActionFunctionArgs } from "react-router";
import { supabase } from "~/supabase-client";

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
    return (
        <div>
            <h2>
                Create New Assistant
            </h2>
            <Form method="post">
                <div>
                    <label> Title </label>
                    <input type="text" name="title" required />
                </div>
                <div>
                    <label> Description </label>
                    <textarea name="description" required/>
                </div>
                <button type="submit"> Create Assistant </button>
            </Form>
        </div>
    )
}
