import { Clock, Mail, MapPin } from 'lucide-react';
import { Backdrop, ContactForm, Container, Eyebrow } from '../components';
import { RoutineCard } from '../routines';
import { SITE } from '../site';


export default function Contact() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <Backdrop name="contact-diamond" eager className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" aria-hidden="true" />
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Eyebrow>Start a project</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Tell us which process lives in one head.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Or which AI feature your app is missing. Two sentences are enough. Denys reads every message himself and
            replies within one business day, with a yes, a no, or the name of someone better suited.
          </p>
          <ul className="mt-8 space-y-4 text-[16px] text-slate-200">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-ice" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-ice" aria-hidden="true" />
              Reply within one business day
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-ice" aria-hidden="true" />
              {SITE.city} · clients across the US
            </li>
          </ul>
          <p className="mt-8 text-[15px] text-slate-400">
            Curious what happens next?{' '}
            <a href="/how-we-work/" className="font-semibold text-ice hover:text-white">
              How we work together
            </a>
          </p>
        </div>
        <ContactForm />
      </Container>
      <Container className="relative mt-20">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white">Not ready to write yet? Take five questions with you.</h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-7 text-slate-400">
          The same ones we ask on a first call, as a routine on your phone. Answer them when you have ten quiet minutes, then
          paste the answers into the form.
        </p>
        <RoutineCard slug="first-call" className="mt-8" />
      </Container>
    </section>
  );
}
