import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  ResponseContainer,
  AppLogAndHeadingContainer,
  AppLogoImg,
  Heading,
  FormContainer,
  Label,
  InputElement,
  LoginButton,
  ErrorText,
} from './steledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    isShowError: false,
  }

  onChangeInputUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeInputPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  setJwtTokenAndRenderHomeRoute = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  showErrorMessage = errorMessage => {
    this.setState({
      errorMessage,
      isShowError: true,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const logInApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(logInApiUrl, options)
    console.log('response', response)
    const fetchedData = await response.json()

    if (response.ok) {
      this.setJwtTokenAndRenderHomeRoute(fetchedData.jwt_token)
    } else {
      this.showErrorMessage(fetchedData.error_msg)
    }
  }

  formContainer = () => {
    const {errorMessage, username, password} = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <Label htmlFor="username">USERNAME</Label>
        <InputElement
          id="username"
          onChange={this.onChangeInputUsername}
          placeholder="Username"
          value={username}
          type="text"
        />
        <Label htmlFor="password">PASSWORD</Label>
        <InputElement
          id="password"
          onChange={this.onChangeInputPassword}
          placeholder="Password"
          value={password}
          type="password"
        />
        <LoginButton type="submit">Login</LoginButton>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : ''}
      </FormContainer>
    )
  }

  render() {
    return (
      <LoginFormContainer>
        <ResponseContainer>
          <AppLogAndHeadingContainer>
            <AppLogoImg
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
            <Heading>Jobby</Heading>
          </AppLogAndHeadingContainer>
          {this.formContainer()}
        </ResponseContainer>
      </LoginFormContainer>
    )
  }
}

export default Login
