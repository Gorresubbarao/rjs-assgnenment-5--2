import {
  HomeContainer,
  HomeHeading,
  HomeDescriptionText,
  FindsJobsButton,
} from './steledComponents'
import Header from '../Header'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeHeading>Find The Job That Fits Your Life</HomeHeading>
        <HomeDescriptionText>
          Millions of people are searching for jobs salary Information Company
          Reviews.Find the job that fits your life
        </HomeDescriptionText>
        <FindsJobsButton type="button" onClick={onClickFindJobs}>
          Find Jobs
        </FindsJobsButton>
      </HomeContainer>
    </>
  )
}

export default Home
