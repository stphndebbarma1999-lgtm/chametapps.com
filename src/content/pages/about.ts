import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const aboutContent: PageContent = {
  quickAnswer:
    "ChametApps.com is an independent guide site for people registering on Chamet as hosts or agencies, mostly in India. We explain the screens, publish a referral registration route and answer questions on WhatsApp. We are not the official Chamet platform and cannot access, reset or pay out an account.",
  sections: [
    {
      id: "what-this-site-is",
      heading: "What ChametApps.com is",
      blocks: [
        p("ChametApps.com is a small independent website that explains how Chamet registration, agency management and withdrawals work. The pages are written for people who are stuck at a screen and need a plain-language explanation of what comes next."),
        p("We publish two kinds of content. The first is reference guidance: registration steps, dashboard menus, withdrawal stages and troubleshooting tables. The second is a referral registration route: if you choose to register through our invitation, you join our agency. Both are explained openly so you can decide whether either is useful to you."),
        p("The site is not a job portal, a recruitment agency in the legal sense, a payment processor or a branch of Chamet. There are no salaries, no fixed income promises and no physical offices. If a page on this site ever implies otherwise, treat it as an error and tell us."),
        table(
          ["Question", "Answer"],
          [
            ["Who runs the site?", "An independent team that publishes Chamet guidance and operates an agency referral route."],
            ["Where are you based?", "The work is online. We do not publish a walk-in office address or claim local branches."],
            ["Is this the official Chamet site?", "No. The official platform is chamet.com. ChametApps.com is separate."],
            ["Do you process payments?", "No. Chamet, MetWallet and payment providers handle money."],
            ["Do you charge for guides?", "The guides are free to read. Registration through our invitation is the referral route."],
          ],
          "ChametApps.com at a glance",
        ),
      ],
    },
    {
      id: "why-we-built-it",
      heading: "Why this site exists",
      blocks: [
        p("Chamet information is scattered across videos, group chats and copied blog posts. Much of it is outdated, and some of it is predatory. A new host is told to install a modified APK, a new agent is sold a “guaranteed” slot, and a person with a pending withdrawal is asked for an OTP by someone pretending to be support."),
        p("We built this site to put the ordinary explanation in one place: which link creates which account, what the dashboard menu contains, why a linked wallet is not a payment and what to check before contacting support. The goal is not to hype the platform. It is to help a reader make an informed decision and avoid the common traps."),
        p("That also means publishing the limits. Hosting income varies. Agency commission depends on team activity. Payments can be delayed by verification or a provider. A guide that promises otherwise is selling something, not explaining it."),
      ],
    },
    {
      id: "how-we-research",
      heading: "How we research and review our guides",
      blocks: [
        p("Our guides combine three inputs: the screens visible in a real account flow, the platform's published pages and the questions readers actually ask. We take screenshots where they help, and we describe a function when a label changes rather than pretending a menu is fixed forever."),
        steps([
          "Start from the official platform or wallet page when a fact is published there.",
          "Walk through the account flow and note the screen order, labels and conditions.",
          "Separate what the screen proves from what it does not prove.",
          "Write the guide in plain language, with the limits and the common failure points.",
          "Add the date the page was last reviewed.",
          "Revise when a reader reports a change or a source is updated.",
        ]),
        p("We do not invent statistics, certificate numbers, office addresses or income figures. When a number comes from the platform, we name the source. When a number depends on the reader's account, we say so and point to the screen that shows it."),
        p("Screenshots are illustrative. A button in our example may sit in a different place in your app version, and an amount in an example is not a benchmark. We try to describe the function so the guide remains useful when the interface moves."),
      ],
    },
    {
      id: "referral-relationship",
      heading: "How our referral registration route works",
      blocks: [
        p("Some registration buttons on this site are agency referral links. If you register as an agency or host through one, you join our agency rather than registering independently. The link identifies the agency in the registration flow; it does not change the platform's rules or create a separate app."),
        p("We may receive a referral benefit when someone joins through our link. That is how the site supports itself. We disclose it because a reader deserves to know why a button exists. The guide content is not conditional on registering, and you can read every page without using a link."),
        p("Joining an agency is optional. If you prefer to register independently or with a different agency, you can. The important thing is to use the correct role link and to understand who will support you after registration. A referral is a relationship, not a purchase."),
        note("A referral link does not buy income, priority verification or a guaranteed host status. Anyone who tells you otherwise is misrepresenting the process."),
      ],
    },
    {
      id: "what-we-dont-do",
      heading: "What we cannot do for you",
      blocks: [
        p("We cannot sign in to your account, reset a password, verify your identity, release a withdrawal, change a commission rate or reverse a platform decision. Those actions belong to Chamet, MetWallet or the relevant payment provider."),
        list([
          "We cannot see your balance, reports or wallet.",
          "We cannot speed up a pending payment or approve a KYC document.",
          "We cannot create an account for you or bypass an age or identity check.",
          "We cannot guarantee earnings, followers or acceptance into a programme.",
          "We cannot recover funds sent to a wrong wallet or a scammer.",
          "We cannot act as your legal, tax or financial adviser.",
        ]),
        p("What we can do is explain a screen, help you identify the stage, and tell you which support route fits the problem. That is often enough to unblock a registration or a payment question, but it is not the same as account support."),
      ],
    },
    {
      id: "editorial-standards",
      heading: "Editorial standards: accuracy, corrections and dates",
      blocks: [
        p("Every guide carries a last-reviewed date. The date changes when the substance changes, not automatically on a schedule. If a page says a minimum or a rule, we try to attribute it to the platform and remind you that your own screen takes priority."),
        p("We use hedged language when a detail varies by account or region: “may”, “usually”, “check your screen”. That is not vagueness for its own sake. It is an honest description of a platform where the same menu can differ between users."),
        p("If you find an error, a broken link or a screen that no longer exists, tell us through the contact page. Include the page, the device and what you see instead. We correct factual errors and update the review date when we do."),
        p("We do not publish fake author bios or invented credentials. The site is written and maintained by the team that operates the agency referral route, and the guidance reflects that hands-on experience without pretending to be an official Chamet publication."),
      ],
    },
    {
      id: "who-its-for",
      heading: "Who the guides are written for",
      blocks: [
        cards([
          { title: "New hosts", text: "People who want to understand registration, verification, profile setup and the first payout before installing anything." },
          { title: "New agencies", text: "People who want the dashboard workflow, invitation links, reports and wallet setup in one place." },
          { title: "Existing users", text: "Hosts and agents stuck on a login, a pending withdrawal or a wallet link that does not look right." },
          { title: "Indian readers", text: "Users who need rupee context, language notes and an honest explanation of online-only agency support." },
        ]),
        p("The guides assume no technical background. If a term is unfamiliar, we try to explain it the first time it appears. If a step depends on your app version, we describe the function and tell you to follow your screen."),
      ],
    },
    {
      id: "imagery-and-claims",
      heading: "About the images and the “certified agency” description",
      blocks: [
        p("The portraits in our banners are promotional illustrations generated for this site. They are not staff, hosts, customers or testimonials, and they should not be read as evidence of results. The screenshots are illustrative examples from an account flow."),
        p("The phrase “certified Chamet agency” has appeared on this site as a description provided by the site owner. We do not display certificate numbers or official badges, and we do not claim to be Chamet's official representative. If you need official confirmation of an agency's status, ask the platform."),
        p("We would rather under-claim than mislead. A reader who understands the limits of a guide is better equipped to ask the right question when something goes wrong."),
      ],
    },
    {
      id: "contact",
      heading: "How to reach us",
      blocks: [
        p("The fastest route is WhatsApp, using the button at the bottom of any page. Tell us whether you are a host or an agency, the step you reached and the exact message on the screen. Do not send passwords, OTPs or payment passwords."),
        p("For account-specific decisions, use the official Chamet support route or MetWallet support. We can help you prepare a clear question, but the platform or wallet has to answer it. The [contact page](/contact/) lists what to include and what to expect."),
      ],
    },
    {
      id: "who-writes",
      heading: "Who writes and reviews these guides",
      blocks: [
        p("The guides are written by people who have used the Chamet agency workflow and have spent time in the dashboard, the app and the wallet. They are edited for clarity, checked against official pages where those exist, and rewritten when a screen or a rule changes. We do not publish a guide about a process we have not seen."),
        p("We are a small team, not a newsroom. That means we answer questions directly and can update a page quickly, but it also means we cannot cover every country or every language. When a question is outside our experience, we say so instead of guessing."),
        p("We do not use invented author biographies, stock “experts” or fake review scores. If a page needs a specialist, such as a tax professional for income questions, we say that clearly rather than pretending to be one. That is why you will see limits stated in the middle of otherwise confident guides."),
      ],
    },
    {
      id: "funding",
      heading: "How this site is funded",
      blocks: [
        p("ChametApps.com earns a referral commission when someone registers through our invitation link and later generates eligible activity. That is the main commercial relationship behind the site. It does not change the registration fee, which is not charged by us, and it does not give us access to anyone's account or payment."),
        table(
          ["Question", "Answer"],
          [
            ["Do readers pay for the guides?", "No. All guides are free to read."],
            ["Do we charge for registration?", "No. We do not sell slots, verification or activation."],
            ["Does a referral change the advice?", "It is disclosed on every page where a registration link appears."],
            ["Do we accept paid reviews?", "No. We do not publish paid rankings or sponsored verdicts."],
            ["Do we sell personal data?", "No. See the privacy policy for what is collected."],
          ],
          "Funding and independence",
        ),
        p("Referral income is disclosed because readers deserve to know why a link exists. The alternative, hiding the relationship behind a generic “partner” label, would make the advice harder to judge. If a guide recommends waiting, checking or not registering at all, it does so even when that means no referral."),
        p("We do not accept payment to remove criticism, change a verdict or publish a positive review. If that ever changes, the page will say so before the affected content, not in a footer."),
      ],
    },
    {
      id: "corrections",
      heading: "Corrections and how to report a mistake",
      blocks: [
        p("Platforms change. A button moves, a minimum changes, a wallet adds a step. When a reader tells us something is out of date, we check it and update the page. Corrections are part of the work, not an embarrassment."),
        steps([
          "Send the page URL and the sentence that is wrong.",
          "Describe what you see on your screen instead.",
          "Add a masked screenshot if it helps.",
          "Tell us the date and the account type.",
          "We check the official source or the current flow.",
          "The page is updated with a new review date.",
        ]),
        p("We cannot accept a correction that asks us to publish unverifiable claims, guaranteed earnings or a phone number for “support”. If a change cannot be checked, it does not go on the page. That rule protects readers from confident-sounding misinformation."),
        p("If your correction is about a payment you personally experienced, we may still publish it only as a described case rather than a general rule. One transfer is not a policy, and treating it as one would mislead other readers."),
      ],
    },
    {
      id: "review-cadence",
      heading: "How often the pages are reviewed",
      blocks: [
        p("Every guide carries a last-updated date. We review the registration, withdrawal and dashboard pages when the platform changes a flow or when several readers report the same issue. Blog articles are reviewed when the underlying facts change, not on a fixed calendar for appearance."),
        p("A date is not a guarantee that every pixel matches your app version. Platforms roll out changes gradually, and two users can see different screens on the same day. If your screen differs from a screenshot description, trust your screen and tell us."),
        p("Sources are listed at the end of the guides that depend on platform rules. Where a fact comes from Chamet's own pages, we link to them. Where it comes from our experience, we say that instead of inventing a citation. That distinction is the difference between guidance and guesswork."),
      ],
    },
    {
      id: "how-we-test",
      heading: "How we test a flow before writing about it",
      blocks: [
        p("A guide starts with a real workflow, not a search result. We open the app or the portal, follow the steps a reader would follow, and note where the screen asks for something unexpected. If we cannot complete a step, we say so rather than filling the gap with a guess."),
        steps([
          "Reproduce the flow on a normal phone and a normal connection.",
          "Note the labels exactly as they appear, including small print.",
          "Check what happens when a step is skipped or repeated.",
          "Compare the result with the official platform page.",
          "Ask a second person to follow the draft without help.",
          "Fix the places where they hesitated.",
        ]),
        p("The second-person test matters. A writer who knows the flow reads over ambiguity. A reader who does not will stop at the first unclear sentence, and that pause is the most useful feedback a guide can get."),
        p("We do not claim to test every country, device or account state. When a flow depends on a review, a region or an account history we do not have, the guide says that instead of presenting one experience as universal."),
      ],
    },
    {
      id: "feedback",
      heading: "How reader feedback changes a page",
      blocks: [
        p("Reader messages are the fastest signal that something has changed. A single report is a clue; three reports about the same screen are a pattern. We check the pattern, update the page and change the review date. If the reports conflict, we describe the variation rather than picking a favourite."),
        table(
          ["Feedback", "What we do", "What we do not do"],
          [
            ["A button moved", "Update the step and the screenshot description", "Rewrite the whole guide"],
            ["A fee looks different", "Check the current screen and the quote wording", "Publish a rate from a message"],
            ["A payment failed", "Explain the stage and the checks", "Promise a refund or a timeline"],
            ["A page is confusing", "Rewrite the sentence or add an example", "Add more keywords"],
            ["A competitor is better", "Read it and note what is clearer", "Copy its paragraphs"],
          ],
          "How feedback is handled",
        ),
        p("We do not publish a correction that cannot be checked. A confident claim from a stranger is not a source, even when it matches what we expected. That rule sometimes makes us slower than a site that publishes first and corrects later, but it keeps the guides usable."),
      ],
    },
  ],
  faqs: [
    { q: "Is ChametApps.com the official Chamet website?", a: "No. ChametApps.com is an independent guide site with an agency referral route. The official platform is chamet.com, and official support must come from Chamet or the relevant wallet." },
    { q: "Who owns ChametApps.com?", a: "The site is run by an independent team that publishes Chamet guidance and operates an agency referral route. It is not owned by or operated by the Chamet platform." },
    { q: "Are the registration links on this site official?", a: "They are agency referral links that open Chamet's registration flow with an agency identifier. They are not a separate platform, and joining an agency is optional." },
    { q: "Does ChametApps.com charge for its guides?", a: "The guides are free to read. Some links are referral links, which may benefit the site if you register through them. You can read and use the guidance without registering." },
    { q: "Can ChametApps.com reset my password?", a: "No. Password recovery happens on the official app or portal. We never need your password or verification code, and we cannot change account credentials." },
    { q: "Can you help with a pending withdrawal?", a: "We can explain the stages and help you prepare the reference, amount and destination details. The actual payment review is handled by Chamet, MetWallet or the payment provider." },
    { q: "Are the people in your images real hosts?", a: "No. The banner portraits are promotional illustrations, not staff, hosts or customers, and they are not testimonials." },
    { q: "How often are the guides updated?", a: "Pages carry a last-reviewed date and are revised when the platform, wallet flow or reader reports show a material change. The date is not generated automatically." },
    { q: "Do you guarantee income from Chamet?", a: "No. Host earnings and agency commission depend on activity, eligibility and platform rules. We do not promise a salary or a fixed return." },
    { q: "How do I report an error on the site?", a: "Use the contact page or WhatsApp and include the page, your device and what you see instead. We correct factual errors and update the review date." },
  ],
};