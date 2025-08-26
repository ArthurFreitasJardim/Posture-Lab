// src/components/PlansFlow.tsx
import { FileText, ListChecks, Smartphone, Trophy } from 'lucide-react';
import React from 'react';

const PlansFlow = () => {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-yellow-600" />,
      title: 'Passo 1',
      description: 'Faça a Anamnese Gratuita',
    },
    {
      icon: <ListChecks className="w-10 h-10 text-yellow-600" />,
      title: 'Passo 2',
      description: 'Escolha seu Plano Personalizado',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-600" />,
      title: 'Passo 3',
      description: 'Receba treinos via App Nexur',
    },
    {
      icon: <Trophy className="w-10 h-10 text-yellow-600" />,
      title: 'Passo 4',
      description: 'Evolua com acompanhamento',
    },
  ];

  return (
    <section id="funciona" className="w-full py-28 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Comece a sua transformação</h2>
        <p className="text-gray-500 mt-4 mb-20 max-w-2xl mx-auto">
          Siga estes simples passos para iniciar sua jornada em direção a uma postura melhor e uma vida sem dores.
        </p>
        
        {/* Estrutura do caminho com linha conectora */}
        <div className="relative">
          {/* Linha pontilhada (visível apenas em telas médias e maiores) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-transparent">
             <div className="w-full border-t-2 border-dashed border-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Círculo do ícone */}
                <div className="flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full border-4 border-white shadow-sm z-10">
                  {step.icon}
                </div>
                {/* Conteúdo de texto */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansFlow;