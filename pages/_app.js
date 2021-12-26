import '../styles/globals.css'
import '../styles/icon.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='text-primary'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
