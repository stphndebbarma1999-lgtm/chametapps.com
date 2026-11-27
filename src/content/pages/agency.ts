import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const agencyContent: PageContent = {
  quickAnswer:
    "A Chamet agency account is a management account for recruiting hosts and agents, sharing invitation links and reading team reports. Registration takes about ten minutes: open the agent invitation link, verify your phone, create a password, complete your contact profile and find the New Hosts and New Agents cards in the dashboard. Agency income is commission based, not a fixed salary.",
  sections: [
    {
      id: "what-is-agency-account",
      heading: "What is a Chamet agency account, and who is it for?",
      blocks: [
        p(
          "A Chamet agency account is the management layer of the Chamet ecosystem. It does not stream, receive viewer gifts or hold a host balance. Instead, it lets a person invite hosts and other agents, see who registered through those invitations, read activity reports and manage the wallet that receives eligible commission. If you want to appear on camera, you need a host account; if you want to build and support a roster, you need an agency account.",
        ),
        p(
          "The role suits people who are organised, patient and comfortable answering messages. Recruiting is the easy part; retention is the work. A useful agency owner checks new registrations, explains the app to confused hosts, follows up on incomplete profiles and understands why a report total is not the same as money in the bank. Anyone who dislikes follow-up or expects passive income should think carefully before registering.",
        ),
        p(
          "Agency accounts are also not a shortcut around host requirements. Chamet's host guidance applies to the people you invite: they must be adults, they must use their own identity and they must follow the platform's content rules. An agency that encourages fake profiles, borrowed documents or multiple accounts is creating risk for everyone in its team, including the agency owner.",
        ),
      ],
    },
    {
      id: "eligibility-preparation",
      heading: "Eligibility and preparation before Chamet agency registration",
      blocks: [
        p(
          "You do not need a company registration, an office or a large following to create an agency account. You do need an adult account holder, a phone number that can receive verification codes, a password you can keep secure and accurate contact details. If you plan to receive commission, you will eventually need a MetWallet account that passes the wallet's own verification requirements, so keep a government-issued identity document and a matching phone number available.",
        ),
        table(
          ["What to prepare", "Why it matters", "Common mistake"],
          [
            ["An active phone number", "Receives the registration and login codes", "Using a number that belongs to someone else"],
            ["A private email and WhatsApp number", "Used for account contact and support", "Publishing a personal number you cannot monitor"],
            ["A strong, unique password", "Protects the dashboard and commission data", "Reusing an old password from another app"],
            ["Your agency name and profile details", "Identifies you to invitees and support", "Copying another agency's brand exactly"],
            ["MetWallet access later", "Receives eligible commission and cash out", "Assuming the wallet is optional until payout day"],
            ["Time for follow-up", "Invitations only pay off when hosts stay active", "Recruiting hundreds and supporting none"],
          ],
          "Chamet agency registration preparation checklist",
        ),
        p(
          "In India, the phone number is usually the easiest verification route, but the country code matters. Select +91 before typing the number, and do not add a leading zero. If you register with a number you later lose, recovery becomes much harder, so use a number you expect to keep for at least a year. The same logic applies to the contact details you display inside the dashboard.",
        ),
        p(
          "One honest warning: an agency account does not create demand. You are responsible for finding people who genuinely want to host or recruit, explaining the referral relationship and supporting them after registration. The dashboard can show you what happened, but it cannot manufacture activity. Plan your first month around a small number of well-supported invitees rather than a large number of abandoned invitations.",
        ),
      ],
    },
    {
      id: "registration-steps-explained",
      heading: "Chamet agency registration steps explained in detail",
      blocks: [
        p(
          "The illustrated walkthrough above shows the six screens. This section explains what each screen is doing and what to check before moving on, because a registration problem is usually easier to fix at the screen where it appears than after the account is half-created.",
        ),
        steps([
          "**Open the agent invitation link.** Confirm the page is a registration form, not a login form. Select your country code, enter the phone number you control and check the number twice before requesting a code. A single mistyped digit sends the code to a stranger.",
          "**Pass the security check.** The slider or image check proves a person is present. If it keeps failing, refresh the page, use a stable connection and avoid opening the link inside an in-app browser that blocks scripts. Try a standard browser if the page misbehaves.",
          "**Enter the verification code.** Codes expire. If the message does not arrive within a minute or two, wait for the resend timer instead of requesting repeatedly. Check whether your phone is blocking unknown senders or whether the number has an international SMS restriction.",
          "**Create the password.** Use at least the length the form requires, mix character types and store it in a password manager. Do not use your Chamet host password, your email password or a password you have used on another site. The agency password protects commission data.",
          "**Complete the agency profile.** Enter the phone, WhatsApp and other contact fields the form requests. Read the visibility notice: some fields may be shown to invitees or support. Use a business contact number if you do not want your personal number displayed.",
          "**Log in and locate the invitation cards.** The dashboard home should show separate New Hosts and New Agents cards. Open each one once, copy the link and label it clearly in your notes. Do not send an invitation until you know which account type it creates.",
        ]),
        p(
          "If the registration page reloads or shows an error after the code step, do not immediately start again with a new number. Go back to the login screen and try the credentials you just created. A duplicate registration can leave you with two half-configured accounts and no clear record of which one holds the invitation links.",
        ),
      ],
    },
    {
      id: "profile-visibility",
      heading: "Agency profile, contact visibility and account security",
      blocks: [
        p(
          "Your agency profile is both a trust signal and a support record. Invitees may see the agency name and contact details, and support teams use the same information to identify the account. Keep the name recognisable, avoid impersonating Chamet or another agency, and use a contact route you actually monitor. An agency that cannot answer messages within a reasonable time will lose hosts to agencies that can.",
        ),
        p(
          "Think twice before publishing a personal mobile number. If the dashboard allows a separate WhatsApp business number, use it. If not, decide whether you are comfortable receiving messages from new hosts at all hours, and set expectations in your welcome message. Never publish a number that is tied to your bank alerts or personal OTPs.",
        ),
        p(
          "Security is not only about the password. Turn on the device lock, keep the phone number active, avoid signing in on shared computers and log out after using a cybercafé or a friend's device. If you suspect someone else has access, change the password and review the contact details attached to the account. ChametApps.com will never ask for your agency password or a verification code, and no legitimate support process requires them.",
        ),
        note(
          "The agency dashboard contains commission and invitee information. Treat screenshots of it as private business records. If you share one publicly, mask phone numbers, names, balances and any reference numbers.",
        ),
      ],
    },
    {
      id: "invitation-links",
      heading: "How to use Chamet host and agent invitation links correctly",
      blocks: [
        p(
          "The two invitation cards look similar, and that is where most mistakes begin. A host invitation creates a host account that can stream. An agent invitation creates a management account that can invite others. Sending the wrong card creates an account the person did not want, and the invitation may never appear in the list you expect.",
        ),
        table(
          ["Invitation card", "Creates", "Send it to", "Where to verify"],
          [
            ["New Hosts", "A host account", "Someone who wants to go live and earn from gifts", "My Invitation, Invitee List, Hosts List"],
            ["New Agents", "An agency account", "Someone who wants to recruit and manage a team", "My Invitation, Invitee List, Agents List"],
          ],
          "Which Chamet invitation card to send",
        ),
        p(
          "Before sending a link, tell the person three things: which account type the link creates, that the registration is free, and that the link is an agency referral. After they register, ask them to send you the exact phone number or email they used so you can match the entry in the invitee list. If they do not appear after a reasonable delay, check the correct list before assuming the registration failed.",
        ),
        p(
          "Do not spam invitation links in random groups. Beyond being ineffective, it associates your agency with pressure tactics and can lead to reports. A short personal message that explains the role, the support you provide and what the person should expect is more likely to produce an active host than a broadcast to hundreds of strangers.",
        ),
      ],
    },
    {
      id: "commission-reports",
      heading: "Chamet agency commission, reports and payment: what the numbers mean",
      blocks: [
        p(
          "The dashboard separates team revenue, calculated commission and available payment because they are different things. Team revenue is activity generated by invitees. Calculated commission applies your applicable ratio and rules to eligible revenue. Available payment is what has actually been settled or made available for withdrawal. Mixing the three produces unrealistic expectations and unnecessary support tickets.",
        ),
        p(
          "A simple example makes the distinction concrete. If a rule applicable to your account pays 10% on US$500 of eligible revenue, the arithmetic is US$50. That example does not establish your rate, a minimum payout, a payment date or a guarantee. Your dashboard's own explanation and reporting period decide the real calculation, and the payment section decides whether any amount is ready to move.",
        ),
        list([
          "Check the reporting period before comparing two numbers.",
          "Separate team revenue from commission and from paid amounts.",
          "Read dashboard notices; rule or schedule changes often appear there first.",
          "Confirm the MetWallet account attached to the agency before payout day.",
          "Keep a monthly record of report totals and wallet credits so discrepancies are easy to spot.",
        ]),
        p(
          "For a deeper explanation of ratios, report columns and the difference between commission and cash out, read [Chamet agency commission explained](/blog/chamet-agency-commission-explained/). If a commission amount appears lower than expected, check the period, the eligible revenue base and any deductions before contacting support. A screenshot of a single number rarely explains a calculation.",
        ),
      ],
    },
    {
      id: "registration-problems",
      heading: "Chamet agency registration problems and how to fix them",
      blocks: [
        table(
          ["Symptom", "Likely cause", "What to try"],
          [
            ["Verification code never arrives", "Wrong country code, blocked SMS or a landline number", "Recheck the number, wait for the resend timer, try another mobile number you control"],
            ["Security check keeps resetting", "In-app browser, content blocker or unstable connection", "Open the link in Chrome, Safari or Edge, allow JavaScript and retry on a stable network"],
            ["Password is rejected", "Confirmation mismatch or a password below the minimum", "Retype both fields, remove trailing spaces and use a longer unique password"],
            ["Account already exists", "The number was used in an earlier attempt", "Try logging in with the password you set instead of starting a new registration"],
            ["Dashboard opens but looks empty", "The account is new or the page has not finished loading", "Refresh, check your connection, then reopen the invitation cards from the home menu"],
            ["Invitee is missing", "Wrong invitation card or the invitee did not finish registration", "Confirm the account type, then check the matching Hosts or Agents list"],
          ],
          "Chamet agency registration errors and fixes",
        ),
        p(
          "Registration errors are usually specific, so read the message instead of repeating the same action. A code error means the number or the code is wrong. A security-check error means the browser or connection is interfering. A password error usually means the confirmation does not match or the password is shorter than the minimum. A duplicate-account error means a record already exists for that number.",
        ),
        p(
          "If the page is blank or the button does nothing, switch off any content blocker for the registration domain, allow JavaScript, update the browser and try a different network. In-app browsers inside social apps are a common cause of broken registration forms. Copy the link into Chrome, Safari or Edge and try again.",
        ),
        p(
          "If you have tried the obvious fixes and the account is still not created, stop creating new attempts. Collect the phone number used, the approximate time, the exact error text and a screenshot with personal details masked. Then use the [Chamet help guide](/chamet-help/) or message our WhatsApp support with those details. Repeated attempts can lock the number or create confusing duplicate records.",
        ),
      ],
    },
    {
      id: "after-registration",
      heading: "What to do after your Chamet agency account is approved",
      blocks: [
        p(
          "The first login is the best time to build habits. Open every menu once, note what each screen shows and confirm the invitation links work. Then set up the wallet before you need it. A newly linked wallet does not prove that a commission transfer has happened, but an unlinked wallet guarantees that a payout cannot complete.",
        ),
        cards([
          {
            title: "Learn the dashboard",
            text: "Read the [agency login guide](/chamet-agency-login/) and open each menu once. Know where Hosts List, Agents List and Reports live before an invitee asks.",
          },
          {
            title: "Link MetWallet",
            text: "Follow the [agency withdrawal guide](/chamet-agency-withdrawal/) to bind the correct wallet from My Profile and confirm the masked account.",
          },
          {
            title: "Write a welcome message",
            text: "Explain the app, the support you provide, the content rules and what a new host should complete in the first week. Keep it short and honest.",
          },
          {
            title: "Track your team",
            text: "Check the invitee list weekly and follow up with incomplete profiles. Remove inactive invitees from your expectations, not from your records.",
          },
        ]),
        p(
          "Do not promise income, approval or a payment date to anyone you invite. The platform decides account restrictions, and payment providers decide payout outcomes. Your value as an agency is clarity and support, not guarantees you cannot keep.",
        ),
      ],
    },
    {
      id: "rules-compliance",
      heading: "Agency rules, taxes and responsible recruiting in India",
      blocks: [
        p(
          "Chamet's terms and community rules apply to every account, including the hosts you invite. Agencies should not encourage content that violates those rules, create accounts for minors, use someone else's identity or help anyone evade a platform restriction. A team built on shortcuts tends to lose its accounts, its commission and its reputation at the same time.",
        ),
        p(
          "Commission is business income, not a gift. In India, keep records of what you receive, the platform or wallet statements and any deductions. Depending on your total income and circumstances, tax may apply, and a chartered accountant can explain your obligations better than a website can. This page is guidance, not tax advice.",
        ),
        p(
          "Be careful with advertising. Saying you offer the best Chamet agency in India is a marketing opinion; saying you guarantee a monthly salary is a false promise. Avoid before-and-after balance screenshots that imply guaranteed income, avoid claiming an official Chamet office and avoid using Chamet's logo in a way that suggests you are the platform. The [disclaimer](/disclaimer/) explains our own relationship with Chamet in plain language.",
        ),
        p(
          "Finally, protect your invitees' privacy. Do not publish their numbers, screenshots of their profiles or their earnings. Collect only the information you need to support them, store it securely and delete it when it is no longer needed. Good recruiting is built on trust, and trust is easy to lose.",
        ),
      ],
    },
    {
      id: "first-30-days",
      heading: "Your first 30 days as a Chamet agency",
      blocks: [
        p("The first month decides whether the account becomes a working team or an abandoned dashboard. The goal is not a large roster; it is a small group of hosts who complete registration, finish verification and understand how payment works. Ten supported hosts beat a hundred names that never signed in."),
        table(
          ["Week", "Focus", "Done looks like"],
          [
            ["Week 1", "Account setup", "Dashboard access, profile complete, wallet decision made"],
            ["Week 2", "First invitations", "A handful of hosts invited with the correct link"],
            ["Week 3", "Onboarding support", "Invitees verified, profiles started, questions answered"],
            ["Week 4", "Review", "Reports checked, commission understood, next month planned"],
          ],
          "Agency first-month plan",
        ),
        p("Do not spend week one buying followers or paying for “promotion”. The account needs no audience to invite hosts. Spend the time on a clear onboarding message, a way to answer questions and a simple record of who joined."),
        p("At the end of the month, ask two questions: which step caused the most confusion, and which host needed the most help. The answers tell you what to improve next month far better than a revenue screenshot."),
      ],
    },
    {
      id: "supporting-hosts",
      heading: "What supporting hosts actually involves",
      blocks: [
        p("New agents often imagine support as motivation. In practice it is logistics: helping someone find the right link, understand verification, set up a profile and read a payment screen. Motivation matters, but it rarely solves a blocked registration."),
        list([
          "Send the correct invitation link and explain what happens next.",
          "Walk through verification once, without asking for codes or passwords.",
          "Help with profile basics: photo, nickname, languages, intro.",
          "Explain that Beans and dollars are not the same number.",
          "Show where the earning and withdrawal screens are.",
          "Answer payment questions by stage rather than with a promise.",
          "Escalate platform issues through the official channel.",
        ]),
        p("Set a boundary on your time. A support arrangement that runs at all hours is not sustainable and encourages dependency. Publish the hours you answer, keep replies in one channel, and point people to written guides for the steps that repeat."),
        p("Never log in to a host's account for them. Even with good intentions, it breaks trust and creates a security problem. If someone cannot complete a step, guide them or ask platform support; do not take control of their account."),
      ],
    },
    {
      id: "agency-admin",
      heading: "Agency admin: documents, records and contact details",
      blocks: [
        p("An agency account accumulates small administrative facts that matter later: who owns the wallet, which phone number receives codes, which email is attached, when a host joined, what was paid. Keep them in one place, protected by a password and a backup."),
        table(
          ["Record", "Why keep it", "Where"],
          [
            ["Account identifier and role", "Support needs it to locate the account", "Private note"],
            ["Registered phone and email", "Recovery and verification", "Password manager"],
            ["Wallet ownership and binding date", "Explains payments and changes", "Private note"],
            ["Host join dates and referral source", "Team history and disputes", "Spreadsheet"],
            ["Monthly commission summary", "Tax and reconciliation", "Secure folder"],
            ["Support case references", "Follow-up without repeating", "Secure folder"],
          ],
          "Agency records checklist",
        ),
        p("Do not store passwords in the same file as account numbers, and do not keep identity documents in a shared drive. A password manager or an encrypted folder is enough for most small agencies. The goal is recoverability, not bureaucracy."),
        p("Review the contact details quarterly. An agency that loses access to its registered number can spend weeks recovering the account, and every day without access is a day without invitations or reports."),
      ],
    },
  ],
  faqs: [
    {
      q: "Is Chamet agency registration free?",
      a: "Registration itself does not require an upfront fee on the official form. Avoid anyone who asks for a joining fee, a security deposit or payment to unlock a host slot. A legitimate agency earns through commission, not by charging new members.",
    },
    {
      q: "Can I create a Chamet agency account with my email instead of a phone number?",
      a: "The available sign-up methods depend on the form shown in your region. Phone registration is common, but if the page offers email, use an address you control and can verify. Never use someone else's contact details.",
    },
    {
      q: "What is the difference between a host and an agent in Chamet?",
      a: "A host goes live, talks to viewers and earns from eligible gifts. An agent recruits hosts and other agents, shares invitation links and reviews reports. The agency account does not stream and the host account does not manage a team.",
    },
    {
      q: "Where do I find my agency ID?",
      a: "Open My Profile after signing in to the agency portal and check the identification fields shown for your account. If a support team asks for an agency ID, copy it exactly as displayed rather than guessing from a report.",
    },
    {
      q: "How much commission does a Chamet agency earn?",
      a: "The rate depends on the rules attached to your account and can change. Check My Commission Ratio and the explanation in your dashboard. A percentage shown in an example, such as 10% of US$500, is arithmetic, not a promise of your rate or income.",
    },
    {
      q: "Why is my invited host not showing in the list?",
      a: "Check that you sent the New Hosts link, that the host completed registration and that you are looking at the Hosts List rather than the Agents List. If the entry is still missing after a reasonable delay, contact portal support with the invitee's registration number and date.",
    },
    {
      q: "Can I run a Chamet agency without recruiting other agents?",
      a: "Yes. Many agencies focus on hosts only. Recruiting sub-agents is optional and adds management work. Decide which model you can support before sharing an agent invitation.",
    },
    {
      q: "Do I need a company or GST registration to start?",
      a: "The platform registration form does not require a company. However, commission is income, and your tax or GST obligations depend on your turnover and circumstances. Speak to a qualified accountant if you are unsure.",
    },
    {
      q: "Why did my agency registration fail after the verification code?",
      a: "Common causes include an expired code, a password mismatch, a page reload or a duplicate number. Return to the login screen and try the credentials you created before starting a new registration with another number.",
    },
    {
      q: "Is the Chamet agency portal available as an app?",
      a: "The management workflow described here uses the browser-based portal at agent.ichamet.com. You do not need a separate agency APK. Open the portal in a current browser and sign in with your agency credentials.",
    },
    {
      q: "Can I change my agency contact details later?",
      a: "Contact fields are usually editable from My Profile. If a field is locked, use the portal's support route. Keep the phone number and email current so recovery and payment notices reach you.",
    },
    {
      q: "Does registering through ChametApps.com affect my account ownership?",
      a: "You still own your account and control your password. Registering through our referral link connects your account to our agency for support and commission purposes. Read the referral disclosure and compare agencies before you register.",
    },
  ],
};