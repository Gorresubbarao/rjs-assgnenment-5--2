import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  NavHeader,
  NavContent,
  AppLogAndHeadingContainer,
  AppLogoImg,
  Heading,
  NavbarDesctopLinks,
  HomeRouteLink,
  JobsRouteLink,
  NavbarLogoutButton,
  StyledLink,
  NavbarMobleLinks,
  HomeIcon,
  JobsIcon,
  LogOutButtonIcon,
} from './styledComponents'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavHeader>
      <NavContent>
        <AppLogAndHeadingContainer>
          <StyledLink to="/">
            <AppLogoImg
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </StyledLink>

          <Heading>Jobby</Heading>
        </AppLogAndHeadingContainer>
        <NavbarMobleLinks>
          <StyledLink to="/">
            <HomeIcon />
          </StyledLink>
          <StyledLink to="/jobs">
            <JobsIcon />
          </StyledLink>
        </NavbarMobleLinks>
        <NavbarDesctopLinks>
          <StyledLink to="/">
            <HomeRouteLink>Home</HomeRouteLink>
          </StyledLink>
          <StyledLink to="/jobs">
            <JobsRouteLink>Jobs</JobsRouteLink>
          </StyledLink>
        </NavbarDesctopLinks>
        <LogOutButtonIcon onClick={onClickLogOut} />
        <NavbarLogoutButton onClick={onClickLogOut}>Logout</NavbarLogoutButton>
      </NavContent>
    </NavHeader>
  )
}

export default withRouter(Header)
