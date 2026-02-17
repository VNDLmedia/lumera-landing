'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Check, Star, Bot, Zap, Shield, Lock, 
  Play, Pause, CheckCircle2, Server, Clock, Users,
  MousePointer2, Code2, Search, Send, Repeat, Eye,
  Fingerprint, HardDrive, Key, Activity, ChevronDown
} from 'lucide-react';

// Premium 3D Orb with Shader-like effect
function PremiumOrb() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] pointer-events-none">
      {/* Outer glow - far */}
      <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>
      
      {/* Middle glow */}
      <div className="absolute inset-[100px] bg-gradient-to-br from-orange-400/20 via-amber-500/15 to-orange-600/20 rounded-full blur-[80px] animate-breathe"></div>
      
      {/* Core sphere with 3D depth */}
      <div className="absolute inset-[180px] rounded-full overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 opacity-90"></div>
        
        {/* Animated shader-like overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent animate-shader"></div>
        
        {/* Moving highlight */}
        <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/20 to-transparent animate-spin-slow opacity-60"></div>
        
        {/* Inner depth shadow */}
        <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-orange-600/50 via-amber-600/30 to-orange-700/50 blur-sm"></div>
        
        {/* Top shine */}
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[20%] bg-white/30 rounded-full blur-xl"></div>
        
        {/* Bottom reflection */}
        <div className="absolute bottom-[15%] right-[15%] w-[25%] h-[15%] bg-white/10 rounded-full blur-lg"></div>
      </div>
      
      {/* Subtle outer ring */}
      <div className="absolute inset-[150px] border border-orange-400/10 rounded-full"></div>
    </div>
  );
}

