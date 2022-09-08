import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  pageProps.title = 'This is a title'
  return <Component {...pageProps} />
}

export default App
