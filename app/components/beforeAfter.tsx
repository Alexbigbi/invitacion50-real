
export default function BeforeAfter() {
    return (
      <div className="bg-gradient-to-b from-stone-50 to-stone-100 py-20 px-8">
        {/* Floating decorative elements */}
        <div className="">
          {Array.from({length: 8}).map((_, i) => (
            <div
              key={i}
              className=""
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-">
          {/* Main Title */}
          <div className="">
            <h3 className="">
              50 AÑOS DESPUÉS
            </h3>
            <div className=""></div>
          </div>

          {/* Images Display */}
          <div className="">
            {/* Before - 1975 */}
            <div className="">
              <div className="">
                <div className="">
                  <img 
                    src="/images/IMG_2058.jpeg" 
                    alt="Sacramento y Luisa - 1975"
                    className="w-full h-full object-cover"
                  />
                  <div className=""></div>
                  <div className="">
                    <span className="">
                      1975
                    </span>
                  </div>
                </div>
                <div className="">
                  <h4 className="">Entonces</h4>
                  <p className="">
                    Dos corazones jóvenes unidos en amor
                  </p>
                </div>
              </div>
            </div>

            {/* After - 2025 */}
            <div className="">
              <div className="">
                <div className="">
                  <img 
                    src="/images/SacraLichaReciente.jpeg" 
                    alt="Sacramento y Luisa - 2025"
                    className="w-full h-full object-cover"
                  />
                  <div className=""></div>
                  <div className="">
                    <span className="">
                      2025
                    </span>
                  </div>
                </div>
                <div className="">
                  <h4 className="">Ahora</h4>
                  <p className="">
                    Cincuenta años de amor compartido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
