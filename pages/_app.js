import '../styles/globals.css'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout /> 
      <Component {...pageProps} /> 
    </>
  )
}

export default MyApp
