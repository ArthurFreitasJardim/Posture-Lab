// src/components/TestimonialsSection.tsx
import React from 'react';
// import Image from 'next/image'; // --- CORRIGIDO: Importação removida pois não está em uso ---
import { Star, Quote } from 'lucide-react';

// Dados de exemplo - no futuro, você substituirá pelos depoimentos reais.
const testimonials = [
  {
    quote: "Minhas dores nas costas praticamente sumiram em um mês! O acompanhamento pelo chat fez toda a diferença para eu fazer os exercícios corretamente.",
    name: 'Juliana S.',
    title: 'Analista de Sistemas, 32 anos',
    avatar: '/avatars/juliana.jpg',
  },
  {
    quote: "Nunca tive disciplina para exercícios, mas o app é tão fácil de usar e os treinos são tão rápidos que finalmente consegui criar uma rotina. Recomendo demais!",
    name: 'Marcos P.',
    title: 'Estudante, 24 anos',
    avatar: '/avatars/marcos.jpg',
  },
  {
    quote: "Achei que minha postura não tinha mais jeito. A avaliação por fotos foi certeira e os exercícios personalizados estão me ajudando a fortalecer o que eu realmente precisava.",
    name: 'Cláudia M.',
    title: 'Advogada, 45 anos',
    avatar: '/avatars/claudia.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="w-full py-28 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Resultados que falam por si</h2>
        <p className="text-gray-500 mt-4 mb-16 max-w-2xl mx-auto">
          Veja o que nossos alunos estão dizendo sobre sua jornada de transformação postural com a gente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col bg-slate-50 p-8 rounded-xl text-left">
              <Quote className="w-8 h-8 text-yellow-400 mb-4" />
              {/* --- CORRIGIDO: Removemos as aspas que envolviam a variável --- */}
              <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className='w-14 h-14 rounded-full mr-4 bg-gray-300'></div> {/* Placeholder para a imagem */}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;