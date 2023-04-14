import SidebarPro from '@/components/Sidebar'
import '@/styles/globals.css'
import styles from '../styles/index.module.css'
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App({ Component, pageProps }) {
  return (

    <ProSidebarProvider>
      <div className={styles.page}>
        <SidebarPro/>
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
      </div>
      
    </ProSidebarProvider>

  );
}


