import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

// 1. Mover o array para fora evita recriação da lista a cada render
const PROJECTS_DATA = [
  {
    title: "Localizador Enterprise",
    description: "Aplicação web de geolocalização com mapas dinâmicos e captura de coordenadas em tempo real utilizando React e a biblioteca Leaflet.",
    tags: ["React", "Leaflet", "GPS", "CSS"],
  },
  {
    title: "Controle de Estoque - Boteco do Moe",
    description: "Sistema de banco de dados para gestão rigorosa de inventário, normalização de tabelas e monitoramento de movimentações de estoque.",
    tags: ["MySQL", "MariaDB", "Node.js", "SQL Views"],
  },
  {
    title: "Sistema de Acessos RFID",
    description: "Simulador de controle de acessos integrado que faz o registro em tempo real de tags IDs em um banco de dados relacional.",
    tags: ["Node.js", "MariaDB", "RFID Simulation"],
  }
];

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Projetos em Destaque</h2>
        <p className="text-slate-400 mb-10 text-sm font-mono">&lt;repositorios_recentes&gt;</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((proj, idx) => (
            // 2. Uso do título como chave para melhor performance do React DOM
            <ProjectCard 
              key={proj.title || idx}
              title={proj.title}
              description={proj.description}
              tags={proj.tags}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
