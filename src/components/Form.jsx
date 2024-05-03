import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import IconArrow from '../assets/icon-arrow.svg?react'
import './Form.css'
import { calculateAge } from '../lib/functions'

const Form = ({ setAge }) => {
  const {
    register,
    handleSubmit,
    setError,
    trigger,
    formState: { isSubmitted, errors },
  } = useForm()
  const resetAge = () => setAge({ years: null, months: null, days: null })

  const onSubmit = (data) => {
    // Check if date is valid
    const inputDate = `${data.year}-${data.month.padStart(2, '0')}-${data.day.padStart(2, '0')}`
    const date = new Date(data.year, data.month - 1, data.day)
    const parsedDate = `${date.getFullYear()}`
      + `-${`${date.getMonth() + 1}`.padStart(2, '0')}`
      + `-${`${date.getDate()}`.padStart(2, '0')}`

    /**
     * Some invalid dates are accepted by the Date() constructor. For example,
     * February 31, 2024 is parsed as March 2, 2024. To guard against such case,
     * we compare the input date and the parsed date.
     */
    if (inputDate !== parsedDate) {
      setError('day', { type: 'custom', message: 'Must be a valid date' })
      setError('month', { type: 'custom', message: '' })
      setError('year', { type: 'custom', message: '' })
      resetAge()
      return
    }
    /**
     * Validation that checks if the date is in the future.
     */
    if (new Date(parsedDate) > new Date()) {
      setError('day', { type: 'custom', message: 'Must be in the past' })
      setError('month', { type: 'custom', message: '' })
      setError('year', { type: 'custom', message: '' })
      resetAge()
      return
    }

    const age = calculateAge(data)
    setAge(age)
  }

  return (
    <form className="age-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <fieldset>
        <legend className="visually-hidden">Enter your birthdate</legend>
        <div className={`field${errors.day ? ' has-error' : ''}`}>
          <label htmlFor="day">Day</label>
          <input
            id="day"
            type="number"
            placeholder="DD"
            autoComplete="off"
            aria-describedby="day-error"
            size={4}
            min={1}
            max={31}
            {...register('day', {
              required: 'This field is required',
              validate: day => (parseInt(day) >= 1 && parseInt(day) <= 31) || 'Must be a valid day',
              onBlur: ({ target }) => {
                if (target.value === '') return
                target.value = target.value.padStart(2, '0')
              },
              onChange: () => {
                // Trigger validation on all fields if form has been submitted before
                if (isSubmitted) trigger()
              },
            })}
          />
          <div className="error" id="day-error">{errors.day?.message}</div>
        </div>

        <div className={`field${errors.month ? ' has-error' : ''}`}>
          <label htmlFor="month">Month</label>
          <input
            id="month"
            type="number"
            placeholder="MM"
            autoComplete="off"
            aria-describedby="month-error"
            size={4}
            min={1}
            max={12}
            {...register('month', {
              required: 'This field is required',
              validate: month => (parseInt(month) >= 1 && parseInt(month) <= 12) || 'Must be a valid month',
              onBlur: ({ target }) => {
                if (target.value === '') return
                target.value = target.value.padStart(2, '0')
              },
              onChange: () => {
                if (isSubmitted) trigger()
              },
            })}
          />
          <div className="error" id="month-error">{errors.month?.message}</div>
        </div>

        <div className={`field${errors.year ? ' has-error' : ''}`}>
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="number"
            placeholder="YYYY"
            autoComplete="off"
            aria-describedby="year-error"
            size={4}
            {...register('year', {
              required: 'This field is required',
              validate: year => (parseInt(year) <= new Date().getFullYear()) || 'Must be in the past',
              onChange: () => {
                if (isSubmitted) trigger()
              },
            })}
          />
          <div className="error" id="year-error">{errors.year?.message}</div>
        </div>
      </fieldset>

      <button type="submit" aria-label="Submit">
        <IconArrow />
      </button>
    </form>
  )
}

Form.propTypes = {
  setAge: PropTypes.func,
}

export default Form
