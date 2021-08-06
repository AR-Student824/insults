import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import Link from "next/link"
import words from '../words.json'
const one = words.one 
const two = words.two
const three = words.three
export default function Share() { 
  useEffect(() => {
    var x = decodeURIComponent(window.location.href.split('/')[4])
    var j = setInterval(()=>{title.innerHTML = `${one[Math.floor(Math.random() * one.length)]} ${two[Math.floor(Math.random() * two.length)]} ${three[Math.floor(Math.random() * three.length)]}`});
     setTimeout(()=>{
      const title = document.getElementById('title')
    try {
      clearInterval(j);
      // remove harmful 
      if (x.includes('<') || x.includes('>')) return title.innerHTML = 'Invalid insult'
      title.innerHTML = atob(x) + ' 🖕'
    } catch {
      clearInterval(j);
      title.innerHTML = 'Invalid insult'
    }
    }, 500)
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>insultmaker69420</title>
        <meta charSet="UTF-8"/><meta property="og:type" content="website"/><meta property="twitter:card" content="summary_large_image"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta property="og:site_name" content="insultmaker69420"/><meta property="og:title" content="Insults are cool"/><meta name="title" content="Insults are cool"/><meta property="twitter:title" content="Insults are cool"/><meta property="og:description" content="you stink"/><meta property="twitter:description" content="you stink"/><meta name="description" content="you stink"/><meta name="language" content="en"/><meta name="twitter:site" content="@arcodez"/><meta property="og:url" content="https://insults.ar-dev.cf"/><meta property="twitter:url" content="https://insults.ar-dev.cf"/><meta property="language" content="EN"/><meta name="theme-color" content="#ff0000"/>
      </Head>

      <main className={styles.main}>
        <h3>YOU ARE A...</h3>
        <h1 className={styles.title} id="title">
          ---
        </h1>

        <p className={styles.description}>
          <Link href="../"><a>Make your own?</a></Link>
        </p>
        <br />
        <p>⚠️ This website may contain NSFW content.</p>
        <noscript>
        <p>⚠️ This website will not work without JavaScript enabled.</p>
        </noscript>
      </main>
    </div>
  )

}