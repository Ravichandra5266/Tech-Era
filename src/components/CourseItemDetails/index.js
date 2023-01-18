import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  CourseContentDetailsContainer,
  SpinnerContainer,
  FlexContainer,
  CourseDetailsImage,
  CourseTitle,
  CourseDescription,
  FailureImage,
  FailureViewContainer,
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

class CourseItemDetails extends Component {
  state = {
    urlStatus: ApiStatusConstant.initial,
    courseData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const courseDetailsApiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const responseUrl = await fetch(courseDetailsApiUrl)
    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()
      const data = responseData.course_details
      const updatedData = {
        id: data.id,
        name: data.name,
        description: data.description,
        imageUrl: data.image_url,
      }
      this.setState({
        courseData: updatedData,
        urlStatus: ApiStatusConstant.success,
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
    const {courseData} = this.state
    return (
      <FlexContainer>
        <CourseDetailsImage src={courseData.imageUrl} alt={courseData.name} />
        <CourseContentDetailsContainer>
          <CourseTitle>{courseData.name}</CourseTitle>
          <CourseDescription>{courseData.description}</CourseDescription>
        </CourseContentDetailsContainer>
      </FlexContainer>
    )
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <FailureBtn type="button" onClick={this.onClickRetry}>
        Retry
      </FailureBtn>
    </FailureViewContainer>
  )

  renderDetails = () => {
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
      <CourseContentDetailsContainer>
        <Header />
        {this.renderDetails()}
      </CourseContentDetailsContainer>
    )
  }
}

export default CourseItemDetails
