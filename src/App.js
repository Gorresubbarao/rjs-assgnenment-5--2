import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import Job from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Job} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <NotFound path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
