import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    reset: true,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return (
    <animated.span>{n !== null ? number.to(number => number.toFixed(0)) : '- -'}</animated.span>
  )
}

Number.propTypes = {
  n: PropTypes.number,
}

export default Number
