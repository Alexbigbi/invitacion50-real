
export default function Invitation() {
    return (
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <img 
                src="/images/IMG_2059.png" 
                alt="Foto actual de Sacramento y Luisa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="">
            <div className="">
              <div className="">
                {/* Main text with enhanced styling and animations */}
                <div className="">
                  <h4 className="">
                    <span className="">Con gratitud y alegría queremos hacerlos</span>
                    <span className="">partícipes de la celebración con motivo del</span>
                    <span className="">50 aniversario matrimonial de nuestros</span>
                    <span className="">queridos padres y abuelos.</span>
                    <span className="">SACRA Y LICHA</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* Real sunflower decorations - bigger and mirrored */}
            <div className="">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className=""
              />
            </div>
            <div className="" style={{animationDirection: 'reverse'}}>
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
