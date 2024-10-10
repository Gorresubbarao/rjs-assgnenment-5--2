import styled from 'styled-components'

export const SkillItem = styled.li`
  list-style-type: none;
  width: 25%;
  margin-right: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const CompanyLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`
export const CompanyName = styled.p`
  color: #ffffff;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
