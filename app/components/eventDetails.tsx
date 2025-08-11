import { Calendar, Clock, Heart, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function EventDetails() {
    return (

      <div className="bg-gradient-to-b from-stone-50 to-stone-100 py-20 px-8 relative overflow-hidden">
        {/* Background image with animation */}
        <div className="absolute inset-0 opacity-90">
          <img 
            src="/images/parejaJoven.png" 
            alt="Pareja joven background"
            className="w-full h-full object-cover object-[center_25%] "
          />
        </div>
        
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 opacity-80 bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40"></div>

        
        <div className="max-w-5xl mx-auto relative text-center z-10">
          <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:shadow-2xl transition-all transform duration-300 hover:scale-105 border border-stone-200/50 backdrop-blur-sm mb-16">
            <div className="w-16 h-16 mb-4 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-700" />
              </div>
            <h3 className="text-3xl font-elegant text-stone-900 mb-4 tracking-wide drop-shadow-sm">Sábado 22 de Noviembre</h3>
            <h3 className="text-3xl font-elegant text-stone-900 tracking-wide drop-shadow-sm">Villa de Nuestra Señora de la Asunción de las Aguascalientes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
                <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform duration-300 hover:scale-105 border border-stone-200/50 backdrop-blur-sm mb-16">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h4 className="text-3xl font-elegant text-stone-900 mb-2 drop-shadow-sm">EUCARISTÍA</h4>
                    <p className="text-lg font-elegant text-stone-900">Agradezcamos juntos en la casa de Dios</p>
                  </div>
                  <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                        <Clock className="text-yellow-600" />
                      </div>
                      <span className="font-elegant text-xl text-stone-900">1:00 p. m.</span>
                    </div>
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                        <MapPin className="text-yellow-600" />
                      </div>
                      <span className="font-elegant text-xl text-stone-900 drop-shadow-sm">SANTUARIO NTRA. SRA. DE GUADALUPE<br/>C. Guadalupe 213, Barrio de Guadalupe, 20050</span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <a 
                        href="https://maps.app.goo.gl/jiyfZsEp5LC3tNY3A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 text-stone-900 hover:bg-yellow-300 transition-colors rounded-3xl">
                          <MapPin className="text-yellow-600" />
                          Ver en Google Maps
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                
            <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform duration-300 hover:scale-105 border border-stone-200/50 backdrop-blur-sm mb-16">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-3xl font-elegant text-stone-900 mb-2 ">RECEPCIÓN</h4>
                <p className="text-lg font-elegant text-stone-900">Continuemos la celebración con alegría</p>
              </div>
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-4 mb-4 ">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                    <Clock className="text-yellow-600" />
                  </div>
                  <span className="text-xl font-elegant ">2:30 p. m.</span>
                </div>
                <div className="flex justify-center items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl flex items-center justify-center">
                    <MapPin className="text-yellow-600 bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 rounded-3xl" />
                  </div>
                  <span className="font-elegant text-xl text-stone-900">JARDÍN DE EVENTOS CARIÑAN<br/>Av. Siglo XXI 1006, 20314</span>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <a 
                    href="https://maps.app.goo.gl/eXNeMgDaYqTeT7zy5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-br from-amber-50 via-amber-100 via-amber-150 to-amber-200 text-stone-900 hover:bg-yellow-300 transition-colors rounded-3xl">
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
