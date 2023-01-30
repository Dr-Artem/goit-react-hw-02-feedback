const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <div className="statistic">
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {percentage} %</span>
        </div>
    );
};

export default Statistics;
