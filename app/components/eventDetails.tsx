import { Calendar, Clock, Heart, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function EventDetails() {
    return (

      <div className="">
        {/* Background image with animation */}
        <div className="">
          <img 
            src="/images/parejaJoven.png" 
            alt="Pareja joven background"
            className="w-full h-full object-cover object-[center_25%]"
          />
        </div>
        
        {/* Overlay for better contrast */}
        <div className=""></div>
        

        
        <div className="">
          <div className="">
            <div className="">
                <Calendar className="" />
              </div>
            <h3 className="">Sábado 22 de Noviembre</h3>
            <h3 className="">Villa de Nuestra Señora de la Asunción de las Aguascalientes</h3>
          </div>
          <div className="">
                <div className="">
                  <div className="">
                    <div className="">
                      <Heart className="" />
                    </div>
                    <h4 className="">EUCARISTÍA</h4>
                    <p className="">Agradezcamos juntos en la casa de Dios</p>
                  </div>
                  <div className="">
                    <div className="">
                      <Clock className="" />
                      <span className="">1:00 p. m.</span>
                    </div>
                    <div className="">
                      <MapPin className="" />
                      <span className="">SANTUARIO NTRA. SRA. DE GUADALUPE<br/>C. Guadalupe 213, Barrio de Guadalupe, 20050</span>
                    </div>
                    <div className="">
                      <a 
                        href="https://maps.app.goo.gl/jiyfZsEp5LC3tNY3A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="">
                          <MapPin className="" />
                          Ver en Mapa
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                
            <div className="">
              <div className="">
                <div className="">
                  <Heart className="" />
                </div>
                <h4 className="">RECEPCIÓN</h4>
                <p className="">Continuemos la celebración con alegría</p>
              </div>
              <div className="">
                <div className="">
                  <Clock className="" />
                  <span className="">2:30 p. m.</span>
                </div>
                <div className="">
                  <MapPin className="" />
                  <span className="">JARDÍN DE EVENTOS CARIÑAN<br/>Av. Siglo XXI 1006, 20314</span>
                </div>
                <div className="">
                  <a 
                    href="https://maps.app.goo.gl/eXNeMgDaYqTeT7zy5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="">
                      <MapPin className="" />
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
