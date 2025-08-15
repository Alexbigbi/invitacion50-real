
export default function Invitation() {
    return (
      <div className="bg-gradient-to-b from-white to-stone-50 py-20 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <div className="relative group flex flex-col min-h-[600px]">
            <div className="flex-1 bg-stone-100 rounded-xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
              <img 
                src="/images/IMG_2052.png" 
                alt="Foto actual de Sacramento y Luisa"
                className="w-full h-full object-cover max-h-[650px]"
              />
            </div>
          </div>
          
          <div className="relative group flex flex-col min-h-[600px] max-h-[650px]">
            <div className="flex-1 bg-gradient-to-br from-white via-stone-50 to-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border-2 border-stone-300/50 backdrop-blur-sm ">
              <div className="text-center px-6 py-8 relative">
                {/* Main text with enhanced styling and animations */}
                <div className="">
                  <h4 className="text-3xl md:text-4xl lg:text-4xl font-elegant text-stone-800 leading-tight tracking-wide font-semibold">
                    <span className="block">Con gratitud y alegría queremos hacerlos</span>
                    <span className="block">partícipes de la celebración con motivo del</span>
                    <span className="block text-green-700">50 aniversario matrimonial de nuestros</span>
                    <span className="block text-green-700">queridos padres y abuelos.</span>
                    <span className="block text-green-700">SACRA Y LICHA</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* Real sunflower decorations - bigger and mirrored */}
            <div className="absolute -bottom-8 -right-8">
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className="w-32 h-32 drop-shadow-lg"
              />
            </div>
            <div className="absolute -top-8 -left-8" style={{animationDirection: 'reverse'}}>
              <img 
                src="/images/sunflower.png" 
                alt="Sunflower decoration"
                className="w-32 h-32 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    )
}
