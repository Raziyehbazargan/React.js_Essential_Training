import { Component } from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends Component {
	render() {

		const { resort, date, powder, backcountry } = this.props

		return (
			<form className="add-day-form">
			  <label htmlFor="resort">Report Name</label>
				<input id="resort" type="text" defaultValue={resort} required />

				<label htmlFor="date">Date</label>
				<input id="date" type="date" defaultValue={date} required />

				<label htmlFor="powder">Powder Day</label>
				<input id="powder" defaultChecked={powder} type="checkbox" />

				<label htmlFor="backcountry">Backcountry Name</label>
				<input id="backcountry" type="checkbox" defaultChecked={backcountry} required />
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-01",
	powder: true,
	backcountry: false
}

AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
