import { PropTypes } from 'prop-types'

export const AddDayForm = ({resort, date, powder, backcountry}) => {

  let _resort, _date, _powder, _backcountry;

  const submit = (e) => {
		e.preventDefault()
    console.log('resort', _resort.value)
    console.log('date', _date.value)
    console.log('powder', _powder.value)
    console.log('backcountry', _backcountry.value)
	}

  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="resort">Report Name</label>
      <input id="resort"
        type="text"
        defaultValue={resort}
        ref={input => _resort = input}
        required />

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
