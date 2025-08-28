import { Form, useFetcher } from "react-router";
import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import { Label} from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { ConfirmationFormSchema } from "~/routes/resources/confirmationFormSchema";
import { handleZodValidation, type ValidationError } from "~/utils/handleZodValidation";

export function RegistrationForm() {
    let fetcher = useFetcher({ key: "registration" });
    let isSubmitting = fetcher.state === "submitting";
    const [errors, setErrors] = useState<ValidationError<typeof ConfirmationFormSchema>>({});
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSuccess(null);
        const rawFormData = Object.fromEntries(new FormData(event.currentTarget));
        let validationResult: { data?: any; error?: ValidationError<typeof ConfirmationFormSchema>} = {};

        handleZodValidation({
            data: rawFormData,
            schema: ConfirmationFormSchema,
            onSuccess: (data) => {
                validationResult.data = data;
                setErrors({});
                setSuccess("Te has registrado correctamente!");
                const formDatatoSend = new FormData();
                Object.entries(validationResult.data).forEach(([key, value]) => {
                    formDatatoSend.append(key, value as string);
                })
                fetcher.submit(formDatatoSend, { method: "post", action: "/newAssistant" });
            },
            onError: (error) => {
                validationResult.error = error;
                setErrors(error);
            }
        });
    }

    return (
        <div>
            <fetcher.Form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-1">
                        <Label className="text-lg" htmlFor="apellido_familia">Apellido de Familia</Label>
                        <Input id="apellido_familia" name="apellido_familia" placeholder="Ingresa tu apellido familiar" />
                         {errors.apellido_familia && <span className="text-red-500">{errors.apellido_familia}</span>}
                    </div>
                    <div className="grid gap-1">
                        <Label className="text-lg" htmlFor="numero_asistentes">Número de Asistentes</Label>
                        <Input id="numero_asistentes" name="numero_asistentes" placeholder="Ingresa el número de asistentes" />
                         {errors.numero_asistentes && <span className="text-red-500">{errors.numero_asistentes}</span>}
                    </div>
                    <div className="grid gap-1">
                        <Label className="text-lg" htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" name="telefono" placeholder="Ingresa tu número de teléfono" />
                        {errors.telefono && <span className="text-red-500">{errors.telefono}</span>}
                    </div>
                </div>
                <Button className="text-lg bg-amber-400 text-amber-900 drop-shadow-md font-elegant py-2 px-4 rounded-lg shadow-md hover:bg-amber-300 transition duration-200 flex mx-auto mt-6" type="submit" disabled={isSubmitting}> {isSubmitting ? "Confirmando..." : "Confirmar Asistencia"} </Button>
            </fetcher.Form>
        </div>
    )
}

