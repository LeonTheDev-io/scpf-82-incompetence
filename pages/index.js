import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Deleted!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Deleted due to incompetence." />
        <p className="description">
          Yeah so apparently all of the sudden, weeks after this was finished, people cried about not trusting the "link" (also called domain but okay)
          <br />
          Wait, you are on this site? THE UNTRUSTED LINK? HOLY MOLY, wait, you aren't hacked? What a menace
        </p>
      </main>

      <Footer />
    </div>
  )
}
