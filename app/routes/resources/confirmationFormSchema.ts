import { ZodError, z } from "zod";

const invalid_type_error = "El tipo de dato es inválido. Por favor, verifica el formato ingresado.";

export const ConfirmationFormSchema = z.object({
    apellido_familia: z.string({ message: invalid_type_error  }).min(1, "*El apellido de familia es obligatorio"),
    numero_asistentes: z.string({ message: invalid_type_error }).min(1, "*El número de personas es obligatorio"),
    telefono: z.string({ message: invalid_type_error }).min(10, "*El número de teléfono es obligatorio"),
});

export type ConfirmationFormSchema = z.infer<typeof ConfirmationFormSchema>;
