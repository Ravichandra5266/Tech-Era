import {Link} from 'react-router-dom'

import {HeaderContainer, HeaderLogo} from './styledComponent'

const Header = () => (
  <Link to="/">
    <HeaderContainer>
      <HeaderLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </HeaderContainer>
  </Link>
)

export default Header
