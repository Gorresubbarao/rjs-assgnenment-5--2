import {SkillItem, CompanyLogo, CompanyName} from './styledComponents'

const Skilldata = props => {
  const {skillDetailes} = props
  const {imgUrl, name} = skillDetailes

  return (
    <SkillItem>
      <CompanyLogo src={imgUrl} alt="Company Logo" />
      <CompanyName>{name}</CompanyName>
    </SkillItem>
  )
}

export default Skilldata
