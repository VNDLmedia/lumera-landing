'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Zap, Shield, Lock, Globe, Terminal, Monitor, 
  Mail, Phone, ChevronRight, Play, Check, Star,
  Building2, Users, Clock, TrendingUp, ArrowRight, Sparkles,
  Bot, Cpu, Workflow, MessageSquare, Calendar, FileText, Database,
  Settings, Eye, Command, Layers, RefreshCw, BarChart3,
  CheckCircle2, Mic, Camera, MessageCircle, Smartphone,
  ShieldCheck, Trophy, Target, Send, Pause,
  MousePointer2, Code2, Search, Repeat,
  Key, Server, HardDrive, Fingerprint, Activity
} from 'lucide-react';

// 3D Floating Orb Component
function FloatingOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Main Orb */}
      <div className="relative w-[600px] h-[600px]">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        
        {/* Core orb with 3D effect */}
        <div className="absolute inset-[100px] rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 opacity-80 animate-float shadow-[0_0_150px_60px_rgba(251,146,60,0.3)]">
          {/* Inner shine */}
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
        </div>
        
        {/* Orbiting rings */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute inset-[60px] border border-orange-500/30 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin-reverse">
          <div className="absolute inset-[40px] border border-amber-500/20 rounded-full"></div>
        </div>
        <div className="absolute inset-0 animate-spin-slower">
          <div className="absolute inset-[20px] border border-orange-400/10 rounded-full"></div>
        </div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-particle"
            style={{
              left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
              top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      {/* Grid floor effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#08080a] via-transparent to-transparent">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,146,60,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,146,60,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top'
          }}
        />
      </div>
    </div>
  );
}

// Neural Network Animation
function NeuralNetwork() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Animated connection lines */}
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1={100 + i * 80}
          y1={200 + Math.sin(i) * 100}
          x2={150 + i * 80}
          y2={350 + Math.cos(i) * 80}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {/* Nodes */}
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx={120 + (i % 4) * 180}
          cy={150 + Math.floor(i / 4) * 150}
          r="4"
          fill="#f97316"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
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
    {
      input: "🎤 Voice",
      message: "Erstell mir eine Übersicht aller Kunden die diesen Monat ihr Abo kündigen wollen und draft eine persönliche E-Mail für jeden.",
      steps: ["CRM durchsuchen...", "42 Kündigungen gefunden", "Kundendaten analysieren", "E-Mails generieren", "Zur Freigabe bereit"],
      result: "42 personalisierte E-Mails erstellt",
      time: "2 Min statt 4 Std"
    },
    {
      input: "📸 Foto",
      message: "[Screenshot einer Fehlermeldung]",
      steps: ["Bild analysieren...", "Error identifiziert", "Logs durchsuchen", "Fix implementieren", "Deployment gestartet"],
      result: "Bug gefixt & deployed",
      time: "5 Min statt 2 Std"
    },
    {
      input: "💬 Chat",
      message: "Bereite das Board Meeting morgen vor - Agenda, Zahlen aus Q4, und die Präsentation.",
      steps: ["Kalender checken...", "Meeting um 10:00", "Q4 Daten sammeln", "Slides erstellen", "An Teilnehmer senden"],
      result: "Meeting komplett vorbereitet",
      time: "10 Min statt 3 Std"
    },
    {
      input: "📧 E-Mail",
      message: "FW: Dringende Anfrage von Kunde XY - brauchen Angebot bis heute EOB",
      steps: ["E-Mail analysieren...", "Kundenhistorie laden", "Preise kalkulieren", "Angebot erstellen", "PDF generiert & gesendet"],
      result: "Angebot rausgeschickt",
      time: "8 Min statt 1.5 Std"
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-white overflow-hidden">
      {/* Premium Background with Orange */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,146,60,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(245,158,11,0.08),transparent)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#08080a]/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-400 rounded-full border-2 border-[#08080a] animate-pulse"></div>
            </div>
            <span className="text-lg font-semibold tracking-tight">Lumera<span className="text-orange-400">.ai</span></span>
          </div>
          
          <div className="hidden lg:flex items-center gap-1">
            {['Produkt', 'Anwendungsfälle', 'Sicherheit', 'Preise'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
              <Play className="w-4 h-4" />
              Demo
            </a>
            <a href="#waitlist" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-semibold hover:from-orange-400 hover:to-amber-400 transition-all shadow-lg shadow-orange-500/25">
              Zugang anfragen
            </a>
          </div>
        </div>
      </nav>

      {/* HERO Section - The Showstopper */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-16 px-8">
        {/* 3D Background Elements */}
        <FloatingOrb />
        <NeuralNetwork />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Announcement */}
          <div className={`flex justify-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-full backdrop-blur-sm">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-[11px] font-bold uppercase tracking-wide">
                <Sparkles className="w-3 h-3" />
                Frontier AI
              </span>
              <span className="text-sm text-zinc-300">Die nächste Generation ist da</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </div>
          </div>

          {/* Main Hero Content */}
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tight leading-[0.9] mb-8">
              <span className="bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent">Die Zukunft</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent animate-gradient">arbeitet für Sie.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ein KI-Agent, der <span className="text-white font-semibold">wirklich handelt</span>.
              <br />
              Nicht antwortet. <span className="text-orange-400 font-semibold">Erledigt.</span>
            </p>

            {/* Animated Tech Stack */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {[
                { icon: Cpu, label: 'Neural Engine' },
                { icon: Zap, label: 'Real-Time' },
                { icon: Shield, label: 'Enterprise Security' },
                { icon: Globe, label: 'Multi-Modal' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-sm text-zinc-300 backdrop-blur-sm hover:border-orange-500/30 hover:bg-orange-500/5 transition-all cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <item.icon className="w-4 h-4 text-orange-400" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#waitlist" className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-[1.02] flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Zukunft erleben</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#demo" className="px-10 py-5 text-zinc-400 hover:text-white transition-colors flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                <span>Live Demo</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05]">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05]">
                <Lock className="w-4 h-4 text-orange-400" />
                DSGVO konform
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05]">
                <Server className="w-4 h-4 text-orange-400" />
                🇩🇪 Deutsche Server
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-zinc-500">Entdecken</span>
          <div className="w-6 h-10 rounded-full border border-zinc-700 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-orange-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="relative z-10 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sehen Sie selbst.</h2>
            <p className="text-xl text-zinc-400">Eine Nachricht. Alles erledigt.</p>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] overflow-hidden">
            {/* Demo Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-sm text-zinc-500">Live Demo</div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-zinc-400" /> : <Play className="w-4 h-4 text-zinc-400" />}
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="grid lg:grid-cols-2 divide-x divide-white/[0.06]">
              {/* Input Side */}
              <div className="p-8">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Eingabe</div>
                
                {/* Demo Tabs */}
                <div className="flex gap-2 mb-6">
                  {demos.map((demo, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveDemo(i); setIsPlaying(false); }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        activeDemo === i 
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                          : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                      }`}
                    >
                      {demo.input}
                    </button>
                  ))}
                </div>

                {/* Message */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
                  <p className="text-zinc-200 leading-relaxed">{demos[activeDemo].message}</p>
                </div>

                {/* Processing Steps */}
                <div className="space-y-3">
                  {demos[activeDemo].steps.map((step, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        i < demos[activeDemo].steps.length - 1 
                          ? 'bg-orange-500/20 text-orange-400' 
                          : 'bg-white/20 text-white'
                      }`}>
                        {i < demos[activeDemo].steps.length - 1 
                          ? <Check className="w-3.5 h-3.5" />
                          : <Sparkles className="w-3.5 h-3.5" />
                        }
                      </div>
                      <span className="text-zinc-400">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Side */}
              <div className="p-8 bg-gradient-to-br from-orange-500/[0.03] to-transparent">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Ergebnis</div>
                
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-orange-300">{demos[activeDemo].result}</div>
                    <div className="text-sm text-orange-400/70">{demos[activeDemo].time}</div>
                  </div>
                </div>

                {/* Systems Used */}
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Verwendete Systeme</div>
                <div className="flex flex-wrap gap-2">
                  {['CRM', 'E-Mail', 'Kalender', 'Docs', 'Analytics'].slice(0, 3 + activeDemo).map((sys, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative z-10 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-400 mb-6">
              <Zap className="w-4 h-4" />
              Frontier Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Kein Chatbot.
              <br />
              <span className="text-orange-400">Ein echter Agent.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Der Unterschied: Lumera <span className="text-white font-semibold">handelt</span>. 
              Klickt, schreibt, sendet, erledigt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: MousePointer2, title: 'Echte Aktionen', desc: 'Navigiert Browser, Apps und Interfaces autonom' },
              { icon: Code2, title: 'Erstellt & Bearbeitet', desc: 'Dokumente, E-Mails, Code, Präsentationen — alles' },
              { icon: Search, title: 'Analysiert & Findet', desc: 'Durchsucht Ihre Daten und liefert Insights' },
              { icon: Send, title: 'Kommuniziert', desc: 'Sendet E-Mails, plant Meetings, informiert Teams' },
              { icon: Repeat, title: 'Lernt Workflows', desc: 'Einmal zeigen, dauerhaft automatisiert' },
              { icon: Eye, title: 'Kontextbewusst', desc: 'Versteht Ihre Prozesse und wird immer besser' },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-orange-500/30 hover:bg-orange-500/[0.02] transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-orange-500/30 group-hover:to-amber-500/30 transition-all">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="sicherheit" className="relative z-10 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-400 mb-6">
                <Shield className="w-4 h-4" />
                Enterprise Security
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Deutsche Gründlichkeit.<br />
                <span className="text-orange-400">Maximale Sicherheit.</span>
              </h2>
              <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                Ein Agent mit Zugriff auf Ihre Systeme braucht höchste Sicherheitsstandards. 
                100% Made in Germany.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Eye, label: 'Volle Transparenz', desc: 'Jede Aktion nachvollziehbar' },
                  { icon: Fingerprint, label: 'Zero Trust', desc: 'Explizite Freigaben' },
                  { icon: HardDrive, label: 'On-Premise', desc: 'In Ihrer Infrastruktur' },
                  { icon: Key, label: 'Audit Logs', desc: 'Lückenlose Protokolle' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-orange-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-orange-400 mb-2" />
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div className="text-xs text-zinc-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative rounded-2xl bg-zinc-900/80 border border-white/[0.08] overflow-hidden">
                <div className="p-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                    <Activity className="w-4 h-4" />
                    System Status
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: 'SOC 2 Type II', value: 'Zertifiziert', status: 'active' },
                    { label: 'ISO 27001', value: 'Zertifiziert', status: 'active' },
                    { label: 'DSGVO', value: '100% Konform', status: 'active' },
                    { label: 'Hosting', value: 'Frankfurt 🇩🇪', status: 'active' },
                    { label: 'Uptime (30d)', value: '99.998%', status: 'active' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                      <span className="text-zinc-400 text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.value}</span>
                        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-8">Vertraut von Marktführern</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {['SIEMENS', 'SAP', 'PORSCHE', 'BOSCH', 'BMW', 'ALLIANZ'].map((logo) => (
                <div key={logo} className="text-2xl font-bold text-zinc-700 tracking-tight hover:text-zinc-500 transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '47%', label: 'weniger Aufwand', sub: 'ab Tag 1' },
              { value: '3.2h', label: 'täglich gespart', sub: 'pro Mitarbeiter' },
              { value: '2.3M', label: 'Tasks erledigt', sub: 'diesen Monat' },
              { value: '<30s', label: 'bis fertig', sub: 'durchschnittlich' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-orange-500/20 transition-colors">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-zinc-300">{stat.label}</div>
                <div className="text-xs text-zinc-600">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Einfache Preise</h2>
            <p className="text-lg text-zinc-400">Transparent. Fair. Skalierbar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
              <div className="text-zinc-400 text-sm font-medium mb-2">Startup</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">€499</span>
                <span className="text-zinc-500">/Monat</span>
              </div>
              <p className="text-zinc-500 text-sm mb-6">Für Teams bis 10 Personen</p>
              <ul className="space-y-3 mb-8">
                {['10 Agent-Stunden/Monat', '5 Integrationen', 'E-Mail Support', 'EU Hosting'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-orange-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full py-3 text-center border border-white/10 rounded-xl font-medium hover:bg-white/5 transition-colors">
                Warteliste beitreten
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-orange-500/10 to-amber-500/5 border border-orange-500/20 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-xs font-bold">
                EMPFOHLEN
              </div>
              <div className="text-orange-400 text-sm font-medium mb-2">Enterprise</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-zinc-500 text-sm mb-6">Für Unternehmen jeder Größe</p>
              <ul className="space-y-3 mb-8">
                {['Unbegrenzte Stunden', 'Alle Integrationen', 'On-Premise möglich', 'Dedicated Support', '99.99% SLA', 'Custom Training'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-orange-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full py-3 text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl font-medium transition-colors">
                Demo anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="relative z-10 py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-zinc-300">Limitierte Plätze verfügbar</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bereit für die<br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Zukunft der Arbeit?</span>
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
            Sichern Sie sich Ihren Platz. Die ersten 100 Unternehmen erhalten Gründerkonditionen.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@firma.de"
                className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-semibold hover:from-orange-400 hover:to-amber-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-orange-500/25"
              >
                Jetzt sichern
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-orange-400" />
              <span className="font-semibold text-orange-300">Sie sind auf der Liste! Wir melden uns.</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-semibold">Lumera<span className="text-orange-400">.ai</span></span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                Operational
              </div>
              <span>🇩🇪 Made in Germany</span>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/[0.04] text-center text-sm text-zinc-600">
            © 2026 Lumera AI GmbH. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes particle {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.5; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-spin-slower { animation: spin-slower 25s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-particle { animation: particle 2s ease-in-out infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% auto;
          animation: gradient 3s linear infinite; 
        }
      `}</style>
    </div>
  );
}
