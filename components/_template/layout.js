import Header from '../header'
import Footer from '../footer'

export default function Layout({ children }) {
  return (
    <>
      <Header height="66" />
      <main>{children}</main>
      <Footer />
    </>
  )
}