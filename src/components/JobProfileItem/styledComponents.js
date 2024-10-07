import styled from 'styled-components'

export const JobprofileItemContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
flex-shrink: 0; 
@media (min-width:768px){
    width:30%;
}
`

export const UserProfileContainer = styled.div`
background-image: url("https://assets.ccbp.in/frontend/react-js/profile-bg.png");
background-size:cover;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
height:290px;
width:350px;
padding:30px;
@media (min-width:768px){
height:340px;
width:450px;
}
`
export const UserProfile = styled.img`
height:40px;
width:40px;
margin-bottom:15px;
`
export const UserName = styled.h1`
color:#6366f1;
font-size:20px;
font-family:Roboto;
font-weight:bold;
@media (min-width:768px){
    font-size:30px;
}
`
export const BioOfUser = styled.p`
color:#2c364c;
font-size:12px;
font-family:Roboto;
@media (min-width:768px){
    font-size:20px;
}
`
