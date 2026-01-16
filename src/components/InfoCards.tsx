'use client';

import { motion } from 'framer-motion';
import { DollarSign, Calendar, MapPin } from 'lucide-react';

export function InfoCards() {
  return (
    <section className="max-w-6xl mx-auto -mt-20 relative z-30 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0 }}
          className="bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-blue-500 transform hover:scale-105 transition-transform"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-emerald-500 transform hover:scale-105 transition-transform"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-2xl flex items-center gap-5 border-t-8 border-orange-500 transform hover:scale-105 transition-transform"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
