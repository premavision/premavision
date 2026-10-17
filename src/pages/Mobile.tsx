import { ArrowLink, ButtonLink, Faq, PackageCard, ProductMark, PROOF, ProofLinks, Section, Stat, type Package, type QA } from '../components';
import { PageHero } from './shared';

export const MOBILE_PACKAGES: Package[] = [
  {
    name: 'Mobile AI plan',
    time: '1 week',
    price: '$2,400, credited to the build',
    highlight: true,
    body: "Where AI belongs in your app and how to ship it. Which features run on the device, which need Apple's Private Cloud Compute or a bigger model, and which App Intents go first.",
    includes: ['A written plan with a fixed price for each part', 'A working prototype of the first feature on your phone']
  },
  {
    name: 'Siri, Shortcuts and the Action button',
    time: '2 to 3 weeks',
    price: 'from $6,500',
    body: "Your five to ten most repeated actions become App Intents. One definition reaches Siri, Shortcuts, Spotlight, widgets, Control Center and the Action button.",
    includes: ['Siri phrases and Shortcuts actions', 'Tested on the oldest iOS you support']
  },
  {
    name: "A feature on Apple's on-device model",
    time: '3 to 5 weeks',
    price: 'from $9,500',
    body: 'Write, sort, summarise or plan inside your app, offline and with no cost per request. The prompt is generated from the same types that read the answer, with tests that keep them in step.',
    includes: ['A fallback for phones without Apple Intelligence', 'Measured on your real cases before we pick a model']
  },
  {
    name: 'Apple Watch app',
    time: '4 to 6 weeks',
    price: 'from $12,000',
    body: 'The part of your app people need on the move: the next step, a quick answer, a confirmation. Double Tap, complications and the Smart Stack.',
    includes: ['Works with the phone in a pocket', 'Commands queue offline and are checked before they act']
  },
  {
    name: 'An App Clip for a place or a moment',
    time: '2 to 3 weeks',
    price: 'from $6,000',
    body: 'The one task people need at a door, a counter or an event opens from a QR code, an NFC tag or a link, with nothing to install. Built from your app, with a path to the full download.',
    includes: ['Official App Clip codes to print', 'A web fallback for Android visitors']
  },
  {
    name: 'Let AI assistants use your product',
    time: '2 to 4 weeks',
    price: 'from $7,500',
    body: 'An MCP connector so Claude, ChatGPT and coding assistants can read and act in your product. Sign-in, rate limits, and changes that wait for a person to approve them.',
    includes: ['Ready to submit to Claude\'s directory and the MCP registry', 'Every call traced with its reason']
  },
  {
    name: 'A new app from zero',
    time: '10 to 16 weeks',
    price: 'from $35,000',
    body: 'An iPhone and Apple Watch app with AI inside, taken all the way to the App Store. Built the way Routine Run was built, with tests from the first day.',
    includes: ['A TestFlight beta with real users before launch', 'Accessibility built in, not bolted on']
  }
];

const LESSONS = [
  {
    title: 'Test the model on your task, not on a benchmark',
    body: "Apple's on-device model writes a new routine from one sentence well. Asked to change an existing one, it mixed up steps in ways that were hard to notice. So in Routine Run, changes go to a bigger model. We test each task before we choose."
  },
  {
    title: 'A hardware button should stay silent when it works',
    body: 'An action fired from the Action button or Control Center that pops a confirmation is a bug. Success is silent; only a failure speaks.'
  },
  {
    title: "Don't ask for a face",
    body: 'Face ID came off five actions in Routine Run. If a step can be undone, asking for a face only adds a second of friction a hundred times a day.'
  },
  {
    title: 'Shortcuts caches your actions by build number',
    body: "Change an intent and ship it under the same build, and people keep the old one. It's the kind of thing you learn once, on your own app, and never on a client's."
  }
];

const FAQ: QA[] = [
  {
    q: 'Do you work with existing apps, or only new ones?',
    a: 'Both. Most projects add AI, Siri or a Watch app to an app that already has users. We read your code first and say in the plan what we would change and what we would leave alone.'
  },
  {
    q: 'Our app is React Native or Flutter. Does this still work?',
    a: "We build in Swift and SwiftUI. App Intents, the Watch and Apple's models are native APIs, so in a cross-platform app we add them as a native module. We'll tell you on the first call if that's the right path for your app."
  },
  {
    q: "Does Apple's on-device AI send our users' data anywhere?",
    a: "The on-device model runs on the phone. Private Cloud Compute is Apple's server path with published privacy guarantees. If a task needs a third-party model, the plan says so and you decide."
  },
  {
    q: 'What about older iPhones?',
    a: 'Apple Intelligence needs a recent iPhone. We design a fallback so people on older phones get a working screen, never a broken one.'
  },
  {
    q: 'Android?',
    a: "Not today. The process design and the AI behind it carry over to Android; the Apple layer is native to Apple."
  },
  {
    q: 'Who owns the code?',
    a: 'You do, from the first commit, in your repository and your Apple developer account.'
  }
];

