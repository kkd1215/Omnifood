import Head from 'next/head'
import CTA from '../components/CTA'
import FeaturedIn from '../components/FeaturedIn'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import Meals from '../components/Meals'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Omnifood</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="content/img/favicon.png" />
        <script type="module" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule="" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"></script>
      </Head>
      <Header />
      <main>
        <HeroSection />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
