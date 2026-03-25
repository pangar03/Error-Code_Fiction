import questions from "../../data/data";

const ErrorContainer = ({
    displayError,
    setDisplayError,
    calculateResult,
    currentQuestion,
}) => {
    const questionData = questions[currentQuestion];
    if (displayError) {
        const questionText = document.getElementById("questionContainer");
        questionText.innerHTML = questionData.question;
    }
    return (
        <div
            className={`${displayError ? "flex" : "hidden"} w-full h-full bg-[#7e232395] justify-start items-start rounded-lg p-4`}
        >
            <h3
                className="font-regular text-xs text-[#ff4141] text-left md:text-lg"
                id="questionContainer"
            ></h3>
        </div>
    );
};

export default ErrorContainer;
