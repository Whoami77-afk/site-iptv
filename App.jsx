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
        <title>Vizzion MaxTV — IPTV Premium</title>
        <meta
          name="description"
          content="Vizzion MaxTV: IPTV profissional com milhares de canais, suporte via WhatsApp e planos flexíveis."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-slate-100">
        <Header />
        <main className="container mx-auto py-12 px-4">
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