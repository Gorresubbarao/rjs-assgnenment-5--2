import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute
      exact
      path="/jobs"
      render={() => (
        <Jobs
          employmentTypesList={employmentTypesList}
          salaryRangesList={salaryRangesList}
        />
      )}
    />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App

// import {Switch, Route, Redirect} from 'react-router-dom'

// import './App.css'

// import Login from './components/Login'
// import Home from './components/Home'
// import Job from './components/Jobs'
// import JobItemDetails from './components/JobItemDetails'
// import ProtectedRoute from './components/ProtectedRoute'
// import NotFound from './components/NotFound'

// // These are the lists used in the application. You can move them to any component needed.

// // Replace your code here
// const App = () => (
//   <Switch>
//     <Route exact path="/login" component={Login} />
//     <ProtectedRoute exact path="/" component={Home} />
//     <ProtectedRoute exact path="/jobs" component={Job} />
//     <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
//     <NotFound path="/not-found" component={NotFound} />
//     <Redirect to="/not-found" />
//   </Switch>
// )

// export default App
