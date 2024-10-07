import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {IoBagCheck} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

const IconComponent = () => (
  <div>
    <BsBagFill />
  </div>
)

export default IconComponent

export const NavHeader = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:#272727;
border-bottom: 1px solid rgb(243, 243, 243);
`
export const NavContent = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1110px;
  padding-top: 25px;
  padding-bottom: 25px;
`
export const AppLogAndHeadingContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
export const AppLogoImg = styled.img`
width:40px;
height:40px;
@media (min-width:768px){
width:50px;
height:45px;
}
`

export const Heading = styled.h1`
color: #4f46e5;
font-size:20px;
font-family:Roboto;
font-weight:bold;
margin-left:20px;
@media (min-width:768px){
    font-size:35px;
}
`

export const NavbarDesctopLinks = styled.ul`
display:flex;
padding-left:none;
@media (max-width:768px){
  display:none;
}
`
export const HomeRouteLink = styled.li`
list-style-type: none;
color:#ffffff
`
export const JobsRouteLink = styled(HomeRouteLink)`
margin-left:20px;
`
export const NavbarLogoutButton = styled.button`
background: #6366f1;
border-radius:5px;
color:#ffffff;
padding:15px;
outline:none;
border:none;
cursor:pointer;
@media (max-width:768px){
  display:none;
}`

export const StyledLink = styled(Link)`
text-decoration:none;
`
export const NavbarMobleLinks = styled.div`
@media (min-width:768px){
  display:none;
}
`
export const HomeIcon = styled(GoHome)`
height:40px;
width:40px;
color:#ffffff;
`
export const JobsIcon = styled(IoBagCheck)`
margin-left:10px;
height:40px;
width:40px;
color:#ffffff;
`
export const LogOutButtonIcon = styled(FiLogOut)`
height:40px;
width:40px;
color:#ffffff;
@media (min-width:768px){
  display:none;
}
`
