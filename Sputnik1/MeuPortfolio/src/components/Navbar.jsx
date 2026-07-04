import React from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/40 backdrop-blur-md border-b border-slate-900 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo / Brand (Estilo Terminal) */}
        <div className="flex items-center gap-2 font-mono font-bold text-lg text-cyan-400 group cursor-pointer">
          <Terminal className="w-5 h-5 text-cyan-500 group-hover:rotate-6 transition-transform duration-300" />
          <span className="tracking-tight text-slate-200">
            &lt;<span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">Dorival.Dev</span> /&gt;
          </span>
        </div>

        {/* Links de Navegação */}
        <div className="flex items-center gap-6 font-mono text-sm">
          <a 
            href="#about" 
            className="relative text-slate-400 hover:text-cyan-400 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
          >
            // sobre
          </a>
          
          <a 
            href="#projects" 
            className="relative text-slate-400 hover:text-cyan-400 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
          >
            // projetos
          </a>
        </div>

      </div>
    </nav>
  );
}

