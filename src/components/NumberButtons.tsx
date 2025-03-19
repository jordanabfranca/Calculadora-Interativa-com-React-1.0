import React from "react";

interface NumberButtonsProps{
    number: string;
    onClick: () => void;
}

const NumberButton: React.FC<NumberButtonsProps> =({number, onClick}) =>{
    return(
        <button onClick={onClick} className="p-2 bg-[#e3ded8] text-[#394763] rounded">
            {number}
        </button>
    )
}; export default NumberButton;