import { Component } from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
		console.log('resort', this.refs.resort.value)
		console.log('resort', this.refs.date.value)
		console.log('resort', this.refs.powder.checked)
		console.log('resort', this.refs.backcountry.checked)
	}
	render() {
		const { resort, date, powder, backcountry } = this.props

		return (
			<form onSubmit={this.submit} className="add-day-form">
			  <label htmlFor="resort">Report Name</label>
				<input id="resort"
					type="text"
					defaultValue={resort}
					ref="resort"
					required />

				<label htmlFor="date">Date</label>
				<input id="date"
					type="date"
					defaultValue={date}
					ref="date"
					required />

				<div>
					<input
						id="powder"
						defaultChecked={powder}
						ref="powder"
						type="checkbox" />
						<label htmlFor="powder">Powder Day</label>
				</div>

				<div>
					<input
						id="backcountry"
						type="checkbox"
						defaultChecked={backcountry}
						ref="backcountry"
						required />
						<label htmlFor="backcountry">Backcountry Name</label>

				</div>
				<button>Add day</button>
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
