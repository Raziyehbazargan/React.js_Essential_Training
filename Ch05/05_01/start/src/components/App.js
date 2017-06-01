import { Component } from 'react';
import { SkiDayList } from './ski-day-list'
import { SkiDayCount } from './ski-day-count'
import { AddDayForm } from './add-day-form'
import { Menu } from './menu'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSkiDays: [
       {
         resort: "Squaw Valley",
         date: new Date("1/2/2016"),
         powder: true,
         backcountry: false
       },
       {
         resort: "Kirkwood",
         date: new Date("3/2/2016"),
         powder: false,
         backcountry: false
       },
       {
         resort: "Mt. Tallac",
         date: new Date("4/2/2016"),
         powder: false,
         backcountry: true
       }
     ]
    }
  }

  countDays(filter) {
    //ES6
    //const { allSkiDays } = this.state; then no need this.state.allSkiDays: allSkiDays
    return this.state.allSkiDays.filter(day => (filter) ? day[filter] : day).length
  }
  render() {
    return (
      <div className="app">
      <Menu />
      {(this.props.location.pathname === "/") ?
        <SkiDayCount  total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")}/>:
        (this.props.location.pathname === "/add-days") ? <AddDayForm /> :
        <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}
