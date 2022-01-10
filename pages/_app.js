import { Router } from 'next/router';
import NProgress from 'nprogress';
import AuthUserProvider from '../context/AuthUserContext'
import '../styles/globals.css'
import '../styles/icon.css'
import '../styles/nprogress.css'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
