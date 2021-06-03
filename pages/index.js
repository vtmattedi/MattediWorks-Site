import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MattediWorks</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-4059701523804358" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href= '/ProjectEurus'>MattediWorks&copy;</a>
        </h1>

        <p className={styles.description}>
         Cool Projects. Insightful ideas. Under Development.
          
        </p>
        </main>
        </div>
  )
}
