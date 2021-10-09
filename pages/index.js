import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Omnifood</title>
        <link rel="icon" href="content/img/favicon.png" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
      </main>
    </div>
  )
}
