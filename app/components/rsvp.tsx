import { Heart } from "lucide-react";

export default function Rsvp() {
    return (
      <div className="">
        <div className="">
          
          {/* Warm invitation messages */}
          <h3 className="">Nos encantará contar contigo en este día tan especial</h3>
          <h3 className="">¿Nos confirmas tu asistencia?</h3>
          
         
          <p className="">
            Solicitamos atentamente tu respuesta antes del <span className="">10 de octubre 2025</span>.
          </p>
          
          <div className="">
            Aqui va el botón de Confirmar Asistencia!!
          </div>
          
          {/* Real decorative elements - bigger sunflowers */}
          <div className="">
            <div className="">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className=""
              />
            </div>
            <Heart className="" />
            <div className="">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    )
}
