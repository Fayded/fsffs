import { dehydrate, useQuery } from 'react-query';
import Head from 'next/head'
import { queryClient, getVideos } from '../src/api';

import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import TwoColumn from '../components/TwoColumn'

export async function getServerSideProps() {
  await queryClient.prefetchQuery('videos', () => getVideos());
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default function Home() {
  const { data } = useQuery(['videos'], () => getVideos());
  console.log(data);
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
        <ul className={styles.videos}>
          { data?.videos.map((video, index) => (
            <li key={video.id} className={styles.video}>
              <div className={styles.videoInfo}>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
              </div>
              <picture>
                <source media="(max-width: 1200px)" srcSet={video.thumbnail_medium} />
                <img src={video.thumbnail_large} alt={video.title} />
              </picture>
            </li>
          ))
        }   
        </ul>
        <Footer />
      </main>
    </>
  )
}