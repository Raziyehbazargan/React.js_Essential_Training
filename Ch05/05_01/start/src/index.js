import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/whoops-404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

 // History listen to  browser address bar for any changes
 render(
 	<Router history={hashHistory}>
 		<Route path="/" component={App} />
		<Route path="list-days" component={App} />
    <Route path="add-days" component={App} />
 		<Route path="*" component={Whoops404} />
 	</Router>,
 	document.getElementById('react-container')
 )
