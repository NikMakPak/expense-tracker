import '@/styles/globals.css'
import {store} from '@/store/store'
import {Provider} from 'react-redux'
import {Poppins} from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
