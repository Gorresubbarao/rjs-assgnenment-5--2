import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="home-container">
        <Header />
        <div className="home-intro">
          <h1 className="home-heading">Find the Job That Fits Your Life</h1>
          <p className="home-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and potential
          </p>
          <Link to="/jobs">
            <button type="button" className="home-button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home

// import {
//   HomeContainer,
//   HomeHeading,
//   HomeDescriptionText,
//   FindsJobsButton,
// } from './steledComponents'
// import Header from '../Header'

// const Home = props => {
//   const onClickFindJobs = () => {
//     const {history} = props
//     history.replace('/jobs')
//   }

//   return (
//     <>
//       <Header />
//       <HomeContainer>
//         <HomeHeading>Find The Job That Fits Your Life</HomeHeading>
//         <HomeDescriptionText>
//           Millions of people are searching for jobs salary Information Company
//           Reviews.Find the job that fits your life
//         </HomeDescriptionText>
//         <FindsJobsButton type="button" onClick={onClickFindJobs}>
//           Find Jobs
//         </FindsJobsButton>
//       </HomeContainer>
//     </>
//   )
// }

// export default Home
