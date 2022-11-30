import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          Made and deleted with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
        </div>
        <div className={styles.footerItem}>
          This is open source btw
        </div>
      </footer>
    </>
  )
}
