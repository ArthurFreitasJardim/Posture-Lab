// src/components/ExpertsSection.tsx
import React from 'react';
import Image from 'next/image';
import { Instagram} from 'lucide-react';


const experts = [
  {
    name: 'Daniel',
    title: 'Educador Físico, CREF 12345-G/BR',
    bio: 'Especialista em treinamento funcional e reabilitação, Fernanda garante que cada exercício seja seguro, eficaz e adaptado para você.',
    avatar: '/avatars/daniel.png', 
    Instagram: 'https://www.instagram.com/danielr.filipe',
  },
  {
    name: 'Gabriel Breda',
    title: 'Educadora Física, CREF 12345-G/BR',
    bio: 'Especialista em treinamento funcional e reabilitação, Fernanda garante que cada exercício seja seguro, eficaz e adaptado para você.',
    avatar: '/avatars/breda.png',
    Instagram: 'https://www.instagram.com/eubreda_treinador',
  },
  {
    name: 'Marina Fernandes',
    title: 'Nutricionista, CRN 12345/BR',
    bio: 'Beatriz desenvolve os planos nutricionais anti-inflamatórios que aceleram sua recuperação e potencializam seus resultados.',
    avatar: '/avatars/marina.png',
    Instagram: 'https://www.instagram.com/_marinafvaf_',
  },
  {
    name: 'Pedro Andrade',
    title: 'Educador Físico, CREF 12345-G/BR',
    bio: 'Nosso especialista em gamificação e engajamento, Lucas transforma a jornada de correção postural em um desafio motivador.',
    avatar: '/avatars/pedro.png',
    Instagram: 'https://www.instagram.com/pedrohr_a',
  },
  {
    name: 'Samuel Bernardo',
    title: 'Educador Físico, CREF: MG-055372',
    bio: 'Nosso especialista em gamificação e engajamento, Lucas transforma a jornada de correção postural em um desafio motivador.',
    avatar: '/avatars/samuel.png',
    Instagram: 'https://www.instagram.com/samuel.bernado',
  },
];

const ExpertsSection = () => {
  return (
    <section id="especialistas" className="w-full py-28 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Criado por especialistas em quem você pode confiar</h2>
        <p className="text-gray-500 mt-4 mb-16 max-w-3xl mx-auto">
          Nossa equipe multidisciplinar de profissionais formados garante que seu programa seja seguro, baseado em ciência e perfeitamente alinhado aos seus objetivos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* O div pai precisa ser 'relative' para o Image com 'layout="fill"' funcionar */}
              <div className="relative w-40 h-40">
                {/* --- CÓDIGO ATUALIZADO --- */}
                {/* Removemos o div placeholder e ativamos o componente Image */}
                <Image
                  src={expert.avatar}
                  alt={`Foto de ${expert.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-6 mb-1">{expert.name}</h3>
              <p className="text-sm text-yellow-600 font-semibold">{expert.title}</p>
              <p className="text-sm text-gray-500 mt-3">{expert.bio}</p>
              <a href={expert.Instagram} target="_blank" rel="noopener noreferrer" className="mt-4 text-gray-400 hover:text-gray-600">
                <Instagram size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;