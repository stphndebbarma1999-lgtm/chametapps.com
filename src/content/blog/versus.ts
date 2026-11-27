import { cards, list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postVersus: BlogPost = {
  slug: "chamet-agency-vs-host-account",
  category: "Agency basics",
  published: "2026-11-14",
  updated: "2026-11-26",
  readingMinutes: 8,
  excerpt:
    "Agency or host? Compare what each account does, how the income paths differ, and which questions to answer honestly before you register.",
  keywords: ["chamet agency vs host", "chamet agency account", "chamet host account", "chamet registration which one"],
  quickAnswer:
    "A host account goes live and earns from eligible room activity. An agency account invites and supports hosts or agents and earns commission on eligible team activity. Choose by the work you want to do, not by a screenshot of earnings. One person can be connected to an agency without being the agency.",
  sections: [
    {
      id: "definitions",
      heading: "The two roles in one paragraph each",
      blocks: [
        p("A host is the person on camera. The host completes a profile, goes live, talks with viewers and receives eligible gifts or programme rewards as Beans. The host's work is visible and conversational, and the schedule matters because viewers return to a familiar room."),
        p("An agency is a structure that invites and supports hosts or sub-agents. The agency account has a dashboard for invitations, team reports and commission. The agency's work is mostly behind the scenes: onboarding, answering questions, checking reports and helping people stay active and compliant."),
        note("A host can be connected to an agency and still be a host, not an agency owner. The roles are different even when the same person is involved in both."),
      ],
    },
    {
      id: "comparison",
      heading: "Side-by-side comparison",
      blocks: [
        table(
          ["Question", "Host account", "Agency account"],
          [
            ["Main activity", "Going live and talking with viewers", "Inviting and supporting hosts or agents"],
            ["Income source", "Eligible gifts and programme rewards", "Commission on eligible team activity"],
            ["Dashboard", "Host tools, balance and withdrawal", "Invitations, team reports and commission"],
            ["Verification", "Identity, age and payout details", "Account details and any platform checks"],
            ["Daily work", "Sessions, preparation, audience", "Onboarding, support, reports"],
            ["Skills that help", "Conversation, consistency, languages", "Organisation, patience, communication"],
            ["Biggest risk", "Inconsistent schedule and burnout", "Recruiting inactive people and overpromising"],
          ],
          "Chamet host vs agency account",
        ),
        p("Neither role is a shortcut. A host cannot skip the work of showing up, and an agency cannot skip the work of supporting people. The income of both depends on eligible activity and platform rules."),
      ],
    },
    {
      id: "choose",
      heading: "How to choose without romanticising either",
      blocks: [
        p("Start with what you are willing to do on a dull Tuesday. If you enjoy talking to strangers for an hour and can keep a schedule, hosting may fit. If you prefer organising, answering the same questions patiently and reading reports, an agency may fit."),
        steps([
          "Write down the work you can sustain for three months.",
          "Check whether you can meet the age and eligibility rules.",
          "Decide whether you want to be on camera.",
          "Estimate the time you can give each week.",
          "Talk to people already doing the role, not only to recruiters.",
          "Register through the route that matches the role.",
        ]),
        p("Be honest about the camera question. Some people enjoy hosting and hate the admin; others are good organisers who would dread a live room. Choosing the wrong role is not a moral failure, but it wastes weeks."),
      ],
    },
    {
      id: "income",
      heading: "How the income paths differ",
      blocks: [
        p("A host's balance grows from eligible activity in their own room. An agency's commission is a percentage of eligible team activity. Host income can be more direct but depends heavily on the host's own audience. Agency income can be more diversified but depends on other people's activity and retention."),
        cards([
          { title: "Host upside", text: "Direct connection between your session and your balance." },
          { title: "Host constraint", text: "Your time is finite and a quiet week is possible." },
          { title: "Agency upside", text: "A team can produce activity beyond one person's schedule." },
          { title: "Agency constraint", text: "You depend on onboarding and retention you do not fully control." },
        ]),
        p("Neither path guarantees a monthly figure. Anyone who presents a fixed salary for either role is misrepresenting how the platform works. For the commission mechanics, read [agency commission explained](/blog/chamet-agency-commission-explained/)."),
      ],
    },
    {
      id: "switch",
      heading: "Can you switch roles later?",
      blocks: [
        list([
          "A host who wants to build a team should ask the platform or portal about the agency route.",
          "An agency owner can usually still host, but the two dashboards and balances are separate.",
          "A host connected to an agency can leave or change agencies under the platform's rules.",
          "Creating a second account to “test” a role can complicate verification and history.",
        ]),
        p("Ask before you act. A separate account for a separate role may be allowed, but duplicate accounts created to bypass a limit are a different matter. The platform's rules and support route decide, not a social media post."),
      ],
    },
    {
      id: "myths",
      heading: "Five myths worth discarding",
      blocks: [
        table(
          ["Myth", "Reality"],
          [
            ["Agency owners do not work", "They onboard, support and report, often across time zones."],
            ["Hosts earn a fixed salary", "Host income is activity-based and varies."],
            ["An agency guarantees traffic", "No agency controls the platform's audience."],
            ["A bigger team always means more income", "Inactive members add admin, not activity."],
            ["You need an agency to host", "Agency membership is optional."],
          ],
          "Chamet role myths",
        ),
        p("The myths survive because they are useful to recruiters. A good agency will tell you what it cannot promise. A bad one will describe a lifestyle and ask for a registration before answering a question."),
      ],
    },
    {
      id: "questions",
      heading: "Questions to ask before registering",
      blocks: [
        list([
          "What exactly will you help me with in the first week?",
          "How do you explain commission and payment stages?",
          "What happens if a withdrawal is delayed?",
          "Do you ask for passwords, OTPs or identity documents?",
          "Can I speak to a current host or agent?",
          "What are the rules for leaving or changing an agency?",
          "Do you promise income or traffic?",
        ]),
        p("The answers tell you more than a banner. A team that explains stages, admits uncertainty and refuses to ask for secrets is safer than one that promises a number."),
      ],
    },
    {
      id: "next",
      heading: "Where to go next",
      blocks: [
        p("If you choose hosting, read [host registration](/chamet-host-registration/) and [host withdrawal](/chamet-host-withdrawal/). If you choose an agency, read [agency registration](/chamet-agency-registration/) and [agency withdrawal](/chamet-agency-withdrawal/)."),
        p("If you are still unsure, read [Chamet agency in India](/chamet-agency-india/) for the support model, or send a question through the contact page. A short conversation is cheaper than a wrong registration."),
      ],
    },
    {
      id: "choosing-role",
      heading: "How to choose between the two roles",
      blocks: [
        p("The choice is less about status and more about the work you want to do. A host performs; an agent organises. Both require consistency, and both depend on platform rules rather than a guaranteed income."),
        table(
          ["If you prefer", "Consider", "Because"],
          [
            ["Being on camera", "Host", "The work is live interaction and content"],
            ["Organising people", "Agency", "The work is onboarding, support and reporting"],
            ["Learning quickly", "Host first", "You see the host experience before managing others"],
            ["Building a team", "Agency", "Invitations and reports are the core tools"],
            ["A low upfront risk", "Either, without spending", "Neither role requires buying a package"],
          ],
          "Host or agency: choosing a role",
        ),
        p("You can hold both roles with separate accounts, but do not create a second account to escape a problem in the first. Duplicate accounts complicate verification and payments, and they are harder to manage than they look."),
        p("Whichever you choose, read the payment stage guide before you need money. Understanding the chain is the difference between a calm withdrawal and a panicked one."),
      ],
    },
  ],
  faqs: [
    { q: "What is the difference between a Chamet host and an agency?", a: "A host goes live and earns from eligible room activity. An agency invites and supports hosts or agents and earns commission on eligible team activity. The dashboards and work are different." },
    { q: "Do I need an agency to become a Chamet host?", a: "No. Agency membership is optional. An agency can provide onboarding and support, but you can register through the host route without joining one." },
    { q: "Can I be both a host and an agency?", a: "The roles can coexist in some arrangements, but they use separate dashboards and balances. Ask the platform or portal about the correct route before creating a second account." },
    { q: "Which role earns more?", a: "There is no reliable answer. Host income depends on room activity; agency income depends on team activity and commission terms. Both vary and neither guarantees a monthly figure." },
    { q: "Is an agency account free?", a: "Registration through the official route does not require a payment to an individual. Be cautious of anyone charging a fee for a “guaranteed” slot or prioritised approval." },
    { q: "Can I leave an agency later?", a: "Platform rules govern agency changes. Ask the portal or support about the current process before joining, and keep your registration reference." },
    { q: "Do agencies pay a salary to hosts?", a: "No. Host earnings are activity-based. An agency may support a host, but it cannot turn commission into a guaranteed salary." },
    { q: "What does an agency actually do all day?", a: "Onboarding, answering questions, checking reports, helping with verification and resolving payment or login issues. It is mostly communication and follow-up." },
    { q: "Can I register as an agency without hosting experience?", a: "Some people do, but hosting experience makes the support more credible. If you have not hosted, learn the host flow first so you can answer basic questions." },
    { q: "How do I verify an agency is legitimate?", a: "Ask for its registration details, talk to current members, check that it never asks for passwords or OTPs, and confirm that commission and payment stages are explained clearly." },
  ],
  related: [
    { href: "/chamet-agency-registration/", label: "Agency registration" },
    { href: "/chamet-host-registration/", label: "Host registration" },
    { href: "/blog/chamet-agency-commission-explained/", label: "Commission explained" },
  ],
};