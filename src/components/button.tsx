import { ReactNode } from "react";

interface ButtonProps {
    secondary?: boolean;
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ secondary, children }) => {
    
    return (
        <button 
            className={`
                ${
                    secondary 
                        ? "bg-[#fff] text-[#3a3d40] btn-secondary" 
                        : "bg-[#3a3d40] text-white btn"
                } 
                rounded-md 
                px-[24px] py-[4px] m-[3px] 
                flex items-center justify-center 
                text-[14px] 
                w-[264px] h-[40px]
                `}>
            {children}
        </button>
    )
}