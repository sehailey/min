import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
const history = require('history').createBrowserHistory


const Yellow = () => <h1 style={{color: 'yellow'}}>Yellow</h1>
const Blue = () => <h1 style={{color: 'blue'}}>Blue</h1>
const Buttons = () => (
  <div style={{color: 'white'}}>
    <Link to="/blue"><button>To Blue</button></Link>
    <br/>
    <Link to="/yellow"><button>To Yellow</button></Link>
  </div>
)

const Routes = () => (
  <div>
    <Route path="/blue" component={Blue} />
    <Route path="/yellow" component={Yellow} />
    <Route path="/" component={Buttons} />
  </div>
)

const RouterWithBrowserHistory = withRouter(Routes)

const App = () => (
  <Router basename="/colors" history={history}>
    <RouterWithBrowserHistory/>
  </Router>
)
ReactDOM.render(<App/>, document.getElementById('app'))
