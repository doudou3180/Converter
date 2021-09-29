import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import './footer.scss';

const Result = ({ convertedAmount, selectedCurrency }) => (
  <div className="result">
    <CountUp
      className="result__amount"
      decimals={2}
      duration={0.5}
      end={convertedAmount}
    />
    <p className="result__currency">{selectedCurrency}</p>
  </div>
);

Result.propTypes = {
  convertedAmount: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Result;
