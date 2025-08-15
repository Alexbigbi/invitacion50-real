import 'app/embla.css'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from '~/components/ui/emblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function BibleVerse() {
    return (
        <div className="flex content-center items-center mx-auto w-full min-h-screen text-center py-2 px-8 bg-gradient-to-b from-stone-50 via-amber-50 via-amber-100 to-stone-50 relative">
            <div className="absolute inset-0 opacity-60 bg-gradient-to-b from-amber-200/40 via-amber-150/30 via-amber-100/20 to-white"></div>
            <div className="mx-auto max-w-screen w-2xl bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl border border-stone-200/50 backdrop-blur-xs space-y-10 overflow-hidden">
                <p className="text-2xl md:text-3xl italic font-serif text-stone-900">
                    … y haz Señor que vivamos juntos y felices hasta la vejez.
                </p>
                <p className="text-2xl md:text-3xl italic font-serif text-stone-900 mt-2">
                    Y los dos dijeron: Amén, Amén.
                </p>
                <p className="text-xl md:text-2xl italic font-serif text-stone-900 mt-2">
                    Tobías 8:8
                </p>
                <div className='flex items-center justify-center w-full h-full'>
                    <div className='max-w-sm w-full h-full flex items-center justify-center '>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>
                </div>
            </div>
        </div>
    )
}
