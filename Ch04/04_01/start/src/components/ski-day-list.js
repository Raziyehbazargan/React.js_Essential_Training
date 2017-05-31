import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './ski-day-row'



export const SkiDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<SkiDayRow key={i}
						   {...day}/>
				)}
		</tbody>

	</table>
)

//resort={day.resort} date={day.date} powder={day.powder} backcountry={day.backcountry} it's eaul to {...days}
