import { useState } from "react";

const Calculator = () => {
    const [input1, setInput1] = useState<string>("");
    const [input2, setInput2] = useState<string>("");
    const [result, setResult] = useState<number | string> ("");

    //realizar operações
    const operation = (operation: string) =>{
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)){
            setResult("Erro: Números Inválidos")
            return
        }

        switch (operation){
            case "+":
                setResult (num1 + num2);
                break;
            case "-":
                setResult (num1 - num2);
                break;
            case "*":
                setResult (num1 * num2);
                break
            case "/":
                if (num2 === 0){
                    setResult ("Erro: Divisao por zero")
                }else{
                    setResult(num1/num2);
                }
                break;
            case "^":
                setResult(Math.pow(num1,num2));
                break;
            case "√":
                if (num1< 0){
                    setResult("Erro: Raiz de numero negativo")
                } else{
                    setResult(Math.sqrt(num1))
                }
                break;
                default:
                    setResult("Erro: Operação Inválida")
            
    
        }
    };

    //Interface da calculadora

return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h1 className="text -2xl font-bold mmb-4"> Calculadora</h1>
        <div className="bg-white p-6 roundend-lg shadow-lg">
            <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="w-full p-2 border border-gray-300 roundend mb-2"
            placeholder="Número 1"
            />

            <input
            type = "number"
            value ={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-full p-2 border border-gray-300 roundend mb-2"
            placeholder="Número 2"
            />

            <div className=" grid grid--cols-3 gap-2">
                <button
                onClick={() => operation("+")}
                className="p-2 bg-blue-500 text-white roundend"> + </button>

                <button 
                onClick={() =>operation ("-")}
                className="p-2 bg-blue-500 text-white roundend"> - </button>

                <button 
                onClick={() => operation("*")} 
                className="p-2 bg-blue-500 text-white roundend"> * </button>

                <button
                onClick={()=>operation("/")}
                className="p-2 bg-blue-500 text-white roundend"> /</button>

                <button 
                onClick={()=>operation("^")}
                className="p-2 bg-blue-500 text-white roundend"> ^ </button>

                <button
                onClick={()=>operation("√")}
                className="p-2 bg-blue-500 text-white roundend"> √</button>
            </div>

            <div className="mt-4">
                <p className="text-xl font-semibold">Resultado: {result}</p>

            </div>

        </div>
    </div>

);

};
export default Calculator;