// Waitlist Counter Component
function WaitlistCounter() {
  const [count, setCount] = useState(2847);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount(c => c + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="w-8 h-8 rounded-full border-2 border-[#08080a] bg-gradient-to-br from-zinc-600 to-zinc-800"
            style={{ zIndex: 4 - i }}
          />
        ))}
      </div>
      <div className="text-sm">
        <span className="text-white font-bold">{count.toLocaleString()}</span>
        <span className="text-zinc-500"> auf der Warteliste</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  const demos = [
    { input: "🎤 Voice", message: "Erstell mir eine Übersicht aller Kunden die diesen Monat kündigen wollen.", result: "42 E-Mails erstellt", time: "2 Min" },
    { input: "📸 Foto", message: "[Screenshot einer Fehlermeldung]", result: "Bug gefixt & deployed", time: "5 Min" },
    { input: "💬 Chat", message: "Bereite das Board Meeting morgen vor.", result: "Meeting vorbereitet", time: "10 Min" },
    { input: "📧 E-Mail", message: "FW: Dringende Anfrage - brauchen Angebot bis EOB", result: "Angebot gesendet", time: "8 Min" },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-white overflow-hidden">
      {/* Subtle background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_40%,rgba(251,146,60,0.08),transparent)]"></div>
      </div>

      {/* Navigation - More interesting */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#08080a]/90 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Logo - More prominent */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                <Bot className="w-7 h-7" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">Lumera</span>
              <span className="text-orange-400 font-bold">.ai</span>
            </div>
          </div>
          
          {/* Center nav - subtle */}
          <div className="hidden lg:flex items-center gap-8">
            {['Produkt', 'Sicherheit', 'Preise'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a 
            href="#waitlist" 
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-zinc-100 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Platz sichern
          </a>
        </div>
      </nav>

      {/* HERO - Clean & Bold */}
      <section className="relative z-10 min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <PremiumOrb />
        
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-medium text-orange-400 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              Nur noch 47 Plätze für Early Access
            </div>

            {/* Main headline - Clear & Bold */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight leading-[1] sm:leading-[0.95] mb-6">
              <span className="text-white">Arbeit.</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Erledigt.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg">
              Ein KI-Agent der nicht antwortet — sondern <span className="text-white font-medium">macht</span>. 
              Schreiben Sie eine Nachricht. Lumera erledigt den Rest.
            </p>

            {/* CTA Area */}
            <div className="flex flex-col gap-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@firma.de"
                    className="flex-1 sm:max-w-xs px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-bold hover:from-orange-400 hover:to-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                  >
                    Beitreten
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="inline-flex items-center gap-3 px-5 py-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  <span className="font-medium text-orange-300">Sie sind dabei! Wir melden uns in 24h.</span>
                </div>
              )}
              
              <WaitlistCounter />
            </div>

            {/* Trust - Minimal */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-12 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-400/60" />
                DSGVO
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-orange-400/60" />
                🇩🇪 Server
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-400/60" />
                SOC 2
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-zinc-600" />
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sehen ist glauben.</h2>
            <p className="text-zinc-400">Eine Nachricht. Alles erledigt.</p>
          </div>

          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="flex gap-2">
                {demos.map((demo, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveDemo(i); setIsPlaying(false); }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeDemo === i 
                        ? 'bg-orange-500/20 text-orange-300' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {demo.input}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              <div className="p-8">
                <div className="text-xs text-zinc-500 mb-3">INPUT</div>
                <p className="text-zinc-200">{demos[activeDemo].message}</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-orange-500/5 to-transparent">
                <div className="text-xs text-zinc-500 mb-3">OUTPUT</div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-medium">{demos[activeDemo].result}</span>
                  <span className="text-zinc-500 text-sm">in {demos[activeDemo].time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does - Grid */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kein Chatbot. Ein Agent.</h2>
            <p className="text-zinc-400">Der Unterschied: Lumera handelt.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: MousePointer2, title: 'Klickt & Navigiert', desc: 'Steuert Browser und Apps autonom' },
              { icon: Code2, title: 'Schreibt & Erstellt', desc: 'Dokumente, E-Mails, Code — alles' },
              { icon: Send, title: 'Kommuniziert', desc: 'Sendet, plant, informiert' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-orange-500/20 transition-colors group">
                <item.icon className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Stats */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '47%', label: 'weniger Aufwand' },
              { value: '3.2h', label: 'täglich gespart' },
              { value: '2.3M', label: 'Tasks erledigt' },
              { value: '<30s', label: 'durchschnittlich' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security - Compact */}
      <section id="sicherheit" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400 mb-6">
            <Shield className="w-3 h-3" />
            Enterprise Security
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Deutsche Gründlichkeit.</h2>
          <p className="text-zinc-400 mb-12 max-w-lg mx-auto">100% Made in Germany. Höchste Sicherheitsstandards. Ihr Daten bleiben Ihre Daten.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['SOC 2 Type II', 'ISO 27001', 'DSGVO 100%', '🇩🇪 Frankfurt'].map((badge) => (
              <div key={badge} className="px-4 py-2 bg-white/[0.02] border border-white/[0.06] rounded-lg text-sm text-zinc-300">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simple */}
      <section id="preise" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Einfache Preise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-zinc-400 text-sm mb-2">Startup</div>
              <div className="text-4xl font-bold mb-4">€499<span className="text-lg text-zinc-500">/mo</span></div>
              <ul className="space-y-2 mb-6 text-sm text-zinc-400">
                {['10 Agent-Stunden', '5 Integrationen', 'E-Mail Support'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-400" />{f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full py-3 text-center border border-white/10 rounded-lg font-medium hover:bg-white/5 transition-colors">
                Warteliste
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 relative">
              <div className="absolute -top-3 right-6 px-2 py-0.5 bg-orange-500 rounded text-xs font-bold">
                POPULAR
              </div>
              <div className="text-orange-400 text-sm mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 mb-6 text-sm text-zinc-400">
                {['Unbegrenzt', 'Alle Integrationen', 'Dedicated Support', 'On-Premise'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-400" />{f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full py-3 text-center bg-orange-500 hover:bg-orange-400 rounded-lg font-medium transition-colors">
                Demo anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Strong FOMO */}
      <section id="waitlist" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Urgency */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-400 font-medium">Nur noch 47 Early Access Plätze</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Fast verpasst.
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10">
            2.847 Unternehmen warten bereits. Die ersten 100 bekommen Gründerkonditionen.
            <span className="text-white font-medium"> Für immer.</span>
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@firma.de"
                className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-all"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-100 transition-all flex items-center justify-center gap-2"
              >
                Platz sichern
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-orange-400" />
              <span className="font-semibold text-orange-300">Sie sind dabei!</span>
            </div>
          )}

          <p className="text-xs text-zinc-600 mt-6">Kein Spam. Keine Kreditkarte. Nur ein Platz auf der Liste.</p>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-orange-400" />
            <span className="font-semibold">Lumera.ai</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
          </div>
          <div className="text-sm text-zinc-600">🇩🇪 Made in Germany</div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes shader {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
        .animate-shader { animation: shader 8s linear infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .bg-gradient-conic {
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent);
        }
      `}</style>
    </div>
  );
}
