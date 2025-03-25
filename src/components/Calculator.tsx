import { useState } from "react";
import OperationButton from "./OperatonButton";
import NumberButton from "./NumberButtons";
import Nav from "./nav";
import Header from "./header";

const Calculator = () => {
  const [expression, setExpression] = useState<string>("");

  //attualiza a exppressao a medida que clica em um botao
  const expressionButton = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const calculaResult = () => {
    try {
      let formattedExpression = expression.replace(/\^/g, "**"); //calcular exponeciação
      formattedExpression = expression.replace(
        /√(\d+(\.\d+)?)/g,
        "Math.sqrt($1)"
      );
      formattedExpression = expression.replace(/\,/g, ".");
      const calculatedResult = new Function(
        `return (${formattedExpression})`
      )();

      setExpression(calculatedResult.toString());
    } catch (error) {
      setExpression("erro");
    }
  };

  const handleClearVisor = () => {
    setExpression("");
  };

  const handleDelete = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  //Interface da calculadora

  return (
    <div className="bg-[#394763]">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#394763]  ">
        <h1 className="text-3xl font-bold mmb-4 text-[#e3ded8]">
          {" "}
          Calculadora
        </h1>
        <div className="">
          {/*Visor Calculadora*/}
          <div className="mt-8 w-[300px] max-w-md p-4 bg-[#182033] rounded-lg shadow-lg">
            <input
              type="text"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              className="w-full p-3 text-2xl bg-transparent border-none outline-none text-[#e3ded8] text-right font-mono"
            />
          </div>

          <div className="w-[300px]  p-4 bg-[#242c43]  rounded-lg shadow-lg mt-4">
            <div className=" grid grid-cols-4 gap-2">
              {/* Linha 1 */}
              <NumberButton number="7" onClick={() => expressionButton("7")} />
              <NumberButton number="8" onClick={() => expressionButton("8")} />
              <NumberButton number="9" onClick={() => expressionButton("9")} />
              <button
                onClick={handleDelete}
                className="p-2 bg-[#6b738e] w-[45px] h-[30px] flex items-center justify-center font-bold rounded text-white"
              >
                DEL
              </button>

              <NumberButton number="4" onClick={() => expressionButton("4")} />
              <NumberButton number="5" onClick={() => expressionButton("5")} />
              <NumberButton number="6" onClick={() => expressionButton("6")} />
              <OperationButton
                symbol="+"
                onClick={() => expressionButton("+")}
              />

              <NumberButton number="1" onClick={() => expressionButton("1")} />
              <NumberButton number="2" onClick={() => expressionButton("2")} />
              <NumberButton number="3" onClick={() => expressionButton("3")} />
              <OperationButton
                symbol="-"
                onClick={() => expressionButton("-")}
              />

              <NumberButton number="." onClick={() => expressionButton(".")} />
              <NumberButton number="0" onClick={() => expressionButton("0")} />
              <OperationButton
                symbol="/"
                onClick={() => expressionButton("/")}
              />
              <OperationButton
                symbol="*"
                onClick={() => expressionButton("*")}
              />

              <button
                onClick={handleClearVisor}
                className="h-[30px] flex items-center justify-center col-span-2 p-2 font-bold bg-[#6b738e] rounded text-white"
              >
                RESET
              </button>

              <button
                onClick={calculaResult}
                className="h-[30px] flex items-center justify-center col-span-2 p-2 font-bold bg-[#c84033] rounded text-white"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
