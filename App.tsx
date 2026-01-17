
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import NetworkDashboard from './components/NetworkDashboard';
import DigitalOracle from './components/DigitalOracle';
import VisionGallery from './components/VisionGallery';
import GlobalHub from './components/GlobalHub';
import Footer from './components/Footer';

type TabId = 'vision' | 'network' | 'oracle' | 'hub';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('vision');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'vision', label: 'Vision', icon: 'fa-eye' },
    { id: 'network', label: 'Miracle Réseau', icon: 'fa-network-wired' },
    { id: 'hub', label: 'Hub Mondial', icon: 'fa-globe-africa' },
    { id: 'oracle', label: 'Oracle IA', icon: 'fa-wand-magic-sparkles' }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-panel py-3 translate-y-2 mx-6 rounded-2xl border-white/10' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setActiveTab('vision')}>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              <i className="fas fa-microchip text-white text-2xl"></i>
            </div>
            <div>
              <span className="text-xl font-black tracking-[0.2em] block leading-none">SÉNÉGAL</span>
              <span className="text-xs font-bold text-emerald-400 tracking-[0.4em] uppercase">Télécom</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center bg-white/5 px-2 py-2 rounded-full border border-white/5">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all text-sm font-bold ${
                  activeTab === tab.id 
                    ? 'bg-white text-black shadow-xl scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className={`fas ${tab.icon} ${activeTab === tab.id ? 'text-emerald-600' : 'text-emerald-500/50'}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden xl:block text-xs font-mono text-emerald-500/50">GW-DKR-CORE: ACTIVE</span>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3 px-8 rounded-xl transition-all hover:shadow-[0_0_30px_-5px_#10b981] active:scale-95">
              LE FUTUR EST ICI
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'vision' && <Hero />}

      <main className="container mx-auto px-6 pt-32 pb-20 min-h-[60vh]">
        {activeTab === 'network' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center mb-16">
              <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">Infrastructure de Lumière</span>
              <h2 className="text-6xl md:text-7xl font-black mt-4 gradient-text">L'Internet Invisible</h2>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                Notre architecture n'est plus seulement physique. C'est un maillage quantique couvrant chaque kilomètre carré du territoire sénégalais.
              </p>
            </div>
            <NetworkDashboard />
          </div>
        )}

        {activeTab === 'hub' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <GlobalHub />
          </div>
        )}

        {activeTab === 'oracle' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-5xl mx-auto">
             <div className="text-center mb-12">
              <h2 className="text-6xl font-black text-amber-500 tracking-tighter">Sagesse Numérique</h2>
              <p className="text-gray-500 mt-4 text-xl">L'IA de Sénégal Télécom répond à vos questions sur l'avenir du continent.</p>
            </div>
            <DigitalOracle />
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="mt-20">
            <VisionGallery />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
