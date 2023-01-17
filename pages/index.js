import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import TwoColumn from '../components/TwoColumn'

export default function Home() {
  return (
    <>
      <Head>
        <title>First Street Foundation Fake Site</title>
        <meta name="description" content="First Street Foundation Fake Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <TwoColumn />
      </main>
    </>
  )
}