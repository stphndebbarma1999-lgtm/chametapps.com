import { cards, list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postPending: BlogPost = {
  slug: "chamet-withdrawal-pending",
  category: "Troubleshooting",
  published: "2026-10-15",
  updated: "2026-11-26",
  readingMinutes: 9,
  excerpt:
    "A pending Chamet withdrawal is not automatically a failed one. Work through seven checks, understand the status stages, and learn when retrying makes things worse.",
  keywords: ["chamet withdrawal pending", "chamet withdrawal not received", "chamet withdrawal problem", "chamet payout pending"],
  quickAnswer:
    "Pending means the request exists but is not finalised. Check the displayed estimate, the linked wallet, the eligible amount and whether a verification step is open. Do not resubmit repeatedly. If the window passes, contact support with the reference, amount, destination and timestamps.",
  sections: [
    {
      id: "meaning",
      heading: "What “pending” actually means",
      blocks: [
        p("A pending status is a holding state. The platform or wallet has recorded the request, but it has not reached a final result. It can be normal processing, a verification check, a provider queue or a temporary service delay. Pending is not the same as failed, and it is not proof that money has been lost."),
        p("The important question is not “why is it pending?” but “which stage is pending?” A host balance moving to MetWallet, an agency commission settlement and a wallet cash out can all show a pending-like status, and each has a different owner and support route."),
        table(
          ["Stage", "What is pending", "Who owns it"],
          [
            ["Platform to wallet", "A host withdrawal or agency payment", "Chamet or the agency portal"],
            ["Wallet cash out", "A transfer from MetWallet to a bank or method", "MetWallet and its payment partner"],
            ["Bank posting", "A completed transfer not yet visible", "The destination bank"],
          ],
          "Pending status by stage",
        ),
      ],
    },
    {
      id: "seven-checks",
      heading: "Seven checks before you retry or escalate",
      blocks: [
        steps([
          "Confirm the stage and the exact status label on the screen.",
          "Read the estimate and note the submission time.",
          "Check the eligible amount; a pending balance is not withdrawable.",
          "Confirm the linked wallet or destination is the one you intended.",
          "Check whether a verification or document request is open.",
          "Look for a platform notice about maintenance or delays.",
          "Save the reference and a masked screenshot before contacting support.",
        ]),
        p("These checks take five minutes and answer most pending questions. If they reveal an incomplete verification or a wrong wallet, fix that first; a retry will not solve a prerequisite problem."),
        note("Do not submit a second request for the same balance while the first is unresolved. Duplicate requests can create multiple references and make reconciliation harder."),
      ],
    },
    {
      id: "timeline",
      heading: "A realistic way to think about timing",
      blocks: [
        p("Every request should show an estimate or a stated processing window. Use that, not a number from a forum. A short window can still be extended by a verification check, a weekend or a provider incident."),
        cards([
          { title: "Within the window", text: "Wait, keep the reference and avoid duplicate requests. Check once, not every minute." },
          { title: "Window just passed", text: "Check the destination and the status again, then contact support with the reference." },
          { title: "Well past the window", text: "Escalate with a clear timeline. Ask for a case reference and a next update time." },
          { title: "Status changed to failed", text: "Read the reason, fix the cause and retry once. Do not guess repeatedly." },
        ]),
        p("A bank can also lag behind a provider. If the wallet says completed and the bank shows nothing, allow for banking hours and then check the statement. A completed status is not the same as a posted credit."),
      ],
    },
    {
      id: "verification",
      heading: "Verification holds and why they happen",
      blocks: [
        p("A first withdrawal, a new wallet, a changed phone number or an unusually large amount can trigger a review. The platform or wallet may ask for identity details or a selfie. This is a security step, not a punishment."),
        p("Complete the request through the official app or portal. Do not send documents to an individual on WhatsApp, even if they claim to be expediting your case. A legitimate review happens inside the service, and the result appears in your account."),
        p("If a document is rejected, read the reason before resubmitting. Common reasons include blur, an expired document, a name mismatch and a photo that does not match the profile. Fix the specific issue rather than sending a different document and hoping."),
      ],
    },
    {
      id: "wrong-wallet",
      heading: "Wrong wallet, changed number, old account",
      blocks: [
        p("A pending request can be a symptom of a destination problem. If you changed your phone number, linked a new wallet or switched banks, the request may be waiting on a detail you have already forgotten. Check the masked wallet or destination shown in the account."),
        list([
          "Confirm the wallet masked in My Profile or the app.",
          "Check whether the destination name matches the wallet holder.",
          "Look for an old wallet that may still be linked.",
          "Update contact details only through the official profile, not through a chat.",
          "If funds went to a wrong account, contact support immediately; do not send a second transfer.",
        ]),
        p("Changing a wallet after a request is submitted does not redirect that request. It may affect the next one. If a payment went to the wrong wallet and that wallet belongs to someone else, recovery depends on the other account holder and the provider, and it is not guaranteed."),
      ],
    },
    {
      id: "when-to-contact",
      heading: "When and how to contact support",
      blocks: [
        p("Contact support when the stated window has passed, when a verification request is unclear, when the destination is wrong, or when the status has not changed after a reasonable follow-up. Do not contact every channel at once; duplicate tickets slow the process."),
        p("Use the support route for the stage that owns the request. Chamet or the portal for a platform balance, MetWallet for a wallet cash out, your bank for a posted-transfer issue. A message to the wrong team usually comes back as a redirect."),
        p("Include the reference, amount, destination, submission time and current status. Add one masked screenshot. State what you already tried. Ask for a case reference and a next update time so you are not left guessing."),
      ],
    },
    {
      id: "what-not-to-do",
      heading: "What not to do while a withdrawal is pending",
      blocks: [
        table(
          ["Action", "Why it hurts", "Do this instead"],
          [
            ["Resubmit repeatedly", "Creates duplicate references", "Wait for the stated window"],
            ["Share an OTP with a helper", "Hands over account control", "Never share codes"],
            ["Pay a release fee", "Classic scam pattern", "Fees appear in the app, not in chat"],
            ["Switch wallets mid-request", "Confuses reconciliation", "Resolve the current request first"],
            ["Post full screenshots", "Exposes personal data", "Mask names and numbers"],
            ["Create a new account", "Splits history and invites review", "Fix the existing account"],
          ],
          "Pending withdrawal: avoid these actions",
        ),
        p("The most expensive mistake is trusting someone who offers to “push” the payment for a fee. That person cannot access the platform's payment queue, and the fee is the actual product. Report the message and keep your credentials private."),
      ],
    },
    {
      id: "prevention",
      heading: "Preventing the next pending surprise",
      blocks: [
        p("Most pending problems are easier the second time because the account is already verified and the wallet is already linked. Keep the profile current, complete verification before you need a payout, and record each request."),
        list([
          "Keep the registered phone and email active.",
          "Link the wallet before your first payout, not during it.",
          "Check the eligible balance before submitting.",
          "Note the reference for every request.",
          "Review the wallet quote before confirming a cash out.",
          "Keep monthly records for reconciliation and tax.",
        ]),
        p("If a request is pending now, work the seven checks first. If it has failed, read [payment problem help](/chamet-help/#payment-problems). If it is a wallet cash out, use the [MetWallet guide](/metwallet-withdrawal/)."),
      ],
    },
    {
      id: "pending-timeline",
      heading: "A realistic timeline for a pending request",
      blocks: [
        p("A pending request moves through a queue. The display may not change for hours or days, and that is normal. The useful question is not “why is it not instant” but “has the stated window passed”. Comparing your request with a stranger's screenshot will only add anxiety."),
        table(
          ["Period", "What is normal", "What to do"],
          [
            ["First few hours", "Queue or automated check", "Wait; keep the reference"],
            ["First working day", "Review or processing", "Check status once"],
            ["After the stated window", "Possible delay", "Contact support with details"],
            ["After a failed status", "Needs correction", "Fix the named reason before retrying"],
          ],
          "Pending withdrawal timeline",
        ),
        p("Weekends, holidays and verification checks can extend a window. If the estimate is in working days, count working days. If it is in hours, count from the submission time, not from when you first thought about withdrawing."),
        p("Keep a note of what you did while waiting. A request that was cancelled and resubmitted is a different request, and support needs to know that before investigating the old reference."),
      ],
    },
  ],
  faqs: [
    { q: "Why is my Chamet withdrawal pending?", a: "Pending can mean normal processing, a verification check, a provider queue or a temporary delay. Identify the stage, read the estimate and avoid duplicate requests." },
    { q: "How long can a Chamet withdrawal stay pending?", a: "Use the estimate shown for your request. Timing varies by stage, method and provider. If the window passes, contact the support route that owns the request with the reference." },
    { q: "Should I cancel and resubmit a pending withdrawal?", a: "Usually no. Resubmitting can create duplicate references. Fix any incomplete verification or destination issue first, and escalate if the stated window has passed." },
    { q: "My withdrawal shows completed but my bank has nothing. Why?", a: "Completed usually means the provider marked the transfer successful, but the bank may still be posting it, or the destination may be wrong. Check the statement, then contact the provider with the reference." },
    { q: "Can support speed up a pending payment?", a: "Support can investigate and escalate, but it cannot guarantee a faster provider. Ask for a case reference and a next update time rather than repeated promises." },
    { q: "Does changing my wallet fix a pending request?", a: "No. A change affects future payments, not one already submitted. If the destination is wrong, contact support immediately and do not send a second transfer." },
    { q: "Why is verification requested during a withdrawal?", a: "A first payout, a new wallet, a changed contact detail or an unusual amount can trigger a security review. Complete it through the official app or portal." },
    { q: "What information should I send support?", a: "Reference, amount, destination, submission time, current status and one masked screenshot. List what you already tried and ask for a case reference." },
    { q: "Is a pending withdrawal a scam?", a: "Not necessarily. Pending is a normal status. A scam is more likely when someone asks for an OTP, a release fee or remote access to your phone." },
    { q: "Can I withdraw again while the first request is pending?", a: "Avoid it unless support instructs otherwise. Multiple requests for the same balance can complicate reconciliation and may be treated as duplicates." },
  ],
  related: [
    { href: "/chamet-withdrawal/", label: "Withdrawal stages explained" },
    { href: "/chamet-help/#payment-problems", label: "Payment problem help" },
    { href: "/blog/metwallet-kyc-verification/", label: "MetWallet KYC verification" },
  ],
};