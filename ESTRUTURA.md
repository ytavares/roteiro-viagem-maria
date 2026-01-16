# Estrutura do Projeto - Roteiro Viagem Maria

## 📁 Organização de Arquivos

```
src/
├── app/
│   ├── page.tsx          # Página principal (componentizada)
│   ├── layout.tsx        # Layout da aplicação
│   └── globals.css       # Estilos globais
├── components/           # Componentes React
│   ├── HeroSection.tsx   # Seção hero com animações
│   ├── Countdown.tsx     # Contador regressivo e mensagem da viagem
│   ├── InfoCards.tsx     # Cartões de informação rápida
│   ├── Partners.tsx      # Parceiros da viagem
│   ├── Itinerary.tsx     # Itinerário dos dias
│   ├── TipsSection.tsx   # Gastronomia e checklist
│   └── Footer.tsx        # Rodapé
├── data/                 # Dados mockados
│   ├── roteiro.ts        # Dados do itinerário
│   ├── info.ts           # Informações, gastronomia e checklist
│   └── particles.ts      # Configuração das partículas animadas
├── hooks/                # Custom hooks
│   ├── useCountdown.ts   # Hook para contador regressivo
│   └── useLocalStorage.ts # Hook para gerenciar localStorage
└── utils/                # Utilitários
    └── tripPhase.ts      # Calcula fase da viagem
```

## 🧩 Componentes

### HeroSection

- Seção principal com imagem de fundo
- Partículas animadas flutuantes (rosa)
- Gradiente animado de fundo
- Animações de entrada com Framer Motion

### Countdown

- Contador regressivo até o início da viagem
- Exibe dias, horas, minutos e segundos
- TripStartedMessage: Mensagem quando a viagem começa

### InfoCards

- Três cartões com informações principais:
  - Custo médio por pessoa
  - Período da viagem
  - Transporte utilizado

### Partners

- Grade de parceiros da viagem (ícones interativos)
- Hotéis, Transporte, Passeios, Praias, Gastronomia, Turismo

### Itinerary

- Lista dos dias da viagem com atividades
- Sistema de checkbox para marcar atividades completadas
- Persistência em localStorage

### TipsSection

- Gastronomia: Opções de alimentação por localidade
- Checklist: Itens essenciais para levar na viagem

## 📊 Dados (Mocks)

### roteiro.ts

- Interface `DiaRoteiro`
- Array com os 3 dias da viagem
- Informações: dia, local, imagem, atividades, cores

### info.ts

- Interfaces: `InfoCard`, `GastronomiaItem`, `ChecklistItem`
- Dados dos cartões de informação
- Opções gastronômicas por cidade
- Lista de itens para checklist

### particles.ts

- Interface `Particle`
- Array com 24 partículas configuradas
- Posições, delays, cores e tamanhos

## 🎣 Hooks

### useCountdown

- Gerencia o contador regressivo
- Calcula dias, horas, minutos e segundos restantes
- Atualiza a cada segundo

### useLocalStorage

- Abstração para trabalhar com localStorage
- Sincronização automática com estado React
- Tipagem genérica TypeScript

## 🛠️ Utilitários

### tripPhase.ts

- Função `calculateTripPhase()`
- Retorna: 'before' | 'during' | 'after'
- Determina em que fase da viagem estamos

## 🎨 Estilos

### Animações (Framer Motion)

- Fade in com movimento vertical/horizontal
- Scale e rotate em hover
- Partículas flutuantes
- Gradientes animados

### Tailwind CSS

- Sistema de cores personalizado
- Responsividade mobile-first
- Transições e transformações
- Backdrop blur e glassmorphism

## 🔄 Fluxo de Dados

1. **Estado Global** (page.tsx)

   - `mounted`: Controla renderização no cliente
   - `tripPhase`: Fase atual da viagem
   - `timeLeft`: Tempo restante para viagem
   - `completed`: Atividades marcadas como concluídas

2. **Persistência**

   - `useLocalStorage` salva automaticamente atividades completadas
   - Sincronização entre tabs/recarregamentos

3. **Renderização Condicional**
   - Countdown: Apenas antes da viagem começar
   - TripStartedMessage: Durante a viagem
   - Nada: Após o fim da viagem

## 🚀 Benefícios da Componentização

✅ **Manutenibilidade**: Cada componente tem responsabilidade única  
✅ **Reusabilidade**: Componentes podem ser reutilizados  
✅ **Testabilidade**: Mais fácil testar componentes isolados  
✅ **Organização**: Código separado por função e domínio  
✅ **Performance**: Possibilidade de otimizar componentes individualmente  
✅ **Colaboração**: Múltiplos desenvolvedores podem trabalhar em diferentes componentes

## 📦 Tecnologias Utilizadas

- **Next.js 16**: Framework React
- **TypeScript**: Tipagem estática
- **Framer Motion**: Animações
- **Tailwind CSS**: Estilização
- **Lucide React**: Ícones
