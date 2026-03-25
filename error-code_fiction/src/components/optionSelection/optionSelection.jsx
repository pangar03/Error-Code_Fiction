import questions from "../../data/data";

const OptionSelection = ({
    currentQuestion,
    setCurrentQuestion,
    setDisplayError,
    displayError,
}) => {
    return (
        <div
            className={`${displayError ? "flex" : "hidden"} flex-col gap-4 w-full items-center justify-center p-6`}
        >
            {questions[currentQuestion].options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (option.next === "r") {
                            setDisplayError(false);
                            setCurrentQuestion("q0");
                            return;
                        }
                        setCurrentQuestion(option.next);
                    }}
                    className="w-3/4 bg-[#233452] text-[#ffffff] font-semibold py-2 rounded-lg hover:bg-[#feaa5c]/90 cursor-pointer transition-colors"
                >
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default OptionSelection;
