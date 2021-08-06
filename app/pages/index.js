import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import words from './words.json'
const one = words.one 
const two = words.two
const three = words.three

export default function Home() {
  useEffect(() => {
    var title = document.getElementById('title')
    var regenerate = document.getElementById('regenerate')
    var share = document.getElementById('share')

    function make () {
      if (navigator.userAgent.includes('Windows NT 6.1')) return title.innerHTML = 'Unsupported OS (Win NT 6.1)'
      var i = setInterval(()=>{title.innerHTML = `${one[Math.floor(Math.random() * one.length)]} ${two[Math.floor(Math.random() * two.length)]} ${three[Math.floor(Math.random() * three.length)]}`;share.href = `/share/${encodeURIComponent(btoa(title.innerHTML))}`}); setTimeout(()=>{clearInterval(i)},500)
    }
    make()
    regenerate.onclick = function () {
      make()
    }
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>insultmaker69420</title>
        <meta charSet="UTF-8"/><meta property="og:type" content="website"/><meta property="twitter:card" content="summary_large_image"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta property="og:site_name" content="Insult Generator (insultmaker69420)"/><meta property="og:title" content="Insult Generator - Insult Your Friends"/><meta name="title" content="Insult Generator - Insult Your Friends"/><meta property="twitter:title" content="Insult Generator - Insult Your Friends"/><meta property="og:description" content="Do you hate your friends but don't know how to insult them? This is the perfect website for you."/><meta property="twitter:description" content="Do you hate your friends but don't know how to insult them? This is the perfect website for you."/><meta name="description" content="Do you hate your friends but don't know how to insult them? This is the perfect website for you."/><meta name="language" content="en"/><meta name="twitter:site" content="@arcodez"/><meta property="og:url" content="https://insults.ar-dev.cf"/><meta property="twitter:url" content="https://insults.ar-dev.cf"/><meta property="og:image" content="https://imgur.com/T7erJzK.png"/><meta property="twitter:image" content="https://imgur.com/T7erJzK.png"/><meta property="language" content="EN"/><meta name="theme-color" content="#ff0000"/>
         </Head>

      <main className={styles.main}>
        <h1 className={styles.title} id="title">
          ---
        </h1>

        <p className={styles.description}>
          <a id="regenerate" href="#!">Generate another?</a>
          <br />
          <a id="share" href="#?">Share insult?</a>
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
