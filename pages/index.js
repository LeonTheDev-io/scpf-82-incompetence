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
          Appearently the url is too untrusted, incase you dont trust what you are on right now,
          look thru the source code 
        </p>
      </main>

      <Footer />
    </div>
  )
}
