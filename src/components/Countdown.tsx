interface CountdownProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function Countdown({ timeLeft }: CountdownProps) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 relative z-20 pb-24 pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
          Contagem Regressiva para a Viagem! 🎉
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2">
              {timeLeft.days}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-white/90 uppercase tracking-wider">
              Dias
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-white/90 uppercase tracking-wider">
              Horas
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-white/90 uppercase tracking-wider">
              Minutos
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/30">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-white/90 uppercase tracking-wider">
              Segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TripStartedMessage() {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 relative z-20 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="animate-bounce mb-6">
          <span className="text-6xl md:text-8xl">🎉</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
          É HOJE A VIAGEM!
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90">
          Bora aproveitar cada momento! ✨
        </p>
      </div>
    </section>
  );
}
