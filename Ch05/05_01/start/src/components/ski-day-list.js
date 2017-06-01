import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { Link } from 'react-router'
import { SkiDayRow } from './ski-day-row'
import PropTypes from 'prop-types';


export const SkiDayList = ({days, filter}) => {
	const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ? days : days.filter(day => day[filter])
	return (
		<div className="ski-day-list">
			<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Resort</th>
					<th>Powder</th>
					<th>Backcountry</th>
				</tr>
				<tr>
					<td colSpan={4}>
						<Link to="/list-days"> All days </Link>
						<Link to="/list-days/powder"> powder days </Link>
						<Link to="list-days/backcountry"> backcountry days </Link>
					</td>
				</tr>
			</thead>
			<tbody>
				{filteredDays.map((day, i) =>
					<SkiDayRow key={i}
							   {...day}/>
					)}
			</tbody>

		</table>
	</div>
  )
}
//resort={day.resort} date={day.date} powder={day.powder} backcountry={day.backcountry} it's eaul to {...days}

SkiDayList.propTypes = {
	days: function(props) {
		if (!Array.isArray(props.days)) {
			return new Error ("Should be an array")
		} else if (!props.days.length) {
			return new Error("must have at least one record")
		} else {
			return null
		}
	}
}
