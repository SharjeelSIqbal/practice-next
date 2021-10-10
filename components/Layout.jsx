import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import ArticleList from './ArticleList'
const Layout = ({children}) => {
  return (
  <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <ArticleList />
        {children}
      </main>
    </div>
  </>
  )
}
export default Layout;
