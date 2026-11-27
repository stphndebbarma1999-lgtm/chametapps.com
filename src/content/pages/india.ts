import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const indiaContent: PageContent = {
  quickAnswer:
    "Chamet agency work in India is online-first. You register through an invitation link, manage hosts and agents from a browser dashboard, and receive eligible payments in US dollars through MetWallet before cashing out to rupees. There is no need to visit an office, so Chamet agency near me searches should be treated as a request for verified online support, not a local shopfront.",
  sections: [
    {
      id: "agency-in-india",
      heading: "What a Chamet agency means for users in India",
      blocks: [
        p("A Chamet agency is a management account. The agency invites hosts and other agents, supports them, and earns a commission on eligible team activity under the platform's rules. It is not a franchise, a shop or a licensed local business. The work happens through a browser dashboard, a messaging app and the Chamet app."),
        p("That distinction matters in India because agency searches often assume a physical office. Most genuine agency operators work online, across cities, with hosts they have never met in person. A agency's value is the support it provides: registration help, profile guidance, payment explanations and problem-solving when a host is stuck."),
        p("ChametApps.com publishes independent guidance and a referral registration route. We are not the official Chamet platform, and we do not employ hosts or guarantee income. The platform's own rules, the invitation terms and the dashboard figures are the authoritative source for any account."),
        table(
          ["Question", "Short answer"],
          [
            ["Is a Chamet agency a company office?", "Usually not. It is an account with management tools and a team."],
            ["Do I need to be in a metro city?", "No. The workflow is online, though language and time zone can affect support."],
            ["Does an agency pay a salary?", "No. Commission depends on eligible activity and platform rules, not a fixed salary."],
            ["Is registration free?", "The registration route itself does not charge a fee. Be cautious of anyone selling a guaranteed slot."],
            ["Can I be a host and an agent?", "The roles are separate accounts. Some people hold both, but they are managed differently."],
          ],
          "Chamet agency in India: common questions",
        ),
      ],
    },
    {
      id: "registration-route",
      heading: "How Indian users register for Chamet",
      blocks: [
        p("Registration starts with the right invitation. An agency link opens the agency registration form; a host link opens the host form. Both ask for a phone number, a verification code and a password or sign-in detail. Use a number you will keep active, because recovery and verification depend on it."),
        steps([
          "Choose the role you actually want: host or agency.",
          "Open the matching invitation link on a phone or computer.",
          "Select India and enter the phone number with the correct country code.",
          "Enter the verification code promptly.",
          "Create a strong password and store it safely.",
          "Complete the profile fields the form requests.",
          "For an agency, sign in to the browser dashboard and check My Profile.",
          "For a host, install the app and complete verification before hosting.",
        ]),
        p("A common error is opening a host link while intending to become an agent. The registration can succeed, but the account lands in the wrong role. If you are unsure which link you have, ask the person who sent it before you submit the form."),
        p("Do not pay anyone for a registration slot. The invitation route is the normal path, and a person who demands money to “activate” an account is not providing a platform service. Read the [agency registration guide](/chamet-agency-registration/) or the [host registration guide](/chamet-host-registration/) for the screen-by-screen version."),
      ],
    },
    {
      id: "near-me",
      heading: "“Chamet agency near me”: what the search can and cannot find",
      blocks: [
        p("A near me search usually means one of three things: a physical office to visit, a local person who can help in your language, or a trusted agency in your city. Chamet does not publish a chain of local offices, and this site does not invent addresses to rank for city keywords. The honest answer is that the work is online and the location matters mainly for language, time zone and trust."),
        p("If you want local-feeling support, ask a prospective agency three questions: which languages they support, which hours they respond in, and how they handle a payment problem. A team that replies in Hindi or Tamil during your working hours can feel more local than an office across town that never answers."),
        note("Be careful with anyone who claims a physical Chamet office in a city and asks for a visit fee, a registration fee or documents before explaining the process. Verify claims independently and never hand over original documents to an individual."),
        p("For a deeper checklist, read [Chamet agency near me](/blog/chamet-agency-near-me/). It explains how to verify a referral link, what a genuine agency should be able to show and which red flags are worth walking away from."),
      ],
    },
    {
      id: "cities",
      heading: "City and language context across India",
      blocks: [
        p("Hosts and agencies operate from metros, tier-2 cities and smaller towns. The platform does not require a metro address, and a host in Indore or Guwahati can build an audience as readily as one in Mumbai. What changes is the support ecosystem around them: language, internet reliability and the number of people who already understand the workflow."),
        table(
          ["Region", "Common context", "Practical note"],
          [
            ["Mumbai, Pune", "Large creator and live-streaming ecosystem", "More competition for attention; clear positioning helps"],
            ["Delhi NCR", "Multilingual audience and agency networks", "Verify the agency's process rather than its size"],
            ["Bengaluru, Hyderabad", "Tech-heavy audience and strong connectivity", "Good for testing schedules and equipment"],
            ["Chennai, Coimbatore", "Tamil-speaking hosts and viewers", "Language tags and a Tamil intro can help discovery"],
            ["Kolkata, Guwahati", "Bengali and Assamese audiences", "Time zone is the same; local language support matters"],
            ["Jaipur, Lucknow, Indore", "Growing tier-2 creator base", "Consistency beats production budget in the first month"],
          ],
          "Chamet hosting context by Indian region",
        ),
        p("These are context notes, not claims that Chamet has an office or a dedicated local team in each city. Use them to think about audience and language, not as evidence of a physical presence."),
        p("If you move cities, your account does not need to move. Update your contact details if your phone number changes, and keep your wallet and bank details consistent with your identity. A relocation should not require a new account."),
      ],
    },
    {
      id: "language",
      heading: "Language, audience and the India advantage",
      blocks: [
        p("India's language diversity is an asset for hosts. A host who speaks Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi or Odia can serve an audience that larger English-only creators may not reach. The app's language tags and your profile intro help viewers understand what to expect."),
        p("Pick one or two languages you can speak comfortably for an hour. Listing five languages to look inclusive usually backfires when a viewer speaks one you cannot sustain. A clear, honest profile builds repeat viewers; a confusing one loses them in the first minute."),
        p("Agencies can use language as a support advantage too. A team that can explain a MetWallet step in the host's first language reduces misunderstandings and support tickets. If you are choosing an agency, ask which languages the support person actually speaks, not which languages appear in a marketing graphic."),
        p("English remains useful for platform menus, policy pages and payment terms. Even a host who performs in a regional language should be able to read the verification and withdrawal prompts, or know someone trustworthy who can explain them."),
      ],
    },
    {
      id: "earnings-rupees",
      heading: "How Indian hosts and agencies receive money",
      blocks: [
        p("Chamet balances are denominated in Beans and the platform publishes a dollar conversion. The withdrawal path moves eligible funds to MetWallet, and MetWallet converts and sends rupees to a supported destination. The rupee amount depends on the rate and fees at the time of cash out, so a dollar balance is not a fixed rupee promise."),
        table(
          ["Stage", "Currency", "What it means in India"],
          [
            ["Beans or platform balance", "Beans / US$ equivalent", "Not yet money in your bank"],
            ["MetWallet balance", "US$ balance", "Arrived from Chamet; cash out still required"],
            ["Bank credit", "INR", "After conversion, fees and provider posting"],
          ],
          "Chamet money stages for Indian users",
        ),
        p("Keep records in both currencies. The platform report, the wallet quote and the bank credit are three different documents, and reconciling them is easier when you note the exchange rate and fee for each transfer. This is also useful for tax filing."),
        p("Do not rely on a fixed USD-to-INR rate from a blog or a YouTube video. Rates move, and the wallet applies its own rate. Use the quote shown at cash out and compare the final credit with that quote. The [withdrawal hub](/chamet-withdrawal/) explains each stage."),
      ],
    },
    {
      id: "verify-agency",
      heading: "How to verify a Chamet agency before you join",
      blocks: [
        p("A genuine agency should be able to explain the process without pressure, show you where the invitation link comes from and tell you what happens after registration. It should not ask for your password, promise a fixed salary or demand payment for a guaranteed income."),
        list([
          "Ask for the agency's dashboard name and confirm it matches the invitation.",
          "Check that the link opens a Chamet domain, not a look-alike page.",
          "Ask what support includes: registration, profile review, payment help, language.",
          "Ask how they handle a pending withdrawal and who contacts support.",
          "Ask whether they charge any fee, and get the answer in writing.",
          "Speak to a host who has worked with them, if possible.",
          "Never share your password, OTP or payment password.",
        ]),
        p("Red flags include guaranteed earnings, a demand for money before registration, requests for original documents, pressure to recruit family members, and a refusal to explain the commission structure. A legitimate agency can say “I do not know” and find out; a scam usually has an answer for everything."),
        p("Verification is not a one-time event. Review your dashboard reports, your wallet details and your invitee list periodically. If something changes without an explanation, ask before assuming it is normal."),
      ],
    },
    {
      id: "support",
      heading: "Online support, response times and Indian working hours",
      blocks: [
        p("Support for this site is online, primarily through WhatsApp. We answer questions about registration, the dashboard and withdrawal stages, and we explain what a screen means. We cannot access your account, reset a password, release a payment or override a platform decision."),
        p("Response times depend on volume and time of day. India Standard Time is the reference for our own replies. We do not promise 24/7 coverage, and we do not ask for passwords or codes. If a message claims to be from us and asks for either, it is not from us."),
        p("For platform decisions, use the official support route in the app or portal. For wallet issues, use MetWallet support. For bank posting delays, use your bank. Matching the issue to the right team saves time and prevents conflicting advice."),
        p("Keep your first message specific: account type, screen, error and time. A clear question usually gets a clear answer, even outside business hours."),
      ],
    },
    {
      id: "rules-tax",
      heading: "Rules, age limits and tax basics in India",
      blocks: [
        p("Chamet is an 18+ platform. Hosts should be adults and should follow the community rules on clothing, language and behaviour. Agencies should not recruit minors or encourage anyone to bypass verification. A account restriction is a platform decision, and an agency cannot override it."),
        p("Income from hosting or agency commission may be taxable in India depending on your total income and circumstances. Keep monthly records of earnings, wallet transfers, fees and bank credits. A chartered accountant can explain whether GST or other obligations apply to your situation."),
        p("This page is guidance, not legal, financial or tax advice. Platform terms can change, and state-level rules can differ. When a decision has financial consequences, verify with the platform and a qualified professional rather than relying on a social media post."),
      ],
    },
    {
      id: "choose-path",
      heading: "Should you start as a host or an agency in India?",
      blocks: [
        cards([
          { title: "Choose host if…", text: "You enjoy live conversation, can commit regular hours and want to build a personal audience. Income depends on gifts and eligible programmes." },
          { title: "Choose agency if…", text: "You are organised, can support several people and understand that commission depends on team activity, not a salary." },
          { title: "Do both if…", text: "You can manage two accounts and keep the roles separate. Do not mix host activity with agency reporting." },
          { title: "Wait if…", text: "You cannot verify the invitation, the agency cannot explain the process or anyone promises guaranteed income." },
        ]),
        p("Most beginners should start as a host to learn the app, the audience and the payment flow. An agency role adds management work: recruiting, onboarding, answering questions and reading reports. It is not a passive upgrade."),
        p("If you choose an agency, start with a small team and a clear process. A handful of active, well-supported hosts is more valuable than a large list of inactive invitees. Read [Chamet agency vs host account](/blog/chamet-agency-vs-host-account/) for a side-by-side comparison."),
      ],
    },
    {
      id: "connectivity",
      heading: "Internet, power and device realities for Indian hosts",
      blocks: [
        p("A live room depends on upload speed more than download speed. A connection that streams video comfortably may still stutter when you send video out. Test with a video call on the same network at the time of day you plan to host, not at a quiet hour when everything looks fine."),
        table(
          ["Situation", "What to plan", "Practical workaround"],
          [
            ["Shared home Wi-Fi", "Other users streaming or downloading during your slot", "Ask for a quiet window or use a wired hotspot"],
            ["Mobile data only", "Daily data limits and fair-usage throttling", "Track usage and keep a backup pack for sessions"],
            ["Frequent power cuts", "Phone battery and router downtime", "Charge fully, keep a power bank, shorten sessions"],
            ["Older phone", "Heat and memory pressure during long streams", "Shorter sessions, close background apps, remove thick cases"],
            ["Weak indoor signal", "Dropped frames and audio", "Host near a window or use a different network"],
          ],
          "Hosting setup realities in India",
        ),
        p("A backup plan is part of the setup, not an admission of failure. A charged power bank, a second network and a short opening message explaining a possible interruption make a session more resilient. Viewers forgive a brief technical pause; they are less forgiving of a host who disappears without explanation."),
        p("Do not spend heavily on equipment before you know your schedule works. A stable connection, decent light and a quiet space matter more than a professional camera. Upgrade after a month of consistent sessions, not before the first one."),
      ],
    },
    {
      id: "payment-realities",
      heading: "Rupee payouts: methods, names and fees",
      blocks: [
        p("Indian hosts usually receive rupees through a bank account or a supported wallet method offered by MetWallet. The exact methods, minimums and fees are shown in the wallet, and they can change. The important rule is that the destination account should belong to the verified wallet holder."),
        p("Name matching is a common failure point. If the wallet was verified with one spelling and the bank account uses another, a payout can be held or rejected. The same applies to a joint account, a parent's account or a business account that does not match the wallet identity. Check the details before a request, not after."),
        list([
          "Confirm the account number and IFSC digit by digit.",
          "Use an account that matches the verified name.",
          "Check the wallet's minimum and fee before confirming.",
          "Save the cash-out quote with the reference.",
          "Allow for bank posting time after a completed status.",
          "Keep the bank statement for reconciliation and tax.",
        ]),
        p("A rupee credit is usually lower than a simple dollar-times-rate calculation because the wallet applies its own rate and may charge a fee, and the bank may add its own terms. That is normal. The number to compare against is the quote you confirmed, not a rate from a news site or a YouTube video."),
        p("If a transfer fails, read the reason in the wallet before retrying. A wrong IFSC, a name mismatch and an unverified wallet need different fixes. Retrying the same details usually produces the same failure and can create duplicate requests."),
      ],
    },
    {
      id: "safety-india",
      heading: "Safety and privacy for Indian users",
      blocks: [
        p("Most scams aimed at hosts and agencies follow a familiar pattern: a message out of nowhere, a claim of urgency, a request for a code or a small payment, and a promise that everything will be resolved quickly. The details change; the shape does not."),
        table(
          ["Approach", "Warning sign", "Safe response"],
          [
            ["“Support” on WhatsApp", "Asks for an OTP or password", "Refuse; contact the official in-app support"],
            ["“Release fee” for a payout", "Payment to a personal account", "Refuse; fees are shown in the app or wallet"],
            ["“Guaranteed salary” agency", "Promises a fixed monthly income", "Walk away; commission is activity-based"],
            ["“Verification” call", "Asks you to install an app or share your screen", "End the call; no legitimate process needs remote access"],
            ["“Modified app” for more coins", "APK from a chat or mirror", "Use only the official download source"],
            ["“Local office” visit fee", "Pressure to pay before meeting", "Verify independently; do not pay to attend"],
          ],
          "Scam patterns affecting Indian hosts",
        ),
        p("Keep your personal number, address and workplace out of the live room. A separate number for hosting can reduce exposure, but it must be one you control and can recover. Do not use a family member's number for verification unless that person understands the account and can help with recovery."),
        p("If money is lost to fraud, report it quickly to your bank and to the National Cyber Crime Reporting Portal, and keep the messages and transaction references. Speed matters because a transfer can sometimes be frozen before it is withdrawn. This is general information, not legal advice."),
      ],
    },
    {
      id: "smaller-cities",
      heading: "Hosting from a smaller city or town",
      blocks: [
        p("A host does not need a metro address, a studio or a large following to start. What a smaller city can lack is a local support network: someone who has already solved a wallet problem or can explain a dashboard screen in person. That gap is where an online agency can help, if it answers honestly."),
        p("The advantages of a smaller city are real too: lower living costs, less competition for local-language audiences and a quieter environment for recording. A host who speaks a regional language confidently can reach viewers that metro-focused creators ignore."),
        list([
          "Test your connection at the hours you plan to host.",
          "Choose a quiet room with a plain background and decent light.",
          "Tell a trusted person your schedule if you host late.",
          "Keep the registered number active and the wallet details correct.",
          "Use a support channel that answers in a language you understand.",
          "Plan for power cuts with a charged power bank.",
        ]),
        p("Be careful with local “agents” who offer to manage your account for a share of earnings. Handing over control of an account or wallet is risky, and it can violate platform rules. You can accept guidance without giving someone your password or payment access."),
        p("If a local offer sounds too convenient, compare it with the checklist on this page. The absence of an office is not a red flag by itself; the presence of pressure, secrecy or a request for credentials is."),
      ],
    },
    {
      id: "language-audience",
      heading: "Language, audience and content fit in India",
      blocks: [
        p("India is not one audience. A host who speaks Hindi, Tamil, Telugu, Bengali, Marathi or another language fluently may reach viewers that an English-only host cannot. The language you use in a profile and a live room should be the one you can sustain for an hour, not the one that looks most professional."),
        table(
          ["Choice", "Advantage", "Watch out for"],
          [
            ["One language", "Clear identity and easier moderation", "Smaller audience"],
            ["Two languages", "Wider reach", "Switching can feel disjointed"],
            ["English", "Broad reach", "Competition and weaker local connection"],
            ["Regional language", "Less competition, stronger rapport", "Smaller viewer pool in some slots"],
          ],
          "Language choices for Indian hosts",
        ),
        p("Write the profile in the language you will actually speak. A mismatch between the bio and the room creates disappointed viewers and lower retention. If you plan to switch languages for different sessions, say when each one happens."),
        p("Time zone matters too. Most of India shares one time zone, which makes scheduling simpler, but viewers abroad may join at different hours. Decide whether you want to serve local evening hours or a later slot for other regions, and keep the schedule stable."),
      ],
    },
    {
      id: "support-language",
      heading: "Getting support in a language you understand",
      blocks: [
        p("Support quality depends on understanding the reply, not just receiving one. Write in the language you are most comfortable with and keep the technical terms in English if that is how the app labels them. Mixing languages is fine; clarity matters more than formality."),
        p("If a reply is unclear, ask for the same answer in one sentence or ask which screen to open. A good support agent can simplify. If the reply is a template that does not address the question, reply with the specific fact that is missing rather than starting a new thread."),
        p("Keep your own summary of the case in your language. It helps you spot when an answer changes and gives you a script if you need to escalate."),
      ],
    },
  ],
  faqs: [
    { q: "Is there a Chamet agency in India with an office?", a: "Chamet agency work is generally online. This site does not claim a physical office or a local branch. Verify any agency's claims independently and be cautious of visit fees or document requests." },
    { q: "How do I find a genuine Chamet agency near me?", a: "Look for a verifiable invitation link, a clear explanation of commission and support, and a person who answers questions without pressure. Near me searches usually point to online agencies rather than local offices." },
    { q: "Can I register for Chamet from India?", a: "Yes, Indian users can register as hosts or agencies through the matching invitation link using an Indian phone number. The available features and payment methods depend on the platform and wallet." },
    { q: "Do I need to speak English to host on Chamet?", a: "No. You can host in a language you speak comfortably. English helps with menus and policy pages, but your audience can be regional. List only languages you can sustain for a full session." },
    { q: "How much does a Chamet agency cost in India?", a: "The invitation registration route itself does not charge a fee. Be cautious of anyone selling a guaranteed slot, promising fixed income or asking for payment before explaining the process." },
    { q: "How do Indian hosts receive Chamet payments?", a: "Eligible balances move to MetWallet in US dollars, then cash out to a supported rupee destination after conversion and fees. The wallet shows the current methods and quote." },
    { q: "Is Chamet available in Hindi?", a: "The app supports multiple languages, and hosts can speak Hindi or another Indian language in their rooms. Menu and policy availability can vary, so check the language settings in your app." },
    { q: "Can a minor join Chamet as a host?", a: "No. Chamet is an 18+ platform. Hosts must be adults and must follow the community rules. Agencies should not recruit or verify minors." },
    { q: "Do I need to pay tax on Chamet income in India?", a: "Hosting and commission income may be taxable depending on your total income and circumstances. Keep records and consult a qualified tax professional. This guide is not tax advice." },
    { q: "Is ChametApps.com an official Chamet office in India?", a: "No. ChametApps.com is an independent guidance site with a referral registration route. It is not the official Chamet platform and does not process payments." },
    { q: "Can I switch from host to agency later?", a: "The roles are separate accounts. Registering as an agency does not convert a host account into an agency account. Check the current platform options before creating a second account." },
    { q: "What should I do if an agency asks for my password?", a: "Refuse. No legitimate agency needs your password, OTP or payment password. Keep the messages and choose a different agency or the direct invitation route." },
  ],
};