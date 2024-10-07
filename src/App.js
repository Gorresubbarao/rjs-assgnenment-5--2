import {Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import Job from './components/Jobs'

// These are the lists used in the application. You can move them to any component needed.



// Replace your code here
const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Job} />
    </Switch>
  )
}

export default App
