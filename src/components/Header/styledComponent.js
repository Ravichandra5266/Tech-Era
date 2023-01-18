import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #e8e8e8;
  padding: 10px;
  height: 100px;
`
export const HeaderLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
