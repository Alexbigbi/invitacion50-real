import { Dialog, 
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger, 
} from "~/components/ui/dialog";

import { useFetcher } from "react-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function ConfirmationDialog() {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Confirmar Asistencia</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Confirma tu asistencia</DialogTitle>
                    <DialogDescription>
                        Por favor, pon tu apellido de Familia, 
                        el número de personas que asistirán 
                        y un número de teléfono para que podamos contactarte.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="title">Apellido de Familia</Label>
                        <Input id="title" name="title" placeholder="González..." />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Número de Personas</Label>
                        <Input id="description" name="description" placeholder="4 Personas" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline"> Cancelar </Button>
                    </DialogClose>
                    <Button type="submit" disabled={isSubmitting}> {isSubmitting ? "Confirmando..." : "Confirmar Asistencia"} </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
