import { Heart } from "lucide-react";

export default function Rsvp() {
    return (
      <div className="bg-gradient-to-t from-white to-stone-50 py-20 px-8 border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Warm invitation messages */}
          <h3 className="text-3xl font-elegant text-stone-800 mb-4 animate-fade-in tracking-wide">Nos encantará contar contigo en este día tan especial</h3>
          <h3 className="text-3xl font-elegant text-stone-800 mb-8 animate-fade-in tracking-wide">¿Nos confirmas tu asistencia?</h3>
          
         
          <p className="text-stone-600 mb-10 text-2xl font-elegant">
            Solicitamos atentamente tu respuesta antes del <span className="font-semibold text-stone-700">10 de octubre 2025</span>.
          </p>
          
          <div className="animate-bounce-gentle">
            Aqui va el botón de Confirmar Asistencia!!
          </div>
          
          {/* Real decorative elements - bigger sunflowers */}
          <div className="flex justify-center items-center mt-12 gap-8">
            <div className="animate-pulse">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className="w-16 h-16"
              />
            </div>
            <Heart className="text-rose-300 w-6 h-6 animate-pulse" />
            <div className="animate-pulse">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    )
}
