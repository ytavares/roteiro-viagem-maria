export const calculateTripPhase = (): 'before' | 'during' | 'after' => {
  const now = new Date();
  const startDate = new Date('2026-03-19T00:00:00');
  const endDate = new Date('2026-03-22T00:00:00');

  if (now >= endDate) {
    return 'after';
  } else if (now >= startDate && now < endDate) {
    return 'during';
  } else {
    return 'before';
  }
};
