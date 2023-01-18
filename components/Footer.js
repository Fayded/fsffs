import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <ul>
          <li>Fakesite</li>
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Press</Link></li>
          <li><Link href="/">Policies</Link></li>
          <li><Link href="/">Help</Link></li>
        </ul>
        <ul>
          <li>Account</li>
          <li><Link href="/">Edit Profile</Link></li>
          <li><Link href="/">Friends</Link></li>
          <li><Link href="/">Social</Link></li>
          <li><Link href="/">Delete Profile</Link></li>
        </ul>
      </nav>
      <hr />
      <section className={styles.footerBottom}>
        <Image
          src="/logo.png"
          alt="First Street Foundation Logo"
          width={60}
          height={48}
        />
        <nav className={styles.terms}>
          <ul>
            <li><Link href="/">Terms</Link></li>
            <li><Link href="/">Privacy</Link></li>
            <li><Link href="/">Site Map</Link></li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}