import Branding from './branding.js'
import SocialLink from './social-link.js'
import NavMenu from './nav-menu.js'
import Link from './nav-link.js'
import Container from './container.js'

export default function Header(props) {
  const navHeight = props.height + "px"
  const navStyle = {
    height: navHeight,
  }
  return (
    <div>
      <header className="site-header">
        <Container>
          <div class="nav" style={navStyle}>
            <Branding logoWidth="100">
              <SocialLink profile="Twitter" icon="20" area="42" />
              <SocialLink profile="Discord" icon="20" area="42" />
            </Branding>
            <NavMenu>
              <Link title="About" url="/about" />
              <Link title="Art" url="/art" />
              <Link title="World" url="/world" />
              <Link title="Mission" url="/mission" />
              <Link title="Team" url="/team" />
              <Link title="FAQ" url="/faq" />
              <Link title="Minting Soon" disabled />
            </NavMenu>
          </div>
        </Container>
      </header>
    </div>
  )
}