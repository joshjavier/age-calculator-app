import PropTypes from 'prop-types'
import Number from './Number'
import './Age.css'

const Age = ({ years, months, days }) => {
  return (
    <p className="age-result">
      <Number n={years} /> years
      <br />
      <Number n={months} /> months
      <br />
      <Number n={days} /> days
    </p>
  )
}

Age.propTypes = {
  years: PropTypes.number,
  months: PropTypes.number,
  days: PropTypes.number,
}

export default Age
