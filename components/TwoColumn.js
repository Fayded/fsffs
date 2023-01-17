import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function TwoColumn() {
  const { data, error } = useSWR('/api/staticdata', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <section className={styles.twoColumn}>
      
    </section>
  )
}