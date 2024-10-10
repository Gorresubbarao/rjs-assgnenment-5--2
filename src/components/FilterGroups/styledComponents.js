import styled from 'styled-components'

export const HeadingOfTypeOfEmployment = styled.h1`
  color: #ffffff;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const EmploymentTypeList = styled.ul`
  padding-left: 0px;
`
export const CheckBoxAndEmploymentContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  list-style-type: none;
`
export const CheckBoxInput = styled.input`
  margin-right: 10px;
`

export const LabelTextOfEmploymentType = styled.label`
  color: #2c364c;
  font-size: 12px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const FilterGroupContainer = styled.div`
  width: 100%;
`
