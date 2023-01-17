import styled from 'styled-components'

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 10px;
  background-color: #f1f5f9;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 25px;
  font-weight: bold;
  font-family: roboto;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const CoursesListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  list-style-type: none;
  flex-wrap: wrap;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  width: 250px;
`
export const FailureHeading = styled.h1`
  color: #4656a1;
  font-size: 25px;
  font-weight: bold;
  font-family: roboto;
`
export const FailureDescription = styled.p`
  color: #64748b;
  font-size: 17px;
  font-weight: 500;
  font-family: roboto;
`
export const FailureRetryBtn = styled.button`
  color: #e8e8e8;
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 100px;
  border: 1px solid transparent;
  background-color: #4656a1;
  cursor: pointer;
`
