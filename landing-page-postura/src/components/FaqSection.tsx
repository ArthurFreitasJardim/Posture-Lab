// src/components/FaqSection.tsx
"use client"; // Necessário para usar hooks como o useState

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// --- ADICIONADO: Definindo o tipo para um item do FAQ ---
type FaqItemData = {
  question: string;
  answer: string;
};

// --- ADICIONADO: Definindo os tipos para as props do componente FaqItem ---
type FaqItemProps = {
  item: FaqItemData;
  isOpen: boolean;
  onClick: () => void;
};

const faqData: FaqItemData[] = [ // Aplicando o tipo ao nosso array de dados
  {
    question: "Preciso de algum equipamento especial?",
    answer: "Não! A grande maioria dos nossos exercícios utiliza apenas o peso do corpo. Para alguns exercícios específicos, sugerimos itens que você provavelmente já tem em casa, como uma cadeira ou uma toalha."
  },
  {
    question: "Em quanto tempo começo a ver resultados?",
    answer: "Muitos alunos relatam alívio de dores e maior consciência corporal nas primeiras duas semanas. Resultados estéticos na postura são mais visíveis a partir do primeiro para o segundo mês de prática consistente."
  },
  {
    question: "O método é seguro para quem tem lesões, como hérnia de disco?",
    answer: "Sim. Nosso método é de baixo impacto e focado em fortalecimento. A avaliação inicial é crucial para adaptarmos os treinos às suas condições. Em casos de dores agudas, sempre recomendamos consultar seu médico ou fisioterapeuta antes de iniciar."
  },
  {
    question: "Quanto tempo por dia preciso dedicar aos treinos?",
    answer: "Nossos treinos são projetados para serem eficientes e se encaixarem na sua rotina. A maioria dos programas diários dura entre 15 a 20 minutos."
  }
];

// Componente para um único item do FAQ
// --- CORRIGIDO: Aplicando o tipo React.FC<FaqItemProps> ao componente ---
const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={onClick}
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Suas dúvidas, respondidas</h2>
          <p className="text-gray-500 mt-4">
            Tudo o que você precisa saber antes de começar sua transformação.
          </p>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;