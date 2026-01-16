'use client';

import { motion } from 'framer-motion';
import {
  Hotel,
  Car,
  Ship,
  Waves,
  UtensilsCrossed,
  Palmtree,
} from 'lucide-react';

const partners = [
  { icon: Hotel, name: 'Hotéis', color: 'text-blue-400' },
  { icon: Car, name: 'Transporte', color: 'text-orange-400' },
  { icon: Ship, name: 'Passeios', color: 'text-cyan-400' },
  { icon: Waves, name: 'Praias', color: 'text-emerald-400' },
  { icon: UtensilsCrossed, name: 'Gastronomia', color: 'text-rose-400' },
  { icon: Palmtree, name: 'Turismo', color: 'text-green-400' },
];

export function Partners() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-600 mb-2">
          Parceiros da Viagem
        </h3>
        <div className="h-1 w-16 bg-pink-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.15, y: -5 }}
            className="flex flex-col items-center justify-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-xl transition-all group"
          >
            <partner.icon
              className={`w-12 h-12 md:w-14 md:h-14 ${partner.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              strokeWidth={1.5}
            />
            <span className="text-xs md:text-sm font-semibold text-slate-500 mt-3 group-hover:text-slate-700 transition-colors">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
