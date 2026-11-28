import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const homeContent: PageContent = {
  quickAnswer:
    "ChametApps.com is an independent Chamet agency website that explains two journeys: host registration for your personal live-streaming account and agency registration for recruiting and supporting hosts. Both start with a phone or email account, finish with profile and wallet setup, and pay out only through eligible activity — never a fixed salary.",
  sections: [
    {
      id: "what-is-chamet",
      heading: "What is Chamet and how does the app actually work?",
      blocks: [
        p(
          "Chamet is a video chat and live-streaming app where adult creators go live, talk with viewers and receive virtual gifts. Those gifts convert into **Beans**, the in-app host currency, and Beans can later be moved through the withdrawal flow described on Chamet's official host earnings page. The app is the place where hosts stream; the browser-based agency portal is a separate dashboard for people who recruit and manage hosts.",
        ),
        p(
          "That separation matters because most confusion starts with the wrong door. A new host who opens the agency portal will not find a streaming profile, and an agent who signs in to the app will not find invitation links or team reports. If your goal is to go live, start with [Chamet host registration](/chamet-host-registration/). If your goal is to build a team, start with [Chamet agency registration](/chamet-agency-registration/). If you only need the app, read the [Chamet app download guide](/chamet-app-download/) first.",
        ),
        p(
          "ChametApps.com is not the official Chamet platform. We are a certified Chamet agency website (a description provided by the site owner) that publishes illustrated registration, dashboard and withdrawal walkthroughs. Our registration buttons are agency referral links, which means a new account created through them joins our agency. You can still read every guide without registering, compare agencies and decide later. Nothing on this site collects your Chamet password, OTP or payment password.",
        ),
        p(
          "In practical terms, Chamet combines three products in one ecosystem: the consumer app, a creator earnings system built on Beans, and an agency layer that supplies onboarding, invitations and reporting. Each product has its own screens, support route and rules. Understanding which layer you are using is the fastest way to stop guessing where a button, balance or error message should appear.",
        ),
      ],
    },
    {
      id: "who-can-join",
      heading: "Who can join Chamet as a host or an agency in India?",
      blocks: [
        p(
          "Chamet's published host guidance is written for adults aged 18 or older. Beyond the age rule, a realistic checklist is simple: a smartphone with a working front camera and microphone, a stable internet connection, a phone number or email address you can verify, a clear profile photo and enough free time to appear live consistently. Hosts are independent creators, not salaried employees, so there is no fixed monthly income and no roster that guarantees viewers.",
        ),
        p(
          "Agency accounts are for people who want to recruit hosts and agents, share invitation links and read the reports available in the agency dashboard. An agency is not a recruitment job with a guaranteed salary either. The dashboard shows team revenue, calculated commission and payment status as separate figures, and the applicable rules decide what becomes payable. Anyone promising a fixed agency salary in exchange for an upfront fee is describing something Chamet does not publish.",
        ),
        table(
          ["Requirement", "Host account", "Agency account"],
          [
            ["Minimum age", "18 or older, per Chamet host guidance", "18 or older and able to manage a team"],
            ["Main device", "Chamet mobile app", "Browser-based agency portal, phone for WhatsApp"],
            ["Verification", "Phone or email code, plus face verification where requested", "Phone number, password and profile contact details"],
            ["Core activity", "Going live, chatting, receiving gifts", "Inviting hosts and agents, reviewing reports"],
            ["Payout route", "Eligible host balance to MetWallet, then cash out", "Eligible agency commission to a linked wallet"],
            ["Time needed", "Flexible, but consistency affects visibility", "Daily checking of invitations, reports and messages"],
          ],
          "Chamet host and agency requirements compared",
        ),
        p(
          "For readers in India, two local realities shape the experience. First, payouts eventually arrive in rupees through a wallet and a payment method, so the dollar figure shown inside Chamet is not the amount that lands in your bank account. Second, mobile networks and device quality vary widely, so a stable Wi-Fi connection and a phone that can handle video encoding matter more than an expensive camera. You do not need studio equipment to start, but you do need a connection that will not drop mid-stream.",
        ),
        note(
          "ChametApps.com never asks for payment to read a guide, never sells a guaranteed host slot and never requests your OTP. If someone contacts you claiming otherwise, stop and verify through the [official Chamet website](https://www.chamet.com/).",
        ),
      ],
    },
    {
      id: "choose-account",
      heading: "Host or agency: which Chamet account should you choose?",
      blocks: [
        p(
          "Choose a host account if you want to be on camera, build a personal audience and earn from the gifts you receive. Choose an agency account if you prefer recruiting, onboarding and supporting other people, and if you are comfortable reading reports and answering messages every day. The two journeys use different registration links, so the decision should be made before you tap any button, not after you have created the wrong account.",
        ),
        cards([
          {
            title: "Choose host if you want to create",
            text: "You enjoy live conversation, can commit to a schedule and want a personal profile with followers. Your earnings come from eligible viewer gifts and any host programmes that apply to your account.",
          },
          {
            title: "Choose agency if you want to build",
            text: "You can recruit hosts, explain the app clearly and follow up on invitations. Your commission depends on eligible team activity and the rules attached to your agency account.",
          },
        ]),
        p(
          "A useful test is to imagine your first week. A host's first week is spent completing a profile, testing audio and video, learning the live screen and meeting viewers. An agent's first week is spent learning the dashboard, sharing the correct invitation card with the correct person and checking whether invitees appear in the right list. If one of those descriptions sounds like work you would avoid, choose the other role.",
        ),
        p(
          "Hosts can still join an agency for support. Chamet's published host earnings guidance describes agency membership as optional, and the agency you join may provide coaching, referral registration help or local-language support. That support does not replace Chamet's own rules, and it does not convert earnings into a salary. If you already registered as a host and later want agency support, ask the agency how joining works before creating a second account.",
        ),
        p(
          "Agencies also decide whether they want to recruit other agents. The dashboard usually separates New Hosts from New Agents because the two invitation links create different account types. Sending a host invitation to someone who wants to manage a team, or the reverse, creates a frustrated user and an invitation that never completes. The [agency registration guide](/chamet-agency-registration/) explains where each link lives and how to check that the right person appears in the right list.",
        ),
      ],
    },
    {
      id: "registration-roadmap",
      heading: "Chamet registration roadmap: from first tap to first payout",
      blocks: [
        p(
          "Registration is not one step; it is a chain. The chain starts with an invitation link, continues through phone or email verification, then profile setup, then wallet linking and finally a withdrawal request. Most abandoned accounts stop at one specific link in that chain. The roadmap below shows the order so you can tell whether you are actually stuck or simply looking at the next stage.",
        ),
        steps([
          "**Pick the right invitation.** Host invitations create a personal host account. Agent invitations create an agency account. Never use a link from a random message without checking which one it is.",
          "**Verify your contact method.** Enter the country code and phone number, or the email address, that you control. The verification code is the only proof that the account belongs to you.",
          "**Set a strong password.** Use a password manager if possible and never reuse a password from another app. ChametApps.com will never ask you to send it.",
          "**Complete the profile.** Add a clear photo, a nickname, your languages, relevant tags and a short introduction. A complete profile is easier for viewers to understand and easier for support to identify.",
          "**Finish any verification request.** Face verification, email verification or Basic Level wallet verification may appear at different points. Complete them when they are shown rather than leaving them for payout day.",
          "**Learn the dashboard or app menu.** Hosts should know where My Earning and Withdraw live. Agents should know where My Profile, Invitation and Reports live before inviting anyone.",
          "**Link the wallet.** A host links MetWallet from the withdrawal screen. An agency links MetWallet from My Profile. The wallet account must belong to you and must match the identity details you provide.",
          "**Request a payout only when eligible.** Check the available balance, the minimum, the processing estimate and the destination before submitting. A submitted request is not the same as money received.",
        ]),
        p(
          "The two detailed walkthroughs follow the same logic with screenshots for every screen. The [host registration guide](/chamet-host-registration/) covers 14 screens from sign-up to profile completion, including the email code, face verification and profile fields. The [agency registration guide](/chamet-agency-registration/) covers six screens, including the security check, password creation, contact details and the two invitation cards you see after login.",
        ),
        p(
          "If you get stuck, resist the urge to create a second account. Duplicate accounts make verification harder and can create payout problems later. Instead, note the exact screen name, the error message and the time, then use the [Chamet help guide](/chamet-help/) to match the symptom to a fix. If the issue involves money already in the account, keep the transaction reference ready before contacting support.",
        ),
      ],
    },
    {
      id: "agency-login-dashboard",
      heading: "Chamet agency login and dashboard: what you can manage",
      blocks: [
        p(
          "Agency login happens at the browser-based portal, currently **agent.ichamet.com**. The portal is separate from the consumer app and uses the agency username or phone number you created during registration. Once inside, the menu gives you invitation links, invitee lists, host and agent reports, commission information, notifications and a help centre. The [agency login guide](/chamet-agency-login/) explains each menu item and what to check before you trust a number on a report.",
        ),
        table(
          ["What you want to do", "Use the app or the portal?", "Where to look"],
          [
            ["Go live and talk to viewers", "Chamet app", "The live button in the app"],
            ["Invite a new host", "Agency portal", "New Hosts invitation card on the dashboard home"],
            ["Invite another agent", "Agency portal", "New Agents invitation card"],
            ["Check whether an invitation completed", "Agency portal", "My Invitation, then Invitee List, then Hosts or Agents"],
            ["Read team activity", "Agency portal", "Invitees' Daily Report, then Hosts Report or Agents Report"],
            ["Link the agency wallet", "Agency portal", "My Profile, then MetWallet Account, then Bind Wallet"],
            ["Change your host profile", "Chamet app", "My Profile from the bottom-right tab"],
          ],
          "Which Chamet surface to use for common tasks",
        ),
        p(
          "A frequent mistake is expecting the portal to show a live-streaming balance or expecting the app to show agency commission. They are different ledgers. A host's withdrawable balance belongs to the host account; an agency's commission belongs to the agency account; MetWallet holds the funds after a transfer. Before you compare numbers, confirm which account and which reporting period produced each figure.",
        ),
        p(
          "The portal also has a password recovery option. Recovery happens on the portal itself, and the reset code goes to the contact method attached to the agency account. ChametApps.com cannot reset it for you, and no legitimate support agent needs your current password. If a page appears blank, allow JavaScript and try a current browser before assuming the account is blocked.",
        ),
      ],
    },
    {
      id: "withdrawal-stages",
      heading: "Chamet withdrawal stages: linked, available, submitted and received",
      blocks: [
        p(
          "Most withdrawal anxiety comes from treating four different milestones as one. A linked wallet only proves a connection. An available balance only proves the account shows withdrawable funds. A submitted request only proves the request was sent. Money received is the only stage that proves the destination account was credited. Each stage can fail for a different reason, so each needs a different check.",
        ),
        table(
          ["Stage", "What it means", "What to check next"],
          [
            ["Account linked", "The MetWallet connection is present in Chamet", "Open the linked account details and confirm the masked phone or email belongs to you"],
            ["Balance available", "Chamet shows funds that can be withdrawn", "Confirm the amount is eligible, not a pending or bonus balance, and check the minimum"],
            ["Request submitted", "A withdrawal request has been sent for processing", "Save the reference, note the displayed estimate and check the transaction status"],
            ["Money received", "The destination account confirms the credit", "Match the amount against fees and currency conversion, then keep the statement"],
          ],
          "The four Chamet withdrawal milestones",
        ),
        p(
          "Chamet's published host earnings page currently lists a US$10 minimum for withdrawing an eligible host balance to MetWallet, and states that 10,000 Beans equal US$1. Agency commission and MetWallet cash-out methods have their own conditions. Treat those published values as a starting point, not a promise: the screen in your own account is the final authority, and it can change as rules, regions and payment partners change.",
        ),
        p(
          "The right guide depends on what you are trying to move. A host starts in the app with My Earning. An agency starts in the portal with My Profile. MetWallet cash out starts inside the wallet after funds have arrived. If a request is pending, failed or marked complete without a credit, the [payment problem section](/chamet-help/#payment-problems) explains what each status usually means and what evidence to collect.",
        ),
        p(
          "Do not cancel and resubmit a pending withdrawal repeatedly. Each resubmission can create a new reference and make reconciliation harder. Wait for the displayed processing window, then check the wallet and destination account. If the window has passed, contact the relevant support channel with the reference, the amount, the destination and the timestamps. That information is what support teams need to trace a transfer; a screenshot of a balance alone is not enough.",
        ),
      ],
    },
    {
      id: "beans-to-rupees",
      heading: "Chamet Beans to dollars and Indian rupees: a realistic estimate",
      blocks: [
        p(
          "Chamet's published conversion is 10,000 Beans = US$1. The arithmetic is therefore straightforward: divide your Beans by 10,000 to get the dollar value. If you have 100,000 Beans, the published equivalent is US$10. If you have 1,000,000 Beans, it is US$100. That is the first step, not the final rupee amount in your bank account.",
        ),
        table(
          ["Beans", "Published US$ value", "Why the rupee credit can differ"],
          [
            ["10,000", "US$1", "Wallet fees, payment-partner charges and the applicable exchange rate"],
            ["100,000", "US$10", "The minimum may be met, but the final credit still depends on the payout method"],
            ["500,000", "US$50", "Currency conversion is applied at the provider's rate, not a fixed site rate"],
            ["1,000,000", "US$100", "The receiving bank or wallet may apply its own processing terms"],
          ],
          "Beans to dollars examples with payout caveats",
        ),
        p(
          "The rupee estimate requires three inputs that only your wallet or payment provider can supply at the moment of cash out: the exchange rate, the fee and the method. A useful habit is to write down the quote before you confirm. Then compare the amount that arrives with the quote, not with the dollar figure in Chamet. A lower rupee credit is often explained by conversion and charges rather than by a missing payment.",
        ),
        p(
          "Use the free [Chamet Beans to rupees calculator](/chamet-beans-to-rupees-calculator/) to run this conversion with your own balance and rate; it shows the dollar value and the published minimum, then leaves the exchange rate to you."
        ),
        p(
          "This site does not publish a fixed USD-to-INR rate because rates move and the provider decides the applicable rate. It also does not promise that every dollar of wallet balance becomes a dollar of bank credit. For a worked explanation with more examples, read [Chamet Beans to dollars](/blog/chamet-beans-to-dollars/) and the [host earnings guide](/blog/chamet-host-earnings-guide/).",
        ),
      ],
    },
    {
      id: "safety",
      heading: "Choosing a genuine Chamet agency and avoiding registration scams",
      blocks: [
        p(
          "Searching for a Chamet agency near me returns a mix of genuine agency websites, referral pages, social media posts and outright scams. There is no central government registry of Chamet agencies, so verification has to come from evidence: a working website with named guidance, a registration link that opens the real Chamet registration domain, a support channel you can test before paying anything, and a clear statement that the site is an agency rather than the official platform.",
        ),
        list([
          "**Red flag: payment to join.** A legitimate agency does not need an upfront joining fee, a registration fee or a security deposit from a host.",
          "**Red flag: guaranteed income.** No agency can guarantee viewers, gifts, commission or a monthly salary. Treat screenshots of large balances as examples, not offers.",
          "**Red flag: OTP or password requests.** Nobody needs your Chamet OTP, agency password or payment password to give you support.",
          "**Red flag: unofficial APK files.** Use the official Chamet website or your device store. A modified APK can compromise your account and your money.",
          "**Red flag: pressure to register immediately.** A genuine agency can explain the process, the referral relationship and the support it provides before you create an account.",
        ]),
        p(
          "Check the registration domain before you enter personal details. Official Chamet registration links use the schamet.com domain, and the agency portal uses the ichamet.com domain. A link that asks for your Chamet password on a third-party page is not a registration link. If you are unsure, open the [official Chamet website](https://www.chamet.com/) in a separate tab and compare.",
        ),
        p(
          "Local searches deserve extra care because scammers often copy city names into their ads. A page that says it is the best Chamet agency in Delhi, Mumbai or Bengaluru but has no working contact route, no registration domain and no explanation of its relationship to Chamet is not evidence of anything. The [Chamet agency near me guide](/blog/chamet-agency-near-me/) gives a step-by-step verification checklist you can complete in about ten minutes.",
        ),
      ],
    },
    {
      id: "india-support",
      heading: "Chamet support for hosts and agencies across India",
      blocks: [
        p(
          "ChametApps.com works online, so your city does not decide whether you can register. What changes by location is the practical context: the languages your viewers speak, the payment methods available to you and the quality of your mobile data. Hosts in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata and Pune often have more viewers online at the same hours, while hosts in smaller cities may find stronger loyalty with a consistent schedule and a clear language niche.",
        ),
        p(
          "We do not operate walk-in offices, and we do not publish a fake local address to rank for near-me searches. Support is delivered through WhatsApp at +91 9233262700, where you can describe the screen you reached and the error you see. That keeps help available to hosts in Chandigarh, Jaipur, Lucknow, Ahmedabad, Indore, Patna, Guwahati and everywhere else with a working internet connection, not only in metro cities.",
        ),
        p(
          "Indian hosts should also think about language strategy. Chamet has a large international audience, so a profile that lists the languages you actually speak can attract viewers who want a specific language. Listing a language you cannot speak fluently damages retention and can lead to reports. The [host profile tips](/blog/chamet-host-profile-tips/) explain how to choose tags, a nickname and an introduction that match your real personality.",
        ),
        p(
          "For a location-focused overview of registration routes, rupee payouts, language considerations and how to verify an agency online, read [Chamet agency in India](/chamet-agency-india/). The page also explains why an online-first agency can support you without a local branch and how to compare agencies without sharing sensitive information.",
        ),
      ],
    },
    {
      id: "first-week",
      heading: "Your first seven days after Chamet registration",
      blocks: [
        p(
          "The first week determines whether an account becomes usable or stays half-finished. A host should finish the profile, test the camera and microphone, complete any verification request and spend time learning how viewers discover new creators. An agent should learn where the invitation cards live, send one test invitation to a willing person, check the invitee list and read the reports before promising anything to a recruit.",
        ),
        list([
          "Day 1: complete verification and set a strong, unique password.",
          "Day 2: finish the profile, including photo, nickname, languages, tags and introduction.",
          "Day 3: find My Earning or My Profile and confirm which wallet or contact details are attached.",
          "Day 4: read the current minimum, fee and processing information inside your own account.",
          "Day 5: for agents, send a test invitation and confirm the person appears in the correct list.",
          "Day 6: write down the support route and the information you would need for a payment query.",
          "Day 7: review what worked, set a realistic schedule and stop creating extra accounts.",
        ],
        true,
        ),
        p(
          "Keep records from the beginning. Save the email or phone number used for registration, the date of registration, the agency or host invitation link and any transaction references. If you later change phones or lose access to a number, those records are what support teams use to help you prove ownership. A simple note on your phone is enough; it does not need to be complicated.",
        ),
        p(
          "Finally, set expectations about time. Registration can be completed in one sitting, but profile approval, wallet verification and payment processing can each take longer. Plan for the possibility that a payout request is not instant. If you need money urgently, do not rely on a Chamet payout arriving on a specific day; the processing estimate is an estimate, not a guarantee.",
        ),
      ],
    },
  ],
  faqs: [
    {
      q: "Is ChametApps.com the official Chamet website?",
      a: "No. ChametApps.com is an independent certified Chamet agency website that publishes registration and withdrawal guides. The official platform is chamet.com, and the agency portal is a separate browser application. Our registration links are agency referral links.",
    },
    {
      q: "Should I register as a Chamet host or an agency?",
      a: "Register as a host if you want to go live and build a personal audience. Register as an agency if you want to recruit and support hosts and read team reports. The two links create different account types and cannot be swapped after registration.",
    },
    {
      q: "How old do I need to be to join Chamet?",
      a: "Chamet's published host guidance is for adults aged 18 or older. Use accurate age and identity information. Do not register with someone else's documents or create an account for a minor.",
    },
    {
      q: "Does Chamet pay a fixed monthly salary?",
      a: "No. Hosts earn from eligible viewer gifts and any programmes that apply to their account, while agencies earn commission based on eligible team activity and applicable rules. A balance in a screenshot is an example, not a salary promise.",
    },
    {
      q: "How much is 10,000 Chamet Beans in dollars?",
      a: "Chamet's published host earnings page lists 10,000 Beans as US$1, so 10,000 Beans equals about one US dollar before any wallet fee, payment charge or currency conversion. The final rupee credit is shown by your payout provider.",
    },
    {
      q: "Where do I log in to the Chamet agency dashboard?",
      a: "Use the browser-based agency portal at agent.ichamet.com. Enter the agency username or phone login and password you created during registration. The consumer app login is a different journey.",
    },
    {
      q: "Can I join Chamet without an agency?",
      a: "Chamet's published host earnings guidance describes agency membership as optional. You can register through a host invitation without joining an agency, although an agency may provide onboarding help, coaching or local-language support.",
    },
    {
      q: "How long does a Chamet withdrawal take?",
      a: "The estimate depends on your method and is displayed when you submit. Host balance transfers, agency commission settlement and MetWallet cash out are separate stages with separate timing. Use the estimate in your own account rather than a number from a screenshot.",
    },
    {
      q: "Why is my Chamet withdrawal still pending?",
      a: "Pending usually means the request has been received but is not marked complete. Check the processing estimate, confirm the destination details, avoid duplicate requests and collect the reference before contacting support after the window passes.",
    },
    {
      q: "Is there a Chamet agency near me in India?",
      a: "Most Chamet agencies operate online rather than from walk-in offices. Verify a registration link by its domain, test the support channel, read the referral disclosure and avoid anyone who asks for an upfront fee or your OTP. City names in ads are not proof of a local office.",
    },
    {
      q: "Can I use Chamet on Wi-Fi instead of mobile data?",
      a: "Yes. A stable Wi-Fi connection is often better for long live sessions than mobile data. Test your upload speed and keep a backup connection if your area has frequent outages.",
    },
    {
      q: "What should I do if someone asks for my Chamet OTP?",
      a: "Do not share it. No legitimate agency or support agent needs your OTP, password or payment password. End the conversation, change your password if you already shared it and report the request through the official Chamet support route.",
    },
  ],
};