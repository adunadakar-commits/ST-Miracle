
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-32 pb-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-bolt text-black"></i>
              </div>
              <span className="text-2xl font-black tracking-tighter">SÉNÉGAL TÉLÉCOM</span>
            </div>
            <p className="text-gray-500 text-xl leading-relaxed max-w-md">
              Nous construisons l'infrastructure de la lumière. Le futur de l'internet africain se décide ici.
            </p>
            <div className="mt-12">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-[0.4em]">Official Site</span>
              <p className="text-2xl font-black text-white hover:text-emerald-500 transition-colors cursor-pointer mt-1">WWW.SENEGAL-TELECOM.COM</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Navigation</h4>
            <ul className="space-y-6 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-emerald-500 transition-all">Le Miracle Réseau</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-all">Hub Atlantique</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-all">Souveraineté Data</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-all">Réseaux de Lumière</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Connexion</h4>
            <ul className="space-y-6 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-emerald-500 transition-all">L'Oracle IA</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-all">Espace Presse</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-all">Investisseurs</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-all">Contact Direct</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-12 mb-8 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-youtube text-xl"></i></a>
          </div>
          <div className="text-gray-600 text-sm font-mono uppercase tracking-widest">
            © 2024 SÉNÉGAL TÉLÉCOM — LE MIRACLE EST EN MARCHE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