export default function Mobile() {
  return (
    <>
      <PageHero
        image="mobile-flow"
        eyebrow="Mobile + AI"
        title={
          <>
            Mobile apps with <span className="text-gradient">AI under the hood</span>
          </>
        }
        lead={
          <p>
            Your users carry an iPhone with a language model built in, and many wear an Apple Watch. Your app can work
            from Siri, the Lock Screen, the Action button and the wrist, and it can think on the device without sending
            data anywhere. We build that into the app you have, or build the whole app from zero.
          </p>
        }
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact/">Start with a 1-week plan</ButtonLink>
          <ButtonLink to="/mobile/#packages" variant="ghost">
            Packages and prices
          </ButtonLink>
        </div>
      </PageHero>

      <Section
        eyebrow="What Apple gives every app now"
        title="Most apps use none of it"
        lead="Four doors Apple opened for every app. Each one turns a tap people make twenty times a day into something that happens where they already are."
      >
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['An AI model on the phone', "Foundation Models run on the device: offline, free per request, private by default. Larger tasks go to Apple's Private Cloud Compute."],
            ['One definition, many surfaces', 'App Intents feed Siri, Shortcuts, Spotlight, widgets, Control Center and the Action button from one piece of code.'],
            ['The wrist', 'An Apple Watch app with Double Tap and the Smart Stack moves the work on with no phone in hand.'],
            ['Nothing to install', 'An App Clip opens one part of your app from a QR code, an NFC tag or a link.']
          ].map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3 className="text-[17px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        tone="ambient"
        eyebrow="Packages"
        title="Fixed price, agreed before we start"
        lead="Every project starts with the 1-week plan unless you already know exactly what you need. Its price is credited in full to the build."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MOBILE_PACKAGES.map((p) => (
            <PackageCard key={p.name} p={p} />
          ))}
        </div>
        <p className="mt-6 text-[14px] text-slate-400">
          Prices are per project, in US dollars, half up front and half on delivery. Bigger or unusual
          scope gets its own fixed quote after the plan.
        </p>
        <div className="mt-4">
          <ArrowLink to="/retainers/">After launch: mobile app care from $800 a month</ArrowLink>
        </div>
      </Section>

      <Section
        eyebrow="Proof"
        title={
          <span className="flex items-center gap-4">
            <ProductMark name="Routine Run" size={46} />
            Built first in Routine Run
          </span>
        }
        lead="Routine Run is Denys's own platform for processes people carry in their heads. Its app is in public beta, and it is where every package above was built and tested first."
      >
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat value="60+" label="App Intents" href={PROOF.rrIntents} />
          <Stat value="10" label="Siri phrases, 5 of them on the Watch" href={PROOF.rrSiri} />
          <Stat value="2,200+" label="automated tests" href={PROOF.linkedinExperience} />
          <Stat value="67 ms" label="day's schedule on a real phone" note="was 8.5 s" href={PROOF.linkedinExperience} />
        </div>
        <ul className="mt-8 grid gap-3 text-[15px] leading-6 text-slate-300 md:grid-cols-2">
          <li className="glass rounded-2xl p-4">
            Apple's models, on the device and on Private Cloud Compute, write a routine from one sentence. No account,
            no server of our own for it.
          </li>
          <li className="glass rounded-2xl p-4">
            On 22 September 2026 a real PagerDuty page started an on-call runbook that appeared on the Lock Screen and
            the Watch, about two seconds from event to decision.
          </li>
          <li className="glass rounded-2xl p-4">
            An MCP connector in Claude's directory: assistants read runs and propose changes, and the person approves
            them on the phone.
          </li>
          <li className="glass rounded-2xl p-4">
            Assistive Access mode shrinks the app to one large step with Next and Not now. Colour never carries
            meaning alone.
          </li>
        </ul>
        <ProofLinks
          links={[
            ['Try it on TestFlight', PROOF.testflight],
            ['App Intents', PROOF.rrIntents],
            ['Siri', PROOF.rrSiri],
            ['PagerDuty to the Watch', PROOF.rrOnCall],
            ['MCP connector', PROOF.rrAssistants],
            ['API and webhooks', PROOF.rrDevelopers],
            ['Accessibility', PROOF.rrAccess],
            ['App Clips', PROOF.rrOrgs],
            ['Changelog', PROOF.rrChanges]
          ]}
        />
        <div className="mt-8">
          <ArrowLink to="/work/">The full Routine Run story</ArrowLink>
        </div>
      </Section>

      <Section art="notes-pages" eyebrow="What building it taught us" title="Four things you won't pay us to learn">
        <div className="snap-row hide-scrollbar mt-12 grid gap-4 md:grid-cols-2">
          {LESSONS.map((l) => (
            <div key={l.title} className="glass rounded-2xl p-6">
              <h3 className="text-[17px] font-semibold text-white">{l.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-300">{l.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Questions" title="What people ask before they start">
        <Faq items={FAQ} />
        <div className="mt-12">
          <ButtonLink to="/contact/">Tell us about your app</ButtonLink>
        </div>
      </Section>
    </>
  );
}

export { FAQ as MOBILE_FAQ };
