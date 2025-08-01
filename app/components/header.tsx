import { Heart } from "lucide-react";

export default function Header() {
    return (
        <div className="relative bg-gradient-to-b from-white to-stone-50 py-20 px-8 text-center overflow-hidden">
        {/* Background image with animation */}
        <div className="absolute inset-0 opacity-40 animate-zoom-in">
          <img 
            src="/images/parejaVieja.png" 
            alt="Pareja vintage background"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="animate-fade-in-text">
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-3 tracking-widest font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              SACRAMENTO MORENO
            </h1>
            <div className="flex items-center justify-center my-6">
              <div className="animate-bounce">
                <Heart className="text-rose-500 w-10 h-10 drop-shadow-md" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-20 tracking-widest font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              MA. LUISA MARTINEZ
            </h2>
          </div>

          <div className="flex-auto space-y-10">
            <div className="border-t border-b border-stone-300 py-8 animate-fade-in-text-delay-500 bg-white/50  rounded-lg">
            <p className="text-5xl italic text-stone-800 font-elegant">
              Bodas de Oro
            </p>
            <div className="text-4xl italic text-stone-800 mt-2 font-elegant font-bold">
                22 de Noviembre de 2025
                <div className="text-3xl mt-2 font-normal">
                  01-NOV-1975 - 01-NOV-2025
                </div>
            </div>
            </div>
            <div className="border-t border-b border-stone-300 animate-fade-in-text-delay-1000 bg-white/50 rounded-lg py-8 text-2xl">
              <p className="text-stone-800 italic mb-3 font-elegant">
                … y haz Señor que vivamos juntos y felices hasta la vejez.
              </p>
              <p className="text-stone-800 italic mb-3 font-elegant">
                Y los dos dijeron: Amén, Amén.
              </p>
              <p className="text-stone-700 italic font-elegant">
                Tobías 8:8
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
