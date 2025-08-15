import { Heart } from "lucide-react";

export default function Rsvp() {
    return (
      <div className="min-h-full bg-gradient-to-b from-stone-50 to-stone-100 pb-8 px-8 flex flex-col justify-between relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40  p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center border border-stone-200/50 backdrop-blur-sm mb-16">
            <h3 className="text-3xl md:text-3xl font-elegant text-amber-900 mb-4 tracking-wide">Nos encantará contar contigo en este día tan especial</h3>
            <h3 className="text-3xl md:text-3xl font-elegant text-amber-900 mb-4 tracking-wide">¿Nos confirmas tu asistencia?</h3>

            <p className="text-amber-800 mb-10 text-3xl font-elegant">
              Solicitamos atentamente tu respuesta antes del <span className="font-bold text-amber-900">10 de octubre 2025</span>.
            </p>
               <button className="bg-amber-500 text-amber-900 text-2xl drop-shadow-md font-elegant py-2 px-4 rounded-lg shadow-md hover:bg-amber-600 transition duration-200">
            Confirmar Asistencia
          </button>
          </div>
          {/* Warm invitation messages */}
       
        </div>

        {/* Real decorative elements - bigger sunflowers */}
        <div className="flex justify-center items-center mt-12 gap-4 md:gap-8">
            <div className="">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className="w-16 h-16"
              />
            </div>
            <div className="hidden md:flex gap-2 font-serif"> Ilustrado y diseñado con<Heart fill="currentColor" className="text-amber-400 w-6 h-6 drop-shadow-md" />por Kiki y Alex </div>
            <div className="text-sm flex items-center text-center md:hidden gap-2 font-serif">
               Hecho con <Heart fill="currentColor" className="text-amber-400 w-6 h-6 drop-shadow-md"/>
               <span className="">por Kiki y Alex</span>
            </div>
            <div className="">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
    )
}

