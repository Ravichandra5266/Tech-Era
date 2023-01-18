import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const NotFoundImage = styled.img`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const Heading = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: bold;
  font-family: roboto;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const Description = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
