import clientSupabase from "~/services/supabase/client/supabase-client";
import { logout } from "~/lib/auth";
import type { Route } from "./+types/assistants";

import { columns } from "~/assistants/columns";
import { DataTable } from "~/assistants/data-table";

import { SupabaseTableSchema } from "./resources/supabaseTableSchema";
import { Form, redirect } from "react-router";
import { Button } from "~/components/ui/button";
import { getAuthenticatedUser, requireAuth } from "~/services/supabase/auth/auth";


export function meta() {
    return [
        {title: "Asistentes Confirmados"},
        {name: "description", content: "Lista de asistentes confirmados para la boda de oro de Sacra y Licha"},
    ];
}

export async function clientLoader() {
       if (typeof window === 'undefined') {
        return { assistants: [], user: null, isSSR: true };
    }
    
    try {
        const user = await requireAuth();
        const {data, error} = await clientSupabase.from("confirmaciones").select("*");
        if (error) {
            return {error: error.message};
        }
        return { assistants: data as SupabaseTableSchema[] || [], user };
    } catch (error) {
        if (error instanceof Response) throw error;
        console.error('Unexpected error:', error);
        return {
            error: "Failed to load assistants",
            assistants: []
        };
    }
}

export async function clientAction ({ request }: Route.ClientActionArgs) {
  const method = request.method.toUpperCase();

  if (method === 'POST') {
    try {
        await logout();
        return redirect('/login');
    } catch (error) {
        return { error: 'Failed to logout' };
    }
  }
  return null;
};

export default function Assistants({ loaderData }: Route.ComponentProps) {
    const { error, assistants, user, isSSR } = loaderData;
    if (error) { return <div>Error: { error }</div>}
    
    if (isSSR) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="min-h-svh container mx-auto py-20 px-8 bg-gradient-to-b from-stone-50 via-stone-100 to-stone-50">
        <div className="mb-6 hidden md:flex justify-between items-center">
            <h1 className="text-2xl font-elegant font-bold">Asistentes Confirmados</h1>
            <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
                Logged in as: {user?.email}
            </span>
            <Form method="POST">
                <Button variant="outline">
                Logout
                </Button>
            </Form>
            </div>
        </div>
        <div className="mb-6 flex flex-col md:hidden justify-between items-center">
            <h1 className="text-2xl font-elegant font-bold">Asistentes Confirmados</h1>
            <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
                Logged in as: {user?.email}
            </span>
            <Form method="POST">
                <Button variant="outline">
                Logout
                </Button>
            </Form>
            </div>
        </div>
        
        <DataTable columns={columns} data={assistants || []} />
        </div>
    );
}

