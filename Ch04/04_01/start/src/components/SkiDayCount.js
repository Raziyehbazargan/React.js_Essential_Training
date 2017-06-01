import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total=90, powder=40, backcountry=10, goal=100}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
)

//set  propTypes in ES6 - PropTypes help in debugging
SkiDayCount.propTypes = {
  total: PropTypes.number.isRequired,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
	goal: PropTypes.number
}

//we can also set defaults props here or in the class up like ({total=70, powder=40, backcountry=10, goal=100}) => (

// SkiDayCount.defaultProps = {
//   total : 50,
//   powder: 10,
//   backcountry: 15,
//   goal: 75
// }
