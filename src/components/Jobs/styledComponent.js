import styled from 'styled-components'

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  padding: 30px;
  // padding-left:50px;
  // padding-top:30px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export default JobContainer
