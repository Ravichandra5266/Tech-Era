import styled from 'styled-components'

export const CourseItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CourseDetailsImage = styled.img`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const CourseContentDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
export const CourseTitle = styled.h1`
  color: ;
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const CourseDescription = styled.p`
  color: ;
  font-size: 15px;
  font-family: roboto;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 80%;
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
  padding: 10px;
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
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const FailureDescription = styled.p`
  color: #64748b;
  font-size: 18px;
  font-weight: 500;
  font-family: roboto;
  text-align: center;
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
