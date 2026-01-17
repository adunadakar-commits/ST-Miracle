
import React from 'react';

const GlobalHub: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">Convergence Mondiale</span>
          <h2 className="text-5xl md:text-7xl font-black mt-4">LE CARREFOUR <span className="text-blue-500">ATLANTIQUE</span></h2>
        </div>
        
        <p className="text-xl text-gray-400 leading-relaxed">
          Le Sénégal est le point d'ancrage stratégique des plus grands câbles sous-marins du monde. Nous ne sommes plus les consommateurs du web, nous en sommes le cœur battant.
        </p>

        <div className="space-y-6">
          {[
            { name: "ACE Cable (Africa Coast to Europe)", capacity: "80 Tbps", country: "Liaison Directe Paris-Dakar" },
            { name: "2Africa Connection", capacity: "180 Tbps", country: "Boucle Continentale" },
            { name: "MainOne Backbone", capacity: "64 Tbps", country: "Hub Ouest-Africain" }
          ].map((cable, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex items-center justify-between border-blue-500/10 hover:border-blue-500/30 transition-all cursor-pointer group">
              <div>
                <h4 className="font-bold text-xl group-hover:text-blue-400 transition-colors">{cable.name}</h4>
                <p className="text-sm text-gray-500">{cable.country}</p>
              </div>
              <div className="text-right">
                <span className="block text-xs text-gray-500 uppercase">Capacité</span>
                <span className="font-black text-blue-500">{cable.capacity}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="px-10 py-5 bg-blue-600 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all">
          EXPLORER LA CARTE DES CÂBLES
        </button>
      </div>

      <div className="relative aspect-square flex items-center justify-center">
        {/* Animated Globe/Hub Visual */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
           <svg viewBox="0 0 500 500" className="w-full h-full">
             {/* Ocean circles */}
             <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
             <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
             
             {/* Center Senegal Node */}
             <g className="animate-pulse">
                <circle cx="250" cy="250" r="12" fill="#3b82f6" />
                <circle cx="250" cy="250" r="30" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />
             </g>
             
             {/* Connection Rays */}
             {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
               <line 
                key={i}
                x1="250" y1="250" 
                x2={250 + Math.cos(angle * Math.PI / 180) * 200} 
                y2={250 + Math.sin(angle * Math.PI / 180) * 200}
                stroke="url(#gradRay)"
                strokeWidth="2"
                strokeDasharray="4 8"
               >
                 <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
               </line>
             ))}
             
             <defs>
               <linearGradient id="gradRay" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
               </linearGradient>
             </defs>
             
             {/* Floating Labels */}
             <text x="380" y="100" fill="#fff" fontSize="12" className="font-bold opacity-40">EUROPE</text>
             <text x="50" y="250" fill="#fff" fontSize="12" className="font-bold opacity-40">AMERICAS</text>
             <text x="350" y="450" fill="#fff" fontSize="12" className="font-bold opacity-40">ASIA</text>
             <text x="210" y="235" fill="#3b82f6" fontSize="16" className="font-black">DAKAR</text>
           </svg>
        </div>
      </div>
    </div>
  );
};

export default GlobalHub;
