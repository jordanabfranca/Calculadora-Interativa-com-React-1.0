import React from "react";

interface OperationButtonProps{
    symbol: string;
    onClick: () => void;
}
const OperationButton: React.FC<OperationButtonProps> = ({symbol, onClick}) =>{
    return(
        <button onClick={onClick} className="p-2 bg-[#e3ded8] text-[#394763] rounded">
         {symbol}
         </button>
    );
};
export default OperationButton;