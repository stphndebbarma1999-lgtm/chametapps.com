import { list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postLogin: BlogPost = {
  slug: "chamet-agency-login-problems",
  category: "Troubleshooting",
  published: "2026-10-24",
  updated: "2026-11-26",
  readingMinutes: 8,
  excerpt:
    "Nine practical fixes for a Chamet agency login that will not work, including the account-mismatch mistake that looks like a wrong password.",
  keywords: ["chamet agency login problems", "chamet agency login not working", "chamet login failed", "chamet agency password reset"],
  quickAnswer:
    "Most Chamet agency login failures come from four causes: the wrong door (app instead of portal), a wrong or outdated password, a contact method you no longer control, or a browser session issue. Check the door and the credential first, then the browser, then the account status.",
  sections: [
    {
      id: "wrong-door",
      heading: "The wrong-door mistake",
      blocks: [
        p("The agency portal is a browser application at agent.ichamet.com. The Chamet app is a separate consumer app. The MetWallet app is a third login. Credentials usually do not carry across them, so a correct password in the wrong place looks like a wrong password."),
        table(
          ["If you want to…", "Open", "Credential"],
          [
            ["Invite hosts or agents", "Agency portal", "Agency username or phone and password"],
            ["Host or watch live", "Chamet app", "Host or viewer login"],
            ["Receive or cash out funds", "MetWallet", "Wallet login and payment password"],
          ],
          "Which login door to use",
        ),
        p("Decide what you are trying to do, then pick the door. If you registered as an agency, the app cannot open an agency dashboard. If you registered as a host, the portal cannot open a host account."),
      ],
    },
    {
      id: "credential",
      heading: "Fix the credential before you reset it",
      blocks: [
        p("Typing errors are more common than forgotten passwords. A mobile keyboard may add a space, autocorrect an email or change a symbol. Caps lock and keyboard language can silently alter a password that worked yesterday."),
        steps([
          "Type the password manually once instead of pasting it.",
          "Check caps lock and the keyboard language.",
          "Paste the password into a notes field to inspect hidden characters.",
          "Try the phone-number login option if you registered with a phone.",
          "Use the recovery flow only if the credential is genuinely unknown.",
        ]),
        p("If a password manager filled an old password, update the saved entry after a successful reset. A manager that keeps filling the wrong credential can make a solved problem look unsolved."),
      ],
    },
    {
      id: "recovery",
      heading: "Password recovery that actually completes",
      blocks: [
        p("Use Forget My Password on the portal. The reset code or link goes to the contact method attached to the agency account. If you no longer control that phone or email, recovery will not complete, and you need the portal's support route."),
        list([
          "Request one code and wait for the cooldown before requesting another.",
          "Use the newest code; a resend can invalidate the previous one.",
          "Check spam and blocked messages for an email code.",
          "Open the reset link in the same browser where you requested it.",
          "Create a password you have not used on another site.",
          "Sign in immediately and update the contact details if needed.",
        ]),
        note("ChametApps.com cannot reset an agency password and does not need the old one. Anyone who offers to reset it for a code is attempting to take over the account."),
      ],
    },
    {
      id: "browser",
      heading: "Browser and session problems",
      blocks: [
        p("A page that loads but loops back to login usually has a cookie or session problem. A blank dashboard usually has a script problem. Both are local to your browser, not evidence that the account is gone."),
        table(
          ["Symptom", "Likely cause", "Fix"],
          [
            ["Page keeps returning to login", "Cookies blocked or stale session", "Allow cookies, sign out fully, sign in again"],
            ["Dashboard is blank", "JavaScript blocked or cached files", "Allow scripts, clear cache, update the browser"],
            ["Spinner never finishes", "Weak network or an extension", "Try another network and a private window"],
            ["Mobile layout is unusable", "Small screen with a desktop layout", "Request the desktop site or use a larger device"],
            ["Only one browser fails", "An extension or saved data", "Disable extensions or try another browser"],
          ],
          "Agency login browser problems",
        ),
        p("Change one variable at a time. If you clear the cache, disable extensions and switch networks at once, you will not know which fix worked. If none works, note the exact message and the URL for support."),
      ],
    },
    {
      id: "restriction",
      heading: "Restricted, suspended or “contact support” messages",
      blocks: [
        p("A restriction message is not a login bug. It means the platform has applied a review or a rule. Changing browsers, resetting the password or creating a new account will not clear it."),
        p("Read the message and use the support route it shows. Provide the account details and any verification the platform requests. If an appeal route exists, follow it once with a clear explanation rather than sending repeated messages."),
        p("Do not create a duplicate agency account to get around a restriction. Duplicate accounts can put both accounts at risk and split your team and commission history. Fix the original account."),
      ],
    },
    {
      id: "phone-change",
      heading: "Changed your phone number? Fix it before you are locked out",
      blocks: [
        p("The registered phone number is the recovery key. If you change numbers without updating the profile, a later login failure becomes much harder to solve. Update the contact details while you still have access to the old number."),
        steps([
          "Sign in with the current credential.",
          "Open My Profile and update the phone or email.",
          "Verify the new contact method immediately.",
          "Sign out and test the new login path.",
          "Tell active invitees if your support number changed.",
        ]),
        p("If you have already lost access to the old number, contact portal support and be ready to prove ownership. Do not buy a “recovery service” from a stranger; those offers usually target the account rather than help it."),
      ],
    },
    {
      id: "security",
      heading: "Keeping the account signed in safely",
      blocks: [
        list([
          "Use a unique password and a password manager.",
          "Lock the device that stays signed in.",
          "Log out on shared computers.",
          "Avoid public Wi-Fi for account or wallet changes.",
          "Review login alerts and active sessions if available.",
          "Remove browser extensions you no longer use.",
          "Never paste dashboard screenshots into public groups.",
        ]),
        p("If you suspect unauthorized access, change the password, check the linked wallet, review recent invitations and payments, and contact support. Speed matters. A shared password makes it impossible to know who changed what, so give staff their own supported access where possible."),
      ],
    },
    {
      id: "escalate",
      heading: "What to send support if nothing works",
      blocks: [
        p("Collect the exact error message, the URL, the browser and version, the time, and whether the phone login behaves differently. Add a screenshot with personal data masked. Mention what you already tried so support does not repeat it."),
        p("If the account is restricted, include the restriction message and any case reference. If a recovery code never arrives, say which contact method you are using and whether you still control it. Clear facts shorten the conversation."),
      ],
    },
    {
      id: "login-evidence",
      heading: "What to send when login support asks for details",
      blocks: [
        p("Login support needs to identify the account and the failure. A message that says “login not working” forces a round of questions. A short, structured message can skip that round and reach the cause faster."),
        table(
          ["Detail", "Example", "Why it helps"],
          [
            ["Surface", "Agency portal in Chrome", "Routes the case to the right team"],
            ["Identifier", "Phone ending 4321", "Finds the account without exposing it"],
            ["Error", "“Incorrect password” or “too many attempts”", "Distinguishes a lock from a wrong password"],
            ["Time", "Today, 9:40 pm IST", "Matches server logs"],
            ["Tried", "Password reset once, new browser", "Avoids repeated advice"],
          ],
          "Login support details",
        ),
        p("Do not send your password or an OTP. Mask the identifier to the last few digits; support can still locate the account. If a screenshot includes a code, cover it before sending."),
        p("If you have already tried a reset, say whether the reset email or SMS arrived. That single fact separates a delivery problem from a credential problem and saves a day."),
      ],
    },
  ],
  faqs: [
    { q: "Why can I not log in to my Chamet agency account?", a: "Check that you are on the agency portal rather than the app, confirm the username or phone and password, and try a private window. If the account is restricted, use the support route shown." },
    { q: "Can I use my Chamet app password for the agency dashboard?", a: "No. The app and the agency portal use separate accounts. Use the agency credentials created at registration, or recover them on the portal." },
    { q: "How do I reset my agency password if I lost my phone number?", a: "Use the portal's support route and be ready to prove account ownership. Recovery codes go to the registered contact method, so a lost number requires support assistance." },
    { q: "Why does the dashboard go back to the login page?", a: "Cookies may be blocked or the session may be stale. Allow cookies for the portal, sign out fully and sign in again. A private window can confirm whether an extension is involved." },
    { q: "Why is the dashboard blank after login?", a: "The portal needs JavaScript. Allow scripts for the domain, clear the cache, update the browser and try a different browser or network." },
    { q: "Does the agency portal work on mobile?", a: "Yes, in a full mobile browser such as Chrome or Safari. If the layout is cramped, request the desktop site. Avoid in-app browsers from messaging apps." },
    { q: "What does “account restricted” mean?", a: "It means the platform has applied a review or rule. It is not a browser issue. Read the message, use the official support or appeal route and do not create a duplicate account." },
    { q: "Is it safe to share my agency login with my team?", a: "No. Sharing one password makes it impossible to know who changed a setting or shared a link. Use separate supported access where available and change the password when someone leaves." },
    { q: "Why does phone login not find my account?", a: "The phone option uses the number attached to the account. If you changed numbers, use the username and password path or contact support. Update the profile after signing in." },
    { q: "Can I create a new agency account if I cannot log in?", a: "Avoid it. A duplicate account splits your history and can complicate verification. Recover the original account or ask support for help." },
  ],
  related: [
    { href: "/chamet-agency-login/", label: "Agency login and dashboard guide" },
    { href: "/chamet-help/", label: "Chamet help by stage" },
    { href: "/blog/chamet-agency-vs-host-account/", label: "Agency vs host account" },
  ],
};