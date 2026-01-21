
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

export const MainSection: React.FC = () => {
  const exp = EXPERIENCE_DATA[0];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-min">
        
        {/* Profile / Intro Card */}
        <div className="md:col-span-4 lg:col-span-4 cyber-card rounded-sm p-8 flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#00f3ff] rounded-full animate-ping"></span>
              <span className="mono text-[#00f3ff] text-[10px] font-bold tracking-[0.3em] uppercase">
                STATUS: SYSTEM_ONLINE // HIREABLE
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-4 glitch-text cursor-default">
              YE MIN THWAY
            </h1>
            <h2 className="mono text-lg md:text-xl text-neutral-400 font-medium mb-8 flex items-center gap-3">
              <span className="text-[#ff0055]">></span> SOFTWARE_ENGINEER / SYSTEM_SPECIALIST
            </h2>
            <p className="text-neutral-400 max-w-xl leading-relaxed text-sm md:text-base border-l-2 border-[#00f3ff]/20 pl-6">
              Engineering high-resilience systems at the intersection of hardware and code. 
              Specialized in <span className="text-white">firmware architecture</span>, 
              <span className="text-white">cybersecurity</span>, and <span className="text-white">backend scalability</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap items-end justify-between gap-6 mt-12">
            <div className="flex gap-4">
              <a href="mailto:contact@yeminthway.com" className="mono group relative px-8 py-3 bg-[#00f3ff] text-black font-bold uppercase text-xs tracking-widest overflow-hidden">
                <span className="relative z-10">INITIATE_CONTACT</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
            <div className="text-right">
              <p className="mono text-[10px] text-neutral-500 mb-1 tracking-widest uppercase">Coordinates</p>
              <p className="mono text-xs text-[#00f3ff]">16.8661° N, 96.1951° E // YANGON</p>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="md:col-span-2 lg:col-span-2 cyber-card rounded-sm p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="mono text-xs font-bold text-neutral-500 uppercase tracking-widest">_LOG: EXPERIENCE</h3>
            <span className="text-[#ff0055] animate-pulse">●</span>
          </div>
          <div className="flex-1">
            <p className="mono text-[#ff0055] text-[10px] mb-2">[{exp.period}]</p>
            <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{exp.title}</h4>
            <p className="mono text-xs text-[#00f3ff] mb-6 tracking-tighter">{exp.company}</p>
            <ul className="space-y-4">
              {exp.description.slice(0, 2).map((d, i) => (
                <li key={i} className="text-xs text-neutral-400 leading-relaxed flex items-start group">
                  <span className="mr-3 text-[#ff0055] group-hover:translate-x-1 transition-transform">_</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
            {exp.skills.map(s => (
               <span key={s} className="mono px-2 py-1 bg-white/5 border border-[#00f3ff]/10 text-[9px] text-neutral-400 uppercase">
                 {s}
               </span>
            ))}
          </div>
        </div>

        {/* Terminal/Philosophy Card */}
        <div className="md:col-span-2 lg:col-span-2 cyber-card rounded-sm p-8">
          <h3 className="mono text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">_MANIFESTO</h3>
          <div className="p-4 bg-black/40 rounded border border-white/5 mono text-[11px] leading-relaxed text-[#00f3ff]/80">
            <span className="text-[#ff0055]">root@ymt:~$</span> cat philosophy.txt<br/><br/>
            "Living between silence and code, turning missing feelings into words and broken thoughts into meaning.
            Believing that sensitivity is not weakness, but the deepest form of understanding."
          </div>
        </div>

        {/* Network / Socials Card */}
        <div className="md:col-span-4 lg:col-span-4 cyber-card rounded-sm p-8 flex flex-col justify-between min-h-[160px]">
           <h3 className="mono text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">_NETWORK_LINKS</h3>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             {[
               { label: 'GITHUB', val: 'yeminthway', href: 'https://github.com/yeminthway' },
               { label: 'FACEBOOK', val: 'yeminthway', href: 'https://www.facebook.com/share/1BxniUxPa7/?mibextid=wwXIfr' },
               { label: 'TELEGRAM', val: '@yeminthway', href: 'https://t.me/yeminthway' }
             ].map(link => (
               <a 
                 key={link.label} 
                 href={link.href} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex flex-col border-b border-white/5 pb-2 hover:border-[#00f3ff]/50 transition-colors"
               >
                  <span className="mono text-[10px] text-neutral-500 group-hover:text-white mb-1">{link.label}</span>
                  <span className="mono text-xs text-[#00f3ff] opacity-60 group-hover:opacity-100">{link.val}</span>
               </a>
             ))}
           </div>
        </div>

        {/* Footer Item - New Full Width Footer */}
        <div className="col-span-1 md:col-span-4 lg:col-span-6 flex items-center justify-between px-4 py-8 border-t border-white/5 mt-4 opacity-50 hover:opacity-100 transition-opacity">
           <div className="mono text-[10px] tracking-[0.4em] text-neutral-500">
             © <span className="text-[#00f3ff]">2026</span> // YE MIN THWAY
           </div>
           <div className="mono text-[10px] tracking-widest text-neutral-600 hidden md:block">
             ALL_SYSTEMS_OPERATIONAL // VER: 4.2.0
           </div>
           <div className="mono text-[10px] text-neutral-500">
             DESIGNED_BY <span className="text-[#ff0055]">YMT</span>
           </div>
        </div>

      </div>
    </div>
  );
};
