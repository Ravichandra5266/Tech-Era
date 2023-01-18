import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const EachCourseItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 200px;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
`
export const CourseLogo = styled.img`
  width: 50px;
  height: 50px;
`
export const CourseTitle = styled.p`
    color:#475569;
    font-size:18px;
    font-weight:bold;
    font-family;roboto;
    margin-left:20px;
`
