import React from 'react';
import { ArrowLink, ButtonLink, CardArt, Container, responsive, Section } from '../components';
import { Link } from '../router';
import { NOTES, visibleNotes, type Note } from '../notes';
import { PageHero } from './shared';

const fmt = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const TOPIC_ART: Record<Note['topic'], string> = {
  'Mobile + AI': 'mobile-flow',
  'AI interviews': 'interview-thread',
  Process: 'process-track'
};

const DraftBadge = ({ note }: { note: Note }) =>
  note.status === 'draft' ? (
    <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-200">
      Draft, not published
    </span>
  ) : null;

const NoteCard = ({ note }: { note: Note }) => (
  <Link to={`/notes/${note.slug}/`} className="glass group flex flex-col overflow-hidden rounded-2xl p-6">
    <CardArt small name={note.cover ?? TOPIC_ART[note.topic]} position={note.cover ? '50% 50%' : '78% 50%'} />
    <div className="flex flex-wrap items-center gap-2 text-[13px] text-slate-400">
      <span className="font-semibold text-ice">{note.topic}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={note.date}>{fmt(note.date)}</time>
      <DraftBadge note={note} />
    </div>
    <h3 className="mt-3 text-[19px] font-semibold leading-snug text-white group-hover:text-ice">{note.title}</h3>
    <p className="mt-2 text-[15px] leading-6 text-slate-300">{note.description}</p>
  </Link>
);

export function NotesTeaser() {
  const notes = visibleNotes().slice(0, 3);
  if (!notes.length) return null;
  return (
    <Section eyebrow="Notes" title="What building it taught us">
      <div className="snap-row hide-scrollbar mt-12 grid gap-4 md:grid-cols-3">
        {notes.map((n) => (
          <NoteCard key={n.slug} note={n} />
        ))}
      </div>
      <div className="mt-8">
        <ArrowLink to="/notes/">All notes</ArrowLink>
      </div>
    </Section>
  );
}

export default function Notes() {
  const notes = visibleNotes();
  return (
    <>
      <PageHero
        image="notes-pages"
        eyebrow="Notes"
        title={
          <>
            Field notes from <span className="text-gradient">building it ourselves</span>
          </>
        }
        lead={
          <p>
            What worked, what failed quietly, and what we'd do again, from building Routine Run and the Structed AI
            interview. Every number here was measured on a real system.
          </p>
        }
      />
      <Section>
        {notes.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {notes.map((n) => (
              <NoteCard key={n.slug} note={n} />
            ))}
          </div>
        ) : (
          <p className="text-lg text-slate-300">The first notes are on their way.</p>
        )}
      </Section>
    </>
  );
}

/* ---- article body ---------------------------------------------------- */

function inline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={i++}>{m[1]}</strong>);
    else out.push(<a key={i++} href={m[3]}>{m[2]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Body({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\s*\n/);
  return (
    <div className="prose-pv note-body text-[17px] text-slate-300 sm:text-[18px]">
      {blocks.map((b, i) => {
        const lines = b.split('\n');
        // Every note ends on a question to the reader: give it its own box.
        if (i === blocks.length - 1 && b.trim().endsWith('?') && !b.startsWith('- '))
          return (
            <div key={i} className="note-question">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sun">Your turn</span>
              <p>{inline(b)}</p>
            </div>
          );
        if (b.startsWith('## ')) return <h2 key={i}>{b.slice(3)}</h2>;
        if (lines.every((l) => l.startsWith('- ')))
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          );
        if (b.startsWith('> ')) return <blockquote key={i}>{inline(b.replace(/^> /gm, ''))}</blockquote>;
        return <p key={i}>{inline(b)}</p>;
      })}
    </div>
  );
}

export function NotePage({ slug }: { slug: string }) {
  const note = NOTES.find((n) => n.slug === slug);
  if (!note) return null;
  const others = visibleNotes()
    .filter((n) => n.slug !== slug)
    .slice(0, 2);
  return (
    <article className="pb-20 pt-32 sm:pt-40">
      {/* one centred column of about 70 characters; the cover is wider than the text */}
      <Container className="max-w-[42rem]">
        <Link to="/notes/" className="hit text-[14px] font-semibold text-ice hover:text-white">
          ← All notes
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-[14px] text-slate-400">
          <span className="font-semibold text-ice">{note.topic}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={note.date}>{fmt(note.date)}</time>
          <span aria-hidden="true">·</span>
          <span>Denys Korolkov</span>
          <DraftBadge note={note} />
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{note.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">{note.description}</p>
        {note.cover && (
          <img
            {...responsive(note.cover)}
            sizes="(min-width: 800px) 768px, 100vw"
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            className="mt-10 aspect-[16/9] w-full max-w-none rounded-2xl border border-white/10 object-cover lg:-mx-28 lg:w-[calc(100%+14rem)]"
          />
        )}
        <div className="mt-10 border-t border-white/10 pt-4">
          <Body text={note.body} />
        </div>
        <div className="glass-sun mt-14 rounded-2xl p-7">
          <p className="text-[17px] leading-7 text-slate-200">
            Prema Vision designs and builds AI systems for companies, takes them to production, and keeps a person on
            them after launch.
          </p>
          <div className="mt-5">
            <ButtonLink to="/contact/">Start a project</ButtonLink>
          </div>
        </div>
      </Container>
      {others.length > 0 && (
        <Container className="mt-20 max-w-5xl">
          <h2 className="text-2xl font-semibold text-white">More notes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((n) => (
              <NoteCard key={n.slug} note={n} />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
