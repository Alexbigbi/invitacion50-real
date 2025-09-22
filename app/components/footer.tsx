import { Heart } from "lucide-react";

export default function Footer() {
    return (
    <div className="flex justify-center items-center m-0 gap-4 md:gap-8">
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
    )
}
