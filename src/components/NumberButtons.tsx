import React from "react";

interface NumberButtonsProps{
    number: string;
    onClick: () => void;
}

const NumberButton: React.FC<NumberButtonsProps> =({number, onClick}) =>{
    return(
        <button onClick={onClick} className="p-2 bg-pink-500 text-white rounded">
            {number}
        </button>
    )
}; export default NumberButton;