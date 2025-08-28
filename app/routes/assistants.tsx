import { supabase } from "~/services/supabase/server/supabase-server"

import type { Route } from "./+types/assistants";

import { columns } from "~/assistants/columns";
import { DataTable } from "~/assistants/data-table";

import { SupabaseTableSchema } from "./resources/supabaseTableSchema";


export function meta() {
    return [
        {title: "Asistentes Confirmados"},
        {name: "description", content: "Lista de asistentes confirmados para la boda de oro de Sacra y Licha"},
    ];
}

export async function loader() {
    const {data, error} = await supabase.from("confirmaciones-test").select("*");
    let assistants: SupabaseTableSchema[];
    if (error) {
        return {error: error.message};
    }

    return { assistants: data as SupabaseTableSchema[] || [] };
}

export default function Assistants({ loaderData }: Route.ComponentProps) {
    const { error, assistants } = loaderData;
    if (error) { return <div>Error: { error }</div>}
    return (
        <div className="min-h-screen min-w-screen container mx-auto py-20 px-8 bg-gradient-to-b from-stone-50 via-stone-100 to-stone-50 p-20 relative md:overflow-hidden">
            <DataTable columns={columns} data={assistants || []} />
        </div>
    )
}
