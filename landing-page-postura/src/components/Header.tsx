// src/components/Header.tsx
"use client"; // Necessário para interatividade como o menu mobile

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Como Funciona', href: '#funciona' }, 
    { title: 'Planos', href: '#planos' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'Especialistas', href: '#especialistas' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-900">
          Posture <span className="text-yellow-500">Lab</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-gray-600 hover:text-yellow-500 transition-colors">
              {link.title}
            </a>
          ))}
          <a
            href="#planos"
            className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Começar Agora
          </a>
        </nav>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white pb-6 px-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="text-gray-600 hover:text-yellow-500 transition-colors text-lg" onClick={() => setIsOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#planos"
                className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Começar Agora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;