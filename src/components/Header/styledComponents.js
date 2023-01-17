import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e8e8e8;
  height: 100px;
  margin-bottom: 25px;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    height: 120px;
  }
`
export const HeaderLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
