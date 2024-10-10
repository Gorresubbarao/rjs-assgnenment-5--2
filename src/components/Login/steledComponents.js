import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  border-radius: 10px;
  width: 230px;
  height: 240px;
  padding: 40px;
  @media screen and (min-width: 768px) {
    width: 430px;
    height: 440px;
  }
`

export const AppLogAndHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AppLogoImg = styled.img`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 50px;
    height: 45px;
  }
`

export const Heading = styled.h1`
  color: #4f46e5;
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  margin-left: 10px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Label = styled.label`
  text-align: left;
  color: #ffffff;
  font-size: 8px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const InputElement = styled.input`
  border-radius: 6px;
  background: transfarent;
  outline: none;
  cursor: pointer;
  border: 1px solid #f8fafc;
  height: 40px;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  background: #6366f1;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px;
  outline: none;
  border: none;
  cursor: pointer;
`
export const ErrorText = styled.p`
  color: red;
  font-size: 8px;
  font-family: Roboto;
  margin: 0px;
  padding: 0px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
