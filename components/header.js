import Branding from './branding.js'
import SocialLink from './social-link.js'
import NavMenu from './nav-menu.js'
import Link from './nav-link.js'

export default function Header() {
  return (
    <div>
      <header className="site-header">
        <Branding logoWidth="100">
          <SocialLink profile="Twitter" icon="16" area="36" />
          <SocialLink profile="Discord" icon="16" area="36" />
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
      </header>
    </div>
  )
}