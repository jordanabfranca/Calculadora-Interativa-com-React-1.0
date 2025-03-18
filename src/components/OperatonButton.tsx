import React from "react";

interface OperationButtonProps{
    symbol: string;
    onClick: () => void;
}
const OperationButton: React.FC<OperationButtonProps> = ({symbol, onClick}) =>{
    return(
        <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
         {symbol}
         </button>
    );
};
export default OperationButton;