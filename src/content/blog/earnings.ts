import { cards, list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postEarnings: BlogPost = {
  slug: "chamet-host-earnings-guide",
  category: "Hosting",
  published: "2026-10-28",
  updated: "2026-11-26",
  readingMinutes: 10,
  excerpt:
    "How Chamet host earnings are built from Beans and gifts, what the published US$10 withdrawal minimum means, and how to plan a realistic first month without income promises.",
  keywords: ["chamet host earnings", "chamet host salary", "how much do chamet hosts earn", "chamet host withdrawal minimum"],
  quickAnswer:
    "Chamet hosts earn Beans from eligible activity such as gifts, and Chamet publishes a conversion of 10,000 Beans = US$1 with a US$10 minimum for withdrawing an eligible balance to MetWallet. Actual earnings vary widely with audience, schedule, language and support, so no honest guide can promise a monthly figure.",
  sections: [
    {
      id: "how-earning-works",
      heading: "How host earnings are built",
      blocks: [
        p("A host's balance grows from eligible activity in the app. Gifts from viewers are the most visible source, but the app may also show programme rewards or other eligible amounts. The exact mix depends on the platform's current rules and the host's account."),
        p("The balance is displayed in Beans. Chamet's published host earnings page states that 10,000 Beans equal US$1, which gives a dollar estimate. That estimate is not a rupee promise; the wallet applies its own rate and fees at cash out."),
        table(
          ["Component", "What it means", "What it does not mean"],
          [
            ["Gifts from viewers", "Support sent during a live room", "A fixed hourly wage"],
            ["Programme rewards", "Eligible platform programmes", "A guaranteed monthly bonus"],
            ["Beans balance", "Platform units", "Money already in your bank"],
            ["Dollar equivalent", "Published conversion", "A fixed rupee payout"],
          ],
          "Chamet host earnings components",
        ),
        note("This guide does not promise income. Hosting results depend on many factors, and a quiet week is normal, especially at the start."),
      ],
    },
    {
      id: "first-month",
      heading: "A realistic first month",
      blocks: [
        p("The first month is usually about learning, not maximising. A new host is figuring out the app, the audience, the schedule and the etiquette of a live room. Treat the first few weeks as practice with real feedback rather than a test of your worth."),
        steps([
          "Complete verification and profile setup before going live.",
          "Choose two or three time slots you can keep consistently.",
          "Start with short sessions and note which ones retain viewers.",
          "Ask a friend to watch a session and report audio or video issues.",
          "Review your Beans balance weekly, not hourly.",
          "Adjust the schedule based on attendance, not anxiety.",
        ]),
        p("Consistency beats a single long marathon. Viewers build a habit of finding you at a certain time. A host who appears for two reliable hours is easier to follow than one who appears for eight unpredictable ones."),
        p("Do not compare your first week with a screenshot of someone else's best month. Screenshots are selected, often promotional and sometimes edited. Your own trend over several weeks is the only comparison that means anything."),
      ],
    },
    {
      id: "minimum",
      heading: "The withdrawal minimum and what it changes",
      blocks: [
        p("Chamet's published page currently lists a US$10 minimum for withdrawing an eligible host balance to MetWallet. At the published conversion, that is 100,000 Beans. Until the eligible balance reaches the threshold, a withdrawal request may not be available."),
        p("The minimum is a threshold, not a fee. It does not vanish from your balance, and reaching it does not guarantee a payout. Verification, wallet linking and the wallet's own cash-out rules still apply."),
        p("If you are close to the threshold, check whether all of the balance is eligible. A bonus or pending amount may not count. The withdrawal screen shows the withdrawable figure, which can be lower than the total."),
      ],
    },
    {
      id: "support",
      heading: "What good agency support looks like",
      blocks: [
        p("A host who joins through an agency should receive onboarding help, not just an invitation link. Good support covers profile setup, verification, the first live session, the withdrawal flow and what to do when a screen does not match the guide."),
        list([
          "A named contact or a consistent channel, not a rotating stranger.",
          "Answers in a language you understand comfortably.",
          "Clear explanations of commission and payment stages.",
          "No requests for passwords, OTPs or payment passwords.",
          "No promises of guaranteed income or “guaranteed traffic”.",
          "A process for escalating a payment or verification issue.",
        ]),
        p("An agency's commission comes from eligible team activity, so a good agency has a reason to help you succeed. A bad one treats recruitment as the product and disappears after registration."),
      ],
    },
    {
      id: "costs",
      heading: "Costs and practical realities",
      blocks: [
        p("Hosting has costs even when the platform is free. A reliable phone, a stable connection, lighting, a quiet space and your time all matter. Some hosts invest in a ring light or a better microphone, but equipment is not a substitute for conversation."),
        cards([
          { title: "Time", text: "The largest cost. Consistent slots are necessary, and they are unpaid until activity occurs." },
          { title: "Connection", text: "Live video needs stable upload. A cheap plan that drops mid-session costs viewers." },
          { title: "Privacy", text: "A separate number and a considered background reduce personal exposure." },
          { title: "Energy", text: "Long sessions are tiring. Short, sustainable slots beat burnout." },
        ]),
        p("Be careful with anyone selling a “host package” that promises viewers or gifts. Paid promotion can be legitimate in some contexts, but a guarantee of income is not. If a service cannot explain exactly what it delivers, it is probably selling hope."),
      ],
    },
    {
      id: "tax",
      heading: "Records, tax and the rupee gap",
      blocks: [
        p("Keep a monthly record of Beans earned, the dollar equivalent, withdrawals, wallet quotes and bank credits. If hosting becomes regular income, those records help with tax filing and with any payment dispute."),
        p("Hosting income may be taxable in India depending on your total income and circumstances. Consult a qualified professional. A wallet statement alone may not capture the full picture, so keep the platform reports too."),
        p("The rupee credit can be lower than the dollar balance because of the exchange rate, wallet fees and bank terms. Compare the credit with the cash-out quote, not with a rate from a news site. The [withdrawal guide](/chamet-host-withdrawal/) explains each step."),
      ],
    },
    {
      id: "improve",
      heading: "Small improvements that compound",
      blocks: [
        list([
          "A clear profile photo and a bio that sets expectations.",
          "A consistent opening line so new viewers know what the room is about.",
          "One or two languages you can sustain, not a long list.",
          "A schedule posted where your viewers can see it.",
          "A habit of thanking new viewers without interrupting the conversation.",
          "A boundary for personal questions and private contact.",
          "A weekly review of which sessions retained people.",
        ]),
        p("None of these guarantees income. They make the room easier to find, understand and return to, which is the part a host can control. For profile specifics, read [Chamet host profile tips](/blog/chamet-host-profile-tips/)."),
      ],
    },
    {
      id: "earnings-review",
      heading: "A monthly earnings review that takes fifteen minutes",
      blocks: [
        p("A monthly review turns a vague feeling about income into a pattern you can act on. It is not about checking the balance every day; it is about comparing the same numbers across months and noticing what changed."),
        steps([
          "Record gross Beans or gifts for the month.",
          "Convert to dollars using the platform's stated rate.",
          "Note the eligible amount and any deductions.",
          "Record the wallet payout and the bank credit separately.",
          "Compare the month with the previous two.",
          "Write one change to try next month.",
        ]),
        p("Look at consistency rather than a single peak. One unusually large gift can hide a decline in regular sessions, and one quiet week can hide growth in returning viewers. The review is a trend tool, not a scoreboard."),
        p("If a number does not match, resolve it before the next payout. A small unresolved difference becomes a large one after several months, and reconstructing old requests is much harder than checking a current one."),
      ],
    },
    {
      id: "salary-question",
      heading: "Is there a fixed Chamet host salary?",
      blocks: [
        p("No fixed monthly salary is published for hosts. Earnings come from what viewers send as gifts during live sessions, converted into Beans, minus any platform deductions and any agency arrangement you have. A month with more consistent sessions and repeat viewers can pay more than a month with one long night, and a month with a holiday break can pay less. That variability is the job, not a fault in the system."),
        p("This is why screenshots promising a set monthly figure should be read carefully. A figure can be a real result for one host in one month and still be a poor guide for you. The honest way to plan is to look at your own last two or three months, not at someone else's best week."),
        table(
          ["What people ask", "What the platform actually does", "What you should do"],
          [
            ["Is there a monthly salary?", "No published fixed salary for hosts", "Plan from your own history"],
            ["Is there a minimum guarantee?", "No guarantee is stated in the public rules", "Keep a cash buffer for slow months"],
            ["Do agencies pay a salary?", "An agency may offer support, not a guaranteed wage", "Ask for the arrangement in writing"],
            ["Can I predict next month?", "Only within a range, from past months", "Track sessions, gifts and repeat viewers"],
          ],
          "Salary expectations versus the actual earnings model",
        ),
        p("If an agency promises a fixed salary, ask who pays it, on what date, from which account and against what condition. A genuine support arrangement can be described in a sentence. A vague promise of “monthly income” usually means commission from your own gifts, described to sound like a wage."),
        p("For a month-by-month plan, use the [host withdrawal guide](/chamet-host-withdrawal/) for the payout steps and the [Beans to dollars explainer](/blog/chamet-beans-to-dollars/) for the conversion maths."),
      ],
    },
  ],

  faqs: [
    {
      q: "Does Chamet pay a fixed monthly salary to hosts?",
      a: "No fixed monthly salary is published for hosts. Earnings depend on gifts from viewers, converted through the Beans rule, minus platform deductions and any agency arrangement. Plan from your own last two or three months rather than a screenshot of someone else's best week.",
    },
    { q: "How much do Chamet hosts earn?", a: "Earnings vary widely and depend on audience, schedule, language, gifts and platform programmes. Chamet publishes a conversion of 10,000 Beans = US$1, but no honest guide can promise a monthly income." },
    { q: "Does Chamet pay hosts a salary?", a: "No fixed salary is promised. Hosts earn from eligible activity such as gifts, and the balance is converted and withdrawn through MetWallet." },
    { q: "What is the Chamet host withdrawal minimum?", a: "Chamet's published host earnings page lists a US$10 minimum for an eligible balance to MetWallet, equivalent to 100,000 Beans at the published conversion. Check your app for the current figure." },
    { q: "How long does it take to earn the minimum?", a: "There is no reliable timeline. It depends on activity, audience and consistency. Some hosts take weeks; others take longer. Treat early sessions as learning." },
    { q: "Do gifts go directly to my bank?", a: "No. Gifts contribute to a platform balance in Beans. An eligible balance is withdrawn to MetWallet, then cashed out to a supported rupee destination." },
    { q: "Why is my rupee payout lower than my dollar balance?", a: "The wallet applies an exchange rate and may charge a fee, and the bank may add its own terms. Compare the final credit with the cash-out quote." },
    { q: "Do I need an agency to host on Chamet?", a: "Agency membership is optional. An agency can provide onboarding and support, but it does not guarantee earnings. You can register through the host route directly." },
    { q: "Can I host in Hindi or another Indian language?", a: "Yes. You can host in a language you speak comfortably. Listing languages you can sustain for a full session is better than listing many you cannot." },
    { q: "Is hosting taxable in India?", a: "Hosting income may be taxable depending on your total income and circumstances. Keep records and consult a qualified tax professional. This is not tax advice." },
    { q: "What is the biggest mistake new hosts make?", a: "Inconsistent scheduling and comparing early results with promotional screenshots. A steady slot and a clear profile usually matter more than equipment." },
  ],
  related: [
    { href: "/chamet-host-registration/", label: "Host registration guide" },
    { href: "/chamet-host-withdrawal/", label: "Host withdrawal steps" },
    { href: "/blog/chamet-host-profile-tips/", label: "Host profile tips" },
    { href: "/blog/chamet-me-paise-kaise-kamaye/", label: "All three earning routes" },
  ],
};