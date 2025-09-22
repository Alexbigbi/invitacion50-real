import { NavLink, Outlet } from "react-router";

export default function Header() {
    return (
        <>
            <nav className="bg-white shadow-xl p-4 border-b border-stone-200">
                {/* mobile header */}
                <div className="container md:hidden mx-auto flex items-center justify-around">
                    <div className=""> 
                        <NavLink to="/" className="text-xl shrink-1 font-elegant text-stone-900 ">
                            S&L | 50 Aniversario
                        </NavLink>
                    </div>
                    <div className="shrink-1 gap-4 space-x-4 text-xl font-elegant">
                        <NavLink to="/asistentes" className={({isActive}) => isActive ? "text-amber-700" : "text-stone-900" }>
                            Asistentes
                        </NavLink>
                    </div>
                </div>
                <div className="hidden md:flex container mx-auto items-center justify-between">
                    <div className=""> 
                        <NavLink to="/" className="text-xl shrink-1 font-elegant text-stone-900 ">
                            S&L | 50 Aniversario
                        </NavLink>
                    </div>

                    <div className="shrink-1 gap-4 space-x-4 text-xl font-elegant">
                        <NavLink to="/asistentes" className={({isActive}) => isActive ? "text-amber-700" : "text-stone-900" }>
                            Asistentes
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
