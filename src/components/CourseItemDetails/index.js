import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  EachCourseDetails,
  SpinnerContainer,
  FlexContainer,
  CourseImg,
  CourseHeading,
  ContentContainer,
  CourseDescription,
  FailureImg,
  FailureHeading,
} from './styledComponents'
import {
  FailureViewContainer,
  FailureDescription,
  FailureRetryBtn,
} from '../Courses/styledComponents'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CourseItemDetails extends Component {
  state = {
    urlStatus: ApiStatusConstant.initial,
    initialData: [],
  }

  componentDidMount() {
    this.getEachItemDetails()
  }

  getEachItemDetails = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(match)
    const courseDetailsApiUrl = `https://apis.ccbp.in/te/courses/${id}`

    const responseUrl = await fetch(courseDetailsApiUrl)
    // console.log(responseUrl)

    if (responseUrl.ok === true) {
      const responseData = await responseUrl.json()
      //   console.log(responseData)
      const data = responseData.course_details

      const updatedData = {
        id: data.id,
        imageUrl: data.image_url,
        name: data.name,
        description: data.description,
      }
      this.setState({
        urlStatus: ApiStatusConstant.success,
        initialData: updatedData,
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
    const {initialData} = this.state
    const {name, description, imageUrl} = initialData
    return (
      <FlexContainer>
        <CourseImg src={imageUrl} alt={name} />
        <ContentContainer>
          <CourseHeading>{name}</CourseHeading>
          <CourseDescription>{description}</CourseDescription>
        </ContentContainer>
      </FlexContainer>
    )
  }

  onClickRetry = () => {
    this.getEachItemDetails()
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

  renderEachCourseDetails = () => {
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
      <EachCourseDetails>
        <Header />
        {this.renderEachCourseDetails()}
      </EachCourseDetails>
    )
  }
}

export default CourseItemDetails
