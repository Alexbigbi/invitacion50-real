import { supabase } from "~/supabase-client"
import type { Route } from "./+types/assistants";
import { Link } from "react-router";

export function meta() {
    return [
        {title: "Asistentes Confirmados"},
        {name: "description", content: "Lista de asistentes confirmados para la boda de oro de Sacra y Licha"},
    ];
}

export async function loader() {
    const {data, error} = await supabase.from("test-table").select("*");

    if (error) {
        return {error: error.message};
    }

    return { assistants: data };
}

export default function Assistants({ loaderData }: Route.ComponentProps) {
    const { error, assistants } = loaderData;
    return (
        <div>
            <h2> Assistants Page </h2>
            {error && <div> { error } </div>}
            <ul>
                {assistants?.map((assistant) => (
                    <li key={assistant.id}>
                        <Link to ={`/asistentes/${assistant.id}`}>
                            <span>{assistant.title}</span>
                            <p>{assistant.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
