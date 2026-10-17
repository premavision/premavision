import React from 'react';
import { Backdrop, Container, Eyebrow, type Step } from '../components';

export const PROJECT_STEPS: Step[] = [
  {
    title: 'A 30-minute call',
    when: 'This week',
    chip: 'Free',
    body: "You tell us what lives in one head. We tell you whether we're the right people, and if not, who is."
  },
  {
    title: 'The map',
    when: '1 week',
    chip: 'Fixed price',
    body: 'We talk to the people who carry the process and write it down: steps, decisions, owners, what AI can do and what stays human. The map is yours even if you stop here.'
  },
  {
    title: 'The build',
    when: '2 to 16 weeks',
    chip: 'Fixed price',
    body: 'Priced from the map. A working build every week, on your phone or in your browser, not a slide.'
  },
  {
    title: 'Production',
    when: 'Launch day',
    chip: 'Handover',
    body: 'Live with your real users, with tests, traces, and a short handover doc your team can extend. The code and accounts are yours.'
  },
  {
    title: 'The check',
    when: '4 weeks later',
    chip: 'Included',
    body: 'We look at what actually happened in real use and fix what the data shows, not what we guessed.'
  }
];

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-28 sm:pb-8 sm:pt-36">
      {image && <Backdrop name={image} eager className="opacity-45" />}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] text-white sm:text-[3.4rem]">{title}</h1>
          <div className="mt-7 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">{lead}</div>
          {children}
        </div>
      </Container>
    </section>
  );
}
