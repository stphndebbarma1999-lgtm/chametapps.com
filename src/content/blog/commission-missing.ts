import { list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postCommissionMissing: BlogPost = {
  slug: "chamet-agency-commission-not-received",
  category: "Payments",
  published: "2026-11-24",
  updated: "2026-11-28",
  readingMinutes: 8,
  excerpt:
    "Commission shown as calculated is not the same as money in your wallet. Work through the period, report and wallet checks before you assume a payment is missing.",
  keywords: [
    "chamet agency commission not received",
    "chamet commission payment pending",
    "chamet agency payment problem",
    "chamet commission not showing",
  ],
  quickAnswer:
    "Check three things before treating an agency payment as missing: the report period you are looking at, whether the amount is calculated or payable, and whether the wallet linked during that period is still the wallet you are checking. Most 'missing commission' cases are a period mismatch, a provisional figure or a payout that reached an older wallet.",
  sections: [
    {
      id: "three-numbers",
      heading: "Calculated, payable and paid are three different numbers",
      blocks: [
        p("The dashboard can show a commission figure long before it becomes money. Calculated means the system has worked out a figure for the period. Payable means the figure has met the platform's conditions for payment. Paid means it has been released to the linked wallet. Only the last one should be compared with a wallet balance."),
        table(
          ["Label", "What it tells you", "What it does not tell you"],
          [
            ["Calculated", "A provisional figure exists for the period", "That it is final or eligible"],
            ["Payable", "It has met the payment conditions", "That the transfer has been sent"],
            ["Paid", "Released by the platform", "That your bank has posted it"],
            ["Adjustment", "An earlier figure changed", "That the new figure is wrong"],
          ],
          "Agency commission status labels",
        ),
        p("If you compare a calculated figure with a wallet balance, you will always find a gap. That gap is not necessarily a missing payment. Start by confirming which of the three labels applies to the amount you are looking at."),
      ],
    },
    {
      id: "period-mismatch",
      heading: "The period and time zone are the usual culprits",
      blocks: [
        p("Commission is reported for a defined period. If the report is set to the current month while the payment relates to the previous one, the numbers will not match. The same happens when a report boundary is in a different time zone from the one you assume."),
        list([
          "Confirm the exact start and end date of the report period.",
          "Check whether the period is a calendar month or a platform cycle.",
          "Compare like with like: the same period across two months.",
          "Look for a note about cut-off times near the period end.",
          "Check whether a payment included an adjustment from an earlier period.",
        ]),
        p("A payout that includes an adjustment will not equal the current month's calculated figure. Read the note attached to the payment before concluding that part of it is missing."),
      ],
    },
    {
      id: "wallet-check",
      heading: "The payment may have reached a different wallet",
      blocks: [
        p("Payments go to the wallet that was linked when the payment was processed. If the wallet was changed after the payment, the money may be sitting in the previous wallet, not the current one. This is more common than people expect, especially after a verification problem led someone to create a second wallet."),
        steps([
          "Confirm the wallet currently linked in My Profile.",
          "Check the binding date against the payment date.",
          "Sign in to any previously linked wallet and review its history.",
          "Compare the masked account number, not just the app icon.",
          "If the money is in an old wallet, cash out from there and update your records.",
          "If you cannot access the old wallet, start its recovery process before the next payout.",
        ]),
        p("Do not re-bind a wallet in the middle of a payment investigation. Each change makes the trail harder to follow. Resolve the current payment first, then decide whether the wallet needs to change."),
      ],
    },
    {
      id: "eligible-activity",
      heading: "Why the eligible base can be smaller than team revenue",
      blocks: [
        p("Commission is usually a share of an eligible base, not of every dollar that moves through the team. Some activity may be excluded, some may settle later and some may be adjusted after a review. A smaller commission is not automatically an error."),
        table(
          ["What you see", "Possible reason", "Where to check"],
          [
            ["Team revenue fell", "Fewer active hosts or lower gifts", "Host-level report for the period"],
            ["Revenue steady, commission lower", "Eligible base or ratio changed", "Commission section of the report"],
            ["One host missing", "Their activity settled late or is excluded", "Per-host figures and status"],
            ["A deduction appeared", "Adjustment or prior overpayment", "Payment note or support reply"],
          ],
          "Commission differences and where to check them",
        ),
        p("Ask for the eligible base, not just the final percentage. A ratio applied to a different base explains more than a long conversation about the rate."),
      ],
    },
    {
      id: "support-message",
      heading: "What to send support about a missing commission",
      blocks: [
        p("A message with a period, a status and a reference gets a real answer. A message with only an amount gets a request for more information. Keep it short and specific."),
        table(
          ["Detail", "Example", "Why it matters"],
          [
            ["Period", "1–31 October", "Locates the report"],
            ["Figure", "Calculated US$42.10, payable US$40.00", "Shows which number is disputed"],
            ["Status", "Paid on 5 November", "Tells support what to trace"],
            ["Wallet", "Ending 4321, linked 2 October", "Identifies the destination"],
            ["Reference", "Payment or case ID if shown", "Finds the transaction"],
          ],
          "Commission support message details",
        ),
        p("Say what you have already checked: the period, the wallet history and the payment status. That prevents a reply that repeats the checks you have done."),
        note("Never send your password, an OTP or a payment password. A support agent can locate a payment without them, and anyone who asks is a risk."),
      ],
    },
    {
      id: "late-vs-missing",
      heading: "Late, missing or withheld: how to tell the difference",
      blocks: [
        p("A late payment eventually appears. A missing payment has no trace in the destination. A withheld payment has a stated reason, such as a review or an unresolved verification. Each needs a different response."),
        list([
          "Late: status says paid, the wallet shows nothing yet, and the estimate has just passed.",
          "Missing: status says paid, enough time has passed, and neither the current nor an old wallet shows it.",
          "Withheld: a restriction, review or verification notice appears on the account.",
          "Adjusted: the paid amount differs and a note explains why.",
        ]),
        p("Do not send a second request or open a second case while a payment is being traced. It creates duplicate records and can make a simple trace look like a pattern of unusual activity."),
      ],
    },
    {
      id: "escalation",
      heading: "When to escalate, and what to say",
      blocks: [
        p("Escalate after the stated window has passed or when new information appears, such as a paid status with no destination record. Reply in the same thread with the reference and one new fact rather than starting again."),
        p("A useful escalation asks a specific question: “The payment shows paid on 5 November to wallet ending 4321, but that wallet shows no credit. Can you confirm the transfer reference and the destination used?” That is answerable. “Where is my money?” is not."),
        p("If a case has been open for weeks without a substantive reply, ask for a written status and the reason for the delay. Keep every response. A timeline of dates and references is more persuasive than repeated complaints."),
      ],
    },
    {
      id: "records",
      heading: "Records that prevent the next dispute",
      blocks: [
        p("A monthly record turns a payment question into a comparison. Note the period, team revenue, eligible base, calculated commission, paid amount and wallet used. Keep the payment reference beside it."),
        p("Reconcile the wallet and the bank separately. A wallet credit is not a bank credit, and a bank credit may be lower after fees. The [agency withdrawal guide](/chamet-agency-withdrawal/) explains the stages, and the [commission explainer](/blog/chamet-agency-commission-explained/) explains the ratio."),
        p("If you pay hosts or sub-agents from the agency wallet, record those transfers too. Mixing team money and personal spending is the fastest way to lose track of what was actually paid."),
      ],
    },
  ],
  faqs: [
    {
      q: "Why does my Chamet agency commission show zero?",
      a: "A zero can mean no eligible activity for the period, a report set to the wrong dates, or a payment that has not been calculated yet. Confirm the period first, then the status label, then the per-host figures.",
    },
    {
      q: "Does a calculated amount mean I will be paid that exact figure?",
      a: "Not necessarily. Calculated is provisional. The payable figure can differ after eligibility checks or adjustments, and the paid amount is the one that should match the wallet credit.",
    },
    {
      q: "Can commission be paid to an old wallet?",
      a: "A payment is sent to the wallet linked when it was processed. If you changed wallets, check the previous wallet's history before reporting a missing payment.",
    },
    {
      q: "How long should I wait before contacting support?",
      a: "Wait until the payment window or estimate shown for the period has passed. If the status says paid and no wallet shows the credit after that window, contact support with the period, amount and wallet details.",
    },
    {
      q: "Can ChametApps.com check my agency payment?",
      a: "No. We are an independent guide site and cannot access your dashboard, wallet or payment records. We can help you identify the stage and prepare a clear support message.",
    },
  ],
  related: [
    { href: "/chamet-agency-withdrawal/", label: "Agency withdrawal and wallet binding" },
    { href: "/blog/chamet-agency-commission-explained/", label: "How agency commission is calculated" },
    { href: "/blog/chamet-withdrawal-pending/", label: "What a pending withdrawal status means" },
  ],
};