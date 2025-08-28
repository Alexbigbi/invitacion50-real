"use client"
import { toast } from "sonner"

export function CustomToaster() {
    return (
        toast.success("Te has registrado correctamente!", {
          description: "Te esperamos el 22 de Noviembre.",
          duration: 4000,
        })
    )
}
  
