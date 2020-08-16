import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    
    <div>
    <Component {...pageProps} />
      {/* <Signup /> */}
    </div>
  )
}

export default MyApp
