import PropTypes from 'prop-types'
import './Age.css'

const Age = ({ years = '- -', months = '- -', days = '- -' }) => {
  return (
    <p className="age-result">
      <span>{years}</span> years
      <br />
      <span>{months}</span> months
      <br />
      <span>{days}</span> days
    </p>
  )
}

Age.propTypes = {
  years: PropTypes.oneOf(['- -', PropTypes.number]),
  months: PropTypes.oneOf(['- -', PropTypes.number]),
  days: PropTypes.oneOf(['- -', PropTypes.number]),
}

export default Age
