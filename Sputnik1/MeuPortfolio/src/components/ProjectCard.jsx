import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="group bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
      
      {/* Topo do Card: Ícones de Contexto */}
      <div className="flex justify-between items-center mb-4">
        <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <Folder className="w-5 h-5" />
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-cyan-400 p-1.5 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Conteúdo Informativo */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed min-h-[4rem]">
          {description}
        </p>
      </div>

      {/* Tags Tecnológicas */}
      <div className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className="px-2.5 py-1 bg-slate-950/60 border border-slate-800 text-slate-400 text-xs font-mono rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}

