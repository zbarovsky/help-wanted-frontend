import '../styles/globals.css'
import Signup from '../components/signup'

function MyApp({ Component, pageProps }) {
  return (
    
    <div>
    <Component {...pageProps} />
      {/* <Signup /> */}
    </div>
  )
}

export default MyApp
