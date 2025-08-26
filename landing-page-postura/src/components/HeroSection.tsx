// src/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react'; // Importe o ícone de estrela

const HeroSection = () => {
  return (
    <section className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        {/* Coluna de Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Transforme sua postura.
            <br />
            Transforme sua vida.
          </h1>
          
          {/* NOVO: Subtítulo Explicativo */}
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Receba treinos em vídeo personalizados para corrigir sua postura, criados por nossa equipe de especialistas com base na sua avaliação.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <a
              href="#planos"
              className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors text-center shadow-md"
            >
              Comece sua avaliação
            </a>
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors text-center shadow-md"
            >
              Fale com um especialista
            </a>
          </div>

          {/* NOVO: Micro Prova Social */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <div className="flex">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-sm text-gray-500">
              Junte-se a milhares de pessoas aliviando suas dores.
            </p>
          </div>
        </div>

        {/* Coluna da Imagem */}
        <div className="flex justify-center items-center">
          <Image
            src="/hero-top-image.jpg"
            alt="Mulher com postura relaxada"
            width={550}
            height={550}
            className="rounded-xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;