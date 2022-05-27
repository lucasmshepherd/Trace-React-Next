export default function NavMenu(props) {
  return (
    <>
      <nav className="menu">
        {props.children}
      </nav>
    </>
  )
}