'use client';

import { motion } from 'framer-motion';
import { Utensils, Info } from 'lucide-react';
import { gastronomia, checklist } from '@/data/info';

export function TipsSection() {
  return (
    <section className="bg-indigo-950 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="bg-white/5 p-8 rounded-3xl border border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-500 p-3 rounded-2xl">
              <Utensils className="text-white w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold italic">Gastronomia</h2>
          </div>
          <div className="space-y-6 text-lg">
            {gastronomia.map((item, index) => (
              <div
                key={index}
                className={`border-l-4 border-${item.color}-500 pl-4`}
              >
                <p className={`text-${item.color}-400 font-bold`}>
                  {item.local}
                </p>
                <p className="text-slate-300">{item.descricao}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-500 p-3 rounded-2xl">
              <Info className="text-white w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold italic">Checklist</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {checklist.map((tip, i) => (
              <div
                key={i}
                className={`${tip.color} p-4 rounded-2xl font-bold text-center shadow-lg transform hover:-rotate-2 transition-transform cursor-default`}
              >
                {tip.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
