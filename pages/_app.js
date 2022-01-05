import AuthUserProvider from '../context/AuthUserContext'
import '../styles/globals.css'
import '../styles/icon.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <div className='text-primary'>
        <Component {...pageProps} />
      </div>
    </AuthUserProvider>
  )
}

export default MyApp
