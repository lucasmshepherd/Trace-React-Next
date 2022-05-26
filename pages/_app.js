import Layout from '../components/template/layout'

function TraceApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default TraceApp
