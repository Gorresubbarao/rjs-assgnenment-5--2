import {Component} from 'react'
import JobItemDetailsCards from '../JobItemDetailsCards'
import './index.css'
import Header from '../Header'

class Jobs extends Component {
  render() {
    const {salaryRangesList, employmentTypesList} = this.props

    return (
      <div className="Job-container">
        <Header />
        <div className="job-details-container">
          <JobItemDetailsCards
            salaryRangesList={salaryRangesList}
            employmentTypesList={employmentTypesList}
            renderProfileDetail={this.renderProfileDetails}
          />
        </div>
      </div>
    )
  }
}

export default Jobs

// import JobContainer from './styledComponent'
// import JobDescription from '../JobDescription'
// import Header from '../Header'

// const Jobs = () => (
//   <>
//     <Header />
//     <JobContainer>
//       <JobDescription />
//     </JobContainer>
//   </>
// )

// export default Jobs
