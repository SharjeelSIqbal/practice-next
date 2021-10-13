import Head from 'next/head'
import styles from '../styles/Layout.module.css'


export default function Home({articles}) {
  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
