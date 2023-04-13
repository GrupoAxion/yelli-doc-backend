import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";

const Sidebar = () => {

  const router = useRouter();
  console.log("🚀 ~ file: Sidebar.jsx:9 ~ Sidebar ~ router:", router.pathname)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div
      className={`${styles.containerSidebar} ${isSidebarOpen ? styles.open : ""}`}
      onClick={() => setIsSidebarOpen(false)}
    >
      <div className={styles.containerLogo}>
        <h2 className={styles.logo}>
          <Link href="/">
            Yelli Docs
          </Link>
        </h2>
      </div>

      <div className={styles.sidebar}>
        <ul className={styles.menu}>
          <li>
          <Link href="/docs" className={router.pathname === "/docs" ? styles.active : ""} >
            Documentation
          </Link>
          </li>
          <li>
            <Link href="/api" className={router.pathname === "/api" ? styles.active : ""}>
              API Reference
            </Link>
          </li>
          <li>
            <Link href="/blog" className={router.pathname === "/blog" ? styles.active : ""}>
              Blog
            </Link>
          </li>
        </ul>
        <div className={styles.footer}>
          © 2023 Yelli. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
