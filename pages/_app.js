import Layout from '../components/Layout'
import '../styles/globals.scss'
import Head from 'next/head'
import { favicon } from "../public/favicon.ico"
import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps, children }) {
  return (
    <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <title>LOI TAI</title>
          <meta name="facebook-domain-verification" content="zik3lcb4rvlj2cdxgx3du18tj63s6d" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
  )
}

export default MyApp
