import { useState } from "react";
import OperationButton from "./OperatonButton";
import NumberButton from "./NumberButtons";

const Calculator = () => {
    const [expression, setExpression] = useState<string>("");

    //attualiza a exppressao a medida que clica em um botao
const expressionButton = (value: string) =>{
    setExpression((prev) => prev + value );
}


    const calculaResult = () =>{

        try {
            let formattedExpression = expression.replace(/\^/g, "**"); //calcular exponeciação
            formattedExpression = expression.replace(/√(\d+(\.\d+)?)/g,"Math.sqrt($1)");
            formattedExpression = expression.replace(/\,/g, ".")
            const calculatedResult = new Function(`return (${formattedExpression})`)();

            setExpression(calculatedResult.toString());
        } catch (error) {
           
            setExpression("erro");
        }

    };

    const handleClearVisor = () =>{
        setExpression("");
    }

    const handleDelete =() =>{
        setExpression((prev) =>prev.slice(0,-1));
    }

    //Interface da calculadora

return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#394763] ">
        <h1 className="text-3xl font-bold mmb-4 text-[#e3ded8]"> Calculadora</h1>

        


        
            {/*Visor Calculadora*/}
            <div className="mt-2 w-full max-w-md p-4 bg-[#182033] rounded-lg shadow-lg">
                <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="w-full p-3 text-2xl bg-transparent border-none outline-none text-[#e3ded8] text-right font-mono"
            />
            </div>
            
            <div className="w-full max-w-md p-4 bg-[#242c43] rounded-lg shadow-lg mt-4">
            <div className=" grid grid-cols-3 gap-2">

                {/*Botões operações*/}
                {["+", "-", "*", "/", "^", "√", ","].map((op)=>(
                    <OperationButton key={op} symbol={op} onClick={()=>expressionButton(op)}/>
                    ))} 
                
                {/*Botões de números*/}
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((numero)=>(
                    <NumberButton key={numero} number= {numero} onClick={()=>expressionButton(numero)}/>
                    ))}
            </div>

            <div className="mt-2"></div>
            <div className="flex gap-2">

            <button 
                onClick={handleDelete} className=" w-1/2 p-2 bg-[#6b738e] text-[#e3ded8] rounded"> 
                    DEL 
                </button>

                <button 
                onClick={handleClearVisor} className=" w-1/2 p-2 bg-[#6b738e] text-[#e3ded8] rounded"> 
                    RESET 
                </button>

                <button 
                onClick={calculaResult} className=" w-1/2 p-2 bg-[#c84033] text-[#e3ded8]  rounded">
                    = 
                </button>

                
            </div>
            

                
                </div>
            </div>
            
    

);

};
export default Calculator;