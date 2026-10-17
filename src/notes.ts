/* Articles. Body is a light markup: "## " heading, "- " list item,
 * "> " quote, blank line between paragraphs, **bold** and [text](url).
 *
 * status: 'draft' articles are visible in `npm run dev` and in
 * `npm run build:drafts`, and are left out of the production build.
 * Publish one only after Denys has read it: set status to 'published' and
 * give it the publication date. */



export interface Note {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, publication date (for drafts: date written)
  status: 'draft' | 'published';
  topic: 'Mobile + AI' | 'AI interviews' | 'Process';
  /** public/img/<cover>.webp and -960.webp: the article's own picture */
  cover?: string;
  sources: string; // where every fact comes from, for review; not shown
  body: string;
}

export const NOTES: Note[] = [
  {
    slug: 'apple-on-device-model',
    cover: 'note-apple-on-device-model',
    title: "Apple put a language model in every new iPhone. Here's what it's good for",
    description:
      "What Apple's on-device model did well in Routine Run, where it failed quietly, and the test that keeps a prompt and its parser from drifting apart.",
    date: '2026-10-17',
    status: 'published',
    topic: 'Mobile + AI',
    sources: 'Fact Ledger F-054, F-055; routine-guide web/help/who-writes-it.html',
    body: `Writing a routine by hand is the reason most people never write one. So the first screen of Routine Run takes a sentence instead, and Apple's own model turns it into steps.

That model runs on the phone. No account, no server of ours, no bill per request, and it works in airplane mode. On iOS 27 a bigger version runs on Apple's Private Cloud Compute when the phone's model isn't enough. For an app that promises "private by default", this changes what is affordable: an AI feature that used to need a backend, an API key and a privacy page now needs none of them.

## What it did well

Writing something new from one sentence. "Morning before a flight" comes back as a sensible list of steps with times, in the shape the app expects. Short, structured generation from a clear request is where a small model shines.

## Where it failed, quietly

Asked to change an existing routine, it mixed up steps in ways that were hard to notice. Nothing crashed. A step moved, a time shifted, and the result still looked like a routine.

That is the dangerous kind of failure: plausible. So on the phone, the model writes new routines only, and changes go to a bigger model. We didn't decide that from a benchmark. We decided it from watching our own task fail.

## Keep the prompt and the parser in one place

The prompt that asks the model for a routine is built from the same type that reads the answer back. And one test takes every example in the prompt and checks that it reads back into a routine.

That test doesn't judge the model. It stops a quieter bug: someone edits the prompt's example, the parser no longer accepts that shape, and the model starts producing answers the app throws away.

## If you're adding it to your app

- Pick tasks that are short and structured: write, sort, extract, rename, summarise.
- Test your own task, with your own data, before choosing between the phone, Private Cloud Compute and a bigger model.
- Design the fallback first. Phones without Apple Intelligence should get a working screen, not an empty one.
- Watch for plausible failures. Measure what changed, not only whether something came back.

What would your app do differently if every request to a model cost nothing?`
  },
  {
    slug: 'mcp-without-the-keys',
    cover: 'note-mcp-without-the-keys',
    title: 'Let AI assistants into your product without handing them the keys',
    description:
      "How Routine Run's MCP connector lets Claude read runs and act, while every change a model writes waits for a person to approve it on the phone.",
    date: '2026-10-17',
    status: 'published',
    topic: 'Mobile + AI',
    sources: 'Fact Ledger F-052; routine-guide docs/developers/api.md, web/help/assistants.html; Denys LinkedIn post on the 2026-07-28 MCP spec',
    body: `On 14 October 2026 Routine Run's MCP connector went into Claude's directory. An assistant can now read your routines and runs, start a run, move it to the next step, and write a new routine for you.

The interesting part isn't what it can do. It's the line between what it does at once and what it only proposes.

## Undo decides

Starting, pausing and moving a run happen immediately. Each of those can be undone with one tap, so asking first would only add friction.

Writing a routine, or changing one, is different. The model's version arrives on the phone as a suggestion, shown in full, and the person saves it or throws it away. The tools are even named that way: propose a new routine, propose a change.

The rule fits in one sentence: the machine does what can be undone, the person decides what cannot. It works the same whether the caller is a person, a script or an AI agent.

## Read less than you could

Notes and values people type into a run stay hidden from assistants unless the person turns on reading them. An assistant planning your week needs to know which runs happened, not what you wrote in them.

## Sign-in without a password

There is no account to sign in to. The assistant shows a code, and you type it on your phone, the way you pair a TV. The phone stays the source of truth; the server in between carries messages and keeps no event bodies.

## One thing that will bite people

The MCP spec revision of 28 July 2026 removed sessions: no handshake, no session ID header, any request can land on any server. Good for scaling. But if your tracing groups calls by session ID, that key is gone. Group by the user and the tool call instead, before you upgrade.

## If you're building a connector

- Split tools into "acts" and "proposes" by one test: can the person undo it in one tap?
- Expose the least data the assistant needs, and let people opt into more.
- Trace every call with the reason it was made.

What's the first action in your product you'd let an assistant take without asking?`
  },
  {
    slug: 'ai-interview-dropped-facts',
    cover: 'note-ai-interview-dropped-facts',
    title: 'Our AI interview was losing facts clients gave it. 18 of 19 came back',
    description:
      'Three fixes from the Structed AI interview: a safety net that matched the wrong thing, a question asked until the turn limit, and a trace lookup that made replies take a minute.',
    date: '2026-10-17',
    status: 'published',
    topic: 'AI interviews',
    sources: 'LinkedIn Experience (Structed) public numbers only: 18 of 19, 20–60 s to 1–13 s, a quarter fewer turns. Mechanisms from structed-app docs; approved by Denys and Marina on 17 Oct 2026',
    body: `An AI interview has one job that matters more than sounding smart: whatever the client said must end up in the requirements. In Structed, some of it didn't.

A client would mention their budget, their deadline, a competitor they hate. The conversation went well. And the requirements at the end were missing one of those facts.

## The safety net that matched the wrong thing

There was a check for exactly this: after the requirements were written, a second step looked for facts from the conversation that didn't make it in, and put them back.

It compared facts by their first few characters. So a fact phrased differently in the requirements looked missing, and a different fact that happened to start the same way looked present. We switched to comparing the words that carry the meaning. Of 19 facts that had genuinely gone missing, 18 came back, and the requirements got shorter, because fewer duplicate lines were pushed in.

## The question asked until the turn limit

"I'll send it later" is an honest answer. The agent treated it as incomplete and asked again. And again, until the section hit its turn limit.

Now a second identical partial answer settles the field: it's recorded as "will send later" and the interview moves on. Interviews became a quarter shorter, with no topic asked twice, and the facts collected stayed the same.

## The minute-long reply

Early on, replies took 20 to 60 seconds. The model wasn't slow. Every turn, the code looked up the trace of the whole conversation so far, and that lookup grew with each turn. Prompts were also fetched fresh on every call.

We removed the lookup and cached the prompts. Replies dropped to 1 to 13 seconds with tracing still on.

## What these have in common

None of them was a model problem. Each was ordinary code around the model, failing quietly. You find those by running the interview end to end with test clients, again and again, and reading what came out, not by improving the prompt.

What's failing quietly around the model in your system?`
  },
  {
    slug: 'the-translation-tax',
    cover: 'note-the-translation-tax',
    title: 'The translation tax: when half the work is understanding what the client meant',
    description:
      "Marina Shmayger found her £60 hourly rate was really £20. The missing hours went to translating what clients meant. That's the problem an AI interview takes on.",
    date: '2026-10-17',
    status: 'published',
    topic: 'AI interviews',
    sources: "Marina Shmayger's public LinkedIn posts (rate story; hiring a scriptwriter, editor, methodologist). Approved by Denys and Marina on 17 Oct 2026",
    body: `Marina Shmayger, who founded Structed, once tracked a month of her consulting hours. She charged £60 an hour. Her real rate, she found, was about £20.

The work clients paid for took an hour. Around it sat the unpaid part: messages to work out what the client needed, writing the right questions, turning the answers into something usable, then the follow-ups. She raised her rates several times. It didn't help, because the unpaid part grew with every client.

## It runs in both directions

The same thing happened when she was the client. She tried to hire a scriptwriter and got a wall of questions in a messenger. With an editor, a pleasant forty-minute call ended with her realising she'd have to write it all down anyway. Each time she did the work herself, because explaining it cost more than doing it.

So the freelancer loses hours and the client loses patience, and the work still comes out wrong.

## Why a form doesn't fix it

The obvious answer is a questionnaire. People skip it, or fill it with what they think you want to hear. A form can't ask a follow-up when an answer is vague, and it can't tell that "something modern" means three different things to three clients.

An expert can. That is why the translation is expensive: it needs judgement, and judgement doesn't scale.

## What an AI interview takes on

The repeated part. The agent asks one question at a time in the client's own words, follows up when an answer is vague, records "I don't know" instead of pushing, and hands the expert structured requirements instead of a transcript.

What it should not take on is the judgement about which questions matter. That stays with the expert, who edits what the agent asks without a developer. Otherwise you've automated the questionnaire, and you're back where you started.

How much of your week goes to working out what a client actually meant?`
  },
  {
    slug: 'before-you-automate',
    cover: 'note-before-you-automate',
    title: "Writing it down doesn't mean it has left your head",
    description:
      'Why most processes fail at automation: they were written down but never run. Do it, understand it, refine it, and only then automate the steps that earned it.',
    date: '2026-10-17',
    status: 'published',
    topic: 'Process',
    sources: "Denys's LinkedIn post (2 weeks before 17 Oct 2026); Routine Run methodology principles 3 and 16",
    body: `For years I had calendars, to-do lists, reminders and automations. Each held its piece just fine. But when several things ran at once (a handoff at work, an on-call incident, packing for a trip) I was still the one holding the connections between them.

Writing everything down hadn't taken it out of my head. It had only made a copy.

## A list isn't a process

A list tells you what exists. A process knows which step you're on, what comes next, what depends on what, and what happened last time. The gap between the two is exactly the part that stays in someone's head. And it's the part that breaks the week that person is away.

## The order that works

- **Do it.** Run the process for real, with steps on a screen instead of in memory.
- **Understand it.** See what actually happened: which steps were skipped, which took three times longer, where someone had to ask.
- **Refine it.** Keep what mattered, cut what didn't, and run it again.
- **Then automate** the steps that have become predictable. Only those.

Most automation projects start at the last step. They take a process that was never run with a shape, wire it to tools, and automate the chaos faster.

## A guide, not an autopilot

With AI moving this fast, many tools try to put people on autopilot. I don't think that's the answer. The system should carry the order, the timing and the memory of last time. It should do what can be undone on its own, and ask before anything that can't.

That's how Routine Run works, and it's how we build for clients: first the process gets a form people can run, then AI takes the steps that earned it.

Which process in your business has been written down, but never actually run from the page?`
  },
  {
    slug: 'watch-it-back',
    cover: 'note-watch-it-back',
    title: 'Record it, watch it back, rebuild: the loop behind a pitch and an AI agent',
    description:
      'At the Grishin Robotics accelerator, founders pitched, got recorded and watched themselves back every week. The same loop is how you improve an AI agent.',
    date: '2026-10-17',
    status: 'published',
    topic: 'AI interviews',
    sources: "Marina Shmayger's public LinkedIn posts on Grishin Robotics cohort 4; Grishin Robotics public posts (22 teams, 30 days, demo day 17 Sep, 22 Bishopsgate). Approved by Denys and Marina on 17 Oct 2026",
    body: `In late August 2026, Structed joined cohort 4 of the Grishin Robotics accelerator in London: 22 teams, 30 days, and a demo day on 17 September with three minutes each on stage.

Marina, Structed's founder, said the most useful part of the program wasn't the advice. It was a loop: pitch, get recorded, get feedback, watch yourself back. Rewatching, she could see exactly where the story broke: where she'd piled on details, and where something perfectly clear in her head wasn't clear to anyone else.

## The same loop, for an agent

An AI agent has the same blind spot as a founder rehearsing alone. It sounds fine from the inside. You only see where it breaks when you watch a full run from the outside.

So the agent gets its own version of the loop:

- **Pitch:** run a whole interview with a test client, a persona with known facts, written from scratch or copied from a real conversation, mistakes included.
- **Record:** keep the full trace, every question, every answer, every decision.
- **Feedback:** score it against what the persona knew. Which facts made it into the requirements, which questions were wasted.
- **Watch it back:** read the transcript like a stranger would, and fix what broke.

Then run it again, and compare run against run.

## Why it beats tuning the prompt

Tuning a prompt against one example feels productive and rarely is. A loop over whole runs shows you the problems that only appear in sequence: a question asked twice, a fact given early and lost late, an answer that's fine alone but wrong in context.

That's also why the loop has to be cheap to repeat. If running it takes a day, you'll do it before demo day and never again.

When did you last watch a full run of your agent from start to finish?`
  }
];

export const visibleNotes = () =>
  NOTES.filter((n) => n.status === 'published' || __SHOW_DRAFTS__).sort((a, b) => b.date.localeCompare(a.date));
