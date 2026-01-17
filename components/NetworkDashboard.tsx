
import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';

const data = [
  { time: '00:00', value: 450 },
  { time: '04:00', value: 380 },
  { time: '08:00', value: 890 },
  { time: '12:00', value: 1250 },
  { time: '16:00', value: 1100 },
  { time: '20:00', value: 950 },
  { time: '23:59', value: 600 },
];

const NetworkDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
      {/* Real-time Map Control */}
      <div className="xl:col-span-3 glass-panel p-10 rounded-[40px] border-emerald-500/10 min-h-[500px] relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-3xl font-black">SYSTÈME NERVEUX CENTRAL</h3>
            <p className="text-gray-500 font-mono text-sm mt-1">STATUS: OPERATIONAL_ALL_NODES</p>
          </div>
          <div className="flex space-x-4">
             <div className="bg-black/50 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">
                LAT: 14.7167° N <br /> LNG: 17.4677° W
             </div>
          </div>
        </div>

        <div className="relative w-full h-[350px] bg-[#050505] rounded-3xl border border-white/5 p-4 group overflow-hidden">
          {/* Subtle moving scanline */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/20 shadow-[0_0_15px_#10b981] animate-[scan_4s_linear_infinite]"></div>
          
          <svg viewBox="0 0 800 400" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
            {/* Senegal Map Path Simplification */}
            <path d="M100,100 L150,80 L200,90 L250,70 L300,100 L350,150 L320,250 L200,280 L100,250 Z" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Nodes */}
            {[
              { x: 150, y: 150, label: "DAKAR HUB" },
              { x: 280, y: 120, label: "SAINT-LOUIS" },
              { x: 320, y: 220, label: "TAMBACOUNDA" },
              { x: 180, y: 230, label: "ZIGUINCHOR" },
              { x: 250, y: 180, label: "DIOURBEL" }
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.x} cy={node.y} r="3" fill="#10b981">
                  <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx={node.x} cy={node.y} r="12" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3">
                  <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x={node.x + 10} y={node.y + 5} fill="#10b981" fontSize="8" className="font-mono">{node.label}</text>
              </g>
            ))}
            
            {/* Connection lines */}
            <line x1="150" y1="150" x2="280" y2="120" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
            <line x1="150" y1="150" x2="250" y2="180" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
            <line x1="250" y1="180" x2="320" y2="220" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" />
          </svg>
          
          <style>{`
            @keyframes scan {
              from { transform: translateY(0); }
              to { transform: translateY(350px); }
            }
          `}</style>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { label: "COUVERTURE NATIONALE", value: "99.8%", color: "text-emerald-500" },
             { label: "LATENCE MOYENNE", value: "0.8ms", color: "text-blue-500" },
             { label: "SOUVERAINETÉ DATA", value: "100%", color: "text-purple-500" },
             { label: "AUTO-CICATRISATION", value: "ACTIF", color: "text-emerald-400" }
           ].map((item, i) => (
             <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Side Traffic Stats */}
      <div className="flex flex-col space-y-8">
        <div className="glass-panel p-8 rounded-[32px] border-blue-500/10 flex-1">
          <h4 className="font-black text-xl mb-6">TRAFIC EN DIRECT</h4>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="gradTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#gradTraffic)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 flex justify-between items-center">
             <span className="text-sm text-gray-500">Pointe Quotidienne</span>
             <span className="font-bold text-blue-400">1.25 Tbps</span>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-[32px] border-emerald-500/10 flex-1">
          <h4 className="font-black text-xl mb-4">IMPACT MIRACLE</h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">Le réseau n'est plus un coût, c'est un accélérateur de PIB. Chaque nœud déploie de l'IA locale.</p>
          <div className="space-y-4">
             <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%] animate-pulse"></div>
             </div>
             <div className="flex justify-between text-[10px] font-bold text-gray-500">
                <span>RECHERCHE & DÉVELOPPEMENT</span>
                <span>85%</span>
             </div>
          </div>
        </div>

        <button className="w-full py-6 bg-white text-black font-black rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-xl">
          VOIR LE CORE-NETWORK
        </button>
      </div>
    </div>
  );
};

export default NetworkDashboard;
