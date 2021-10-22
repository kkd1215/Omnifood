import Head from 'next/head'
import { useEffect } from 'react'
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

  // Smooth scrolling animation
  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");

    allLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
          headerEl.classList.toggle("nav-open");
      });
    });
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Omnifood</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="content/img/favicon.png" />
        <script type="module" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule="" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"></script>
        <script defer src='https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js'></script>
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
