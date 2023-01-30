const FeedbackOptions = ({ options, onFeedback }) => {
    return options.map(option => {
        return (
            <button
                className="option_button"
                type="button"
                key={option}
                onClick={() => {
                    onFeedback(option);
                }}
            >
                {option}
            </button>
        );
    });
};

export default FeedbackOptions;
