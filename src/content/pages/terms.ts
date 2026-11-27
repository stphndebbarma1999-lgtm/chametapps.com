import { list, note, p, table, type PageContent } from "@/lib/content";

export const termsContent: PageContent = {
  quickAnswer:
    "By using ChametApps.com you agree to use the guides for personal information only. The site is independent from Chamet, the registration buttons are agency referral links, and no income, approval or payment is guaranteed. Platform decisions belong to Chamet, MetWallet and the relevant payment providers.",
  sections: [
    {
      id: "acceptance",
      heading: "Acceptance of these terms",
      blocks: [
        p("These terms govern your use of ChametApps.com. By opening a page, following a guide or using a link on the site, you agree to them. If you do not agree, please stop using the site."),
        p("The terms apply to the website and its content. They do not replace the terms of Chamet, MetWallet, WhatsApp or any other service you reach through a link. Those services have their own agreements, and you are responsible for following them."),
        p("We may update these terms when the site or the law changes. The date at the top of the page shows the latest revision. Continued use after a revision means you accept the updated terms."),
      ],
    },
    {
      id: "guidance-only",
      heading: "The content is guidance, not an instruction manual from the platform",
      blocks: [
        p("Our pages explain registration, dashboard and withdrawal steps using example screenshots and plain-language descriptions. Screens, labels, requirements, fees and timings can change and may differ for your account, your region and your app version."),
        p("When our guide and your screen differ, follow your screen. The platform, the wallet and the payment provider control the actual flow. A guide cannot override a verification requirement, a restriction or a payment decision."),
        p("We try to keep pages accurate and dated, but we do not warrant that every detail is current at the moment you read it. If you spot an error, tell us through the contact page so we can correct it."),
      ],
    },
    {
      id: "no-affiliation",
      heading: "No official affiliation",
      blocks: [
        p("ChametApps.com is not operated by Chamet. It is an independent guidance site with an agency referral route. References to Chamet, MetWallet and other services are descriptive; they do not imply endorsement, partnership or official status."),
        p("The “certified Chamet agency” description has appeared on this site as a statement provided by the site owner. We do not display certificate numbers or official badges, and we do not claim to speak for the platform."),
        p("If you need official confirmation of an account, a policy or an agency, ask Chamet directly. We cannot provide official verification."),
      ],
    },
    {
      id: "referral-links",
      heading: "Referral registration links",
      blocks: [
        p("Some host and agency registration buttons on this site are agency referral links. If you register through one, you join our agency. The link carries an agency identifier into the platform's registration flow."),
        p("We may receive a referral benefit when someone joins through our link. That does not change the platform's rules, the verification process or the commission terms that apply to your account. It also does not create a separate service or a guaranteed outcome."),
        p("Joining an agency is optional. You may register independently or choose a different agency. If you use our link, you should understand that the agency relationship is with us and that support is provided online."),
        note("A referral link is not a purchase of income, priority verification or a guaranteed host status. Treat any such promise as a misrepresentation."),
      ],
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      blocks: [
        p("You may read, print and share links to our pages for personal, non-commercial use. You may quote a short extract with attribution and a link. You may not republish substantial parts of the site as your own content or use it to mislead readers."),
        list([
          "Do not scrape the site at a rate that disrupts service.",
          "Do not attempt to access restricted systems or bypass security.",
          "Do not use the guides to defraud, impersonate or harass anyone.",
          "Do not present our content as official Chamet documentation.",
          "Do not remove attribution when quoting a substantial extract.",
          "Do not use the site to distribute malware or modified app files.",
        ]),
        p("We may restrict access or take appropriate action if the site is used unlawfully or in a way that harms other readers."),
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      blocks: [
        p("The text, layout, original graphics and code of this site belong to their respective owners. Third-party names and logos, including Chamet and MetWallet, belong to those companies and are used for identification and explanation."),
        p("Screenshots are annotated examples from an account flow. They may show interface elements owned by the platform. They are used to explain the process, not to claim ownership of the interface."),
        p("Banner portraits are promotional illustrations generated for this site. They are not photographs of staff, hosts or customers, and they are not testimonials."),
      ],
    },
    {
      id: "no-guarantees",
      heading: "No guarantees of income, approval or timing",
      blocks: [
        p("We do not promise income, followers, approval, commission rates, exchange rates, payment times or account reinstatement. Host earnings and agency commission depend on eligible activity, platform rules and factors outside our control."),
        table(
          ["Claim", "Our position"],
          [
            ["“Guaranteed salary”", "No. Hosting and commission are activity-based, not salaried."],
            ["“Approved in minutes”", "No. Verification and review times vary."],
            ["“Fixed rupee payout”", "No. The wallet's rate and fees apply at cash out."],
            ["“Official agency badge”", "We do not display official badges or certificate numbers."],
            ["“Recover a blocked account”", "We cannot override a platform decision."],
          ],
          "Claims we do not make",
        ),
        p("Examples in screenshots are illustrative. An amount in an example is not a benchmark for your account, and a step in an example may appear differently in your app version."),
      ],
    },
    {
      id: "accounts-and-passwords",
      heading: "Your account and your passwords",
      blocks: [
        p("You are responsible for the credentials of any account you create. Keep passwords, OTPs and payment passwords private. Do not share them with an agency, a helper or someone claiming to be support."),
        p("We never need your password or a verification code. If someone asks for one while claiming to represent this site, treat it as a scam and report it. The same rule applies to the platform and the wallet: a legitimate support process does not need your secret."),
        p("You are also responsible for meeting the platform's age and eligibility requirements. This site does not help anyone bypass an identity or age check."),
      ],
    },
    {
      id: "payments",
      heading: "Payments and financial services",
      blocks: [
        p("This site does not process payments, hold funds or act as a wallet. Chamet, MetWallet and the payment providers handle balances, conversions, fees and transfers. Their terms and decisions govern your money."),
        p("We do not publish a fixed USD-to-INR rate and do not guarantee a payout amount. The quote shown in the wallet at the time of cash out is the relevant figure, together with the provider's fees and the destination bank's posting."),
        p("If a payment is pending, failed or missing, contact the support route for the surface where the request was submitted. We can explain the stages but cannot release funds or reverse a transfer."),
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-party links and services",
      blocks: [
        p("Links to WhatsApp, Chamet, the agency portal, MetWallet and other sites take you to services we do not control. Their terms and privacy policies apply. We are not responsible for their content, availability, security or decisions."),
        p("A link does not imply endorsement of everything on the destination site. We link to services because they are relevant to the guide, not because we control them."),
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      blocks: [
        p("The site is provided on an “as is” and “as available” basis. To the extent permitted by law, we are not liable for indirect or consequential loss arising from your use of the site, including loss of income, account access, data or funds caused by a third-party platform, wallet or payment provider."),
        p("Nothing in these terms excludes liability that cannot be excluded under applicable law. If a jurisdiction does not allow a particular limitation, that limitation applies only to the extent permitted."),
        p("You are responsible for your own decisions about registration, hosting, agency work and payments. Read the platform's terms and, where appropriate, take professional advice before committing money or time."),
      ],
    },
    {
      id: "indemnity",
      heading: "Indemnity",
      blocks: [
        p("To the extent permitted by law, you agree to indemnify the site against claims, losses or costs arising from your misuse of the site, your breach of these terms or your violation of a third party's rights."),
        p("This does not apply to claims caused by our own unlawful conduct. It is a standard allocation of responsibility for a free information service."),
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law and disputes",
      blocks: [
        p("These terms are governed by the laws of India. Disputes are subject to the jurisdiction of the competent courts in India, unless a mandatory consumer-protection rule in your place of residence gives you a different forum."),
        p("Before starting a formal dispute, contact us through the contact page and describe the issue. Many concerns can be resolved with a clarification or a correction."),
      ],
    },
    {
      id: "severability",
      heading: "Severability and entire agreement",
      blocks: [
        p("If a provision of these terms is found unenforceable, the remaining provisions continue in effect. The unenforceable provision is limited to the minimum extent necessary."),
        p("These terms, together with the privacy policy and disclaimer, form the entire agreement between you and the site regarding use of the website. They do not replace any agreement you have with Chamet, MetWallet or another service."),
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        p("Questions about these terms can be sent through the contact page or WhatsApp. Include the page and the issue so we can respond accurately."),
        p("For account, payment or verification decisions, contact the relevant platform or wallet. Those organisations control the action, and this site cannot act on your behalf."),
      ],
    },
    {
      id: "eligibility",
      heading: "Who may use this site",
      blocks: [
        p("This site is intended for adults who can form a binding contract in their jurisdiction. Chamet hosting and agency participation have their own minimum age, which the platform sets and enforces. If you are below the applicable age, do not register and do not send us personal information."),
        p("By using the site you confirm that you are legally able to accept these terms and that you are not barred from using such services under the laws that apply to you. If you use the site on behalf of an organisation, you confirm that you have authority to accept these terms for it."),
        p("We may restrict access where we believe the site is being used for fraud, impersonation, harassment or unlawful recruitment. That restriction does not affect any rights you may have under mandatory consumer law."),
      ],
    },
    {
      id: "changes",
      heading: "Changes to the site and to these terms",
      blocks: [
        p("Guides are updated as platforms change. Pages may be edited, merged, moved or removed, and URLs may redirect to a newer guide. We try to keep redirects permanent and internal links current, but a bookmarked page can still change over time."),
        p("These terms may be updated to reflect a new feature, a legal requirement or a clearer explanation. The revised version takes effect when it is published on this page, and the last-updated date changes. Continued use after that date means you accept the revised terms."),
        p("If a change materially affects how we handle personal data, the privacy policy will describe it and, where appropriate, we will ask for consent rather than relying on continued use."),
      ],
    },
    {
      id: "termination",
      heading: "Ending use and surviving obligations",
      blocks: [
        p("You may stop using the site at any time. We may suspend or end access if these terms are breached, if a legal obligation requires it, or if continuing to serve the site would expose readers or us to harm."),
        p("Sections that by their nature should survive termination, including intellectual property, disclaimers, limitation of liability and indemnity, continue to apply after you stop using the site. Ending use does not cancel obligations that arose before it."),
        p("If you believe access was restricted in error, contact us with the details. We will review the decision, but we do not guarantee reinstatement."),
      ],
    },
    {
      id: "notices",
      heading: "Notices and how we communicate",
      blocks: [
        p("We communicate through the contact channels listed on the contact page and, where a reader has started a conversation, through that same channel. We do not send marketing broadcasts, and we do not ask for passwords or codes."),
        p("A notice to us should include your name, the page or issue concerned and a way to reply. A notice that cannot be verified may not receive a substantive response, particularly where it asks us to publish claims about a named person or business."),
        p("Formal legal notices should be sent in writing to the contact address published on the contact page, marked for legal attention. Ordinary questions about a guide can go through WhatsApp and will usually be answered faster."),
      ],
    },
    {
      id: "availability",
      heading: "Availability and changes to the site",
      blocks: [
        p("The site is provided as it is and as available. We do not promise uninterrupted access, and maintenance, a hosting incident or a network problem can make a page unavailable. There is no service-level agreement and no paid subscription to compensate."),
        p("Pages may be edited, merged, moved or retired as guides improve. We keep permanent redirects for old URLs where practical, but a bookmark can still break. If a page you relied on has moved, the redirect or the sitemap should lead to the replacement."),
        p("We may add or remove features, such as a new guide, an RSS feed or a machine-readable file. Those changes are part of maintaining the site and do not create a new contractual obligation."),
      ],
    },
    {
      id: "trademarks",
      heading: "Trademarks and third-party names",
      blocks: [
        p("Chamet, MetWallet and other product names, logos and marks belong to their respective owners. This site uses the names to describe the platform and its workflows, not to claim ownership, sponsorship or an official partnership."),
        p("References to a brand are nominative: they identify the service being discussed. If a rights holder believes a use is inaccurate or misleading, contact us with the page and the concern, and we will review it."),
        p("Nothing on this site grants a licence to use another party's trademark, screenshot or content. If you want to reuse our original text, ask first; the [terms of use](/terms/) explain the limits."),
      ],
    },
  ],

  faqs: [
    { q: "Is ChametApps.com the official Chamet website?", a: "No. It is an independent guidance site with an agency referral route. It does not speak for Chamet and cannot provide official verification." },
    { q: "Are the registration buttons affiliate links?", a: "Some host and agency registration buttons are agency referral links. Registering through one connects your account with our agency, and the site may receive a referral benefit." },
    { q: "Do the guides guarantee income?", a: "No. Host and agency income is activity-based and depends on platform rules and other factors. The site does not promise a salary, approval or payment time." },
    { q: "Can I republish the guides on my website?", a: "You may quote a short extract with attribution and a link. Republishing substantial parts as your own content, or presenting them as official documentation, is not allowed." },
    { q: "Which law governs these terms?", a: "The terms are governed by the laws of India, subject to any mandatory consumer-protection rule that gives you a different forum." },
    { q: "What should I do if a guide differs from my app?", a: "Follow your app. Screens and rules change. Report the difference through the contact page so the guide can be corrected." },
  ],
};