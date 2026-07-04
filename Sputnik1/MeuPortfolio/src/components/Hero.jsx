import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 pt-16">
      <div className="max-w-3xl text-center space-y-6 px-6">
        
        {/* Tag de Status */}
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400 animate-pulse">
          Disponível para novos projetos
        </div>
        
        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Olá, eu sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Dorival Junior</span>
        </h1>
        
        {/* Subtítulo / Descrição */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          <p className="profile-description">
  <strong>Desenvolvedor Júnior</strong> com sólida base técnica em tecnologias 
  Web (HTML/CSS/JavaScript e React), Desktop/Mobile (Java/C#/Python) e banco de 
  dados MySQL. Ampla experiência prática em hardware através de Robótica, 
  Eletrônica e Manutenção de Celulares, focado em criar soluções integradas e 
  resolver problemas complexos.
</p>

        </p>
        
        {/* Botões de Ação */}
        <div className="flex justify-center gap-4 pt-4">
          <a 
            href="#projects" 
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Ver Projetos <ArrowRight className="w-4 h-4" />
          </a>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 px-5 py-2.5 rounded-lg transition-colors text-slate-300 hover:text-slate-100"
          >
            {/* SVG Nativo do GitHub - À prova de erros de biblioteca */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

