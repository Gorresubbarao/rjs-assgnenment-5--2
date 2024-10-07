const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]
import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  JobprofileItemContainer,
  UserProfileContainer,
  UserProfile,
  UserName,
  BioOfUser,
} from './styledComponents'

class JobprofileItem extends Component {
  state = {
    userProfileData: {},
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
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
      // console.log('fetcheddata', fetchedData)
      const updatedData = {
        profileImgUrl: fetchedData.profile_details.profile_image_url,
        name: fetchedData.profile_details.name,
        shortBio: fetchedData.profile_details.short_bio,
      }

      this.setState({
        userProfileData: updatedData,
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

  render() {
    return (
      <JobprofileItemContainer>
        {this.userProfileView()}
      </JobprofileItemContainer>
    )
  }
}

export default JobprofileItem
