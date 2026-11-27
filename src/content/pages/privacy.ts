import { list, note, p, table, type PageContent } from "@/lib/content";

export const privacyContent: PageContent = {
  quickAnswer:
    "ChametApps.com is a read-only guidance site with no user accounts, no payment features and no contact forms. We do not ask for passwords or verification codes. The site processes ordinary technical request data through its host, optional Google Analytics loads only after you accept, and WhatsApp messages you choose to send are used to answer your question.",
  sections: [
    {
      id: "scope",
      heading: "Scope of this policy",
      blocks: [
        p("This policy explains what happens to information when you visit ChametApps.com. It covers the website, the WhatsApp button and the optional analytics choice. It does not cover Chamet, the agency portal, MetWallet or any other service you reach through a link."),
        p("The site is a static guidance website. There is no login, no account creation, no comment system, no newsletter signup and no checkout. That design removes most of the ways a website usually collects personal data, and it is deliberate."),
        p("When we say “we” or “this site”, we mean the team that publishes ChametApps.com. When we say “platform” or “wallet”, we mean the third-party services we write about."),
      ],
    },
    {
      id: "data-we-do-not-collect",
      heading: "Information we do not collect",
      blocks: [
        p("We do not ask for and do not want your Chamet password, agency portal password, MetWallet password, payment password, OTP or verification code. There is no form on this site that could accept them. Sign-in and recovery happen only inside the official apps and portals."),
        list([
          "No Chamet, agency or wallet credentials.",
          "No government identity documents.",
          "No bank account, card or UPI details.",
          "No date of birth or address through a site form.",
          "No contact list, photos or messages from your device.",
        ]),
        note("If anyone claiming to represent this site asks for a password, an OTP or a payment, stop and treat it as a scam. We do not make those requests."),
        p("Screenshots you choose to send us may contain personal data. We ask you to mask names, phone numbers and balances that are not needed for the question. If a screenshot contains more than necessary, delete it and send a cropped version."),
      ],
    },
    {
      id: "technical-data",
      heading: "Technical data processed when you load a page",
      blocks: [
        p("Like any website, this site is delivered by a hosting provider. When your browser requests a page, the provider may process technical request data such as your IP address, browser type, device type, the page requested, the referring page and the time of the request. This is used to deliver the page, keep the service secure and diagnose errors."),
        table(
          ["Data", "Typical source", "Purpose"],
          [
            ["IP address", "Your connection", "Deliver the response and protect the service"],
            ["Browser and device type", "Request headers", "Serve compatible pages and styles"],
            ["Requested path and time", "Server logs", "Diagnose errors and abuse"],
            ["Referring page", "Request headers", "Understand traffic sources at an aggregate level"],
          ],
          "Technical request data",
        ),
        p("We do not use this data to identify individual readers, and we do not combine it with WhatsApp conversations. Log retention is controlled by the hosting provider's configuration and is kept only as long as needed for security and operations."),
      ],
    },
    {
      id: "cookies",
      heading: "Cookies, local storage and the analytics choice",
      blocks: [
        p("The core site does not require advertising cookies. If Google Analytics is enabled by the site operator, a small consent notice appears and the analytics script loads only after you choose Accept. If you choose Decline, the script is not loaded."),
        p("Your choice is stored in your browser's local storage under a key for analytics consent, so the notice does not reappear on every page. Clearing site data removes the choice and the notice may appear again. This storage stays in your browser; it is not sent to us as a profile."),
        p("When analytics is accepted, Google Analytics 4 may set its own cookies and process usage data under Google's terms. The site configures IP anonymisation and tracks events without names, phone numbers or message content."),
        p("You can change your mind by clearing the site's local storage and choosing again, or by using your browser's cookie controls. Blocking cookies does not break the guides; the pages are static and readable without them."),
      ],
    },
    {
      id: "analytics",
      heading: "What analytics records, if enabled",
      blocks: [
        p("When enabled and accepted, analytics records page views and interactions with guide controls and outbound buttons. For an outbound click, the event may include the destination host and the page path. For a guide interaction, it may include the guide name and the action, such as moving to the next step."),
        p("Analytics does not record the text you type into WhatsApp, your phone number, your password, your wallet balance or your account identity. The purpose is to understand which guides are useful and which pages need improvement."),
        p("If analytics is not configured by the operator, no analytics script is loaded and no analytics cookies are set. The consent notice only appears when analytics is configured."),
        p("We do not sell analytics data, and we do not build advertising audiences from it. Aggregate reports may be used to decide which topics to expand."),
      ],
    },
    {
      id: "whatsapp",
      heading: "WhatsApp messages you choose to send",
      blocks: [
        p("The WhatsApp button opens a chat with a pre-filled short message that you can edit before sending. Nothing is sent until you press send in WhatsApp. If you message us, we see the information you include: your WhatsApp profile name, your phone number and the content of the conversation."),
        p("We use that information to answer your question. We may keep the conversation for a reasonable period so we can follow up or recognise a repeat issue. We do not add you to a marketing list without your agreement, and we do not ask for passwords or codes."),
        p("WhatsApp processes messages under its own terms and privacy policy. The content is encrypted in transit between WhatsApp clients, but it is still a third-party service. Do not send identity documents or financial details through chat."),
      ],
    },
    {
      id: "outbound-links",
      heading: "Outbound links and third-party services",
      blocks: [
        p("This site links to Chamet registration pages, the agency portal, the official Chamet website, MetWallet and WhatsApp. When you follow a link, the destination service may collect data under its own policy. We do not control those services and cannot answer for their practices."),
        p("Some registration links are agency referral links. They include an agency identifier so the platform can connect your registration with our agency. The destination platform processes the registration data; we do not receive your password or identity documents."),
        p("We recommend reading the privacy policy of any platform or wallet before submitting identity documents. That is especially important for financial services, where verification data is sensitive."),
      ],
    },
    {
      id: "purposes",
      heading: "Why we process the limited data we receive",
      blocks: [
        list([
          "To deliver the website and keep it secure.",
          "To understand, in aggregate, which guides are useful.",
          "To answer a question you send us.",
          "To correct errors and improve the content.",
          "To comply with applicable law or a lawful request.",
        ]),
        p("Under India's Digital Personal Data Protection Act, 2023 and comparable frameworks, processing should have a lawful basis and be limited to what is necessary. This site is designed to minimise collection: most visitors read pages without submitting anything."),
        p("Where consent is the basis, such as optional analytics, you can decline or withdraw it. Where the basis is answering a request you initiated, we process only what you sent and only for that purpose."),
      ],
    },
    {
      id: "retention",
      heading: "How long information is kept",
      blocks: [
        p("Server logs are kept according to the hosting provider's retention settings, generally for a short operational period. Analytics data, when enabled, is retained according to the analytics configuration and Google's retention controls."),
        p("WhatsApp conversations are kept only as long as useful for answering the question and recognising a follow-up. You can ask us to delete a conversation, subject to any legal obligation to retain it."),
        p("Because the site has no user accounts, there is no account profile to delete. Clearing your browser's local storage removes the analytics choice stored on your device."),
      ],
    },
    {
      id: "sharing",
      heading: "Who we share information with",
      blocks: [
        p("We do not sell personal information. Limited sharing can occur with service providers that make the site work: the hosting provider, the analytics provider if enabled, and WhatsApp when you choose to message us. Each provider processes data under its own terms."),
        p("We may disclose information if required by law, a court order or a lawful request from a competent authority, or if necessary to protect the site, our readers or the public from fraud or harm."),
        p("We do not share your WhatsApp conversation with the platform or wallet. If your question concerns an account issue, we may suggest you contact them directly; we do not forward your message on your behalf."),
      ],
    },
    {
      id: "security",
      heading: "Security measures and their limits",
      blocks: [
        p("The site is served over HTTPS, uses a static architecture with a small attack surface, and keeps third-party scripts to a minimum. Optional analytics is gated behind consent. These measures reduce risk but do not make any internet service perfectly secure."),
        p("The biggest risk to readers is not this website; it is credential theft through messages, modified apps and look-alike pages. Use unique passwords, enable device locks, verify domains before signing in and never share an OTP."),
        p("If you believe your interaction with this site has been compromised, contact us through the contact page and describe what happened. If an account or payment is at risk, contact the platform, wallet or bank first."),
      ],
    },
    {
      id: "rights",
      heading: "Your choices and rights",
      blocks: [
        p("You can choose whether to accept optional analytics, request information about a conversation you sent us, ask for a correction, or ask us to delete a conversation where no legal obligation requires retention."),
        p("To make a request, use the contact page and describe what you want. We may ask for enough information to locate the conversation, but we will not ask for a password or an identity document through chat."),
        p("If you are in a jurisdiction with additional rights, such as access, portability or objection, tell us and we will consider the request under the applicable law. This policy does not limit rights you have under mandatory local law."),
      ],
    },
    {
      id: "children",
      heading: "Children and age limits",
      blocks: [
        p("This site is intended for adults who are considering a platform that is itself 18+. We do not knowingly collect personal information from children. If you believe a child has sent us personal information, contact us and we will delete it."),
        p("The platform's age rules apply independently. An agency should not recruit minors, and a registration that misstates age can lead to a restriction. This site does not help anyone bypass an age or identity check."),
      ],
    },
    {
      id: "international",
      heading: "International processing",
      blocks: [
        p("The site's hosting, analytics and messaging providers may process data in countries other than India. Where that happens, the provider's safeguards and terms apply. We choose mainstream providers, but we cannot guarantee a specific storage location."),
        p("If you are outside India, your local privacy law may give you additional rights. Contact us and we will try to accommodate a reasonable request."),
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      blocks: [
        p("We update this policy when the site changes, when a provider changes or when the law requires it. The date at the top of the page shows the latest revision. Material changes will be reflected on this page rather than announced through a separate channel."),
        p("Continuing to use the site after a revision means you accept the updated policy. If you do not agree, you can stop using the site; the guides remain readable without submitting any information."),
      ],
    },
    {
      id: "contact",
      heading: "Contact for privacy questions",
      blocks: [
        p("Use the contact page or the WhatsApp button to raise a privacy question. Describe the request clearly and avoid sending sensitive documents. We will respond as soon as we can."),
        p("For account, payment or identity-verification issues, contact Chamet, MetWallet or your bank. Those organisations control the relevant data and can act on it; this site cannot."),
      ],
    },
    {
      id: "platform-data",
      heading: "Data held by Chamet, MetWallet and other platforms",
      blocks: [
        p("This policy covers ChametApps.com only. When you register, host or withdraw, you interact with the Chamet platform, the agency dashboard and MetWallet, each of which has its own privacy policy and its own data practices. We do not receive, see or store your platform account data, identity documents, wallet balance or transaction history."),
        list([
          "Registration details are submitted to the platform, not to us.",
          "Verification documents go to the platform or wallet that requests them.",
          "Wallet and bank details are handled by MetWallet and your bank.",
          "Live-room activity is processed by the Chamet app.",
          "Support conversations inside those products are held by those products.",
        ]),
        p("If you want to access, correct or delete data held by those services, use their own privacy tools and support channels. We cannot forward a request on your behalf because we have no account relationship with them and no way to verify your identity to them."),
        p("Read the privacy policy of each service before you upload a document or link a bank account. A guide can explain a flow, but only the operator can tell you how long it keeps a document and who it shares it with."),
      ],
    },
    {
      id: "no-ad-networks",
      heading: "No advertising networks or data brokers",
      blocks: [
        p("This site does not run third-party advertising networks, behavioural retargeting pixels or data-broker scripts. There is no cookie wall, no “consent to sell data” prompt and no hidden tracker that follows you to other sites. The only optional measurement is the analytics choice described above."),
        p("If that changes, the change will appear here before the new tool is enabled, with a plain description of what it records and how to refuse it. Adding a tracker quietly and updating the policy afterwards would defeat the purpose of this section."),
        p("Our referral links are not advertising networks. They are direct links to a registration page, and the platform may attribute a registration to the invitation. That attribution is about the registration, not about your browsing history on this site."),
      ],
    },
    {
      id: "your-responsibility",
      heading: "Your part in keeping data safe",
      blocks: [
        p("Privacy is shared work. We limit what we collect, but we cannot protect information you post publicly or send to the wrong person. A few habits close most of the gaps."),
        list([
          "Do not send identity documents through a chat unless the official service asks for them.",
          "Mask account numbers, names and balances in screenshots.",
          "Use a unique password for your email and your platform account.",
          "Keep the registered phone number under your control.",
          "Sign out of shared devices and browsers.",
          "Check the address bar before entering a password.",
        ]),
        p("If you believe you have sent personal information to an impersonator, change the relevant passwords, contact your bank if payment details were involved, and report the incident through the official platform channel. Keep the messages; they are evidence."),
        p("You can also ask us to delete a WhatsApp conversation you started. Send the request from the same number and we will remove the messages we hold, subject to any legal obligation to keep a record of a dispute or a fraud report."),
      ],
    },
    {
      id: "processors",
      heading: "Service providers we rely on",
      blocks: [
        p("A small site still depends on other companies. The table below names the categories and what they can see, so you can judge the chain rather than take a generic “trusted partners” line at face value."),
        table(
          ["Provider type", "What it processes", "What it does not receive"],
          [
            ["Hosting and CDN", "Request logs, IP address, page path", "Your Chamet account or wallet data"],
            ["Analytics (optional, consent)", "Page views, approximate location, device type", "Your name, phone number or payment details"],
            ["WhatsApp", "Messages you choose to send us", "Anything you never type into the chat"],
            ["Email provider", "Messages sent to our published address", "Account credentials"],
          ],
          "Service providers and data visibility",
        ),
        p("Each provider has its own retention and security terms. We choose mainstream services with published policies, but we cannot guarantee that a provider stores data only in India. If that matters to you, use the site without enabling analytics and without sending a message."),
        p("We do not add advertising pixels, session-recording tools or data brokers. If that changes, this page will list the tool before it is enabled, with a way to refuse it."),
      ],
    },
    {
      id: "cookies-detail",
      heading: "What is stored in your browser",
      blocks: [
        p("The core site works without cookies. The only browser storage we intentionally use is a small local-storage entry that remembers your analytics choice. It contains a preference, not an identity, and it is not shared with advertisers."),
        list([
          "Analytics consent choice: stored locally, cleared when you clear site data.",
          "Session data: none, because there is no login or form on this site.",
          "Advertising identifiers: none.",
          "Cross-site tracking: none.",
        ]),
        p("Your browser or hosting provider may keep technical logs for security and performance. Those logs are not used to build a profile of you, and they are not combined with any message you send."),
        p("If you clear site data, the consent notice may appear again. That is expected: without the stored preference, the site cannot know your previous choice. Choosing Decline again restores the same state."),
      ],
    },
  ],

  faqs: [
    { q: "Does ChametApps.com collect my Chamet password?", a: "No. The site has no login or form that accepts a password. We never need your Chamet, agency or MetWallet password, an OTP or a payment password." },
    { q: "Does this site use cookies?", a: "The core site does not require advertising cookies. If analytics is configured, its script loads only after you choose Accept and stores your choice in your browser's local storage." },
    { q: "What happens to my WhatsApp messages?", a: "If you choose to message us, we see your profile name, phone number and the conversation. We use it to answer your question and may keep it for a reasonable follow-up period." },
    { q: "Is my data shared with Chamet?", a: "No. We do not forward your WhatsApp conversation to Chamet or MetWallet. If your question is account-specific, we may suggest you contact them directly." },
    { q: "How do I withdraw analytics consent?", a: "Clear the site's local storage in your browser and choose Decline when the notice appears again, or use your browser's cookie controls. The guides remain readable either way." },
    { q: "Can I ask you to delete a conversation?", a: "Yes. Use the contact page and describe the conversation. We will delete it where no legal obligation requires retention." },
  ],
};