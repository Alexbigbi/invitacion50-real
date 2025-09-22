import { Heart } from "lucide-react";


export default function MainPage() {
    return (
        <div className="h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] max-h-[900px] relative bg-gradient-to-b from-white to-stone-50 py-4 px-8 text-center overflow-hidden">
        {/* Background image with animation */}
            <div className="absolute inset-0 opacity-100">
                <img 
                    src="/images/IMG_2054.png" 
                    alt="Pareja vintage background"
                    className="w-full h-full object-scale-down scale-100 md:scale-120 object-[center_35%]"
                />
            </div>
        
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 opacity-60 bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40"></div>

            <div className="relative flex flex-col max-w-2xl h-full justify-between mx-auto">
                <div className="">
                    <h1 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4 tracking-widest font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                    SACRAMENTO MORENO
                    </h1>
                    <div className="flex items-center justify-center">
                        <Heart fill="currentColor" className="text-amber-400 w-8 h-8 mb-4 drop-shadow-md" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-widest font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                    MA. LUISA MARTINEZ
                    </h2>
                </div>

                <div className="">
                    <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-stone-200/50 backdrop-blur-xs mb-20">
                        <p className="text-3xl md:text-4xl italic font-serif text-stone-900">
                            Bodas de Oro
                        </p>
                        <p className="text-2xl md:text-3xl italic font-bold font-serif text-stone-900 mt-2">
                            22 de Noviembre de 2025
                        </p>
                        <p className="text-xl md:text-xl italic font-serif text-stone-900 mt-2">
                            01-NOV-1975 - 01-NOV-2025
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}


