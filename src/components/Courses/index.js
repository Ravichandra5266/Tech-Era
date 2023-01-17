import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CoursesItem from '../CoursesItem'

import Header from '../Header'

import {
  CoursesContainer,
  Heading,
  SpinnerContainer,
  CoursesListContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureRetryBtn,
} from './styledComponents'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Courses extends Component {
  state = {
    urlStatus: ApiStatusConstant.initial,
    initialCoursesData: [],
  }

  componentDidMount() {
    this.getCoursesData()
  }

  getCoursesData = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})

    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

    const responseUrl = await fetch(coursesApiUrl)

    // console.log(responseUrl)

    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()

      //   console.log(responseData)

      const updatedData = responseData.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))

      //   console.log(updatedData)

      this.setState({
        urlStatus: ApiStatusConstant.success,
        initialCoursesData: updatedData,
      })
    } else {
      this.setState({urlStatus: ApiStatusConstant.failure})
    }
  }

  renderSuccessView = () => {
    const {initialCoursesData} = this.state
    return (
      <CoursesListContainer>
        {initialCoursesData.map(eachItem => (
          <CoursesItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </CoursesListContainer>
    )
  }

  onClickRetry = () => {
    this.getCoursesData()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt=" failure view"
      />
      <FailureHeading>Oops!Something Went Wrong</FailureHeading>
      <FailureDescription>
        We Cannot Seem to find the page you are looking for.
      </FailureDescription>
      <FailureRetryBtn type="button" onClick={this.onClickRetry}>
        Retry
      </FailureRetryBtn>
    </FailureViewContainer>
  )

  renderSpinnerView = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="TailSpin" color="blue" height="50" width="50" />
    </SpinnerContainer>
  )

  RenderCourses = () => {
    const {urlStatus} = this.state
    let result = null
    switch (urlStatus) {
      case ApiStatusConstant.success:
        result = this.renderSuccessView()
        break
      case ApiStatusConstant.failure:
        result = this.renderFailureView()
        break
      case ApiStatusConstant.inProgress:
        result = this.renderSpinnerView()
        break
      default:
        result = null
        break
    }
    return result
  }

  render() {
    return (
      <CoursesContainer>
        <Header />
        <Heading>Courses</Heading>
        {this.RenderCourses()}
      </CoursesContainer>
    )
  }
}

export default Courses
