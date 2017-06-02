import { PropTypes } from 'prop-types'
import { Component } from 'react'

const tahoeResorts = [
  "Alpine Meadows",
  "Boreal",
  "Diamond Peak",
  "Donner Ski Ranch",
  "Heavenly",
  "Kirkwood",
  "Mt. Rose"
]

class AutoComplete extends Component {
  get value() {
    return this.refs.inputResort.value
  }
  set value(inputValue) {
    this.refs.inputResort.value = inputValue
  }

  render() {
    return (
      <div>
        <input ref="inputResort" type="text" list="tahoe-resorts" />
        <datalist id="tahoe-resorts">
            {this.props.options.map(
              (opt, i) =>
              <option key={i}>{opt}</option>)}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({resort, date, powder, backcountry, onNewDay}) => {
  let _resort, _date, _powder, _backcountry;

  const submit = (e) => {
		e.preventDefault()
    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.value,
      backcountry: _backcountry.value
    })

    _resort.value = ''
    _date.value = ''
    _powder.value = false
    _backcountry.value = false

    console.log('resort', _resort.value)
    console.log('date', _date.value)
    console.log('powder', _powder.value)
    console.log('backcountry', _backcountry.value)
	}

  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="resort">Report Name</label>
      <AutoComplete options={tahoeResorts} ref={input => _resort = input}/>

      <label htmlFor="date">Date</label>
      <input id="date"
        type="date"
        defaultValue={date}
        ref={input => _date = input}
        required />

      <div>
        <input
          id="powder"
          defaultChecked={powder}
          ref={input => _powder = input}
          type="checkbox" />
          <label htmlFor="powder">Powder Day</label>
      </div>

      <div>
        <input
          id="backcountry"
          type="checkbox"
          defaultChecked={backcountry}
          ref={input => _backcountry = input}
          required />
          <label htmlFor="backcountry">Backcountry Name</label>

      </div>
      <button>Add day</button>
    </form>
  )

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
