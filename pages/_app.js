import { Hydrate, QueryClientProvider } from 'react-query'
import { queryClient } from '../src/api'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (  
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
