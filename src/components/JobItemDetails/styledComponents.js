import styled from 'styled-components'

export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 30px;
  background: #000000;
`

export const JobItemResponseConatiner = styled(JobContainer)`
  background: #202020;
  margin: 50px;
  padding: 20px;
  flex-direction: column;
  border-radius: 7px;
`

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

// export const BioOfUser = styled.p`
// color:#2c364c;
// font-size:9px;
// font-family:Roboto;
// @media (min-width:768px){
//     font-size:17px;
// }
// `
export const Hrline = styled.hr`
  width: 100%;
  color: #cbd5e1;
`

export const TypeOfEmplementContainer = styled.div`
  padding: 30px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SkillHeading = styled.h1`
  dispaly: flex;
  align-self: start;
  font-size: 10px;
  font-family: Roboto;
  font-weight: bold;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const SkillsList = styled.ul`
  padding-left: 10px;
  display: flex;

  align-self: start;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding-left: 0px;
  }
`
export const LifeAtCompanyConatiner = styled(LoaderContainer)`
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LifeDescription = styled.p`
  color: #ffffff;
  font-size: 11px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 19px;
    margin-right: 10px;
  }
`

export const LifeImg = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 7px;
  @media (min-width: 768px) {
    height: 240px;
    width: 240px;
  }
`
export const SimilarJobsConatiner = styled(JobItemResponseConatiner)``

export const SimilarJobsText = styled(SkillHeading)`
  padding-left: 48px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`
export const FailerConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
export const FailerImg = styled.img`
  width: 240px;
  height: 330px;
  @media (min-width: 768px) {
    width: 440px;
    height: 430px;
    margin-bottom: 20px;
  }
`
export const FailerHeadingText = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`
export const FailerText = styled.p`
  color: #ffffff;
  font-size: 9px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

export const RetryButton = styled.button`
  background: #6366f1;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-self: center;
  margin-bottom: 20px;
`
