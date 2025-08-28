import { Dialog, 
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";


import { useEffect } from "react";
import { useFetcher } from "react-router";

import { RegistrationForm } from "~/components/forms/registration-form";
import { toast } from "sonner";

export default function ConfirmationDialog({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    let fetcher = useFetcher({ key: "registration" });
    useEffect(() => {
        if (fetcher.data && fetcher.data.success) {
            setOpen(false);
            toast.success("Te has registrado correctamente!", {
              description: "Te esperamos el 22 de Noviembre.",
              duration: 4000,
            });
        }
        else toast.error("Error!", {
            description: "Ha ocurrido un error al registrarte. Por favor intenta de nuevo.",
            duration: 4000,
        });
    }, [fetcher.data, setOpen]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] font-elegant bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl border border-stone-200/50 backdrop-blur-3xl">
                <DialogHeader className="tracking-wide mb-2 space-y-2">
                    <DialogTitle className="text-3xl text-center drop-shadow-sm">Confirma tu asistencia</DialogTitle>
                    <DialogDescription className="text-lg">
                        Por favor, pon tu apellido de Familia, 
                        el número de personas que asistirán 
                        y un número de teléfono para que podamos contactarte.
                    </DialogDescription>
                </DialogHeader>
                <RegistrationForm/>
            </DialogContent>
        </Dialog>
    )
}
