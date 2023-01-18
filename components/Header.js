import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/'>
          <Image
            src="/logo.png"
            alt="First Street Foundation Logo"
            width={60}
            height={48}
          />
        </Link>
        <div className={styles.links}>
          <Link href='/'>Account</Link>
          <Link href='/'>Help</Link>
          <Link href="/profile">
            <Image
              src="/kevin.jpeg"
              alt="Kevin Fay Avatar"
              width={52}
              height={52}
            />
          </Link>
        </div>
      </nav>
      <div className={styles.headerContent}>
        <h1>The world&apos;s greatest fake site</h1>
        <h2 className={styles.subheader}>Create the world&apos;s greatest fake site and enjoy the breeze of fresh air when you complete it</h2>
        <button>Do something awesome</button>
      </div>
    </header>
  )
}