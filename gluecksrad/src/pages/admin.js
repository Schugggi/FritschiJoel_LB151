import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.header}>
          <p className={styles.logo}>Glücksrad</p>
          <div className={styles.headerright}>
            <a className={styles.links} href="/">
              Home
            </a>
            <a className={styles.links} href="/admin">
              Admin
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
