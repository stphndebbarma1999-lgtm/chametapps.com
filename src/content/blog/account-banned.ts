import { list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postAccountBanned: BlogPost = {
  slug: "chamet-account-banned",
  category: "Troubleshooting",
  published: "2026-11-27",
  updated: "2026-11-28",
  readingMinutes: 7,
  excerpt:
    "A restricted or banned account is a platform decision, not an app bug. Here is how to read the notice, appeal with evidence, and avoid the paid 'unban' offers that make things worse.",
  keywords: [
    "chamet account banned",
    "chamet account suspended",
    "chamet account restricted",
    "chamet unban",
  ],
  quickAnswer:
    "Read the exact notice in the app, because a temporary restriction, a verification hold and a permanent ban are different. Appeal once, through the official support channel, with your user ID and a factual explanation. No third party can guarantee an unban, and paying one usually adds a second problem.",
  sections: [
    {
      id: "what-happened",
      heading: "Restriction, suspension or ban: which one is it?",
      blocks: [
        p("People use 'banned' for every loss of access, but the three states have different causes and different routes. The wording of the notice is the first thing to read, not the last."),
        table(
          ["State", "What it usually means", "What to do"],
          [
            ["Restriction", "One feature is paused", "Complete the requested step"],
            ["Verification hold", "Identity or age check pending", "Finish verification, then wait"],
            ["Suspension", "Temporary block after a report", "Read the reason; appeal if wrong"],
            ["Permanent ban", "Account closed for a rule breach", "One clear appeal, then stop"],
          ],
          "Types of account blocks",
        ),
        p("A hold is often resolved by doing the thing the app asked for. A permanent ban is a decision someone made. Treating them the same wastes the only appeal you may get."),
      ],
    },
    {
      id: "common-reasons",
      heading: "Why accounts actually get restricted",
      blocks: [
        p("Public rules vary by region and change over time, but the patterns behind enforcement are consistent across live platforms."),
        list([
          "The user is under 18, or the account uses someone else's identity.",
          "Content that breaks the platform's rules during a live session.",
          "Harassment, threats or hate speech in chat.",
          "Payment fraud, chargebacks or a stolen card used for coins.",
          "Multiple accounts used to game gifts or referrals.",
          "Sharing contact details to move payments off-platform.",
          "Using modded apps, emulators or automation.",
        ]),
        p("If one of those applies, the appeal is about context and intent, not about denying the rule. An honest, specific explanation has a better chance than a template that says 'please unban, I did nothing'."),
      ],
    },
    {
      id: "read-notice",
      heading: "Read the notice and save the evidence",
      blocks: [
        p("Screenshot the notice, note the date and time, and write down what you were doing when access changed. If the app shows a policy reference, keep it; support can match it to the decision."),
        p("Do not delete the app or create a new account while a decision is open. A second account can look like an attempt to evade the block, and it splits whatever history could support your case."),
        note("No support process asks for your password, an OTP or a payment to review a ban. Requests for any of those are scams, even when they arrive with a convincing screenshot."),
      ],
    },
    {
      id: "appeal",
      heading: "How to write an appeal that can be answered",
      blocks: [
        p("An appeal should be short, factual and verifiable. It should identify the account, state what you believe happened, and ask a specific question."),
        steps([
          "Use the official support route, not a number from a video.",
          "Give the account's registered phone or user ID, masked where possible.",
          "State the date access changed and the message you saw.",
          "Explain the context in three or four sentences, without excuses.",
          "Attach one clear screenshot if the notice is not visible to support.",
          "Ask what specific rule was applied, or what step would restore access.",
          "Send it once and wait for the stated window.",
        ]),
        p("Repeated appeals with the same text slow the queue and add nothing. If new information appears, reply in the same thread with the new fact and the case reference."),
      ],
    },
    {
      id: "what-not-to-do",
      heading: "What makes a ban worse",
      blocks: [
        table(
          ["Action", "Why it backfires", "Do this instead"],
          [
            ["Paying an 'unban agent'", "No third party controls moderation", "Use official support"],
            ["Creating new accounts", "Looks like evasion; splits history", "Resolve the original account"],
            ["Sending an OTP", "Hands over the account", "Never share codes"],
            ["Threatening staff", "Ends the conversation", "Stay factual"],
            ["Deleting the app", "Removes the notice and evidence", "Screenshot first"],
            ["Filing many duplicate tickets", "Slows the queue", "One ticket, then follow up"],
          ],
          "Actions that turn a block into a loss",
        ),
        p("The uncomfortable truth is that some bans are final. A clear appeal gives the best chance; after that, the useful move is to protect your money and your data rather than to keep searching for a shortcut."),
      ],
    },
    {
      id: "money",
      heading: "What happens to earnings and wallet balances",
      blocks: [
        p("A blocked account may not be able to withdraw. That is one reason to withdraw eligible balances regularly instead of letting them sit, and to keep the wallet details current."),
        p("If a balance is held, ask support in the appeal whether an eligible balance can be released. Do not send money to anyone who claims they can release it. The decision sits with the platform, and a payment to a stranger does not change it."),
        p("For agency owners, a host ban can affect reports and payouts. Record the state of each host's balance when the block appears so a later reconciliation is possible. The [agency withdrawal guide](/chamet-agency-withdrawal/) covers the payout side."),
      ],
    },
    {
      id: "prevention",
      heading: "Prevention that actually works",
      blocks: [
        p("Most bans are avoidable, and the rules are not secret: be 18 or older, use your own identity, keep content within the rules, keep payments on-platform and do not automate the app."),
        list([
          "Complete verification honestly and keep details current.",
          "Read the content rules once, properly.",
          "Never buy or use a 'verified' account from someone else.",
          "Keep one account; do not create duplicates for gifts.",
          "Withdraw eligible balances on a routine.",
        ]),
        p("If you work with an agency, ask how they handle disputes before you join. A good agency explains the platform's process; a bad one promises it can override it. The [agency vs host comparison](/blog/chamet-agency-vs-host-account/) explains the roles."),
      ],
    },
    {
      id: "timeline",
      heading: "Build a timeline support can follow",
      blocks: [
        p("A decision is easier to review when it has dates next to it. Before you write the appeal, put the last two weeks on one page: what you did, when access changed, and what you have done since."),
        table(
          ["Evidence", "What it proves", "Keep it as"],
          [
            ["Screenshot of the notice", "The exact state and wording", "Image with the date visible"],
            ["Login records", "You were the one using the account", "Screenshots of the session list, if shown"],
            ["Payment receipts", "Coins or gifts were paid for legitimately", "Masked receipt images"],
            ["App version", "You were not using a modded build", "Store listing screenshot"],
            ["Support ticket ID", "You have already reported it once", "The reference text"],
          ],
          "Evidence worth keeping for an appeal",
        ),
        p("Do not send more than the case needs. A long attachment set is slower to review than three clear images, and a document with visible card numbers is a new risk. Mask everything except the detail that matters."),
        p("If the first reply is a template, reply once with the timeline and one specific question: which rule was applied, or which step would restore access. If the answer is still a template, the decision is likely final and further messages will not change it."),
      ],
    },
    {
      id: "payment-blocked",
      heading: "If a ban also blocked a payment",
      blocks: [
        p("A block that arrives while money is in transit creates two problems: access and reconciliation. Keep them separate, because one is a moderation question and the other is an accounting question."),
        table(
          ["Situation", "What to record", "What to ask"],
          [
            ["Balance before the block", "Beans, dollar value, date", "Whether it is eligible for release"],
            ["Pending withdrawal", "Amount, status, reference", "Whether the request will complete"],
            ["Agency share", "Host, period, calculated amount", "How the report will treat it"],
            ["Wallet credit", "Date, amount, wallet used", "Whether the credit is final"],
          ],
          "Recording a balance around a block",
        ),
        p("For agency owners, the host's block does not automatically change the platform's commission calculation for the period, but it can change support timelines and reports. Note the date the block appeared and the last report you exported; that pair explains most discrepancies later."),
        p("Do not move money to a personal account to 'protect' it from a review. Transfers made during a review are harder to explain and can turn a simple hold into a pattern that looks deliberate."),
      ],
    },
  ],
  faqs: [
    {
      q: "Can I get my banned Chamet account back?",
      a: "It depends on the reason and the notice. A verification hold or a temporary suspension can be resolved; a permanent ban may be final. Appeal once through official support with a factual explanation.",
    },
    {
      q: "Can someone unban my Chamet account for a fee?",
      a: "No. Moderation decisions belong to the platform. Anyone charging a fee or asking for an OTP to 'unban' an account is a scam, even if they show screenshots.",
    },
    {
      q: "Will creating a new account fix a ban?",
      a: "No, and it can make things worse. A duplicate account can be treated as evasion and complicates recovery of the original account's balance.",
    },
    {
      q: "How long does a Chamet appeal take?",
      a: "There is no published fixed time. Send one clear appeal, note the date, and wait for the stated window before following up in the same thread.",
    },
    {
      q: "Can I withdraw my balance after a ban?",
      a: "Not always. Ask in the appeal whether an eligible balance can be released, and never pay a third party to release it.",
    },
  ],
  related: [
    { href: "/blog/chamet-customer-care-number/", label: "Official support routes" },
    { href: "/blog/chamet-host-verification-failed/", label: "Fix a failed verification" },
    { href: "/terms/", label: "Site terms and limits" },
    { href: "/chamet-help/", label: "Help by stage" },
  ],
};