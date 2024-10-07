import styled from 'styled-components'

export const HomeContainer = styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
min-height:100vh;
background-size:cover;

padding:50px;
padding-top:0px;
background-image: url("https://assets.ccbp.in/frontend/react-js/home-sm-bg.png");
@media (min-width:768px){
   background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"); 
}
`

export const HomeHeading = styled.h1`
color :#ffffff;
font-size:30px;
font-family:Roboto;
font-weight:900;

@media (min-width:768px){
    font-size:50px;
}
`
export const HomeDescriptionText = styled.p`
color :#ffffff;
font-size:14px;
font-family:Roboto;
@media (min-width:768px){
    font-size:26px;
}
`

export const FindsJobsButton = styled.button`
background: #6366f1;
border-radius:5px;
color:#ffffff;
padding:15px;
outline:none;
border:none;
cursor:pointer;
`
