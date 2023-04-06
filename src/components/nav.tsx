import { useState } from "react"
import { NavLink } from "react-router-dom"
import { TfiClose } from 'react-icons/tfi'
import { TeslaLogoSrc } from "../assets/images"

export const Nav = () => {
    const [openNav, setOpenNav] = useState<boolean>(false)

    const handleToggleNav = () => {
        setOpenNav(prev => !prev)
    }
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent z-10">
            <div className="
                flex justify-between items-center 
                text-sm font-medium 
                px-12 p-4
                ">
                <div>
                    <NavLink to={"/"} className="scale-100 group">
                        <img
                            className="h-3 group-hover:scale-[101%] transition-all duration-150 ease-in-out"
                            src={TeslaLogoSrc}
                            alt="Tesla logo"
                        />
                    </NavLink>
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex justify-center hover:cursor-pointer">
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Model S
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Model 3
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Model X
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Model Y
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Solar Roof
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Solar Panels
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex justify-center hover:cursor-pointer">
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Shop
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
                                Account
                            </li>
                        </NavLink>
                        <button onClick={handleToggleNav}>
                            <li
                                className="py-1 px-3 hover:rounded hover:bg-black/5"
                            >
                                Menu
                            </li>
                        </button>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button 
                        onClick={handleToggleNav} 
                        className="
                            inline-flex items-center 
                            rounded-md 
                            py-2 px-4 p-2 
                            text-sm font-medium 
                            bg-black/5 shadow-sm hover:bg-black/10
                            ">
                        Menu
                    </button>
                </div>

                <div
                    className={
                        openNav
                            ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
                            : "fixed bg-white right-[-100%]"
                    }
                >
                    <div className="flex justify-end pr-8 pt-8 z-30 relative">
                        <button onClick={handleToggleNav}>
                            <TfiClose className="rounded p-1 hover:bg-black/5 cursor-pointer" size={28} />
                        </button>
                    </div>
                    <div className={`fixed-background-overlay ${openNav ? "visible" : "hidden"}`}></div>
                    <ul className="pt-8 px-6 nav-shadow absolute h-[100svh] top-0 w-80 right-0 z-20 bg-white">
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer mt-12">
                                Model S
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Model 3
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Model X
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Model Y
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Solar Roof
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Solar Panels
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Existing Inventory
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Used Inventory
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Trade-In
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Test Drive
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Insurance
                            </li>
                        </NavLink>
                        <NavLink to={"/"}>
                            <li className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer">
                                Powerwall
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}