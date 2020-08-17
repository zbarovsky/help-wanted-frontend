import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EditProfile from '../components/editprofile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>
        
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
          
      </Head>
      {/* <Signup /> */}
      {/* <EditProfile /> */}
      
    </div>
  )
}
