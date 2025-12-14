import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Channels from '@/components/Channels'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <>
      <Helmet>
        <title>Vizzion MaxTV — IPTV Premium com 15.000+ Canais</title>
        <meta
          name="description"
          content="Vizzion MaxTV: IPTV profissional com mais de 15.000 canais, filmes e séries em HD/4K. Suporte 24/7 via WhatsApp. Assine agora e ganhe 7 dias grátis!"
        />
        <meta name="keywords" content="IPTV, streaming, canais ao vivo, filmes, séries" />
        <meta name="author" content="Vizzion MaxTV" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <Header />
        <main>
          <Hero />
          <Features />
          <Channels />
          <Pricing />
          <Testimonials />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  )
}

export default App