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
        <Header title="Deleted due to <code>foggyzeus#2191<code> incompetence." />
        <p className="description">
          Appearently months after I have spent time and money making this site, people decided the URL magically turned untrusted
        </p>
      </main>

      <Footer />
    </div>
  )
}
