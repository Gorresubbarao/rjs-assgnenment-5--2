import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'

export const JobprofileItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
  @media (min-width: 768px) {
    width: 30%;
  }
`

export const JobDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-right: 20px;
  @media (min-width: 768px) {
    width: 62%;
  }
`

export const BscSearchIcon = styled(BsSearch)`
  width: 40px;
  height: 30px;
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #7e858e;
  border-radius: 2px;
  color: #ffffff;
  padding: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
`

export const SearchInputAndSearchIconMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  border: 1px solid #f1f5f9;
  background: transparent;
  padding: 5px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const SearchInputAndSearchIconDeskTopContainer = styled(
  SearchInputAndSearchIconMobileContainer,
)`
  margin-bottom: 0px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 40%;
    display: flex;
  }
`

export const SearchInput = styled.input`
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background: transparent;
`
export const JobsList = styled.ul`
  padding-left: 0px;
  width: 100%;
`

export const FailerConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;
`
export const FailerImg = styled.img`
  width: 240px;
  height: 330px;
  @media (min-width: 768px) {
    width: 440px;
    height: 430px;
    margin-bottom: 20px;
  }
`
export const FailerHeadingText = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`
export const FailerText = styled.p`
  color: #ffffff;
  font-size: 9px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

export const RetryButton = styled.button`
  background: #6366f1;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-self: center;
  margin-bottom: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoProductsViewConatiner = styled(LoaderContainer)`
  flex-direction: column;
  margin-top: 40px;
`
export const NoproductsHeading = styled(FailerHeadingText)``

export const NoProductsParagraph = styled(FailerText)``

export const NoProductImg = styled(FailerImg)``
