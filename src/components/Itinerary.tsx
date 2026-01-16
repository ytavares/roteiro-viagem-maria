'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Square } from 'lucide-react';
import { DiaRoteiro } from '@/data/roteiro';

interface ItineraryProps {
  roteiro: DiaRoteiro[];
  completed: { [key: string]: boolean };
  onToggleActivity: (diaIndex: number, atividadeIndex: number) => void;
}

export function Itinerary({
  roteiro,
  completed,
  onToggleActivity,
}: ItineraryProps) {
  return (
    <main className="max-w-6xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
          O que vamos viver?
        </h2>
        <div className="h-2 w-24 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-16">
        {roteiro.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.15 }}
            className={`flex flex-col md:flex-row gap-8 p-1 rounded-[2rem] ${item.cor} border-2 ${item.border} shadow-sm overflow-hidden`}
          >
            <div className="md:w-1/3 p-8 flex flex-col justify-center items-center text-center rounded-[1.8rem] bg-white shadow-inner relative overflow-hidden">
              <Image
                src={item.imagem}
                alt={item.local}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover absolute inset-0 opacity-70"
              />
              <div className="relative z-10">
                <span
                  className={`text-7xl font-black ${item.accent} opacity-90 block mb-[-20px]`}
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
            </div>

            <div className="md:w-2/3 p-8">
              <ul className="grid grid-cols-1 gap-4">
                {item.atividades.map((act, i) => {
                  const key = `${index}-${i}`;
                  const isCompleted = completed[key];
                  return (
                    <li key={key} className="list-none">
                      <button
                        onClick={() => onToggleActivity(index, i)}
                        className={`flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm border border-white cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-md w-full text-left ${
                          isCompleted ? 'bg-green-50/80 border-green-300' : ''
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 shrink-0 transition-all duration-300 text-green-600" />
                        ) : (
                          <Square
                            className={`w-6 h-6 shrink-0 transition-all duration-300 ${item.icon}`}
                          />
                        )}
                        <span
                          className={`text-lg font-medium text-indigo-900 transition-all duration-500 ${
                            isCompleted ? 'line-through opacity-60' : ''
                          }`}
                        >
                          {act}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
