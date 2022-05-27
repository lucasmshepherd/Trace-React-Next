import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faDiscord)
import '@fortawesome/fontawesome-svg-core/styles.css'
library.autoAddCss = false

import '../styles/global.sass'
import Layout from '../components/template/layout'

function TraceApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default TraceApp
