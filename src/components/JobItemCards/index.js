import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobItemCards = props => {
  const {item} = props
  return (
    <Link to={`/jobs/${item.id}`} className="card-link">
      <li className="job-item-card">
        <div className="company-container">
          <img
            className="companyLogo"
            src={item.companyLogoUrl}
            alt="company logo"
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
            <p className="place">{item.employment}</p>
          </div>
          <p className="salary">{item.packagePerAnnum}</p>
        </div>
        <hr className="line1" />
        <div>
          <h1 className="job-description">Description</h1>
          <p className="job-description-text">{item.jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobItemCards

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
//   HrLine,
//   LocationAndsalaryAndJobTypeContainer,
//   LocationAndJobTypeConatainer,
//   LocationIconAndLocationNameConatiner,
//   LocationIcon,
//   LocationText,
//   JobIconAndJobTypeConatiner,
//   JobIcon,
//   JobType,
//   Salary,
//   Description,
//   JobDescription,
//   StyledLink,
// } from './styledComponents'

// const JobCard = props => {
//   // console.log(props, 'props===>')
//   const {jobDeatails} = props
//   const {
//     id,
//     companyLogoUrl,
//     employmentType,
//     jobDescription,
//     location,
//     objetpackagePerAnnum,
//     rating,
//     title,
//   } = jobDeatails

//   return (
//     <JobItem>
//       <StyledLink to={`/jobs/${id}`}>
//         <CompanyLogoAndJobRoleAndStarsContainer>
//           <CompanyLogo src={companyLogoUrl} alt="company logo" />
//           <JobRoleAndStarsContainer>
//             <JobRole>{title}</JobRole>
//             <StarAndRatingConatainer>
//               <StarIcon />
//               <RatingCount>{rating}</RatingCount>
//             </StarAndRatingConatainer>
//           </JobRoleAndStarsContainer>
//         </CompanyLogoAndJobRoleAndStarsContainer>
//         <LocationAndsalaryAndJobTypeContainer>
//           <LocationAndJobTypeConatainer>
//             <LocationIconAndLocationNameConatiner>
//               <LocationIcon />
//               <LocationText>{location}</LocationText>
//             </LocationIconAndLocationNameConatiner>
//             <JobIconAndJobTypeConatiner>
//               <JobIcon />
//               <JobType>{employmentType}</JobType>
//             </JobIconAndJobTypeConatiner>
//           </LocationAndJobTypeConatainer>
//           <Salary>{objetpackagePerAnnum}</Salary>
//         </LocationAndsalaryAndJobTypeContainer>
//         <HrLine />
//         <Description>Description</Description>
//         <JobDescription>{jobDescription}</JobDescription>
//       </StyledLink>
//     </JobItem>
//   )
// }

// export default withRouter(JobCard)
