
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => {
        const next = 10.5 + Math.random() * 0.4;
        return Number(next.toFixed(2));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated particles and glowing nodes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020202]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="glass-panel px-6 py-2 rounded-full border-emerald-500/30 flex items-center space-x-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            <span className="text-xs font-black tracking-widest text-emerald-400 uppercase">Gateway Dakar: Online</span>
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
          LE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-blue-500 animate-flow">MIRACLE</span> <br />
          TÉLÉCOM
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-400 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          Nous transformons la perception du possible. Sénégal Télécom déploie le premier réseau 
          <span className="text-white font-bold"> à conscience augmentée</span> d'Afrique.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group relative w-full md:w-auto px-12 py-6 bg-emerald-500 text-black font-black text-xl rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/20">
            <span className="relative z-10">DÉCOUVRIR LE MIRACLE</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          
          <div className="glass-panel px-8 py-6 rounded-2xl border-white/10 flex flex-col items-start min-w-[200px]">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Vitesse Actuelle Hub DKR</span>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-black text-white tabular-nums">{speed}</span>
              <span className="text-emerald-500 font-bold">Gbps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Domain Watermark */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-sm font-mono tracking-[0.5em] text-white">WWW.SENEGAL-TELECOM.COM</span>
      </div>

      {/* Floating Network Detail */}
      <div className="absolute top-1/4 right-12 hidden xl:block animate-bounce [animation-duration:5s]">
         <div className="glass-panel p-6 rounded-3xl border-blue-500/20 max-w-[240px]">
            <i className="fas fa-satellite text-blue-400 text-3xl mb-4"></i>
            <h4 className="font-bold text-lg leading-tight">StarMesh™ Constellation</h4>
            <p className="text-xs text-gray-400 mt-2">Connectivité rurale par satellite avec une latence {"<"} 10ms.</p>
         </div>
      </div>
    </section>
  );
};

export default Hero;
