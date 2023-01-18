import styled from 'styled-components'

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #f1f5f9;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    text-align: left;
    margin-left: 10px;
  }
`
export const CourseItemsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const FailureHeading = styled.h1`
  color: #4656a1;
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const FailureDescription = styled.p`
  color: #64748b;
  font-size: 18px;
  font-weight: 500;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const FailureBtn = styled.button`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: roboto;
  height: 40px;
  width: 120px;
  border: 1px solid transparent;
  background-color: #4656a1;
  border-radius: 5px;
  cursor: pointer;
`
