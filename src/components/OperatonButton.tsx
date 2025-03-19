import React from "react";

interface OperationButtonProps{
    symbol: string;
    onClick: () => void;
}
const OperationButton: React.FC<OperationButtonProps> = ({symbol, onClick}) =>{
    return(
        <button onClick={onClick} className="p-2 w-[45px] h-[30px] flex items-center justify-center bg-[#e3ded8] font-bold text-[#394763] rounded">
         {symbol}
         </button>
    );
};
export default OperationButton;