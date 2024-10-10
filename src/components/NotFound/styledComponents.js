import styled from 'styled-components'

export const FailerConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #272727;
  min-height: 100vh;
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
