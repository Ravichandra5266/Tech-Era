import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CourseItem from '../CourseItem'

import Header from '../Header'

import {
  CoursesContainer,
  Heading,
  CourseItemsListContainer,
  SpinnerContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureBtn,
} from './styledComponent'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Courses extends Component {
  state = {
    urlStatus: ApiStatusConstant.initial,
    coursesList: [],
  }

  componentDidMount() {
    this.getCoursesData()
  }

  getCoursesData = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'
    const responseUrl = await fetch(coursesApiUrl)
    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()
      const updatedData = responseData.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))
      this.setState({
        urlStatus: ApiStatusConstant.success,
        coursesList: updatedData,
      })
    } else {
      this.setState({urlStatus: ApiStatusConstant.failure})
    }
  }

  renderSpinnerView = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="TailSpin" color="blue" height="50" width="50" />
    </SpinnerContainer>
  )

  renderSuccessView = () => {
    const {coursesList} = this.state
    return (
      <>
        <Heading>Courses</Heading>
        <CourseItemsListContainer>
          {coursesList.map(eachItem => (
            <CourseItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </CourseItemsListContainer>
      </>
    )
  }

  onClickRetry = () => {
    this.getCoursesData()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Ooops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <FailureBtn type="button" onClick={this.onClickRetry}>
        Retry
      </FailureBtn>
    </FailureViewContainer>
  )

  renderCourseItems = () => {
    const {urlStatus} = this.state
    let results = null

    switch (urlStatus) {
      case ApiStatusConstant.success:
        results = this.renderSuccessView()
        break
      case ApiStatusConstant.failure:
        results = this.renderFailureView()
        break
      case ApiStatusConstant.inProgress:
        results = this.renderSpinnerView()
        break
      default:
        results = ''
        break
    }
    return results
  }

  render() {
    return (
      <CoursesContainer>
        <Header />
        {this.renderCourseItems()}
      </CoursesContainer>
    )
  }
}

export default Courses
