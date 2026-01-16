export interface InfoCard {
  label: string;
  value: string;
  subtitle: string;
  color: string;
  iconColor: string;
  bgColor: string;
}

export const infoCards: InfoCard[] = [
  {
    label: 'Custo Médio',
    value: 'R$ 277,00',
    subtitle: 'por pessoa',
    color: 'blue',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'Período',
    value: '3 Dias',
    subtitle: 'Intensos e inesquecíveis',
    color: 'emerald',
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    label: 'Transporte',
    value: 'Van Ducato',
    subtitle: 'Conforto absoluto',
    color: 'orange',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export interface GastronomiaItem {
  local: string;
  descricao: string;
  color: string;
}

export const gastronomia: GastronomiaItem[] = [
  {
    local: 'Recife',
    descricao: "Shopping Recife, Hotel ou McDonald's.",
    color: 'orange',
  },
  {
    local: 'Maragogi',
    descricao: 'Restaurantes à la carte com vista para o mar.',
    color: 'emerald',
  },
  {
    local: 'João Pessoa',
    descricao: 'Self-service Av. Piauí (R$ 7,79/100g).',
    color: 'blue',
  },
];

export interface ChecklistItem {
  text: string;
  color: string;
}

export const checklist: ChecklistItem[] = [
  { text: 'Protetor Solar', color: 'bg-yellow-500' },
  { text: 'Chapéu', color: 'bg-orange-500' },
  { text: 'Óculos de Sol', color: 'bg-blue-500' },
  { text: 'Chinelo', color: 'bg-emerald-500' },
  { text: 'Levar o Essencial', color: 'bg-pink-500' },
  { text: 'Muita Alegria', color: 'bg-purple-500' },
];
