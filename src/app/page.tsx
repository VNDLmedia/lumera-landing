'use client';

import { Fragment, useEffect, useState, type FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Briefcase,
  Building2,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  Fingerprint,
  Lock,
  Mail,
  MessageSquareText,
  Mic,
  MousePointer2,
  Pause,
  PenSquare,
  Play,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react';

type Demo = {
  channel: string;
  icon: LucideIcon;
  prompt: string;
  result: string;
  timing: string;
};

const demoItems: Demo[] = [
  {
    channel: 'Voice',
    icon: Mic,
    prompt: 'Erstell mir eine Uebersicht aller Kunden, die kuendigen wollen.',
    result: '42 E-Mails erstellt und priorisiert',
    timing: 'in 2 Minuten',
  },
  {
    channel: 'Screenshot',
    icon: Camera,
    prompt: 'Hier ist der Fehler aus Produktion. Bitte sofort fixen.',
    result: 'Root Cause analysiert, Fix gebaut und deployed',
    timing: 'in 5 Minuten',
  },
  {
    channel: 'Chat',
    icon: MessageSquareText,
    prompt: 'Bereite das Board Meeting fuer Freitag vor.',
    result: 'Agenda, Slides und Termine versendet',
    timing: 'in 9 Minuten',
  },
  {
    channel: 'E-Mail',
    icon: Mail,
    prompt: 'FW: Dringende Anfrage vom Key Account. Angebot heute.',
    result: 'Angebot erstellt, freigegeben und gesendet',
    timing: 'in 7 Minuten',
  },
];

const capabilityItems = [
  {
    title: 'Klickt und Navigiert',
    description: 'Steuert Browser, CRM und interne Tools wie ein Mitarbeiter.',
    icon: MousePointer2,
  },
  {
    title: 'Schreibt und Erstellt',
    description: 'Verfasst E-Mails, Reports, Konzepte und Code end-to-end.',
    icon: PenSquare,
  },
  {
    title: 'Kommuniziert',
    description: 'Antwortet, plant Meetings und informiert Stakeholder proaktiv.',
    icon: Send,
  },
  {
    title: 'Automatisiert',
    description: 'Verbindet Schritte zu stabilen Workflows ohne Setup-Overkill.',
    icon: Workflow,
  },
  {
    title: 'Lernt mit',
    description: 'Versteht Praeferenzen, Kontexte und wird mit der Zeit besser.',
    icon: BrainCircuit,
  },
  {
    title: 'Sicher by Design',
    description: 'Rollen, Freigaben und Audit-Faehigkeit fuer Enterprise.',
    icon: Fingerprint,
  },
];

const comparisonRows = [
  { left: 'Beantwortet Fragen', right: 'Erledigt Aufgaben' },
  { left: 'Gibt Vorschlaege', right: 'Fuehrt aus' },
  { left: 'Braucht Anleitung', right: 'Handelt autonom' },
  { left: 'Output: Text', right: 'Output: Ergebnisse' },
];

const securityItems = [
  'SOC 2 Type II',
  'ISO 27001 (in Vorbereitung)',
  'DSGVO-konform',
  'Serverstandort Frankfurt',
  'Zero-Knowledge wo moeglich',
  'On-Premise Option fuer Enterprise',
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);
  const [waitlistCount, setWaitlistCount] = useState(2847);
  const [seatsLeft, setSeatsLeft] = useState(47);

  const [activeDemo, setActiveDemo] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const timer = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoItems.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    const drift = setInterval(() => {
      if (Math.random() > 0.62) {
        setWaitlistCount((prev) => prev + 1);
      }

      if (Math.random() > 0.86) {
        setSeatsLeft((prev) => Math.max(19, prev - 1));
      }
    }, 6500);

    return () => clearInterval(drift);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || submitted) {
      return;
    }

    const position = waitlistCount + 1;
    setQueueNumber(position);
    setWaitlistCount(position);
    setSeatsLeft((prev) => Math.max(0, prev - 1));
    setSubmitted(true);
  };

  const activeDemoItem = demoItems[activeDemo];
  const ActiveDemoIcon = activeDemoItem.icon;

  const renderWaitlistForm = ({
    buttonLabel,
    muted,
    formId,
  }: {
    buttonLabel: string;
    muted?: boolean;
    formId: string;
  }) => {
    if (submitted) {
      return (
        <div className="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-100 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="h-5 w-5" />
            Early Access bestaetigt.
          </div>
          <p className="mt-1 text-amber-50/85">
            Sie sind auf Platz {queueNumber?.toLocaleString('de-DE')}. Unser Team meldet sich in 24 Stunden.
          </p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor={formId} className="sr-only">
          E-Mail
        </label>
        <input
          id={formId}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@unternehmen.de"
          className="h-12 w-full rounded-xl border border-white/12 bg-white/6 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-400/70 focus:bg-white/10"
        />
        <button
          type="submit"
          className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition sm:min-w-[220px] ${
            muted
              ? 'bg-white text-zinc-950 hover:bg-zinc-100'
              : 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-[0_0_40px_rgba(251,146,60,0.35)] hover:brightness-110'
          }`}
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  };

  return (
    <div className="lumera-page relative min-h-screen overflow-x-clip bg-[#07070a] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_75%_0%,rgba(251,146,60,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_10%_85%,rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/6 bg-[#07070a]/78 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 text-zinc-950">
              <Bot className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Lumera<span className="text-amber-300">.ai</span>
            </span>
          </a>

          <a
            href="#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full border border-amber-300/35 bg-amber-300/10 px-4 text-xs font-semibold text-amber-200 transition hover:bg-amber-300/18"
          >
            Early Access anfragen
          </a>
        </div>
      </header>

      <main className="pb-20 md:pb-0">
        <section id="top" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                Nur noch {seatsLeft} Early Access Plaetze
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.02em] text-white sm:text-5xl lg:text-7xl">
                Arbeit.
                <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Erledigt.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg">
                Ihr KI-Mitarbeiter fuer repetitive B2B-Tasks: ein Agent, der handelt statt nur zu antworten.
                Schreiben Sie eine Nachricht. Lumera erledigt den Rest.
              </p>

              <div className="mt-7 max-w-xl">
                {renderWaitlistForm({ buttonLabel: 'Platz sichern', formId: 'waitlist-email-hero' })}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400 sm:text-sm">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="h-8 w-8 rounded-full border border-zinc-700 bg-gradient-to-br from-zinc-700 to-zinc-900"
                    />
                  ))}
                </div>
                <p>
                  <span className="font-semibold text-zinc-100">{waitlistCount.toLocaleString('de-DE')}</span> Unternehmen auf der Warteliste
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300">
                  <Building2 className="h-3.5 w-3.5 text-amber-300" /> Made in Germany
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-300" /> DSGVO-konform
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300">
                  <Lock className="h-3.5 w-3.5 text-amber-300" /> SOC 2
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-5 shadow-[0_20px_120px_rgba(245,158,11,0.14)] sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                Lumera vs. ChatGPT
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-xl bg-white/[0.03] px-3 py-2 text-zinc-400">ChatGPT</div>
                <div className="rounded-xl bg-amber-300/15 px-3 py-2 font-semibold text-amber-100">Lumera</div>
                {comparisonRows.map((row) => (
                  <Fragment key={row.left}>
                    <div className="rounded-xl border border-white/6 bg-black/25 px-3 py-3 text-zinc-400">{row.left}</div>
                    <div className="rounded-xl border border-amber-200/20 bg-amber-400/10 px-3 py-3 text-zinc-100">
                      {row.right}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/6 bg-black/25 py-14 sm:py-20" id="demo">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Show, do not tell</p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Eine Nachricht rein. Ergebnis raus.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAutoPlay((prev) => !prev)}
                className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 text-xs font-semibold text-zinc-200 transition hover:bg-white/12"
              >
                {autoPlay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {autoPlay ? 'Auto-Rotation pausieren' : 'Auto-Rotation starten'}
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
              <div className="flex gap-2 overflow-x-auto border-b border-white/8 p-2">
                {demoItems.map((item, index) => {
                  const ItemIcon = item.icon;
                  const active = activeDemo === index;
                  return (
                    <button
                      key={item.channel}
                      type="button"
                      onClick={() => {
                        setActiveDemo(index);
                        setAutoPlay(false);
                      }}
                      className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-semibold transition ${
                        active
                          ? 'bg-amber-300/18 text-amber-100'
                          : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200'
                      }`}
                    >
                      <ItemIcon className="h-3.5 w-3.5" />
                      {item.channel}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-0 md:grid-cols-2">
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Input</p>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
                      <ActiveDemoIcon className="h-4 w-4 text-amber-300" />
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">{activeDemoItem.prompt}</p>
                  </div>
                </div>
                <div className="border-t border-white/8 bg-gradient-to-br from-amber-300/10 to-transparent p-5 sm:border-l sm:border-t-0 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Output</p>
                  <div className="mt-4 flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-50 sm:text-base">{activeDemoItem.result}</p>
                      <p className="mt-1 text-xs text-zinc-300">{activeDemoItem.timing}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20" id="produkt">
          <div className="mb-8 sm:mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Capabilities</p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Kein Tool. Ein autonomer Agent.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-300/35 hover:bg-amber-300/[0.06]"
                >
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-300/25 to-orange-500/25 text-amber-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/6 bg-black/25 py-14 sm:py-20" id="social-proof">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '47%', label: 'weniger Aufwand in Ops' },
                { value: '3.2h', label: 'taeglich gesparte Zeit' },
                { value: '2.3M', label: 'Tasks in Beta erledigt' },
                { value: waitlistCount.toLocaleString('de-DE'), label: 'Firmen auf der Warteliste' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center">
                  <p className="font-display text-3xl font-bold tracking-tight text-amber-200">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <blockquote className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300">
                &ldquo;Endlich ein Agent, der Angebotsprozesse wirklich abschliesst. Unser Team spart jeden Tag messbar Zeit.&rdquo;
                <footer className="mt-3 text-xs text-zinc-500">Head of Sales, SaaS Scale-up (Beta)</footer>
              </blockquote>
              <blockquote className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300">
                &ldquo;Lumera agiert wie ein zusaetzlicher Ops-Mitarbeiter. Schnell, strukturiert und verlaesslich in der Ausfuehrung.&rdquo;
                <footer className="mt-3 text-xs text-zinc-500">COO, E-Commerce Enterprise (Pilot)</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20" id="sicherheit">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Security</p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Enterprise-Sicherheit ohne Kompromisse.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Lumera ist auf deutsche und internationale Compliance-Anforderungen ausgelegt. Datenhoheit,
                Transparenz und klare Kontrollmechanismen sind Standard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <ul className="space-y-3">
                {securityItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  <Server className="h-3.5 w-3.5 text-amber-300" /> Frankfurt
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-300" /> Audit-ready
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  <Lock className="h-3.5 w-3.5 text-amber-300" /> Rollen und Freigaben
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/6 bg-black/25 py-14 sm:py-20" id="preise">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-8 text-center sm:mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Pricing</p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Premium-Positionierung. Klare Einstiegspunkte.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                Keine Feature-Flut, kein Preischaos. Konkrete Konditionen erhalten Sie im kurzen Qualifying-Call.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Startup</p>
                <p className="font-display mt-3 text-4xl font-bold tracking-tight text-white">ab EUR 499/mo</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-300" />10 Agent-Stunden</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-300" />5 Integrationen</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-300" />E-Mail Support</li>
                </ul>
                <a
                  href="#waitlist"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/14 bg-white/6 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Warteliste
                </a>
              </article>

              <article className="relative rounded-2xl border border-amber-300/35 bg-gradient-to-b from-amber-300/20 to-amber-300/4 p-6">
                <span className="absolute -top-3 right-5 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950">
                  Enterprise
                </span>
                <p className="text-xs uppercase tracking-[0.16em] text-amber-100/80">Enterprise</p>
                <p className="font-display mt-3 text-4xl font-bold tracking-tight text-white">Custom</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-100">
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" />Unbegrenzte Ausfuehrung</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" />Alle Integrationen</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" />Dedicated CSM</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-200" />On-Premise Option</li>
                </ul>
                <a
                  href="#waitlist"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-zinc-950 text-sm font-semibold text-amber-200 transition hover:bg-black"
                >
                  Demo anfragen
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-amber-300/30 bg-gradient-to-br from-amber-300/22 via-orange-500/9 to-transparent p-6 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-300/12 px-3 py-1 text-xs font-semibold text-red-100">
              <Clock3 className="h-3.5 w-3.5" />
              Nur noch {seatsLeft} Early Access Plaetze
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Die ersten 100 erhalten Gruenderkonditionen. Fuer immer.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-100/85 sm:text-base">
              Sichern Sie sich jetzt Ihren Platz. Keine Kreditkarte, kein Risiko, nur priorisierter Zugang zu
              Lumera inklusive Onboarding durch das Founding-Team.
            </p>

            <div className="mt-6 max-w-xl">
              {renderWaitlistForm({ buttonLabel: 'Early Access anfragen', muted: true, formId: 'waitlist-email-final' })}
            </div>

            <div className="mt-6 grid gap-3 text-xs text-zinc-200 sm:grid-cols-3 sm:text-sm">
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/22 px-3 py-2">
                <TrendingUp className="h-4 w-4 text-amber-200" />
                47% weniger manueller Aufwand
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/22 px-3 py-2">
                <Briefcase className="h-4 w-4 text-amber-200" />
                Fuer Sales, Ops, Support, Finance
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/22 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-amber-200" />
                Antwort innerhalb von 24 Stunden
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2 text-zinc-200">
            <Bot className="h-4 w-4 text-amber-300" /> Lumera.ai
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white">
              Datenschutz
            </a>
            <a href="#" className="transition hover:text-white">
              Impressum
            </a>
          </div>
          <div className="text-zinc-500">Made in Germany</div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07070a]/92 p-3 backdrop-blur md:hidden">
        <a
          href="#waitlist"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-orange-500 text-sm font-semibold text-zinc-950"
        >
          Early Access sichern
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap');

        .lumera-page {
          font-family: 'Manrope', 'Avenir Next', 'Segoe UI', sans-serif;
        }

        .font-display {
          font-family: 'Sora', 'Avenir Next', 'Segoe UI', sans-serif;
          letter-spacing: -0.015em;
        }
      `}</style>
    </div>
  );
}
