import PropTypes from 'prop-types';

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

Statistics.propsType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
