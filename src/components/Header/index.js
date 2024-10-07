import {withRouter} from 'react-router-dom'

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

const Header = () => (
  <NavHeader>
    <NavContent>
      <AppLogAndHeadingContainer>
        <AppLogoImg
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
        <Heading>Jobby</Heading>
      </AppLogAndHeadingContainer>
      <NavbarMobleLinks>
        <StyledLink to="/login">
          <HomeIcon />
        </StyledLink>
        <StyledLink to="/login">
          <JobsIcon />
        </StyledLink>
      </NavbarMobleLinks>
      <NavbarDesctopLinks>
        <StyledLink to="/">
          <HomeRouteLink>Home</HomeRouteLink>
        </StyledLink>
        <StyledLink to="/login">
          <JobsRouteLink>Jobs</JobsRouteLink>
        </StyledLink>
      </NavbarDesctopLinks>
      <LogOutButtonIcon />
      <NavbarLogoutButton>Logout</NavbarLogoutButton>
    </NavContent>
  </NavHeader>
)

export default withRouter(Header)
