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
  LocationAndJobTypeConatainer,
  LocationIconAndLocationNameConatiner,
  LocationIcon,
  LocationText,
  JobIconAndJobTypeConatiner,
  JobIcon,
  JobType,
  Description,
  JobDescription,
} from './styledComponents'

const SimilarJobItem = props => {
  const {jobDetailes} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetailes

  return (
    <JobItem>
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
      <Description>Description</Description>
      <JobDescription>{jobDescription}</JobDescription>
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
    </JobItem>
  )
}

export default withRouter(SimilarJobItem)
