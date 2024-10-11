import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1>Page Not Found</h1>
    <p>we're sorry, the page you requested could not be found</p>
  </div>
)

export default NotFound

// import {
//   FailerConatiner,
//   FailerImg,
//   FailerHeadingText,
//   FailerText,
// } from './styledComponents'

// const NotFound = () => (
//   <FailerConatiner>
//     <FailerImg
//       src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
//       alt="not found"
//     />
//     <FailerHeadingText>Page Not Found</FailerHeadingText>
//     <FailerText>
//       We are soory, the page you requested Could not be Found.
//     </FailerText>
//   </FailerConatiner>
// )

// export default NotFound
