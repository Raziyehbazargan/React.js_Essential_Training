const { createElement } = React
const { render } = ReactDOM

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'

}
const title = createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)

render(
  title,
  document.getElementById('react-container')
)
