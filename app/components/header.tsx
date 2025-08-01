import { Heart } from "lucide-react";

export default function Header() {
    return (
        <div className="relative bg-gradient-to-b from-white to-stone-50 py-20 px-8 text-center overflow-hidden">
        {/* Background image with animation */}
            <div className="absolute inset-0 opacity-100">
            <img 
                src="/images/parejaVieja.png" 
                alt="Pareja vintage background"
                className="w-full h-full object-cover object-[center_30%]"
            />
            </div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10"></div>

            <div className="max-w-2xl mx-auto relative space-y-20">
                <div className="">
                    <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-3 tracking-widest font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                    SACRAMENTO MORENO
                    </h1>
                    <div className="flex items-center justify-center my-6">
                        <div className="">
                            <Heart className="text-rose-500 w-10 h-10 drop-shadow-md" />
                        </div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-3 tracking-widest font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                    MA. LUISA MARTINEZ
                    </h2>
                </div>
                <div className="flex-auto space-y-10">
                    <div className="border border-stone-200 bg-white/40 p-8 rounded-lg shadow-lg">
                        <p className="text-4xl italic font-serif text-stone-800">
                            Bodas de Oro
                        </p>
                        <p className="text-3xl italic font-serif text-stone-800 mt-2">
                            22 de Noviembre de 2025
                        </p>
                        <p className="text-2xl italic font-serif text-stone-800 mt-2">
                            01-NOV-1975 - 01-NOV-2025
                        </p>
                    </div>
                    <div className="border border-stone-200 p-8 bg-white/40 rounded-lg shadow-lg">
                        <p className="text-xl italic font-serif text-stone-600">
                            … y haz Señor que vivamos juntos y felices hasta la vejez.
                        </p>
                        <p className="text-xl italic font-serif text-stone-600 mt-2">
                            Y los dos dijeron: Amén, Amén.
                        </p>
                        <p className="text-xl italic font-serif text-stone-600 mt-2">
                            Tobías 8:8
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
