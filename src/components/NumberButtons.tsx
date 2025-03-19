import React from "react";

interface NumberButtonsProps{
    number: string;
    onClick: () => void;
}

const NumberButton: React.FC<NumberButtonsProps> =({number, onClick}) =>{
    return(
        <button onClick={onClick} className="p-2 w-[45px] h-[30px] flex items-center justify-center bg-[#e3ded8] text-[#394763] font-bold rounded">
            {number}
        </button>
    )
}; export default NumberButton;