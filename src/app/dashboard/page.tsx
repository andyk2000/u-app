'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topNav}>
        <div className={styles.logo}>
          <div className={styles.logoFrame}>
            <Image 
              src="/urubutoicon.png"
              width={30}
              height={30}
              className={styles.logoImage}
              alt="urubuto logo"
            />
          </div>
          <div className={styles.logoTitle}>UrubutoPay - Empowering digital payments</div>
        </div>
        <div className={styles.langueContainer}>
          <Icon icon="ph:globe" height={20} width={20}/>
          <div className={styles.languageTitle}>
            <span>EN</span>
            <Icon icon="ph:caret-down-fill" height={15} width={15}/>
          </div>
        </div>
      </div>
      <div className={styles.secondNav}>
        <Image 
          src="/urubutoFull.png"
          width={200}
          height={40}
          className={styles.logoImage}
          alt="urubuto logo"
        />
        <div className={styles.searchSection}>
          <Icon icon="ph:magnifying-glass" width={20} height={20} color="grey"/>
          <input
            className={styles.searchInput}
            id="input"
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>
        <div className={styles.notificationSection}>
          <Icon icon="ph:bell-light" height={25} width={25}/>
          <div className={styles.imageFrame}>
            <Image
              src="/customer-1.png"
              width={40}
              height={40}
              className={styles.customerIcon}
              alt="customer Icon"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
