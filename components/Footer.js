import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          Made and deleted with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you | <a href="https://github.com/LeonTheDev-io/scpf-82-incompetence"> Source Code <img src="/github.svg" alt="Github Logo" className={styles.logo} /></a> 
      </footer>
    </>
  )
}
