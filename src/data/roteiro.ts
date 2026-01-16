export interface DiaRoteiro {
  dia: string;
  local: string;
  imagem: string;
  atividades: string[];
  cor: string;
  accent: string;
  border: string;
  icon: string;
}

export const roteiro: DiaRoteiro[] = [
  {
    dia: '19',
    local: 'Recife & Olinda',
    imagem: '/images/dia1.jpeg',
    atividades: [
      'Deslocamento para Olinda (Centro Histórico)',
      'Catedral da Sé e Casa dos Bonecos Gigantes (R$ 10)',
      'Ladeira da Misericórdia e Alto da Sé',
      'Noite no Recife Antigo e Marco Zero',
      'Passeio de Catamarã pelo Rio Capibaribe (R$ 90)',
    ],
    cor: 'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-200',
    icon: 'text-blue-500',
  },
  {
    dia: '20',
    local: 'Carneiros & Maragogi',
    imagem: '/images/dia2.jpeg',
    atividades: [
      'Praia dos Carneiros',
      'Passeio de Buggy em Maragogi (R$ 300/buggy)',
      'Caminho de Moisés (Barra Grande) e Praia de Antunes',
      'Praias do Xaréu e Ponta de Mangue',
      'Duração média: 4h de passeio',
    ],
    cor: 'bg-emerald-50',
    accent: 'text-emerald-700',
    border: 'border-emerald-200',
    icon: 'text-emerald-600',
  },
  {
    dia: '21',
    local: 'João Pessoa',
    imagem: '/images/dia3.jpeg',
    atividades: [
      'Piscinas Naturais do Seixas',
      'Passeio de Catamarã (R$ 100 - R$ 119)',
      'Praia do Cabo Branco',
      'Embarcação com toboágua e bar a bordo',
    ],
    cor: 'bg-orange-50',
    accent: 'text-orange-700',
    border: 'border-orange-200',
    icon: 'text-orange-600',
  },
];
