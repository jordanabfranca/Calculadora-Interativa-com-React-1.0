import { useState } from "react";

const Calculator = () => {
    const [input1, setInput1] = useState<string>("");
    const [input2, setInput2] = useState<string>("");
    const [result, setResult] = useState<number | string> ("");
    const [expression, setExpression] = useState<string>("");

    //realizar operações
    const operation = (op: string) =>{
        if(!input1 || !input2){
            setResult("Erro: Preencha os dois mumeros!");
            return;
        }
        setExpression(`${input1} ${op} ${input2}`);
    };

    const calculaResult = () =>{
        if(!expression) return;

        const [n1, op, n2] = expression.split(" ");
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)){
            setResult("Erro: Números Inválidos")
            return;
        }

        switch (op){
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
                    setResult(num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero");
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

        {/*Visor Calculadora*/}
        <div className="bg-white p-4 roundend-lg shadow-md w-64 text-rigt text-2xl font-mono mb-4 border border-gray-300 "> 
            {expression || "  "}
        </div>

        <div className="bg-white p-6 roundend-lg shadow-lg">
            {/*Inputs */}
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

            {/*Botões operações*/}
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

            {/*Resultado*/}
            <button 
            onClick={calculaResult} className="w-full mt-4 p-2 bg-green-500 text-white roundend">
            = 
            </button>


            <div className="mt-4">
                <p className="text-xl font-semibold"> {result !== "" ? `Resultado: ${result}`: ""}</p>

            </div>

        </div>
    </div>

);

};
export default Calculator;