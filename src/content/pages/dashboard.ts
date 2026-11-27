import { list, note, p, steps, table, type PageContent } from "@/lib/content";

export const dashboardContent: PageContent = {
  quickAnswer:
    "Chamet agency login happens at agent.ichamet.com, the browser-based agency portal, using the agency username or phone number and password created at registration. After sign-in you can copy New Hosts and New Agents invitation links, check invitee lists, read host and agent reports, review commission information and bind MetWallet from My Profile. The app login is a different account.",
  sections: [
    {
      id: "three-logins",
      heading: "Chamet agency login, app login and host login: three different doors",
      blocks: [
        p(
          "The word login causes more support questions than any other part of Chamet. There are at least three separate doors: the agency portal for management accounts, the Chamet app for hosts and viewers, and the wallet app for payouts. Credentials usually do not carry across them. Using the right door with the wrong credentials looks like a broken account, but it is often just a mismatch.",
        ),
        table(
          ["Door", "Who uses it", "Typical credential", "What is inside"],
          [
            ["Agency portal", "Agency owners and sub-agents", "Agency username or phone number plus password", "Invitation links, invitee lists, reports, commission, profile"],
            ["Chamet app", "Hosts and viewers", "Host phone or email login", "Live rooms, gifts, host profile, My Earning"],
            ["MetWallet", "Anyone receiving or cashing out funds", "Wallet phone or email plus wallet password", "Balance, Basic Level verification, payout methods"],
          ],
          "Chamet agency portal, app and wallet logins compared",
        ),
        p(
          "If you registered as an agency, you may still install the app to watch how the platform works, but you cannot use the agency password to sign in as a host. If you registered as a host, you cannot use the host login on the agency portal. Decide which account you are trying to reach, then use the credential created for that account.",
        ),
        p(
          "The portal address matters too. Bookmarks and old links may point to a previous domain. The agency portal currently referenced on this site is agent.ichamet.com. If a link asks for your agency password on a domain that is not a Chamet property, close it and open the portal from a trusted bookmark instead.",
        ),
      ],
    },
    {
      id: "sign-in",
      heading: "How to sign in to the Chamet agency dashboard",
      blocks: [
        steps([
          "Open the agency portal in a current browser such as Chrome, Edge or Safari.",
          "Enter the agency username or select the phone-number login option if it is offered.",
          "Type the password slowly, check the keyboard language and confirm caps lock is off.",
          "Complete any slider, image or code challenge shown on the page.",
          "Tap Login and wait for the dashboard home to load completely.",
          "If a verification code is requested, enter the newest code sent to the registered contact method.",
          "Once inside, confirm the agency name and account details before sharing any invitation link.",
        ]),
        p(
          "A surprising number of failed logins are typing errors. Mobile keyboards add a space after a word, autocorrect changes an email address and a copied password may include an invisible trailing character. Type the password manually once, or paste it into a notes field first to inspect it. If the password contains symbols, check whether your keyboard is inserting a different symbol than the one saved.",
        ),
        p(
          "The phone login option is convenient but it depends on the number attached to the agency account. If you changed numbers without updating the profile, phone login will not find the account. Use the username and password path or contact portal support. Do not create a new agency account just to get back in; that splits your team and your commission history.",
        ),
      ],
    },
    {
      id: "password-recovery",
      heading: "Forgot the Chamet agency login password? Recovery steps",
      blocks: [
        p(
          "Use the Forget My Password link on the portal login screen. Recovery is completed on the portal, not on this website and not through WhatsApp. The reset code or link goes to the contact method attached to the agency account, so the first question is whether you still control that phone number or email address.",
        ),
        list([
          "Open the official portal and choose the password recovery option.",
          "Enter the phone number or username exactly as registered.",
          "Request the code once and wait for the cooldown before requesting again.",
          "Enter the newest code; older codes may be invalidated by a resend.",
          "Create a new password that you have not used on another site.",
          "Sign in immediately and update the contact details if the old method is about to expire.",
          "If the contact method is lost, use portal support and be ready to prove account ownership.",
        ]),
        p(
          "Recovery loops usually mean the code is going to an address you cannot access, the browser is caching an old reset page or the account is under a restriction. Try a private window, a different browser and a stable network before contacting support. If a message says the account is restricted rather than wrong, recovery will not fix it; you need the support route shown by the portal.",
        ),
        note(
          "ChametApps.com cannot reset an agency password and does not need your old password. Anyone who offers to reset it for you in exchange for a code is attempting to take over the account.",
        ),
      ],
    },
    {
      id: "dashboard-tour",
      heading: "A guided tour of the Chamet agency dashboard menu",
      blocks: [
        p(
          "The menu is your map. Open it once and visit every section before you invite anyone, because an invitee's first question will usually be about a screen you have not seen yet. The descriptions below explain what each area is for and what to verify before trusting a number.",
        ),
        table(
          ["Menu area", "What it is for", "What to check"],
          [
            ["Home", "Invitation cards, commission overview and quick status", "Agency name, commission ratio context and the two invitation cards"],
            ["My Profile", "Account identity, contact details and MetWallet", "Masked wallet account, current phone and WhatsApp details"],
            ["My Invitation, Invitee List, Hosts List", "Hosts who registered through your host link", "Registration date, status and whether the host completed setup"],
            ["My Invitation, Invitee List, Agents List", "Agents who registered through your agent link", "Sub-agent status and whether they are active"],
            ["Invitees' Daily Report, Hosts Report", "Host activity for the selected period", "The period filter before comparing totals"],
            ["Invitees' Daily Report, Agents Report", "Agent activity for the selected period", "Whether the report includes sub-agent teams"],
            ["Invitation Rewards", "Reward options available to the account", "Eligibility and any expiry shown in the section"],
            ["Diamonds Seller", "Diamond-selling section and its requirements", "Whether any account condition blocks access"],
            ["Notification", "Platform notices and updates", "Recent notices before assuming a rule has not changed"],
            ["Report", "Additional reporting functions", "Which report answers your question before exporting data"],
            ["Help Center", "In-portal help and guidance", "The exact article for your issue rather than a generic FAQ"],
          ],
          "Chamet agency dashboard menu areas explained",
        ),
        p(
          "Menu labels can change as the portal is updated. If your screen shows a slightly different label, look for the same function rather than assuming the feature is missing. The walkthrough screenshots on this page show one version of the portal; your account may show more or fewer sections based on region, account type or permissions.",
        ),
      ],
    },
    {
      id: "invitations",
      heading: "Invitation links, invitee lists and the mistakes to avoid",
      blocks: [
        p(
          "The Home section carries the two invitation cards. New Hosts creates a host account; New Agents creates another agency account. Use Share to copy the correct link, then send it with a short explanation of which account it creates. A link without context is how wrong-role registrations happen.",
        ),
        p(
          "After an invitee registers, the matching list should show the entry. If a host is missing from the Hosts List, confirm three things: the host used the host link, the host finished registration and you are looking at the correct list. The Agents List will not show hosts, and a half-finished registration may not appear until the invitee completes it.",
        ),
        list([
          "Label each link in your notes so you never send an agent link to a host.",
          "Ask invitees to confirm the exact contact method they used.",
          "Check the list after a reasonable delay rather than refreshing every minute.",
          "Do not reuse a single link for both roles, even if the landing page looks similar.",
          "Remove links from public posts where bots can harvest them.",
        ]),
        p(
          "Invitation rewards and sub-agent structures add another layer. Read the section in your own dashboard before promising a recruit anything about rewards. A reward shown as available is not necessarily paid, and a commission ratio is not a salary. For definitions, see [Chamet agency commission explained](/blog/chamet-agency-commission-explained/).",
        ),
      ],
    },
    {
      id: "reports",
      heading: "How to read Chamet host and agent reports without misreading them",
      blocks: [
        p(
          "Reports answer questions about a period, not about your entire history. Before you compare two numbers, confirm that both use the same date range, the same report type and the same currency or unit. A host report and an agent report can both be correct while looking different because they measure different populations.",
        ),
        table(
          ["Question", "Report to open", "What to look for"],
          [
            ["Did a new host join?", "Invitee List, Hosts List", "The host entry and registration date"],
            ["Is a host active?", "Hosts Report", "Activity in the selected period, not lifetime totals"],
            ["Did a sub-agent join?", "Invitee List, Agents List", "The agent entry and current status"],
            ["How much team activity happened?", "Agents Report", "The period and whether sub-agent teams are included"],
            ["What is my commission rate?", "Home or My Commission Ratio", "The rate and its explanation, not a dollar amount alone"],
            ["What has been paid?", "Payment or withdrawal section", "Settled or available amounts, separate from calculated commission"],
          ],
          "Which Chamet agency report answers which question",
        ),
        p(
          "If a report total looks wrong, write down the period, the filter and the number before changing anything. Then compare it with the previous period using the same filter. A drop could be normal seasonality, a holiday, a change in host activity or a reporting delay. Without the same baseline, the number is just a surprise.",
        ),
        p(
          "Avoid publishing raw report screenshots. They can expose invitee names, phone numbers and earnings. If you need to ask for help, crop or mask the identifying columns and keep the period and error visible. Support teams need context, not your team's private data.",
        ),
      ],
    },
    {
      id: "commission-payment",
      heading: "Commission ratio, progress and payment status in the dashboard",
      blocks: [
        p(
          "The commission area shows your account's rate and progress. Progress is not the same as a payment schedule; it describes how the account is performing against whatever rule the platform applies. Read the explanation attached to the number, because a ratio without its base is meaningless. Ten percent of a small eligible base is a small amount.",
        ),
        p(
          "Payment status is separate again. An amount can be calculated and still not be payable, and a payable amount can still be waiting on the wallet. The sequence is usually: activity is recorded, commission is calculated for a period, the amount becomes available under the applicable rules, and a transfer reaches the linked wallet. Each arrow can take time.",
        ),
        p(
          "If the dashboard shows a payment but MetWallet does not, check the wallet account masked in My Profile first. A transfer sent to an old or wrong wallet is much harder to recover than one that has not been sent. If the wallet is correct and the amount is missing, collect the period, amount, wallet reference and screenshots, then use the [agency withdrawal guide](/chamet-agency-withdrawal/) and the portal's support route.",
        ),
      ],
    },
    {
      id: "profile-wallet",
      heading: "My Profile: contact details, agency identity and MetWallet",
      blocks: [
        p(
          "My Profile is the account's identity card. It holds the agency identification fields, contact details and the MetWallet account section. Open it before you invite anyone and again before you request a payout. A stale phone number or an unlinked wallet can turn a routine task into a support ticket.",
        ),
        p(
          "The MetWallet section shows a Bind Wallet option when no wallet is connected and a masked phone or email when one is. Confirm that the masked details match the wallet you intend to use. If they do not, do not send funds and do not ask a stranger to fix it; use the wallet's own support or the portal support route.",
        ),
        p(
          "Contact visibility deserves a second look. If the dashboard displays your phone or WhatsApp to invitees, decide whether that is the number you want public. A dedicated business number reduces personal exposure and makes it easier to separate support messages from family calls. Update the profile if your contact route changes, then tell active invitees.",
        ),
      ],
    },
    {
      id: "login-problems",
      heading: "Chamet agency login not working? Nine fixes to try",
      blocks: [
        table(
          ["Problem", "Likely cause", "Fix"],
          [
            ["Login page will not load", "Network, DNS or portal maintenance", "Try another network, disable a VPN, wait and retry, then check the portal status"],
            ["Wrong username or password", "Typo, old password or wrong account", "Type slowly, check caps lock, try the phone login option and use recovery if needed"],
            ["Phone login says no account", "Number changed or not attached", "Use the username and password path, then update the profile after signing in"],
            ["Reset code never arrives", "Email spam filter or SMS block", "Check spam, wait for the cooldown, confirm the contact on file and try another browser"],
            ["Reset link expired", "Old link or multiple requests", "Request one fresh link and use it immediately"],
            ["Blank dashboard after login", "JavaScript blocked or browser cache", "Allow scripts, clear cache, update the browser or try a private window"],
            ["Page loops back to login", "Cookies blocked or session problem", "Enable cookies for the portal, sign out fully and sign in again"],
            ["Account restricted message", "A platform review or rule issue", "Use the support route shown on screen; changing browser will not clear it"],
            ["Works on desktop but not mobile", "Mobile browser layout or in-app browser", "Request the desktop site or open the portal in Chrome or Safari directly"],
          ],
          "Chamet agency login problems and fixes",
        ),
        p(
          "Work down the list in order and change one variable at a time. If you try five fixes at once, you will not know which one worked. If none of them works and the error persists, stop and collect evidence: the exact message, the URL, the browser, the time and whether the phone login behaves differently. That is the information support needs to investigate.",
        ),
      ],
    },
    {
      id: "mobile-security",
      heading: "Using the portal on mobile and keeping the agency account secure",
      blocks: [
        p(
          "The agency portal is a browser application, not a separate agency APK. On a phone, open it in a full browser and use the browser's desktop-site option if the layout is cramped. Avoid logging in through links inside messaging apps, where cookies and scripts may behave differently. A bookmark to the official portal is safer than a link from a group chat.",
        ),
        p(
          "If you share dashboard access with staff, give each person their own supported access rather than sharing one password. Where the portal does not offer separate users, limit who uses the account, change the password when someone leaves and review contact details afterward. Shared credentials make it impossible to know who changed a setting or shared a link.",
        ),
        list([
          "Use a unique password and a password manager.",
          "Lock the phone or computer that stays signed in.",
          "Log out on shared devices and avoid public Wi-Fi for account changes.",
          "Review active sessions or login alerts if the portal provides them.",
          "Do not paste dashboard screenshots into public groups.",
          "Keep the registered phone number active and update it before you lose access.",
        ]),
        p(
          "Security is also about what you install. A browser extension that reads page content can capture dashboard data, and a modified APK can capture app credentials. Keep the browser and device updated, install apps from official stores and remove extensions you no longer use.",
        ),
      ],
    },
    {
      id: "team-roles",
      heading: "Team roles and who should hold the login",
      blocks: [
        p("An agency account is often shared informally: the owner signs in, a helper checks reports, a recruiter sends links. Informal sharing works until something goes wrong. A missing payment, a changed wallet or a removed host becomes impossible to trace when five people use one password."),
        table(
          ["Role", "Needs", "Should not have"],
          [
            ["Owner", "Full account access, wallet and recovery details", "A password shared in a group chat"],
            ["Operations helper", "Reports and invitee lists", "Wallet binding or payment password"],
            ["Recruiter", "Invitation links and a script", "Dashboard login or wallet access"],
            ["Accountant", "Monthly statements and payment records", "Login credentials"],
          ],
          "Agency dashboard roles",
        ),
        p("Where the platform supports separate access, use it. Where it does not, limit sharing: change the password when a helper leaves, avoid saving it in a shared browser and keep wallet actions with the owner. The inconvenience is smaller than recovering a misused account."),
        p("Document who changed what. A simple note such as “wallet re-bound on 12 November by owner” is enough to explain a later report. Without that note, every change looks suspicious."),
      ],
    },
    {
      id: "link-hygiene",
      heading: "Invitation link hygiene",
      blocks: [
        p("Invitation links are the agency's main tool, and they are easy to mishandle. A link posted publicly can attract people who never intend to host; a link sent to the wrong role creates an account in the wrong place; an expired link produces a failed registration that looks like a platform fault."),
        list([
          "Send the host link to hosts and the agent link to agents, never a generic message.",
          "Generate a fresh link when an invitee says the old one failed.",
          "Avoid posting links in public groups where they cannot be attributed.",
          "Keep a note of who received which link and when.",
          "Do not ask invitees to send you their password or OTP.",
          "Remove or ignore links you no longer use.",
        ]),
        p("A short onboarding message reduces support later: what the link does, what details are needed, how long verification takes and where to ask for help. It also sets expectations about commission, so a new host does not arrive believing a salary is waiting."),
        p("If an invitee does not appear in the list, check the link type, the spelling of the phone number and whether registration completed. Do not ask them to register again on a second link until you have checked; duplicate accounts create more work than a delayed invitation."),
      ],
    },
    {
      id: "monthly-review",
      heading: "A monthly dashboard review in ten minutes",
      blocks: [
        p("The dashboard is a management tool, not a scoreboard to check hourly. A monthly review is enough to spot a problem before it becomes expensive. Set a recurring reminder, open the reports, and compare the same fields each time."),
        steps([
          "Confirm the number of active hosts and agents.",
          "Compare team activity with the previous month.",
          "Check commission, payable and paid amounts separately.",
          "Review the linked wallet and contact details.",
          "Look for invitees who registered but never completed setup.",
          "Note one support question and one improvement for the month.",
        ]),
        p("Do not use the review to pressure inactive hosts. Use it to find where onboarding stalled: a missing verification, an unclear profile step, a payment question. Most inactivity is confusion, not laziness."),
        p("Keep the review short and repeatable. A ten-minute routine you actually do beats a detailed audit you postpone. The [agency withdrawal guide](/chamet-agency-withdrawal/) covers what to do when a commission figure needs escalation."),
      ],
    },
    {
      id: "session-hygiene",
      heading: "Session hygiene for a browser dashboard",
      blocks: [
        p("The agency dashboard is a website, so its security depends partly on the browser you use. A saved password on a shared laptop, an old tab left signed in or a browser extension with broad permissions can expose an account without any password being guessed."),
        list([
          "Use a current browser and keep it updated.",
          "Save the password in a password manager, not in a shared browser profile.",
          "Sign out when you finish, especially on a shared or public computer.",
          "Avoid installing unknown extensions that can read page content.",
          "Use a private window only for short sessions, not as your main setup.",
          "Check the address bar before signing in, every time.",
        ]),
        p("If you use a cyber café or a friend's computer, sign out, clear the session and change the password afterwards if you had to type it. A dashboard session can expose invitee lists, reports and wallet settings, so it deserves the same care as an email account."),
        p("Bookmark the portal address rather than searching for it each time. Search results can include lookalike domains, and the difference of a single letter is easy to miss on a phone."),
      ],
    },
  ],
  faqs: [
    {
      q: "What is the Chamet agency login URL?",
      a: "The agency portal is agent.ichamet.com. Open it in a browser and sign in with the agency username or phone number and password created during registration. The consumer app is a separate login.",
    },
    {
      q: "Can I use the Chamet app login for the agency dashboard?",
      a: "No. The app login is for host and viewer accounts. The agency dashboard uses the agency credentials created through agency registration. Using the app credentials on the portal will not open an agency account.",
    },
    {
      q: "How do I reset my Chamet agency login password?",
      a: "Use Forget My Password on the portal, enter the registered phone number or username and request one code. Enter the newest code, then create a new password. If the registered contact method is lost, use portal support and be ready to verify ownership.",
    },
    {
      q: "Why does the agency dashboard show a blank page?",
      a: "The portal needs JavaScript and cookies. Allow both for the portal domain, clear the cache, update the browser and try a private window. An in-app browser or a content blocker can also cause a blank page.",
    },
    {
      q: "Where are the New Hosts and New Agents links?",
      a: "They are on the dashboard Home as two separate invitation cards. Use the Share button on the New Hosts card for a host and the New Agents card for an agent. Never send the same link for both roles.",
    },
    {
      q: "How do I check whether an invited host registered?",
      a: "Open My Invitation, then Invitee List, then Hosts List. Confirm the host used the host link and finished registration. If the entry is missing, check the Agents List in case the wrong card was sent.",
    },
    {
      q: "What does My Commission Ratio mean?",
      a: "It is the rate applied to eligible team revenue under the rules attached to your account. A ratio is not a payment. Check the reporting period, the eligible base and the payment status separately.",
    },
    {
      q: "Can I open the agency portal on my phone?",
      a: "Yes, open the portal in a full mobile browser such as Chrome or Safari. If the layout is difficult, request the desktop site. There is no separate agency APK required for the workflow shown here.",
    },
    {
      q: "Why does phone login not find my agency account?",
      a: "The phone login uses the number attached to the account. If you changed numbers or registered with a different contact method, use the username and password path. Update the profile after signing in so recovery works next time.",
    },
    {
      q: "What should I do if my agency account is restricted?",
      a: "A restriction is a platform decision, not a browser problem. Read the message shown, use the support route in the portal or Help Center and provide the requested verification. Do not create a new account to avoid the restriction.",
    },
    {
      q: "Is it safe to share my agency password with my team?",
      a: "No. Sharing one password makes it impossible to know who changed a setting or shared an invitation link. Use separate supported access where available, and change the password when someone leaves.",
    },
    {
      q: "Does the agency portal show host earnings?",
      a: "The portal reports on invitee activity, not on a host's personal wallet balance. Host earnings are viewed in the Chamet app, and wallet funds are viewed in MetWallet. Keep the three surfaces separate when comparing amounts.",
    },
  ],
};