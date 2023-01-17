import styled from 'styled-components'

export const EachCourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 10px;
  padding-top: 0px;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CourseImg = styled.img`
  width: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
`
export const CourseHeading = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`

export const CourseDescription = styled.p`
  color: #1e293b;
  font-size: 16px;
  font-weight: 500;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 60%;
  }
`
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
