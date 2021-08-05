import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    var title = document.getElementById('title')
    var regenerate = document.getElementById('regenerate')
    function make () {
      if (navigator.userAgent.includes('Windows NT 6.1')) return title.innerHTML = 'Unsupported OS (Win NT 6.1)'
      var one = ["Oh you", "Living", "The", "A", "Super", "Working", "Degenerated", "Stinky", "Disgusting", "Broken", "Unwanted", "Horrific", "Biggest", "Mental", "Ugly", "Brainless", "Unresponsive", "Stupid", "Dumb", "Insane", "Unhelpable"]
      var two = ["Shit", "Whale", "Pussy", "Sperm", "Cum", "Useless", "Peace", "Unpaid", "Unexpected", "Shit", "lilGrapeguy", "botato", "Dick", "Bitch", "Chicken", "Smashmaster", "aboutDavid", "Pyxel", "Pyxel", "Bunny", "WasteOfSpace", "Dipshit", "WasteOfSperm", "Snitch", "AR", "Drowning", "Porn", "Horny", "Sheep", "Macedonga", "Breast"]
      var three = ["Sniffer", "Snatcher", "Variable", "Stripper", "Fucker", "Annoyer", "Depresser", "Worker", "Programmer", "Licker", "Taster", "Eater", "Giver", "Hater", "Toucher", "Breather", "Liver", "Dumbass", "Lawyer", "Addict", "Baby", "Man", "Woman", "Beater", "Brain", "Sucker", "Coward", "Sipper"]
      var i = setInterval(()=>{title.innerHTML = `${one[Math.floor(Math.random() * one.length)]} ${two[Math.floor(Math.random() * two.length)]} ${three[Math.floor(Math.random() * three.length)]}`}); setTimeout(()=>{clearInterval(i)},500)
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
        <meta charSet="UTF-8"/><meta property="og:type" content="website"/><meta property="twitter:card" content="summary_large_image"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta property="og:site_name" content="insultmaker69420"/><meta property="og:title" content="Insults are cool"/><meta name="title" content="Insults are cool"/><meta property="twitter:title" content="Insults are cool"/><meta property="og:description" content="you stink"/><meta property="twitter:description" content="you stink"/><meta name="description" content="you stink"/><meta name="language" content="en"/><meta name="twitter:site" content="@arcodez"/><meta property="og:url" content="https://insults.ar-dev.cf"/><meta property="twitter:url" content="https://insults.ar-dev.cf"/><meta property="language" content="EN"/><meta name="theme-color" content="#ff0000"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} id="title">
          ---
        </h1>

        <p className={styles.description}>
          <a id="regenerate" href="#!">Generate another?</a>
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
