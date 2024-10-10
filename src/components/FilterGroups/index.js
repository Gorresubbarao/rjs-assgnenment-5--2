// These are the lists used in the application. You can move them to any component needed.

import {
  FilterGroupContainer,
  HeadingOfTypeOfEmployment,
  EmploymentTypeList,
  CheckBoxAndEmploymentContainer,
  CheckBoxInput,
  LabelTextOfEmploymentType,
} from './styledComponents'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FiterGroups = props => {
  const {
    changeEmploymentType,
    changeSalaryRange,

    salaryRangeId,
  } = props

  const renderingTypeOfEmployment = () =>
    employmentTypesList.map(eachType => {
      const onChangeFilterType = () => {
        changeEmploymentType(eachType.employmentTypeId)
      }

      return (
        <CheckBoxAndEmploymentContainer key={eachType.employmentTypeId}>
          <CheckBoxInput
            type="checkbox"
            id="fulltime"
            onChange={onChangeFilterType}
          />
          <LabelTextOfEmploymentType htmlFor="fulltime">
            {eachType.label}
          </LabelTextOfEmploymentType>
        </CheckBoxAndEmploymentContainer>
      )
    })

  const renderingSalaryView = () =>
    salaryRangesList.map(eachType => {
      const onChangeFilterType = () => {
        changeSalaryRange(eachType.salaryRangeId)
      }

      const isChecked = salaryRangeId === eachType.salaryRangeId

      return (
        <CheckBoxAndEmploymentContainer key={eachType.salaryRangeId}>
          <CheckBoxInput
            type="radio"
            name="salary ranges"
            id="fulltime"
            checked={isChecked}
            onChange={onChangeFilterType}
          />
          <LabelTextOfEmploymentType htmlFor="fulltime">
            {eachType.label}
          </LabelTextOfEmploymentType>
        </CheckBoxAndEmploymentContainer>
      )
    })

  const showTypeOfEmplementView = () => (
    <>
      <HeadingOfTypeOfEmployment>Type Of Employment</HeadingOfTypeOfEmployment>
      <EmploymentTypeList>{renderingTypeOfEmployment()}</EmploymentTypeList>
    </>
  )

  const showSalaryrangeView = () => (
    <>
      <HeadingOfTypeOfEmployment>Salary Range</HeadingOfTypeOfEmployment>
      <EmploymentTypeList>{renderingSalaryView()}</EmploymentTypeList>
    </>
  )

  return (
    <>
      <FilterGroupContainer>
        {showTypeOfEmplementView()}
        {showSalaryrangeView()}
      </FilterGroupContainer>
    </>
  )
}

export default FiterGroups
