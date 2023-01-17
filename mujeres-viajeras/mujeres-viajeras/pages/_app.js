import '../styles/globals.sass'
import LayOut from '../src/components/LayOut'

export default function App({ Component, pageProps }) {
  return (
  <>
  <LayOut>
  <Component {...pageProps} />
  </LayOut>
  </>
  )
}
