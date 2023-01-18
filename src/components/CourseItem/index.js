import {Link} from 'react-router-dom'

import {EachCourseItem, CourseLogo, CourseTitle} from './styledComponent'

import './index.css'

const CourseItem = props => {
  const {eachItem} = props
  return (
    <Link to={`/courses/${eachItem.id}`} className="RouteLink">
      <EachCourseItem>
        <CourseLogo src={eachItem.logoUrl} alt={eachItem.name} />
        <CourseTitle>{eachItem.name}</CourseTitle>
      </EachCourseItem>
    </Link>
  )
}
export default CourseItem
