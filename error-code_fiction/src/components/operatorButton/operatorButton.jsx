const OperatorButton = ({ operator, onClick }) => {
    return (
        <button
            className="px-4 py-2 bg-gray-800 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
            onClick={() => onClick(operator)}
        >
            {operator}
        </button>
    );
};

export default OperatorButton;
