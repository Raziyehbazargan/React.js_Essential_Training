import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/ski-day-count'
window.React = React

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)
