

export default function BeforeAfter() {
    return (
      <div className="bg-gradient-to-b from-stone-50 via-amber-50 via-amber-100 to-stone-50 py-20 px-8 relative overflow-hidden">    
        <div className="max-w-7xl min-h-[800px] mx-auto relative z-10">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-elegant text-amber-900 font-bold mb-8 tracking-widest drop-shadow-2xl">
              50 AÑOS DESPUÉS
            </h3>
            <div className="w-32 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          {/* Images Display */}
          <div className="md:w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Before - 1975 */}
            <div className="relative group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-amber-200">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/IMG_2050.jpeg" 
                    alt="Sacramento y Luisa - 1975"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-white text-2xl md:text-3xl font-elegant bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                      1975
                    </span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="text-2xl md:text-3xl font-elegant text-amber-900 mb-2">Entonces</h4>
                  <p className="text-amber-800 italic text-lg">
                    Dos corazones jóvenes unidos en amor
                  </p>
                </div>
              </div>
            </div>

            {/* After - 2025 */}
            <div className="relative group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-amber-200">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/IMG_2051.jpeg" 
                    alt="Sacramento y Luisa - 2025"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-white text-2xl md:text-3xl font-elegant bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                      2025
                    </span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="text-2xl md:text-3xl font-elegant text-amber-900 mb-2">Ahora</h4>
                  <p className="text-amber-800 italic text-lg">
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
