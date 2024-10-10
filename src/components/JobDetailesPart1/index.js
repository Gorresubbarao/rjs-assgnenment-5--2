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
  DescriptionAndLinkConatiner,
  ArrowIcon,
  DescriptionLink,
} from './styledComponents'

const JobDetailespart1 = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    companyWebsiteUrl,
  } = jobData

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
        <Salary>{packagePerAnnum}</Salary>
      </LocationAndsalaryAndJobTypeContainer>
      <HrLine />
      <DescriptionAndLinkConatiner>
        <Description>Description</Description>
        <DescriptionLink href={companyWebsiteUrl} target="_blank">
          Visit <ArrowIcon />
        </DescriptionLink>
      </DescriptionAndLinkConatiner>
      <JobDescription>{jobDescription}</JobDescription>
    </JobItem>
  )
}

export default withRouter(JobDetailespart1)
