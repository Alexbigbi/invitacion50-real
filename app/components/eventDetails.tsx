import { Calendar, Clock, Heart, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function EventDetails() {
    return (

      <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-100 to-stone-50 py-20 px-8 relative">
        {/* Background image with animation */}
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 opacity-0 bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40"></div>

        <div className="max-w-5xl grid mx-auto text-center z-10">

          <div className="sticky top-40 md:absolute inset-0 opacity-100">
          <img 
            src="/images/IMG_2053.png" 
            alt="Pareja joven background"
            className="w-full h-full object-cover md:object-scale-down object-[center_25%]"
          />
          </div>
          <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center border border-stone-200/50 backdrop-blur-md md:backdrop-blur-sm mb-16">
            <div className="w-16 h-16 mb-4 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-700" />
              </div>
            <h3 className="text-4xl md:text-3xl font-elegant text-stone-900 mb-6 md:mb-4 tracking-wide drop-shadow-sm">Sábado 22 de Noviembre</h3>
            <h3 className="text-4xl md:text-3xl font-elegant text-stone-900 tracking-wide drop-shadow-sm">Villa de Nuestra Señora de la Asunción de las Aguascalientes</h3>
          </div>
          <div className="grid md:grid-cols-2 md:gap-16">
                <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl border border-stone-200/50 backdrop-blur-md md:backdrop-blur-sm mb-16">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h4 className="text-4xl md:text-3xl font-elegant text-stone-900 mb-2 drop-shadow-sm">EUCARISTÍA</h4>
                    <p className="text-2xl md:text-xl font-elegant text-stone-900">Agradezcamos juntos en la casa de Dios</p>
                  </div>
                  <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                        <Clock className="text-yellow-600" />
                      </div>
                      <span className="font-elegant text-3xl md:text-2xl text-stone-900">1:00 p. m.</span>
                    </div>
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                        <MapPin className="text-yellow-600" />
                      </div>
                      <span className="font-elegant text-3xl md:text-2xl text-stone-900 drop-shadow-sm">SANTUARIO NTRA. SRA. DE GUADALUPE<br/>C. Guadalupe 213, Barrio de Guadalupe, 20050</span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <a 
                        href="https://maps.app.goo.gl/jiyfZsEp5LC3tNY3A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="text-2xl font-elegant bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 text-stone-900 hover:bg-yellow-300 transition-colors rounded-3xl">
                          <MapPin className="text-yellow-600" />
                          Ver en Google Maps
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                
            <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl border border-stone-200/50 backdrop-blur-md md:backdrop-blur-sm mb-16">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-4xl md:text-3xl font-elegant text-stone-900 mb-2 ">RECEPCIÓN</h4>
                <p className="text-2xl md:text-xl font-elegant text-stone-900">Continuemos la celebración con alegría</p>
              </div>
              <div className="text-center mb-6">
                <div className="">
                  <div className="flex justify-center items-center gap-4 mb-4 ">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                      <Clock className="text-yellow-600" />
                    </div>
                    <span className="text-3xl md:text-2xl font-elegant ">2:30 p. m.</span>
                  </div>
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                      <MapPin className="text-yellow-600 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl" />
                    </div>
                    <span className="font-elegant text-3xl md:text-2xl text-stone-900">JARDÍN DE EVENTOS CARIÑAN<br/>Av. Siglo XXI 1006, 20314</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://maps.app.goo.gl/eXNeMgDaYqTeT7zy5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="text-2xl font-elegant bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 text-stone-900 hover:bg-yellow-300 transition-colors rounded-3xl">
                      <MapPin className="text-yellow-600" />
                      Ver en Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
