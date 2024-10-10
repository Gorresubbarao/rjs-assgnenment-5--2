import {withRouter} from 'react-router-dom'
import {
  JobItem,
  CompanyLogoAndJobRoleAndStarsContainer,
  CompanyLogo,
  JobRoleAndStarsContainer,
  JobRole,
  StarAndRatingConatainer,
  StarIcon,
  RatingCount,
  HrLine,
  LocationAndsalaryAndJobTypeContainer,
  LocationAndJobTypeConatainer,
  LocationIconAndLocationNameConatiner,
  LocationIcon,
  LocationText,
  JobIconAndJobTypeConatiner,
  JobIcon,
  JobType,
  Salary,
  Description,
  JobDescription,
  StyledLink,
} from './styledComponents'

const JobCard = props => {
  // console.log(props, 'props===>')
  const {jobDeatails} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    objetpackagePerAnnum,
    rating,
    title,
  } = jobDeatails

  return (
    <JobItem>
      <StyledLink to={`/jobs/${id}`}>
        <CompanyLogoAndJobRoleAndStarsContainer>
          <CompanyLogo src={companyLogoUrl} alt="company logo" />
          <JobRoleAndStarsContainer>
            <JobRole>{title}</JobRole>
            <StarAndRatingConatainer>
              <StarIcon />
              <RatingCount>{rating}</RatingCount>
            </StarAndRatingConatainer>
          </JobRoleAndStarsContainer>
        </CompanyLogoAndJobRoleAndStarsContainer>
        <LocationAndsalaryAndJobTypeContainer>
          <LocationAndJobTypeConatainer>
            <LocationIconAndLocationNameConatiner>
              <LocationIcon />
              <LocationText>{location}</LocationText>
            </LocationIconAndLocationNameConatiner>
            <JobIconAndJobTypeConatiner>
              <JobIcon />
              <JobType>{employmentType}</JobType>
            </JobIconAndJobTypeConatiner>
          </LocationAndJobTypeConatainer>
          <Salary>{objetpackagePerAnnum}</Salary>
        </LocationAndsalaryAndJobTypeContainer>
        <HrLine />
        <Description>Description</Description>
        <JobDescription>{jobDescription}</JobDescription>
      </StyledLink>
    </JobItem>
  )
}

export default withRouter(JobCard)
