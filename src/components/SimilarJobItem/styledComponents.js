import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcase} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'

export const JobItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  list-style-type: none;
  background: #202020;
  margin-bottom: 20px;
  margin-left: 48px;
  margin-right: 20px;
  @media (min-width: 768px) {
    width: 30%;
  }
`
export const CompanyLogoAndJobRoleAndStarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`
export const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`
export const JobRoleAndStarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`
export const JobRole = styled.h1`
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 0px;
  padding-bottom: 0px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
export const StarAndRatingConatainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  padding-bottom: 0px;
`
export const StarIcon = styled(FaStar)`
  width: 20px;
  height: 20px;
  color: #fbbf24;
  padding-top: 10px;
`
export const RatingCount = styled.p`
  color: #ffffff;
  font-size: 8px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-bottom: 0px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const HrLine = styled.hr`
  width: 100%;
  color: #cbd5e1;
`
export const LocationAndsalaryAndJobTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LocationAndJobTypeConatainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LocationIconAndLocationNameConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LocationIcon = styled(MdLocationOn)`
  width: 20px;
  height: 20px;
  color: #ffffff;
  marging-right: 10px;
`
export const LocationText = styled(RatingCount)`
  font-size: 8px;
`

export const JobIconAndJobTypeConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`
export const JobIcon = styled(BsBriefcase)`
  width: 20px;
  height: 20px;
  color: #ffffff;
  margin-right: 10px;
`
export const JobType = styled(LocationText)``

export const Salary = styled(LocationText)`
  font-size: 9px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const Description = styled(JobRole)`
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 23px;
  }
`
export const JobDescription = styled(LocationText)``

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const DescriptionAndLinkConatiner = styled(
  LocationAndsalaryAndJobTypeContainer,
)``

export const DescriptionLink = styled.a`
  text-decoration: none;
  color: #6366f1;
`
export const ArrowIcon = styled(FiExternalLink)`
  width: 20px;
  height: 20px;
  color: #6366f1;
  marging-left: 10px;
`
