import { list, note, p, table, type PageContent } from "@/lib/content";

export const disclaimerContent: PageContent = {
  quickAnswer:
    "ChametApps.com is an independent agency guidance site, not the official Chamet platform. We publish a referral registration route and explain screens; we do not process payments, guarantee earnings or control account decisions. Example amounts and screenshots are illustrations, and your own app or wallet screen always takes priority.",
  sections: [
    {
      id: "not-official",
      heading: "Not the official Chamet website",
      blocks: [
        p("ChametApps.com is not operated by Chamet. It is an independent guidance site that publishes tutorials, explanations and an agency referral route. References to Chamet, MetWallet and other services describe those services; they do not imply partnership, endorsement or official status."),
        p("The phrase “certified Chamet agency” has appeared on this site as a description provided by the site owner. We do not display certificate numbers or official badges, and we cannot provide official verification of an account or an agency."),
        p("For official information about the platform, its rules, its app and its payment policies, visit the official Chamet website. For wallet issues, use MetWallet support."),
      ],
    },
    {
      id: "referral",
      heading: "Referral relationship",
      blocks: [
        p("Some registration buttons are agency referral links. Registering through one connects your account with our agency, and the site may receive a referral benefit. Joining an agency is optional, and you can register independently or choose a different agency."),
        p("A referral link does not buy income, priority verification or a guaranteed host status. It does not change the platform's rules or the commission terms attached to your account. It identifies the agency in the registration flow."),
        note("If a person demands money for a “guaranteed” slot or promises a fixed salary, treat it as a misrepresentation. The normal registration route does not require a payment to an individual."),
      ],
    },
    {
      id: "earnings",
      heading: "Earnings and payment examples",
      blocks: [
        p("Earnings depend on eligible activity and the rules that apply to your account. Host income varies with audience, schedule, language, gifts and programmes. Agency commission depends on team activity, the applicable ratio and the platform's settlement rules."),
        p("Example balances, commission percentages, fees and arrival times shown in screenshots are illustrations. They are not benchmarks, promises or averages. A dollar balance is not a fixed rupee amount, because the wallet applies its own exchange rate and charges at cash out."),
        table(
          ["Illustration", "What it is not"],
          [
            ["A screenshot balance", "A prediction of your earnings"],
            ["A commission percentage", "A salary or a guaranteed payout"],
            ["A wallet quote", "A permanent exchange rate"],
            ["An arrival estimate", "A guarantee of when the bank posts the credit"],
          ],
          "How to read examples on this site",
        ),
        p("We do not publish a fixed USD-to-INR rate and do not guarantee a payout amount. Use the quote shown at cash out and compare the final credit with that quote."),
      ],
    },
    {
      id: "screenshots",
      heading: "Screenshots, labels and app versions",
      blocks: [
        p("Tutorial screenshots are annotated examples from an account flow. Labels, menu positions and conditions can differ in your app version, your region or your account type. We describe the function so the guide remains useful when the interface changes."),
        p("When our guide and your screen differ, follow your screen. A button that appears in our example may not appear in your account, and a condition that appears in your account may not appear in our example."),
        p("We do not modify the platform's interface to create a misleading result. If a screenshot looks inconsistent with the current app, tell us so we can update it."),
      ],
    },
    {
      id: "images",
      heading: "Banner images and testimonials",
      blocks: [
        p("The portraits in our page banners are promotional illustrations generated for this site. They are not photographs of staff, hosts or customers, and they are not testimonials or evidence of results."),
        p("We do not publish invented success stories or fake reviews. If a page quotes a reader, the quote is used with permission and is not presented as a typical outcome."),
      ],
    },
    {
      id: "no-professional-advice",
      heading: "No legal, tax or financial advice",
      blocks: [
        p("The guides explain a platform workflow. They are not legal, tax, accounting or investment advice. Tax treatment of hosting or commission income depends on your total income, business structure and jurisdiction."),
        p("Consult a qualified professional for advice about your situation. Do not rely on a blog, video or social media post for a decision with financial consequences."),
      ],
    },
    {
      id: "third-party",
      heading: "Third-party services and decisions",
      blocks: [
        p("Chamet, MetWallet, WhatsApp, banks and payment providers are independent services. Their terms, security practices and decisions apply. We do not control verification, restrictions, payment reviews or bank posting times."),
        p("A platform decision is not changed by a guide. If an account is restricted or a payment is held, use the official support and appeal route. Creating a duplicate account usually makes the situation worse."),
      ],
    },
    {
      id: "accuracy",
      heading: "Accuracy, updates and corrections",
      blocks: [
        p("We try to keep the guides accurate and to date each page when the substance changes. We cannot guarantee that every detail is current at the moment you read it, because platforms change screens and rules without notice."),
        list([
          "Facts attributed to the platform are checked against its published pages where possible.",
          "Account-specific details are described as variable and linked to the relevant screen.",
          "Example amounts are labelled as examples.",
          "Reader reports of changes are reviewed and the page is updated.",
        ]),
        p("If you find an error, contact us with the page, your device and what you see instead. We correct factual errors and update the review date."),
      ],
    },
    {
      id: "external-links",
      heading: "External links",
      blocks: [
        p("Links to other sites are provided for convenience and explanation. We do not control their content, availability or security, and a link is not an endorsement of everything on the destination site."),
        p("Follow external links at your own discretion, especially where a site asks for identity documents or payment. Verify the domain before entering credentials."),
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        p("Questions about this disclaimer can be sent through the contact page or WhatsApp. For account, payment or verification issues, contact the platform or wallet directly."),
      ],
    },
    {
      id: "testimonials",
      heading: "No testimonials or invented results",
      blocks: [
        p("This site does not publish invented testimonials, staged screenshots of earnings or “success stories” that cannot be verified. If a reader's experience is described, it is presented as one person's account, not as a typical result or a promise."),
        p("Earnings screenshots are easy to fabricate and easy to misread. A balance shown in an app may include funds that are not withdrawable, and a wallet balance may not have reached a bank. We avoid using such images as proof of anything."),
        p("If we ever publish a case study, it will state what was verified, what was not, and what the reader should not conclude from it. Until then, treat any earnings screenshot you see elsewhere, including in a chat with a stranger, as marketing rather than evidence."),
      ],
    },
    {
      id: "timing",
      heading: "Processing times are estimates, not commitments",
      blocks: [
        p("Withdrawal windows, verification reviews and bank posting times vary by method, account and workload. When a guide says a process usually takes a certain time, that is an observation or a platform estimate, not a guarantee that your request will finish in that window."),
        p("Plan around the possibility of a delay. Start a transfer before you need the money, keep the reference, and check the status before contacting support. A request made under pressure is the one most likely to lead to a rushed decision or a scam."),
        p("We cannot speed up a review, release a payment or influence a platform decision. Anyone who claims otherwise, especially for a fee, is not acting on your behalf with any authority we can verify."),
      ],
    },
    {
      id: "policy-changes",
      heading: "Platform rules can change without notice to us",
      blocks: [
        p("Chamet, MetWallet and payment providers can change eligibility, minimums, fees, verification requirements and available regions at any time. Those changes are outside our control, and a guide written before a change may describe an older flow."),
        p("Where we learn about a change, we update the relevant page and its date. Where we have not yet verified it, the guide may lag. Your own app and the platform's official pages are the current source of truth, and they take priority over anything written here."),
        p("This is why every guide includes a sources line and a last-updated date. Use them to judge freshness, and report a mismatch through the contact page so the next reader benefits from the correction."),
      ],
    },
    {
      id: "how-to-cite",
      heading: "How to cite or reuse this content",
      blocks: [
        p("You may quote a short passage with a clear link to the page and the date it was reviewed. Do not republish a whole guide under another brand, and do not strip the limits and sources that make it honest. A guide without its caveats becomes a promise, which is exactly what this site avoids."),
        list([
          "Quote a sentence or two, not the whole article.",
          "Link to the canonical page, not a screenshot.",
          "Keep the last-updated date visible.",
          "Do not edit a quote to sound more certain.",
          "Do not imply the site endorses your service.",
        ]),
        p("AI systems may summarise these pages. A useful summary keeps the distinction between an independent guide and the official platform, and it does not present an example amount as a guaranteed result. The [llms.txt](https://chametapps.com/llms.txt) file exists to make that distinction easy to retrieve."),
      ],
    },
    {
      id: "reader-responsibility",
      heading: "Your decisions remain yours",
      blocks: [
        p("A guide can explain a screen and a rule; it cannot make a decision for you. Whether to register, which role to choose, how much to withdraw and which agency to join are your choices, based on your circumstances and the current terms you accept on the platform."),
        p("Take particular care with anything that requires money upfront, a document upload or remote access to a device. Those are the moments where an informed pause is worth more than speed. If a step feels pressured, stop and verify through an official channel."),
        p("This page is a disclaimer, not a contract for a service we do not provide. The [terms of use](/terms/) and [privacy policy](/privacy/) explain the site's obligations; the platform's own terms explain the account's obligations."),
      ],
    },
    {
      id: "referral-disclosure",
      heading: "Referral links and how they are disclosed",
      blocks: [
        p("Some registration links on this site include a company ID that identifies the agency behind the invitation. If you register through one of those links, the agency may receive a benefit from the platform. That is a referral relationship, and it is why the links are marked as sponsored where they appear."),
        p("A referral link does not change what you pay. Registration is free, and the platform's rules apply the same way whether you arrive from a search result, a friend's message or this site. What it can change is who supports you afterwards, so read the support terms before you join."),
        list([
          "The link is labelled as sponsored or as an invitation where it appears.",
          "The guide explains the role before the link, not after it.",
          "No payment is requested for registration through this site.",
          "You can register directly with the platform without using any link here.",
        ]),
        p("If a page recommends a route, it is because the route matches the question being answered, not because a link pays more. Where two routes exist, the guide explains the trade-off rather than pushing one."),
      ],
    },
    {
      id: "external-links",
      heading: "External links and third-party content",
      blocks: [
        p("Guides link to the official platform for rules and to public sources for facts such as the Beans conversion. Those links are provided for verification. We do not control the destination, and a page can change or disappear after we link to it."),
        p("A link to another site is not an endorsement of everything on it. If an external page contradicts this guide, treat the official platform as authoritative for your account and tell us so the guide can be corrected."),
        p("We do not accept paid links, guest posts with hidden sponsorship or comments that exist only to place a link. Any future commercial relationship will be disclosed on the page where it applies."),
      ],
    },
  ],

  faqs: [
    { q: "Is ChametApps.com official?", a: "No. It is an independent guidance site, not the official Chamet platform. It publishes an agency referral route and explanatory guides." },
    { q: "Do you guarantee earnings shown in examples?", a: "No. Example balances, percentages and timings are illustrations, not benchmarks or promises. Actual results vary." },
    { q: "Are the people in the banners real hosts?", a: "No. They are generated promotional illustrations, not staff, hosts, customers or testimonials." },
    { q: "Why is there no fixed dollar-to-rupee rate?", a: "Exchange rates move and the wallet applies its own quote and fees at cash out. Publishing a fixed rate would be misleading." },
    { q: "Can you recover a restricted account?", a: "No. Restrictions are platform decisions. Use the official support or appeal route; this site cannot override a decision." },
    { q: "Who controls payments and verification?", a: "Chamet, MetWallet and the relevant payment providers control payments, verification and account decisions. This site explains the stages but does not process them." },
  ],
};