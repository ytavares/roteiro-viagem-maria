'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { particles } from '@/data/particles';

interface HeroSectionProps {
  mounted: boolean;
}

export function HeroSection({ mounted }: HeroSectionProps) {
  return (
    <header className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(234, 88, 12, 0.25) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.25) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 z-[5]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />

      {/* Floating Particles - Apenas no cliente */}
      {mounted &&
        particles.map((particle, i) => (
          <motion.div
            key={i}
            className={`absolute ${particle.size} ${particle.color} rounded-full z-[8] shadow-lg`}
            style={{
              left: particle.left,
              top: particle.top,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 20px currentColor, 0 0 10px currentColor',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 2.2, 1],
              opacity: [0.4, 0.95, 0.4],
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/images/capaViagem.jpeg"
          alt="Recife"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-20 text-center px-4"
      >
        <motion.span
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="uppercase text-4xl tracking-widest text-yellow-400 font-bold mb-2 block"
        >
          Roteiro Viagem
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-black mb-4 drop-shadow-2xl"
        >
          Madu faz 19
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="text-3xl md:text-4xl font-light italic text-yellow-400"
        >
          By Maria
        </motion.p>
      </motion.div>
    </header>
  );
}
