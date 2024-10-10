import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  UserProfileContainer,
  UserProfile,
  UserName,
  BioOfUser,
  Hrline,
  LoaderContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobprofileItem extends Component {
  state = {
    userProfileData: {},
    apiStatus: apiStatusConstant.inProgress,
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Barer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        profileImgUrl: fetchedData.profile_details.profile_image_url,
        name: fetchedData.profile_details.name,
        shortBio: fetchedData.profile_details.short_bio,
      }

      this.setState({
        userProfileData: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  userProfileView = () => {
    const {userProfileData} = this.state
    console.log('userProfileData', userProfileData)
    const {profileImgUrl, name, shortBio} = userProfileData
    return (
      <UserProfileContainer>
        <UserProfile src={profileImgUrl} alt="profile" />
        <UserName>{name}</UserName>
        <BioOfUser>{shortBio}</BioOfUser>
      </UserProfileContainer>
    )
  }

  showRenderLodingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  showRenderFailedProfileView = () => (
    <RetryButton type="button" onClick={this.getUserProfileData}>
      Retry
    </RetryButton>
  )

  showProfileStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.userProfileView()

      case apiStatusConstant.failure:
        return this.showRenderFailedProfileView()

      case apiStatusConstant.inProgress:
        return this.showRenderLodingView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        {this.showProfileStatusView()}
        <Hrline />
      </>
    )
  }
}

export default JobprofileItem
