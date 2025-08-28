import { z } from "zod";

export const SupabaseTableSchema = z.object({
  id: z.string().uuid(),
  apellido_familia: z.string(),
  numero_asistentes: z.string(),
  telefono: z.string(),
  fecha_confirmacion: z.string(),
  created_at: z.string(),
});

export type SupabaseTableSchema = z.infer<typeof SupabaseTableSchema>;
