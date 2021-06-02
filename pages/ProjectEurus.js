import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-4059701523804358" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Project Eurus
        </h1>

        <p className={styles.description}>
         Still Under Development.
        </p>
        <p>
          Project Eurus is a preprocessor for binary files such as .c, .html and .js files.
          you can mark any of this files with a determined pattern and whenever you run Eurus it will substitute
          the space between the marks for the text file.


        </p>
        </main>
        </div>
  )
}
