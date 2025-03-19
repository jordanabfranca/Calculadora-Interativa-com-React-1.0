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
            const evalResult = eval(expression);
            const calculatedResult = new Function(`return (${expression})`)();
            setExpression(calculatedResult.toString());
        } catch (error) {
           
            setExpression("erro");
        }

    };

    //Interface da calculadora

return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h1 className="text -2xl font-bold mmb-4"> Calculadora</h1>

        


        <div className="bg-white p-6 rounded-lg shadow-lg">
            {/*Visor Calculadora*/}
            <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className="w-full p-3 text-2xl border border-gray-300 rounded mb-4 text-right font-mono shadow-md"
            />
            {/*Botões operações*/}
            <div className=" grid grid-cols-3 gap-2">
                {["+", "-", "*", "/", "^", "√"].map((op)=>(
                    <OperationButton key={op} symbol={op} onClick={()=>expressionButton(op)}/>
                    ))} </div>

                <div className="grid grid-cols-3 gap-2"/>
                <div className=" grid grid-cols-3 gap-2">  </div>
            {/*Botões de números*/}
            <div className="grid grid-cols-3 gap-2">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((numero)=>(
                    <NumberButton key={numero} number= {numero} onClick={()=>expressionButton(numero)}/>
                    ))} </div>

            {/*Resultado*/}
            <button 
                onClick={calculaResult} className="w-full mt-4 p-2 bg-green-500 text-white roundend">
                = 
                </button>

                
                </div>
            </div>
            
    

);

};
export default Calculator;