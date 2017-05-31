import '../stylesheets/ui.scss'

//Component Methods
const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%');
}
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total / goal )
}

//stateless functional components
export const SkiDayCount = (props) => (
	<div className="ski-day-count">
		<div className="total-days">
      <span>{props.total}</span>
			<span>days</span>
		</div>
		<div className="powder-days">
      <span>{props.powder}</span>
			<span>days</span>
		</div>
		<div className="backcountry-days">
      <span>{props.backcountry}</span>
			<span>days</span>
		</div>
    <div>
      <span>
        {calcGoalProgress(props.total, props.goal) }
      </span>
    </div>
	</div>
)
