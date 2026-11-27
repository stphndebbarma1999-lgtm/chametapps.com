import { list, note, p, steps, table, type PageContent } from "@/lib/content";

export const contactContent: PageContent = {
  quickAnswer:
    "The fastest way to reach ChametApps.com is WhatsApp using the button at the bottom of any page. Tell us whether you are a host or an agency, the step you reached and the exact message on screen. We cannot access accounts, reset passwords or release payments, and we never ask for passwords, OTPs or payment passwords.",
  sections: [
    {
      id: "what-we-help-with",
      heading: "What we can help you with",
      blocks: [
        p("We answer questions about the content on this site and the ordinary Chamet workflow. If you are choosing between a host and an agency account, stuck on a registration screen, unsure which dashboard menu to open or confused by a withdrawal status, we can usually point you to the right section."),
        list([
          "Choosing between host and agency registration.",
          "Understanding an invitation link and which role it creates.",
          "Finding a screen in the agency dashboard.",
          "Understanding commission reports versus payments.",
          "Linking MetWallet and checking the masked account.",
          "Reading a pending, failed or completed payment status.",
          "Finding the right official support route for an account issue.",
        ]),
        p("We may ask you to check a specific page before replying. That is not a brush-off; the page usually contains the screenshot or table that answers the question, and reading it saves a round of messages."),
      ],
    },
    {
      id: "what-we-cannot",
      heading: "What we cannot do",
      blocks: [
        p("We are an independent guide site, not the platform. We cannot see your account, change a setting, approve a document or move money. A message asking us to “release” a payment or “verify” an account is asking for something we have no ability to do."),
        table(
          ["Request", "Who handles it"],
          [
            ["Reset a password or unlock an account", "Chamet or the agency portal support"],
            ["Approve identity or face verification", "Chamet or MetWallet, depending on the stage"],
            ["Release a pending withdrawal", "The platform or wallet that holds the request"],
            ["Change a commission rate", "The platform, under the applicable agency terms"],
            ["Recover funds sent to a wrong wallet", "The wallet and payment provider, sometimes the bank"],
            ["Recover money paid to a scammer", "Your bank and local authorities; report immediately"],
          ],
          "ChametApps.com support boundaries",
        ),
        p("We also cannot provide legal, tax or investment advice. We can explain what a document or screen says, but a qualified professional should advise on your specific situation."),
      ],
    },
    {
      id: "how-to-message",
      heading: "How to send a useful message",
      blocks: [
        p("A good first message gets a faster, more accurate reply. Put the essentials in the first two lines, then add context. Avoid sending a long story first; the stage and the error are what matter most."),
        steps([
          "Say whether you are a host, an agency or a wallet user.",
          "Name the screen and the action you were taking.",
          "Copy the exact error message if there is one.",
          "Add the time and your time zone.",
          "Include the reference number for a payment question.",
          "Attach one screenshot with personal data masked.",
          "List what you already tried.",
        ]),
        p("A template you can copy: “Hello, I am a [host/agency]. I was on the [screen] trying to [action]. The message says [exact text]. This happened at [time] IST. I already tried [steps]. Here is a masked screenshot.”"),
        note("Never send a password, OTP, payment password, full card number or identity document to us. We do not need them and cannot use them."),
      ],
    },
    {
      id: "response-times",
      heading: "Response times and availability",
      blocks: [
        p("We reply on WhatsApp as volume allows. India Standard Time is our reference, and replies are usually faster during normal daytime hours than late at night. We do not promise 24/7 coverage, and we do not use automated messages that pretend to be a person."),
        p("If your issue is urgent and involves money leaving your account without authorization, do not wait for our reply. Contact the platform or wallet support immediately, then your bank, and report the incident to the appropriate authorities. Speed matters more than a perfect explanation."),
        p("Weekends and public holidays can be slower. If you send a message outside hours, include everything in one go so we can answer when we pick it up rather than asking for details one by one."),
      ],
    },
    {
      id: "safety",
      heading: "Staying safe when you contact anyone about Chamet",
      blocks: [
        p("Scammers often pose as support, agency owners or “verification officers”. They create urgency, ask for a code and then disappear. A real support process does not need your password or OTP, and it does not ask you to pay a fee to a personal account."),
        list([
          "Check the number or handle before you share anything.",
          "Do not install remote-access apps for a helper.",
          "Do not pay a release fee to an individual.",
          "Do not forward an OTP, even to someone who says they are from support.",
          "Mask personal details in screenshots.",
          "Keep the scammer's messages as evidence.",
        ]),
        p("If you already shared a code, change your password immediately, check the linked wallet and review recent transactions. Then contact official support. Acting quickly limits the damage."),
      ],
    },
    {
      id: "official-channels",
      heading: "When to use official Chamet or MetWallet channels",
      blocks: [
        p("Use official channels for anything that requires account access: verification, restrictions, password recovery, payout review and wallet cash-out failures. We can help you phrase the question, but the platform or wallet must act."),
        p("For a payment issue, contact the surface where the request was submitted. Chamet handles the platform balance, MetWallet handles the wallet transfer and your bank handles posting after a completed transfer. Contacting the wrong team is a common reason a case stalls."),
        p("If you are not sure which team to contact, send us the stage and the status. We can tell you which route fits, even when we cannot resolve the issue ourselves."),
      ],
    },
    {
      id: "privacy",
      heading: "What we do with the information you send",
      blocks: [
        p("We use the details you send to answer your question. We do not ask for identity documents, passwords or payment credentials, and we do not need your account number. If you send a screenshot, mask names, phone numbers and balances that are not relevant to the question."),
        p("Our broader data practices are described in the [privacy policy](/privacy/). WhatsApp messages are handled by WhatsApp under its own terms, and links to other sites are governed by those sites' policies."),
        p("Please do not send sensitive information in a public comment or a group chat. A direct message with the minimum necessary detail is safer for everyone."),
      ],
    },
    {
      id: "message-templates",
      heading: "Message templates that get a faster answer",
      blocks: [
        p("A good message is short, specific and easy to route. You do not need perfect English; you need the facts in a predictable order. The templates below can be copied and filled in, and they work for WhatsApp, email or an in-app support form."),
        table(
          ["Situation", "What to include"],
          [
            ["Registration stuck", "Role, country, phone country code, exact error, where the link came from"],
            ["Login failing", "Surface (app or portal), account identifier in masked form, error text, what you tried"],
            ["Invitee missing", "Host link type, date sent, whether registration completed"],
            ["Withdrawal pending", "Reference, amount, request date, current status, wallet masked details"],
            ["Wallet cash out failed", "Wallet reference, method, quote, bank masked details, error text"],
            ["Account restricted", "Restriction message, date, case number if any, appeal already sent"],
          ],
          "What to include in a support message",
        ),
        p("Start with one line: “I need help with a pending host withdrawal.” Then the facts. Put the question at the end so it is not buried. If you are sending screenshots, send the one that shows the error first, not five images in random order."),
        p("Do not send your password, OTP or full identity number. If someone asks for them, stop and use a different channel. No legitimate support process needs a code that lets someone else sign in."),
      ],
    },
    {
      id: "escalation",
      heading: "When and how to escalate",
      blocks: [
        p("Escalation is not repetition. Sending the same message five times creates duplicate tickets and delays a real answer. Escalate when a stated window has passed, when new information appears, or when the case is clearly with the wrong team."),
        list([
          "Wait until the estimate or review window shown for your request has passed.",
          "Reply in the same thread with the reference and a short update.",
          "Add only new facts, not a repeat of the original complaint.",
          "Ask which team owns the case if you are being transferred repeatedly.",
          "Escalate suspected fraud immediately, without waiting for a window.",
          "Keep every reply and reference in one place.",
        ]),
        p("If a case has been open for weeks with no substantive answer, ask for a written status and the reason for the delay. A specific question is harder to answer with a template. “Please confirm whether the transfer has been initiated and, if not, what is blocking it” is better than “please solve my problem”."),
        p("We can help you write that message, but we cannot open a case on your behalf. Our role is to make sure you contact the right team with the right facts, not to act as an intermediary."),
      ],
    },
    {
      id: "reporting-content",
      heading: "Reporting a content error or an unsafe link",
      blocks: [
        p("If a guide is wrong, out of date or links somewhere unsafe, tell us. We treat content errors as priority work because a wrong step can cost a reader time or money. Include the page URL and the exact sentence or link."),
        p("We also want to hear about impersonation. If another site copies our name, uses our WhatsApp number or claims to be ChametApps.com, send us the URL. We cannot remove someone else's site, but we can warn readers and report the impersonation where a platform allows it."),
        p("For anything involving money already lost, contact your bank and the official cybercrime reporting route first. We are not an emergency service and cannot freeze a transfer. Our contact page is for guidance, corrections and safety reports, not for recovering funds."),
      ],
    },
    {
      id: "partnerships",
      heading: "Partnerships, press and content requests",
      blocks: [
        p("We occasionally receive requests to review a product, publish a guest article or add a link. Most are declined, because a guide site that accepts paid placements stops being a reliable guide. If a partnership is ever relevant, it must be disclosed on the page where it appears, not hidden in a footer."),
        p("Press requests should include the publication, the angle and the deadline. We can explain how the registration route works and what the site does not do. We do not provide quotes about platform revenue, user numbers or internal policies, because we do not have that data."),
        p("If you operate a legitimate agency and want to be described accurately, send the details you can verify. We do not publish rankings or “best agency” lists, and we do not remove criticism in exchange for a mention."),
      ],
    },
    {
      id: "data-in-messages",
      heading: "What happens to the details you send",
      blocks: [
        p("Messages go to a WhatsApp inbox used by the site's team. We read them to answer the question, and we may keep the conversation for a reasonable follow-up period. We do not add you to a broadcast list or sell the number."),
        p("Please avoid sending identity documents, full bank details, passwords or one-time codes. If a question cannot be answered without a detail, describe it in masked form, such as the last four digits. That is enough to explain a problem and safer for you."),
        p("You can ask us to delete a conversation. Send the request from the same number so we can find it. We may keep a record where a dispute or a fraud report requires it, and we will say so if that applies."),
      ],
    },
  ],
  faqs: [
    { q: "How do I contact ChametApps.com?", a: "Use the WhatsApp button at the bottom of any page. Include your account type, the step you reached and the exact error message. Do not send passwords or codes." },
    { q: "Do you offer phone support?", a: "Support is online through WhatsApp. We do not publish a walk-in office or a phone support line, and we do not ask readers to visit an address." },
    { q: "Can you reset my Chamet password?", a: "No. Use the recovery option on the official app or portal. We cannot access or change account credentials." },
    { q: "Can you speed up a pending withdrawal?", a: "No. We can explain the stage and help you prepare the reference, amount and destination details for the platform or wallet support team." },
    { q: "What information should I never send?", a: "Passwords, OTPs, payment passwords, full card numbers and identity documents. We do not need them, and sharing them puts your account at risk." },
    { q: "How quickly do you reply?", a: "Replies depend on volume and time of day, usually faster during Indian daytime hours. We do not promise 24/7 coverage. Urgent fraud cases should go to the platform, wallet, bank and authorities first." },
    { q: "Do you charge for help?", a: "The guides are free to read, and we do not charge for answering a basic question. Some registration links are referral links, which may benefit the site if you join through them." },
    { q: "Is ChametApps.com the official Chamet support?", a: "No. We are an independent guide site. Official account support comes from Chamet or the relevant wallet provider." },
  ],
};