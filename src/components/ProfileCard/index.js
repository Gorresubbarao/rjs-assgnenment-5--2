import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class ProfileCard extends Component {
  state = {
    profileData: {},
    apiStatus: apiStatusConstants.initial,
    selectedBoxes: [],
  }

  componentDidMount() {
    this.getProfile()
  }

  selectedCheckBox = id => {
    this.setState(prev => ({
      selectedBoxes: [...prev.selectedBoxes, id],
    }))
  }

  getProfile = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/profile', options)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = {
        name: data.profile_details.name,
        imageUrl: data.profile_details.profile_image_url,
        bio: data.profile_details.short_bio,
      }
      this.setState({
        profileData: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderProfile = () => {
    const {profileData} = this.state
    return (
      <div className="filter-section">
        <img
          src={profileData.imageUrl}
          className="profile-image"
          alt="profile"
        />
        <h1 className="profile-username">{profileData.name}</h1>
        <p className="profile-bio">{profileData.bio}</p>
      </div>
    )
  }

  renderProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="loader-container">
      <button type="button" className="logout-btn" onClick={this.getProfile}>
        Retry
      </button>
    </div>
  )

  renderProfileDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfile()
      case apiStatusConstants.inProgress:
        return this.renderProgressView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return <>{this.renderProfileDetails()}</>
  }
}

export default ProfileCard

// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import Loader from 'react-loader-spinner'

// import {
//   UserProfileContainer,
//   UserProfile,
//   UserName,
//   BioOfUser,
//   Hrline,
//   LoaderContainer,
//   RetryButton,
// } from './styledComponents'

// const apiStatusConstant = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// class JobprofileItem extends Component {
//   state = {
//     userProfileData: {},
//     apiStatus: apiStatusConstant.inProgress,
//   }

//   componentDidMount() {
//     this.getUserProfileData()
//   }

//   getUserProfileData = async () => {
//     this.setState({
//       apiStatus: apiStatusConstant.inProgress,
//     })

//     const jwtToken = Cookies.get('jwt_token')
//     const apiUrl = 'https://apis.ccbp.in/profile'
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: `Barer ${jwtToken}`,
//       },
//     }

//     const response = await fetch(apiUrl, options)

//     if (response.ok) {
//       const fetchedData = await response.json()

//       const updatedData = {
//         profileImgUrl: fetchedData.profile_details.profile_image_url,
//         name: fetchedData.profile_details.name,
//         shortBio: fetchedData.profile_details.short_bio,
//       }

//       this.setState({
//         userProfileData: updatedData,
//         apiStatus: apiStatusConstant.success,
//       })
//     } else {
//       this.setState({
//         apiStatus: apiStatusConstant.failure,
//       })
//     }
//   }

//   userProfileView = () => {
//     const {userProfileData} = this.state
//     console.log('userProfileData', userProfileData)
//     const {profileImgUrl, name, shortBio} = userProfileData
//     return (
//       <UserProfileContainer>
//         <UserProfile src={profileImgUrl} alt="profile" />
//         <UserName>{name}</UserName>
//         <BioOfUser>{shortBio}</BioOfUser>
//       </UserProfileContainer>
//     )
//   }

//   showRenderLodingView = () => (
//     <LoaderContainer data-testid="loader">
//       <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
//     </LoaderContainer>
//   )

//   showRenderFailedProfileView = () => (
//     <RetryButton type="button" onClick={this.getUserProfileData}>
//       Retry
//     </RetryButton>
//   )

//   showProfileStatusView = () => {
//     const {apiStatus} = this.state

//     switch (apiStatus) {
//       case apiStatusConstant.success:
//         return this.userProfileView()

//       case apiStatusConstant.failure:
//         return this.showRenderFailedProfileView()

//       case apiStatusConstant.inProgress:
//         return this.showRenderLodingView()

//       default:
//         return null
//     }
//   }

//   render() {
//     return (
//       <>
//         {this.showProfileStatusView()}
//         <Hrline />
//       </>
//     )
//   }
// }

// export default JobprofileItem
