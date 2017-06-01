import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/ski-day-list'
// import { SkiDayCount } from './components/SkiDayCount-createClass'
// import { SkiDayCount } from './components/SkiDayCount-ES6'
//import { SkiDayCount } from './components/SkiDayCount'
import { App } from './components/app'

window.React = React

// render(
// 	<SkiDayCount />,
// 	document.getElementById('react-container')
// )

render(
	<App />,
	document.getElementById('react-container')
)
