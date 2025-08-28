"use client"
import { toast } from "sonner"

export function ErrorToaster() {
    return (
        toast.error("Error!", {
          description: "Ha ocurrido un error al registrarte. Por favor intenta de nuevo.",
          duration: 4000,
        })
    )
}
