import {
  MapPin,
  Calendar,
  DollarSign,
  Utensils,
  Info,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const roteiro = [
    {
      dia: '19',
      local: 'Recife & Olinda',
      atividades: [
        'Deslocamento para Olinda (Centro Histórico)',
        'Catedral da Sé e Casa dos Bonecos Gigantes (R$ 10)',
        'Ladeira da Misericórdia e Alto da Sé',
        'Noite no Recife Antigo e Marco Zero',
        'Passeio de Catamarã pelo Rio Capibaribe (R$ 90)',
      ],
      cor: 'bg-blue-50',
      accent: 'text-blue-600',
      border: 'border-blue-200',
      icon: 'text-blue-500',
    },
    {
      dia: '20',
      local: 'Carneiros & Maragogi',
      atividades: [
        'Praia dos Carneiros',
        'Passeio de Buggy em Maragogi (R$ 300/buggy)',
        'Caminho de Moisés (Barra Grande) e Praia de Antunes',
        'Praias do Xaréu e Ponta de Mangue',
        'Duração média: 4h de passeio',
      ],
      cor: 'bg-emerald-50',
      accent: 'text-emerald-700',
      border: 'border-emerald-200',
      icon: 'text-emerald-600',
    },
    {
      dia: '21',
      local: 'João Pessoa',
      atividades: [
        'Piscinas Naturais do Seixas',
        'Passeio de Catamarã (R$ 100 - R$ 119)',
        'Praia do Cabo Branco',
        'Embarcação com toboágua e bar a bordo',
      ],
      cor: 'bg-orange-50',
      accent: 'text-orange-700',
      border: 'border-orange-200',
      icon: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-indigo-950 font-sans">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
        <Image
          src="/images/capaViagem.jpeg"
          alt="Recife"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <span className="uppercase tracking-widest text-yellow-400 font-bold mb-2 block animate-bounce">
            Expedição Nordeste 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-4 drop-shadow-2xl">
            Roteiro Viagem
          </h1>
          <p className="text-3xl md:text-4xl font-light italic text-pink-500">
            By Maria
          </p>
        </div>
      </header>

      {/* Info Rápida - Cartões Coloridos */}
      <section className="max-w-6xl mx-auto -mt-20 relative z-30 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-blue-500 transform hover:scale-105 transition-transform">
            <div className="bg-blue-100 p-3 rounded-full">
              <DollarSign className="text-blue-600 w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-slate-400">
                Custo Médio
              </p>
              <p className="font-black text-2xl text-blue-600 font-mono">
                R$ 277,00
              </p>
              <p className="text-xs text-slate-500">por pessoa</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-emerald-500 transform hover:scale-105 transition-transform">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Calendar className="text-emerald-600 w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-slate-400">
                Período
              </p>
              <p className="font-black text-2xl text-emerald-600">3 Dias</p>
              <p className="text-xs text-slate-500">Intensos e inesquecíveis</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-orange-500 transform hover:scale-105 transition-transform">
            <div className="bg-orange-100 p-3 rounded-full">
              <MapPin className="text-orange-600 w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-slate-400">
                Transporte
              </p>
              <p className="font-black text-2xl text-orange-600">Van Ducato</p>
              <p className="text-xs text-slate-500">Conforto absoluto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerário */}
      <main className="max-w-6xl mx-auto py-24 px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
            O que vamos viver?
          </h2>
          <div className="h-2 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {roteiro.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 p-1 rounded-[2rem] ${item.cor} border-2 ${item.border} shadow-sm overflow-hidden`}
            >
              <div
                className={`md:w-1/3 p-8 flex flex-col justify-center items-center text-center rounded-[1.8rem] bg-white shadow-inner`}
              >
                <span
                  className={`text-7xl font-black ${item.accent} opacity-20 block mb-[-20px]`}
                >
                  0{index + 1}
                </span>
                <span
                  className={`text-sm font-bold uppercase tracking-tighter ${item.accent}`}
                >
                  DIA {item.dia}
                </span>
                <h3 className="text-3xl font-black mt-2 leading-tight">
                  {item.local}
                </h3>
              </div>

              <div className="md:w-2/3 p-8">
                <ul className="grid grid-cols-1 gap-4">
                  {item.atividades.map((act, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm border border-white"
                    >
                      <CheckCircle
                        className={`${item.icon} w-6 h-6 shrink-0`}
                      />
                      <span className="text-lg font-medium text-indigo-900">
                        {act}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Dicas e Alimentação com Cores Vivas */}
      <section className="bg-indigo-950 text-white py-24 px-4 rounded-t-[3rem] md:rounded-t-[6rem]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-orange-500 p-3 rounded-2xl">
                <Utensils className="text-white w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold italic">Gastronomia</h2>
            </div>
            <div className="space-y-6 text-lg">
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-orange-400 font-bold">Recife</p>
                <p className="text-slate-300">
                  Shopping Recife, Hotel ou McDonald&apos;s.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <p className="text-emerald-400 font-bold">Maragogi</p>
                <p className="text-slate-300">
                  Restaurantes à la carte com vista para o mar.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="text-blue-400 font-bold">João Pessoa</p>
                <p className="text-slate-300">
                  Self-service Av. Piauí (R$ 7,79/100g).
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-500 p-3 rounded-2xl">
                <Info className="text-white w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold italic">Checklist</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { text: 'Protetor Solar', color: 'bg-yellow-500' },
                { text: 'Chapéu', color: 'bg-orange-500' },
                { text: 'Óculos de Sol', color: 'bg-blue-500' },
                { text: 'Chinelo', color: 'bg-emerald-500' },
                { text: 'Levar o Essencial', color: 'bg-pink-500' },
                { text: 'Muita Alegria', color: 'bg-purple-500' },
              ].map((tip, i) => (
                <div
                  key={i}
                  className={`${tip.color} p-4 rounded-2xl font-bold text-center shadow-lg transform hover:-rotate-2 transition-transform cursor-default`}
                >
                  {tip.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-950 py-12 text-center border-t border-white/10 text-slate-500 text-sm">
        <p className="font-bold text-slate-400 uppercase tracking-widest">
          © Desenvolvido por Maria
        </p>
      </footer>
    </div>
  );
}
