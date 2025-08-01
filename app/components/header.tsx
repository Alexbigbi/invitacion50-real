import { Heart } from "lucide-react";

export default function Header() {
    return (
        <div className="">
        {/* Background image with animation */}
        <div className="">
          <img 
            src="/images/parejaVieja.png" 
            alt="Pareja vintage background"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className=""></div>

        <div className="">
          <div className="">
            <h1 className="">
              SACRAMENTO MORENO
            </h1>
            <div className="">
              <div className="">
                <Heart className="" />
              </div>
            </div>
            <h2 className="">
              MA. LUISA MARTINEZ
            </h2>
          </div>

          <div className="">
            <div className="">
            <p className="">
              Bodas de Oro
            </p>
            <div className="">
                22 de Noviembre de 2025
                <div className="">
                  01-NOV-1975 - 01-NOV-2025
                </div>
            </div>
            </div>
            <div className="">
              <p className="">
                … y haz Señor que vivamos juntos y felices hasta la vejez.
              </p>
              <p className="">
                Y los dos dijeron: Amén, Amén.
              </p>
              <p className="">
                Tobías 8:8
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
