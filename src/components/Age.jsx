import PropTypes from 'prop-types'
import './Age.css'

const Age = ({ years, months, days }) => {
  return (
    <p className="age-result">
      <span>{years !== null ? years : '- -'}</span> years
      <br />
      <span>{months !== null ? months : '- -'}</span> months
      <br />
      <span>{days !== null ? days : '- -'}</span> days
    </p>
  )
}

Age.propTypes = {
  years: PropTypes.number,
  months: PropTypes.number,
  days: PropTypes.number,
}

export default Age
