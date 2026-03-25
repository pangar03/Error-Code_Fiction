import { useEffect, useState } from "react";
import OperatorButton from "../operatorButton/operatorButton";
import NumberButton from "../numberButton/numberButton";
import ErrorContainer from "../errorContainer/errorContainer";
import OptionSelection from "../optionSelection/optionSelection";

const Calculator = () => {
    const [numbers, setNumbers] = useState([]);
    const [operators, setOperators] = useState([]);
    const [result, setResult] = useState(0);
    const [currentInput, setCurrentInput] = useState("");
    const [numberBuffer, setNumberBuffer] = useState("");
    const [displayError, setDisplayError] = useState(false);
    const [pendingCalculation, setPendingCalculation] = useState({
        numbers: [],
        operators: [],
    });
    const [currentQuestion, setCurrentQuestion] = useState("q0");

    useEffect(() => {
        let display = "";

        numbers.forEach((num, index) => {
            display += num.toString();
            if (index < operators.length) {
                display += " " + operators[index] + " ";
            }
        });

        if (numberBuffer) {
            display += numberBuffer;
        }

        if (!display && result !== 0) {
            display = result.toString();
        }

        setCurrentInput(display);
    }, [numbers, operators, numberBuffer, result]);

    const calculateResult = (
        nums = pendingCalculation.numbers,
        ops = pendingCalculation.operators,
    ) => {
        let tempResult = nums[0] || 0;

        for (let i = 0; i < ops.length; i++) {
            const operator = ops[i];
            const nextNum = nums[i + 1] || 0;

            switch (operator) {
                case "+":
                    tempResult += nextNum;
                    break;
                case "-":
                    tempResult -= nextNum;
                    break;
                case "*":
                    tempResult *= nextNum;
                    break;
                case "/":
                    tempResult /= nextNum;
                    break;
            }
        }

        setNumbers([]);
        setOperators([]);
        setNumberBuffer("");
        setResult(tempResult);
    };

    const bufferNumber = (digit) => {
        setNumberBuffer((prev) => prev + digit);
    };

    const addOperator = (operator) => {
        let updatedNumbers = [...numbers];

        if (numberBuffer) {
            updatedNumbers.push(parseFloat(numberBuffer));
            setNumberBuffer("");
        }

        if (operator === "=") {
            setPendingCalculation({ numbers: updatedNumbers, operators });
            setDisplayError(true);
            calculateResult(updatedNumbers, operators); // Move the operation to the end of the dialog.
            return;
        }

        if (updatedNumbers.length > 0) {
            setNumbers(updatedNumbers);
            setOperators((prev) => [...prev, operator]);
        }
    };

    return (
        <>
            <section className="lg:w-3/4 w-[95%] bg-[#0e0c22] h-[95%] m-auto backdrop-blur-lg opacity-80 rounded-lg flex flex-col justify-start items-start px-4 py-6">
                <div className="flex w-full">
                    <div className="border-b-2 border-[#f6845c]">
                        <h3 className="text-[#f6845c] font-semibold">
                            Calculadora
                        </h3>
                    </div>
                    <div className="w-full border-b-2 border-[#3d3d4a]"></div>
                </div>
                <div className="w-full min-h-1/3 h-fit border-b-2 border-[#3d3d4a] flex flex-col justify-end items-end px-4 py-4">
                    <ErrorContainer
                        displayError={displayError}
                        setDisplayError={setDisplayError}
                        calculateResult={calculateResult}
                        currentQuestion={currentQuestion}
                    />
                    <input
                        type="text"
                        placeholder="0"
                        readOnly
                        className={` ${displayError ? "hidden" : ""} bg-[#0e0c22] text-[#ffffff] text-xl font-bold border-none focus:none text-end text-elipsis w-full`}
                        value={currentInput}
                    />
                </div>
                <div
                    className={`${displayError ? "hidden" : "flex"} w-full h-2/3 flex-col justify-start items-center`}
                >
                    <div className="grid grid-cols-5 gap-2 mt-4 w-full">
                        <OperatorButton operator="+" onClick={addOperator} />
                        <OperatorButton operator="-" onClick={addOperator} />
                        <OperatorButton operator="*" onClick={addOperator} />
                        <OperatorButton operator="/" onClick={addOperator} />
                        <OperatorButton operator="=" onClick={addOperator} />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4 w-full h-full">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                            <NumberButton
                                key={num}
                                number={num}
                                onClick={bufferNumber}
                            />
                        ))}
                        <OperatorButton
                            operator="C"
                            onClick={() => {
                                setNumbers([]);
                                setOperators([]);
                                setNumberBuffer("");
                                setResult(0);
                            }}
                        />
                    </div>
                </div>
                <OptionSelection
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    setDisplayError={setDisplayError}
                    displayError={displayError}
                />
            </section>
        </>
    );
};

export default Calculator;
