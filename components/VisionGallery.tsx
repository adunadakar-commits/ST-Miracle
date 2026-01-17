
import React from 'react';

const visions = [
  {
    title: "Souveraineté des Données",
    desc: "Vos données ne quittent plus le continent. Nous bâtissons des infrastructures qui respectent et protègent l'identité numérique africaine.",
    icon: "fa-shield-halved",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Intelligence Collective",
    desc: "Des réseaux auto-apprenants qui s'adaptent aux besoins réels des communautés, de Saint-Louis à Kédougou.",
    icon: "fa-brain",
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "Éducation Sans Frontières",
    desc: "Un internet si rapide et accessible qu'il efface les barrières géographiques pour l'apprentissage et le savoir.",
    icon: "fa-graduation-cap",
    color: "from-amber-400 to-orange-600"
  }
];

const VisionGallery: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-16 text-center">Les Piliers du Miracle</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {visions.map((v, i) => (
          <div key={i} className="group relative glass-panel p-10 rounded-[32px] hover:-translate-y-2 transition-all duration-500">
            <div className={`absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br ${v.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
              <i className={`fas ${v.icon} text-white text-2xl`}></i>
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-4">{v.title}</h3>
            <p className="text-gray-400 leading-relaxed">{v.desc}</p>
            <div className="mt-8 flex items-center text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
              DÉCOUVRIR <i className="fas fa-arrow-right ml-2"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative call to action */}
      <div className="mt-24 glass-panel p-12 rounded-[40px] text-center bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border-emerald-500/20">
        <h3 className="text-3xl font-black mb-6">Prêt à rejoindre la renaissance ?</h3>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">Sénégal Télécom n'est pas qu'une entreprise. C'est un mouvement vers une Afrique libérée par la technologie.</p>
        <div className="flex justify-center space-x-6">
            <img src="https://picsum.photos/id/1/200/200" className="w-16 h-16 rounded-full border-2 border-white/10" alt="Partner 1" />
            <img src="https://picsum.photos/id/2/200/200" className="w-16 h-16 rounded-full border-2 border-white/10" alt="Partner 2" />
            <img src="https://picsum.photos/id/3/200/200" className="w-16 h-16 rounded-full border-2 border-white/10" alt="Partner 3" />
        </div>
      </div>
    </div>
  );
};

export default VisionGallery;
