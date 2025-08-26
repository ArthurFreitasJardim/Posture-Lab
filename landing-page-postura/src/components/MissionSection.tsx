// src/components/MissionSection.tsx
import { Target, Eye, Heart } from 'lucide-react';
import React from 'react';

const MissionSection = () => {
  const items = [
    {
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      title: 'Missão',
      description: 'Melhorar a postura das pessoas através de exercícios eficazes e acompanhamento contínuo.',
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-600" />,
      title: 'Visão',
      description: 'Ser a principal referência digital em saúde postural, transformando vidas com tecnologia e cuidado.',
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-600" />,
      title: 'Valores',
      description: 'Acolhimento, escuta ativa, ética profissional e total transparência em nossos processos.',
    },
  ];

  return (
    // Nova cor de fundo para criar contraste com a seção anterior
    <section className="w-full py-28 bg-slate-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((item, index) => (
          // Card branco sutil, sem sombra, com mais padding interno (p-10)
          <div key={index} className="flex flex-col items-center bg-white p-10 rounded-xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;