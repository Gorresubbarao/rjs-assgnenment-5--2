import styled from 'styled-components'

export const JobprofileItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
  @media (min-width: 768px) {
    width: 30%;
  }
`
export const UserProfileContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 200px;
  width: 100%;
  padding: 30px;
  @media (min-width: 768px) {
    height: 300px;
  }
`
export const UserProfile = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 15px;
`
export const UserName = styled.h1`
  color: #6366f1;
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
export const BioOfUser = styled.p`
  color: #2c364c;
  font-size: 12px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const Hrline = styled.hr`
  width: 100%;
  color: #cbd5e1;
`

export const TypeOfEmplementContainer = styled.div`
  padding: 30px;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RetryButton = styled.button`
  background: #6366f1;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px;
  outline: none;
  border: none;
  cursor: pointer;
`
