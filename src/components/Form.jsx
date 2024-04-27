import { useState } from 'react'
import IconArrow from '../assets/icon-arrow.svg?react'
import './Form.css'

const EMPTY = {
  day: '',
  month: '',
  year: '',
}

const Form = () => {
  const [data, setData] = useState(EMPTY)

  const onChange = (evt) => {
    setData(data => ({
      ...data,
      [evt.target.name]: evt.target.value,
    }))
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <form className="age-form" onSubmit={onSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="day">Day</label>
          <input
            type="text"
            inputMode="numeric"
            name="day"
            id="day"
            placeholder="DD"
            size={4}
            maxLength={2}
            value={data.day}
            onChange={onChange}
          />
        </div>

        <div className="field">
          <label htmlFor="month">Month</label>
          <input
            type="text"
            inputMode="numeric"
            name="month"
            id="month"
            placeholder="MM"
            size={4}
            maxLength={2}
            value={data.month}
            onChange={onChange}
          />
        </div>

        <div className="field">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            inputMode="numeric"
            name="year"
            id="year"
            placeholder="YYYY"
            size={4}
            maxLength={4}
            value={data.year}
            onChange={onChange}
          />
        </div>
      </fieldset>

      <button type="submit" aria-label="Submit">
        <IconArrow />
      </button>
    </form>
  )
}

export default Form
