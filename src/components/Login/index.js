import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    submitStatus: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  showSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 20,
    })
    const {history} = this.props
    history.replace('/')
  }

  onClickLogin = async errorMsg => {
    errorMsg.preventDefault()
    const {username, password} = this.state
    const loginDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.showSuccess(data.jwt_token)
    } else {
      this.showFailureText(data.error_msg)
    }
  }

  showFailureText = error => {
    this.setState({
      submitStatus: true,
      errorMsg: error,
    })
  }

  render() {
    const {errorMsg, submitStatus} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <form className="form-container" onSubmit={this.onClickLogin}>
            <label htmlFor="username" className="input-label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="input-container"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="input-container"
              onChange={this.onChangePassword}
            />
            <button className="login-button" type="submit">
              Login
            </button>
            {submitStatus && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login

// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

// import {
//   LoginFormContainer,
//   ResponseContainer,
//   AppLogAndHeadingContainer,
//   AppLogoImg,
//   Heading,
//   FormContainer,
//   Label,
//   InputElement,
//   LoginButton,
//   ErrorText,
// } from './steledComponents'

// class Login extends Component {
//   state = {
//     username: '',
//     password: '',
//     errorMessage: '',
//     isShowError: false,
//   }

//   onChangeInputUsername = event => {
//     this.setState({
//       username: event.target.value,
//     })
//   }

//   onChangeInputPassword = event => {
//     this.setState({
//       password: event.target.value,
//     })
//   }

//   setJwtTokenAndRenderHomeRoute = jwtToken => {
//     const {history} = this.props

//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     history.replace('/')
//   }

//   showErrorMessage = errorMessage => {
//     this.setState({
//       errorMessage,
//       isShowError: true,
//     })
//   }

//   onSubmitForm = async event => {
//     event.preventDefault()

//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const logInApiUrl = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }

//     const response = await fetch(logInApiUrl, options)
//     console.log('response', response)
//     const fetchedData = await response.json()

//     if (response.ok) {
//       this.setJwtTokenAndRenderHomeRoute(fetchedData.jwt_token)
//     } else {
//       this.showErrorMessage(fetchedData.error_msg)
//     }
//   }

//   formContainer = () => {
//     const {errorMessage, username, password, isShowError} = this.state
//     return (
//       <FormContainer onSubmit={this.onSubmitForm}>
//         <Label htmlFor="username">USERNAME</Label>
//         <InputElement
//           id="username"
//           onChange={this.onChangeInputUsername}
//           placeholder="Username"
//           value={username}
//           type="text"
//         />
//         <Label htmlFor="password">PASSWORD</Label>
//         <InputElement
//           id="password"
//           onChange={this.onChangeInputPassword}
//           placeholder="Password"
//           value={password}
//           type="password"
//         />
//         <LoginButton type="submit">Login</LoginButton>
//         {isShowError ? <ErrorText>{errorMessage}</ErrorText> : ''}
//       </FormContainer>
//     )
//   }

//   render() {
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken !== undefined) {
//       return <Redirect to="/" />
//     }
//     return (
//       <LoginFormContainer>
//         <ResponseContainer>
//           <AppLogAndHeadingContainer>
//             <AppLogoImg
//               src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//               alt="website logo"
//             />
//             <Heading>Jobby</Heading>
//           </AppLogAndHeadingContainer>
//           {this.formContainer()}
//         </ResponseContainer>
//       </LoginFormContainer>
//     )
//   }
// }

// export default Login
