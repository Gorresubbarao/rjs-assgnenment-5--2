import {
  FailerConatiner,
  FailerImg,
  FailerHeadingText,
  FailerText,
} from './styledComponents'

const NotFound = () => (
  <FailerConatiner>
    <FailerImg
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
      alt="not found"
    />
    <FailerHeadingText>Page Not Found</FailerHeadingText>
    <FailerText>
      We are soory, the page you requested Could not be Found.
    </FailerText>
  </FailerConatiner>
)

export default NotFound
