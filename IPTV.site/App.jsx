import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Channels from '@/components/Channels';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Vizzion MaxTV - Serviço Premium de Streaming IPTV</title>
        <meta name="description" content="Experimente entretenimento ilimitado com Vizzion MaxTV. Serviço de IPTV premium com milhares de canais, filmes e séries em qualidade HD. Contate-nos no WhatsApp para assinar." />
      </Helmet>
      <div className="min-h-screen bg-slate-950">
        <Header />
        <Hero />
        <Features />
        <Channels />
        <Pricing />
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;