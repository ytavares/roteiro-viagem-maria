'use client';

import { motion } from 'framer-motion';
import { DollarSign, Calendar, MapPin } from 'lucide-react';
import { infoCards } from '@/data/info';

const iconMap = {
  blue: DollarSign,
  emerald: Calendar,
  orange: MapPin,
};

export function InfoCards() {
  return (
    <section className="max-w-6xl mx-auto -mt-20 relative z-30 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoCards.map((card, index) => {
          const Icon = iconMap[card.color as keyof typeof iconMap];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-${card.color}-500 transform hover:scale-105 transition-transform`}
            >
              <div className={card.bgColor + ' p-3 rounded-full'}>
                <Icon className={card.iconColor + ' w-8 h-8'} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-400">
                  {card.label}
                </p>
                <p
                  className={`font-black text-2xl ${card.iconColor} ${
                    card.label === 'Custo Médio' ? 'font-mono' : ''
                  }`}
                >
                  {card.value}
                </p>
                <p className="text-xs text-slate-500">{card.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
