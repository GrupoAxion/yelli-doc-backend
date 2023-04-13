import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import styles from '../styles/index.module.css'

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.page}>

      <Sidebar className={styles.sidebar}/>

      <div className={styles.content}>
        <Component {...pageProps} />
      </div>

    </div>
  );
}


