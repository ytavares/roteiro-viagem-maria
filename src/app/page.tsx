'use client';

import { useSyncExternalStore } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Countdown, TripStartedMessage } from '@/components/Countdown';
import { InfoCards } from '@/components/InfoCards';
import { Partners } from '@/components/Partners';
import { Itinerary } from '@/components/Itinerary';
import { TipsSection } from '@/components/TipsSection';
import { Footer } from '@/components/Footer';
import { useCountdown } from '@/hooks/useCountdown';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { calculateTripPhase } from '@/utils/tripPhase';
import { roteiro } from '@/data/roteiro';

export default function LandingPage() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const tripPhase = calculateTripPhase();
  const timeLeft = useCountdown('2026-03-19T00:00:00');
  const [completed, setCompleted] = useLocalStorage<{
    [key: string]: boolean;
  }>('roteiro-completed', {});

  const toggleActivity = (diaIndex: number, atividadeIndex: number) => {
    const key = `${diaIndex}-${atividadeIndex}`;
    setCompleted((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-indigo-950 font-sans">
      <HeroSection mounted={mounted} />

      {mounted && tripPhase === 'during' && <TripStartedMessage />}
      {mounted && tripPhase === 'before' && <Countdown timeLeft={timeLeft} />}

      <InfoCards />
      <Itinerary
        roteiro={roteiro}
        completed={completed}
        onToggleActivity={toggleActivity}
      />
      <TipsSection />
      <Footer />
    </div>
  );
}
