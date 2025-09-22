import { Heart } from "lucide-react";
import ConfirmAssistance from "./confirmAssistance";

export default function Rsvp() {
    return (
      <div className="min-h-[400px] bg-gradient-to-b from-stone-50 to-stone-100 py-20 px-8 flex flex-col justify-between relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40  p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center border border-stone-200/50 backdrop-blur-sm mb-16">
            <h3 className="text-3xl md:text-3xl font-elegant text-amber-900 mb-4 tracking-wide">Nos encantará contar contigo en este día tan especial</h3>
            <h3 className="text-3xl md:text-3xl font-elegant text-amber-900 mb-4 tracking-wide">¿Nos confirmas tu asistencia?</h3>

            <p className="text-amber-800 mb-10 text-3xl font-elegant">
              Solicitamos atentamente tu respuesta antes del <span className="font-bold text-amber-900">10 de octubre 2025</span>.
            </p>
          <ConfirmAssistance />
          </div>
          {/* Warm invitation messages */}
        </div>
      </div>
    )
}

