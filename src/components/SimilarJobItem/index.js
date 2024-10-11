import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const item = productDetails

  return (
    <li key={item.id} className="job-item-card2">
      <div className="company-container">
        <img
          className="companyLogo"
          src={item.companyLogoUrl}
          alt="similar job company logo"
        />
        <div>
          <h1 className="company-title">{item.title}</h1>
          <div className="company-container">
            <BsFillStarFill className="star" />
            <p className="rating">{item.rating}</p>
          </div>
        </div>
      </div>
      <div className="company-info">
        <div className="company-details">
          <MdLocationOn className="location" />
          <p className="place">{item.location}</p>
          <BsBriefcaseFill className="type-icon" />
          <p className="place">{item.employmentType}</p>
        </div>
        <p className="salary">{item.packagePerAnnum}</p>
      </div>
      <hr className="line1" />
      <div>
        <h1 className="job-description">Description</h1>
        <p className="job-description-text">{item.jobDescription}</p>
      </div>
    </li>
  )
}

export default SimilarProductItem

// import {withRouter} from 'react-router-dom'

// import {
//   JobItem,
//   CompanyLogoAndJobRoleAndStarsContainer,
//   CompanyLogo,
//   JobRoleAndStarsContainer,
//   JobRole,
//   StarAndRatingConatainer,
//   StarIcon,
//   RatingCount,
//   LocationAndJobTypeConatainer,
//   LocationIconAndLocationNameConatiner,
//   LocationIcon,
//   LocationText,
//   JobIconAndJobTypeConatiner,
//   JobIcon,
//   JobType,
//   Description,
//   JobDescription,
// } from './styledComponents'

// const SimilarJobItem = props => {
//   const {jobDetailes} = props
//   const {
//     companyLogoUrl,
//     employmentType,
//     jobDescription,
//     location,
//     rating,
//     title,
//   } = jobDetailes

//   return (
//     <JobItem>
//       <CompanyLogoAndJobRoleAndStarsContainer>
//         <CompanyLogo src={companyLogoUrl} alt="similar job company logo" />
//         <JobRoleAndStarsContainer>
//           <JobRole>{title}</JobRole>
//           <StarAndRatingConatainer>
//             <StarIcon />
//             <RatingCount>{rating}</RatingCount>
//           </StarAndRatingConatainer>
//         </JobRoleAndStarsContainer>
//       </CompanyLogoAndJobRoleAndStarsContainer>
//       <Description>Description</Description>
//       <JobDescription>{jobDescription}</JobDescription>
//       <LocationAndJobTypeConatainer>
//         <LocationIconAndLocationNameConatiner>
//           <LocationIcon />
//           <LocationText>{location}</LocationText>
//         </LocationIconAndLocationNameConatiner>
//         <JobIconAndJobTypeConatiner>
//           <JobIcon />
//           <JobType>{employmentType}</JobType>
//         </JobIconAndJobTypeConatiner>
//       </LocationAndJobTypeConatainer>
//     </JobItem>
//   )
// }

// export default withRouter(SimilarJobItem)
