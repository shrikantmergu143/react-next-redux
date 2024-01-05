import { wrapper } from '@/store/store';
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);