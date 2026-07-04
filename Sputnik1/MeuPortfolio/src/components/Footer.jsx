import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 text-slate-500 py-8 px-6 text-center text-sm font-mono">
      <p>&copy; {new Date().getFullYear()} Dorival Silva. Desenvolvido profissionalmente com React & Tailwind.</p>
    </footer>
  );
}

