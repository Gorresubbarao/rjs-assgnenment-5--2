import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <ul className="header-container">
        <Link to="/" className="page-link">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="header-logo"
            />
          </li>
        </Link>

        <div className="pages">
          <Link to="/" className="page-links">
            <li>
              <p className="page-name">Home</p>
            </li>
          </Link>
          <Link to="/jobs" className="page-links">
            <li>
              <p className="page-name">Jobs</p>
            </li>
          </Link>
        </div>
        <button type="button" className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </ul>
    </>
  )
}

export default withRouter(Header)

// import {withRouter} from 'react-router-dom'
// import Cookies from 'js-cookie'

// import {
//   NavHeader,
//   NavContent,
//   AppLogAndHeadingContainer,
//   AppLogoImg,
//   Heading,
//   NavbarDesctopLinks,
//   HomeRouteLink,
//   JobsRouteLink,
//   NavbarLogoutButton,
//   StyledLink,
//   NavbarMobleLinks,
//   HomeIcon,
//   JobsIcon,
//   LogOutButtonIcon,
// } from './styledComponents'

// const Header = props => {
//   const onClickLogOut = () => {
//     const {history} = props
//     Cookies.remove('jwt_token')
//     history.replace('/login')
//   }

//   return (
//     <NavHeader>
//       <NavContent>
//         <AppLogAndHeadingContainer>
//           <StyledLink to="/">
//             <AppLogoImg
//               src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//               alt="website logo"
//             />
//           </StyledLink>

//           <Heading>Jobby</Heading>
//         </AppLogAndHeadingContainer>
//         <NavbarMobleLinks>
//           <StyledLink to="/">
//             <HomeIcon />
//           </StyledLink>
//           <StyledLink to="/jobs">
//             <JobsIcon />
//           </StyledLink>
//         </NavbarMobleLinks>
//         <NavbarDesctopLinks>
//           <StyledLink to="/">
//             <HomeRouteLink>Home</HomeRouteLink>
//           </StyledLink>
//           <StyledLink to="/jobs">
//             <JobsRouteLink>Jobs</JobsRouteLink>
//           </StyledLink>
//         </NavbarDesctopLinks>
//         <LogOutButtonIcon onClick={onClickLogOut} />
//         <NavbarLogoutButton onClick={onClickLogOut}>Logout</NavbarLogoutButton>
//       </NavContent>
//     </NavHeader>
//   )
// }

// export default withRouter(Header)
