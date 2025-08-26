// src/components/Footer.tsx
import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react'; // Adicionando mais redes sociais

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Posture <span className="text-yellow-500">Lab</span>
            </h3>
            <p className="text-gray-400">
              Sua jornada para uma vida sem dores e com a postura ideal começa aqui.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Youtube /></a>
            </div>
          </div>
          
          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Navegação</h4>
            <ul>
              <li className="mb-2"><a href="#funciona" className="hover:text-yellow-400">Como Funciona</a></li>
              <li className="mb-2"><a href="#planos" className="hover:text-yellow-400">Planos</a></li>
              <li className="mb-2"><a href="#depoimentos" className="hover:text-yellow-400">Depoimentos</a></li>
              <li className="mb-2"><a href="#especialistas" className="hover:text-yellow-400">Especialistas</a></li>
            </ul>
          </div>
          
          {/* Coluna 3: Contato e Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contato</h4>
            <ul>
              <li className="mb-2"><a href="mailto:contato@posturelab.com" className="hover:text-yellow-400">contato@posturelab.com</a></li>
              <li className="mb-2"><a href="#" className="hover:text-yellow-400">Política de Privacidade</a></li>
              <li className="mb-2"><a href="#" className="hover:text-yellow-400">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Posture Lab. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;