import { Calendar, Clock, Heart, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function EventDetails() {
    return (

      <div className="bg-gradient-to-b from-stone-50 to-stone-100 py-20 px-8 relative overflow-hidden">
        {/* Background image with animation */}
        <div className="absolute inset-0 opacity-25 animate-slide-in-background">
          <img 
            src="/images/parejaJoven.png" 
            alt="Pareja joven background"
            className="w-full h-full object-cover object-[center_25%]"
          />
        </div>
        
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/60 to-stone-100/60"></div>
        

        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-white/70 to-stone-50/70 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up border border-stone-200/50 backdrop-blur-sm mb-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-700" />
              </div>
            <h3 className="text-3xl font-elegant text-stone-800 mb-4 animate-fade-in tracking-wide drop-shadow-sm">Sábado 22 de Noviembre</h3>
            <h3 className="text-3xl font-elegant text-stone-800 animate-fade-in tracking-wide drop-shadow-sm">Villa de Nuestra Señora de la Asunción de las Aguascalientes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
                <div className="bg-gradient-to-br from-white/70 to-stone-50/70 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up border border-stone-200/50 backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h4 className="text-3xl font-elegant text-stone-800 mb-2">EUCARISTÍA</h4>
                    <p className="text-sm text-stone-500 italic">Agradezcamos juntos en la casa de Dios</p>
                  </div>
                  <div className="space-y-4 text-stone-600">
                    <div className="flex items-center justify-center gap-3">
                      <Clock className="w-5 h-5 text-green-700" />
                      <span className="text-lg">1:00 p. m.</span>
                    </div>
                    <div className="flex items-start justify-center gap-3">
                      <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-green-700" />
                      <span className="text-center text-lg">SANTUARIO NTRA. SRA. DE GUADALUPE<br/>C. Guadalupe 213, Barrio de Guadalupe, 20050</span>
                    </div>
                    <div className="flex justify-center mt-6">
                      <a 
                        href="https://maps.app.goo.gl/jiyfZsEp5LC3tNY3A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Ver en Mapa
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                
            <div className="bg-gradient-to-br from-white/70 to-stone-50/70 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up-delay-200 border border-stone-200/50 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-3xl font-elegant text-stone-800 mb-2">RECEPCIÓN</h4>
                <p className="text-sm text-stone-500 italic">Continuemos la celebración con alegría</p>
              </div>
              <div className="space-y-4 text-stone-600">
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-lg">2:30 p. m.</span>
                </div>
                <div className="flex items-start justify-center gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-600" />
                  <span className="text-center text-lg">JARDÍN DE EVENTOS CARIÑAN<br/>Av. Siglo XXI 1006, 20314</span>
                </div>
                <div className="flex justify-center mt-6">
                  <a 
                    href="https://maps.app.goo.gl/eXNeMgDaYqTeT7zy5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Ver en Mapa
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
