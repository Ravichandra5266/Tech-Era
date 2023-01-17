import {Link} from 'react-router-dom'

import {CourseItemDetails, CourseImg, CourseTitle} from './styledComponents'

import './index.css'

const CoursesItem = props => {
  const {eachItem} = props
  const {name, logoUrl, id} = eachItem
  return (
    <Link to={`/courses/${id}`} className="link">
      <CourseItemDetails>
        <CourseImg src={logoUrl} alt={name} />
        <CourseTitle>{name}</CourseTitle>
      </CourseItemDetails>
    </Link>
  )
}

export default CoursesItem
