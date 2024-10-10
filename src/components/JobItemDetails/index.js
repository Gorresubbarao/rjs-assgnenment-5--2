import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import JobDetailesPart1 from '../JobDetailesPart1'
import Header from '../Header'
import SkillData from '../SkillData'
import SimilarJobItem from '../SimilarJobItem'

import {
  LoaderContainer,
  RetryButton,
  JobContainer,
  JobItemResponseConatiner,
  SkillHeading,
  LifeAtCompanyConatiner,
  LifeDescription,
  LifeImg,
  SkillsList,
  FailerConatiner,
  FailerImg,
  FailerHeadingText,
  FailerText,
  SimilarJobsText,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobData: {},
    lifeAtCompanyData: {},
    skillsData: [],
    similarJobs: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getJobData()
  }

  convertCamelCase = objet => ({
    id: objet.id,
    companyLogoUrl: objet.company_logo_url,
    companyWebsiteUrl: objet.company_website_url,
    employmentType: objet.employment_type,
    jobDescription: objet.job_description,
    location: objet.location,
    packagePerAnnum: objet.package_per_annum,
    rating: objet.rating,
    title: objet.title,
    imgUrl: objet.image_url,
    name: objet.name,
  })

  getJobData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Barer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = this.convertCamelCase(fetchedData.job_details)

      const updatedLifeAtCompanyData = {
        description: fetchedData.job_details.life_at_company.description,
        imgUrl: fetchedData.job_details.life_at_company.image_url,
      }

      const updatedSkillsData = fetchedData.job_details.skills.map(each =>
        this.convertCamelCase(each),
      )

      const updatedSimilarJobs = fetchedData.similar_jobs.map(each =>
        this.convertCamelCase(each),
      )

      this.setState({
        jobData: updatedData,
        lifeAtCompanyData: updatedLifeAtCompanyData,
        skillsData: updatedSkillsData,
        similarJobs: updatedSimilarJobs,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  showRenderLodingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  showRenderFailedJobItemView = () => (
    <FailerConatiner>
      <FailerImg
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <FailerHeadingText>
        Oops! Something Went Wrong We cannot seem to find the page you are
        looking for.
      </FailerHeadingText>
      <FailerText>
        We cannot seem to find the page you are looking for.
      </FailerText>
      <RetryButton type="button" onClick={this.getJobData}>
        Retry
      </RetryButton>
    </FailerConatiner>
  )

  skillsDataView = () => {
    const {skillsData} = this.state

    return (
      <SkillsList>
        {skillsData.map(eachSkill => (
          <SkillData key={eachSkill.name} skillDetailes={eachSkill} />
        ))}
      </SkillsList>
    )
  }

  lifeAtCompanyView = () => {
    const {lifeAtCompanyData} = this.state
    const {imgUrl, description} = lifeAtCompanyData
    return (
      <LifeAtCompanyConatiner>
        <LifeDescription>{description}</LifeDescription>
        <LifeImg src={imgUrl} alt="life at company" />
      </LifeAtCompanyConatiner>
    )
  }

  renderingSimilarJobItems = () => {
    const {similarJobs} = this.state

    return (
      <SkillsList>
        {similarJobs.map(eachJob => (
          <SimilarJobItem key={eachJob.id} jobDetailes={eachJob} />
        ))}
      </SkillsList>
    )
  }

  renderingJobItemDeatails = () => {
    const {jobData} = this.state

    return (
      <>
        <JobItemResponseConatiner>
          <JobDetailesPart1 jobData={jobData} />
          <SkillHeading>Skills</SkillHeading>
          {this.skillsDataView()}
          <SkillHeading>Life at Company</SkillHeading>
          {this.lifeAtCompanyView()}
        </JobItemResponseConatiner>
        <SimilarJobsText>Similar Jobs</SimilarJobsText>
        {this.renderingSimilarJobItems()}
      </>
    )
  }

  showJobItemStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderingJobItemDeatails()

      case apiStatusConstant.failure:
        return this.showRenderFailedJobItemView()

      case apiStatusConstant.inProgress:
        return this.showRenderLodingView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <JobContainer>{this.showJobItemStatusView()}</JobContainer>
      </>
    )
  }
}

export default JobItemDetails
