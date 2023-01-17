import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 10px;
`
export const NotFoundImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const NotFoundHeading = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
`

export const NotFoundPara = styled.p`
  color: #64748b;
  font-size: 18px;
  font-weight: 500;
  font-family: roboto;
`
