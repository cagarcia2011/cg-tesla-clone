import { HomepageModel3, HomepageModel3Mobile } from "../assets/images"
import { useWindowDimensions } from "../hooks"
import { Button } from "./button"
import { FullScreenImage } from "./fullScreenImage"

import { RxChevronDown } from 'react-icons/rx'

export const Hero = () => {
    const { width } = useWindowDimensions()
    return (
        <section id="hero-section" className="relative">
            <FullScreenImage src={width >= 600 ? HomepageModel3 : HomepageModel3Mobile} />
            <div className="
                fixed 
                z-0 
                bg-transparent 
                flex flex-col 
                h-[100svh] w-full 
                top-0 left-0
                ">
                <div className="relative flex flex-col items-center">
                    <h1 className="text-[2rem] mt-[190px] lg:mt-[164px]">Model 3</h1>
                    <p>
                        Leasing starting at $349/mo
                    </p>
                </div>
                <div className="
                    relative 
                    flex flex-col items-center flex-grow justify-end 
                    pb-[24px]
                    ">
                    <div className="block">
                        <div className="
                            grid grid-cols-1 grid-rows-2 gap-[16px]
                            lg:grid-cols-2 lg:grid-rows-1 lg:gap-[16px] 
                            mb-[16px] py-[16px]
                            ">
                            <Button >
                                View Inventory
                            </Button>
                            <Button secondary>
                                Custom Order
                            </Button>
                        </div>
                    </div>
                    <div>
                        <button className="
                            hover:scale-[102%] active:scale-105 
                            transition-all duration-75 ease-in-out 
                            animate-bounce
                            ">
                            <RxChevronDown size={30} color="#3a3d40" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}