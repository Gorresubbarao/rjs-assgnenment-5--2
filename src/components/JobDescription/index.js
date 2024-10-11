// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import Loader from 'react-loader-spinner'
// import JobProfileItem from '../JobProfileItem'
// import JobCard from '../JobCard'
// import FilterGroups from '../FilterGroups'

// import {
//   JobDescriptionContainer,
//   BscSearchIcon,
//   SearchButton,
//   SearchInput,
//   FailerConatiner,
//   FailerImg,
//   FailerHeadingText,
//   FailerText,
//   JobsList,
//   RetryButton,
//   LoaderContainer,
//   JobprofileItemContainer,
//   NoProductsViewConatiner,
//   NoProductImg,
//   NoproductsHeading,
//   NoProductsParagraph,
//   SearchInputAndSearchIconMobileContainer,
//   SearchInputAndSearchIconDeskTopContainer,
// } from './styledComponents'

// const apiStatusConstant = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// class JobDescription extends Component {
//   state = {
//     jobsDataList: [],
//     apiStatus: apiStatusConstant.initial,
//     searchInputValue: '',
//     employmentTypeId: '',
//     salaryRangeId: '',
//     employmentTypesList: [],
//   }

//   componentDidMount() {
//     this.getJobsListData()
//   }

//   convertCamelCase = objet => ({
//     id: objet.id,
//     companyLogoUrl: objet.company_logo_url,
//     employmentType: objet.employment_type,
//     jobDescription: objet.job_description,
//     location: objet.location,
//     objetpackagePerAnnum: objet.package_per_annum,
//     rating: objet.rating,
//     title: objet.title,
//   })

//   getJobsListData = async () => {
//     const {searchInputValue, salaryRangeId, employmentTypesList} = this.state

//     const employmentTypes = employmentTypesList.join(',')
//     console.log(employmentTypes, 'employmentTypes ==>')

//     this.setState({
//       apiStatus: apiStatusConstant.inProgress,
//     })

//     const jwtToken = Cookies.get('jwt_token')
//     const apiUrl = `https://apis.ccbp.in/jobs?search=${searchInputValue}&employment_type=${employmentTypes}&minimum_package=${salaryRangeId}`
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: `Barer ${jwtToken}`,
//       },
//     }

//     const response = await fetch(apiUrl, options)

//     if (response.ok) {
//       const fetchedData = await response.json()

//       const updatedData = fetchedData.jobs.map(eachJob =>
//         this.convertCamelCase(eachJob),
//       )

//       this.setState({
//         jobsDataList: updatedData,
//         apiStatus: apiStatusConstant.success,
//       })
//     } else {
//       this.setState({
//         apiStatus: apiStatusConstant.failure,
//       })
//     }
//   }

//   onChangeSearchInputValue = event => {
//     this.setState({searchInputValue: event.target.value})
//   }

//   onEnterSearchInput = event => {
//     if (event.key === 'Enter') {
//       this.getJobsListData()
//     }
//   }

//   changeEmploymentType = employmentTypeId => {
//     const {employmentTypesList} = this.state
//     let updatedList = employmentTypesList

//     if (employmentTypesList.includes(employmentTypeId)) {
//       updatedList = employmentTypesList.filter(
//         each => each !== employmentTypeId,
//       )
//     } else {
//       updatedList = [...updatedList, employmentTypeId]
//     }

//     this.setState(
//       {
//         employmentTypesList: updatedList,
//       },
//       this.getJobsListData,
//     )
//   }

//   changeSalaryRange = salaryRangeId => {
//     this.setState(
//       {
//         salaryRangeId,
//       },
//       this.getJobsListData,
//     )
//   }

//   renderingSearchInputDesktop = () => {
//     const {searchInputValue} = this.state
//     return (
//       <SearchInputAndSearchIconDeskTopContainer data-testid="searchButton">
//         <SearchInput
//           type="search"
//           value={searchInputValue}
//           onChange={this.onChangeSearchInputValue}
//           onKeyDown={this.onEnterSearchInput}
//         />
//         <SearchButton>
//           <BscSearchIcon onClick={this.getJobsListData} />
//         </SearchButton>
//       </SearchInputAndSearchIconDeskTopContainer>
//     )
//   }

//   renderingSearchInputMobile = () => {
//     const {searchInputValue} = this.state
//     return (
//       <SearchInputAndSearchIconMobileContainer data-testid="searchButton">
//         <SearchInput
//           type="search"
//           value={searchInputValue}
//           onChange={this.onChangeSearchInputValue}
//           onKeyDown={this.onEnterSearchInput}
//         />
//         <SearchButton>
//           <BscSearchIcon onClick={this.getJobsListData} />
//         </SearchButton>
//       </SearchInputAndSearchIconMobileContainer>
//     )
//   }

//   showRenderFailedJobsListView = () => (
//     <FailerConatiner>
//       <FailerImg
//         src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
//         alt="failure view"
//       />
//       <FailerHeadingText>
//         Oops! Something Went Wrong We cannot seem to find the page you are
//         looking for.
//       </FailerHeadingText>
//       <FailerText>
//         We cannot seem to find the page you are looking for.
//       </FailerText>
//       <RetryButton type="button" onClick={this.getJobsListData}>
//         Retry
//       </RetryButton>
//     </FailerConatiner>
//   )

//   showRenderLodingView = () => (
//     <LoaderContainer data-testid="loader">
//       <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
//     </LoaderContainer>
//   )

//   showRenderJobsListView = () => {
//     const {jobsDataList} = this.state
//     const shouldShowProductsList = jobsDataList.length > 0

//     return shouldShowProductsList ? (
//       <JobsList>
//         {jobsDataList.map(eachJob => (
//           <JobCard key={eachJob.id} jobDeatails={eachJob} />
//         ))}
//       </JobsList>
//     ) : (
//       this.noJobsRenderView()
//     )
//   }

//   noJobsRenderView = () => (
//     <NoProductsViewConatiner>
//       <NoProductImg
//         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
//         alt="no products"
//       />
//       <NoproductsHeading>No Jobs Found</NoproductsHeading>
//       <NoProductsParagraph>
//         We could not find any Jobs. Try other filters.
//       </NoProductsParagraph>
//     </NoProductsViewConatiner>
//   )

//   showJobsListView = () => {
//     const {apiStatus} = this.state
//     switch (apiStatus) {
//       case apiStatusConstant.success:
//         return this.showRenderJobsListView()
//       case apiStatusConstant.failure:
//         return this.showRenderFailedJobsListView()
//       case apiStatusConstant.inProgress:
//         return this.showRenderLodingView()
//       default:
//         return null
//     }
//   }

//   render() {
//     const {employmentTypeId, salaryRangeId} = this.state
//     return (
//       <>
//         <JobprofileItemContainer>
//           {this.renderingSearchInputMobile()}
//           <JobProfileItem />
//           <FilterGroups
//             changeEmploymentType={this.changeEmploymentType}
//             changeSalaryRange={this.changeSalaryRange}
//             employmentTypeId={employmentTypeId}
//             salaryRangeId={salaryRangeId}
//           />
//         </JobprofileItemContainer>
//         <JobDescriptionContainer>
//           {this.renderingSearchInputDesktop()}
//           {this.showJobsListView()}
//         </JobDescriptionContainer>
//       </>
//     )
//   }
// }
// export default JobDescription
