
import React, { useState, useRef, useEffect } from 'react';
import { getOracleResponse } from '../services/geminiService';
import { OracleMessage } from '../types';

const STORAGE_KEY = 'senegal_telecom_oracle_v1';

const DigitalOracle: React.FC = () => {
  const [messages, setMessages] = useState<OracleMessage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Revive Date objects from strings
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
      } catch (e) {
        console.error("Erreur lors du chargement de l'historique:", e);
      }
    }
    return [
      { 
        role: 'assistant', 
        content: "Bienvenue dans le futur de l'Afrique. Je suis l'Oracle de Sénégal Télécom. Comment pouvons-nous bâtir l'avenir numérique ensemble aujourd'hui ?", 
        timestamp: new Date() 
      }
    ];
  });
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on message change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Save to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: OracleMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const responseText = await getOracleResponse(input, history);
    
    setMessages(prev => [...prev, { role: 'assistant', content: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  const clearHistory = () => {
    if (window.confirm("Voulez-vous vraiment effacer votre historique de conversation avec l'Oracle ?")) {
      const resetMsg: OracleMessage[] = [
        { 
          role: 'assistant', 
          content: "Historique réinitialisé. Je suis prêt pour de nouvelles visions. Comment puis-je vous aider ?", 
          timestamp: new Date() 
        }
      ];
      setMessages(resetMsg);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="glass-panel rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/5">
      <div className="h-[500px] flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-amber-500/10 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-amber-500 tracking-wider">ORACLE NUMÉRIQUE v2.5</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={clearHistory}
              className="text-[10px] text-amber-500/60 hover:text-amber-500 font-mono uppercase tracking-tighter transition-colors flex items-center"
              title="Effacer la conversation"
            >
              <i className="fas fa-trash-alt mr-2"></i>
              Effacer
            </button>
            <span className="text-xs text-amber-500/60 font-mono hidden sm:inline">NEURAL_LINK_ACTIVE</span>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-lg ${
                msg.role === 'user' 
                  ? 'bg-amber-600 text-white rounded-br-none shadow-lg shadow-amber-600/10' 
                  : 'glass-panel text-gray-200 border-amber-500/10 rounded-bl-none'
              }`}>
                {msg.content}
                <div className="text-[10px] mt-2 opacity-40 uppercase tracking-tighter">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="glass-panel p-4 rounded-2xl rounded-bl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/5 bg-black/40">
          <div className="flex items-center space-x-4">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Décrivez votre vision pour l'Afrique..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-lg placeholder:text-gray-600"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-4 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <i className="fas fa-paper-plane text-xl"></i>
            </button>
          </div>
          <p className="text-[9px] text-center text-gray-600 mt-3 font-mono uppercase tracking-[0.2em]">
            Les conversations sont sauvegardées localement sur cet appareil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalOracle;
