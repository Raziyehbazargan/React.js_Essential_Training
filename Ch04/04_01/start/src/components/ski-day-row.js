import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = (days) => (
	<tr>
		<td>{days.date.getMonth()+1}/{days.date.getDate()}/{days.date.getFullYear()}</td>
		<td>{days.resort}</td>
		<td>{(days.powder) ? <SnowFlake /> : null}</td>
		<td>{(days.backcountry) ? <Terrain /> : null}</td>
	</tr>
)
