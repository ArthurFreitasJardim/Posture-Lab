// src/components/PricingSection.tsx
import { CheckCircle2 } from 'lucide-react'; // Ícone para a garantia
import React from 'react';

const PricingSection = () => {
  // ATUALIZADO: Descrições dos planos muito mais claras e atraentes
  const plans = [
    {
      name: 'Plano Base',
      price: 'R$ 29,90',
      period: '/mês',
      features: [
        'Avaliação postural inicial via fotos',
        'Acesso a treinos corretivos em vídeo',
        'Relatórios de progresso básicos',
      ],
      main: false,
    },
    {
      name: 'Plano Intermediário',
      price: 'R$ 69,90',
      period: '/mês',
      features: [
        'Tudo do Plano Base, e mais:',
        'Plano de treinos 100% personalizado',
        'Acompanhamento e tira-dúvidas via chat com um especialista',
        'Reavaliações periódicas',
      ],
      main: true, // Este é o plano que queremos destacar
    },
    {
      name: 'Plano Superior',
      price: 'R$ 129,90',
      period: '/mês',
      features: [
        'Tudo do Plano Intermediário, e mais:',
        'Videochamadas mensais com seu especialista',
        'Acompanhamento nutricional com nossa nutricionista',
        'Acesso prioritário a novos recursos',
      ],
      main: false,
    },
  ];

  return (
    <section id="planos" className="w-full py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Um plano para cada etapa da sua jornada</h2>
        <p className="text-gray-500 mt-4 mb-16 max-w-2xl mx-auto">
          Escolha o plano ideal para suas metas e tenha o acompanhamento que você precisa para evoluir com segurança.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"> {/* 'items-start' para alinhar os cards no topo */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-xl p-8 flex flex-col bg-white shadow-lg transition-transform duration-300 hover:scale-105 ${
                /* --- ALTERADO AQUI --- Adicionamos 'md:py-12' para tornar o card principal mais alto no desktop */
                plan.main ? 'border-yellow-400 scale-105 md:py-12' : 'border-gray-200'
              }`}
            >
              {/* Selo "Mais Popular" */}
              {plan.main && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-gray-800 my-4">
                {plan.price}<span className="text-lg font-normal text-gray-500">{plan.period}</span>
              </p>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Mensagem de Garantia/Segurança */}
              <div className="text-center text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cancele quando quiser</span>
              </div>
              
              <a
                href="https://wa.me/5531999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full font-bold py-3 px-6 rounded-full transition-colors mt-auto shadow-md ${
                  plan.main ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-gray-800 hover:bg-gray-900 text-white'
                }`}
              >
                Assinar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;