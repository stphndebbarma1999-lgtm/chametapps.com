import { list, note, p, steps, table, type PageContent } from "@/lib/content";

export const hostWithdrawalContent: PageContent = {
  quickAnswer:
    "To withdraw money from the Chamet app as a host, open your profile, select My Earning and tap Withdraw. Complete the phone, face-verification and MetWallet conditions shown on the screen, authorize the correct wallet account, then return to Chamet and confirm the linked status before submitting. Chamet's published minimum for an eligible host balance is US$10.",
  sections: [
    {
      id: "before-start",
      heading: "Before you withdraw: the conditions that must be complete",
      blocks: [
        p("A host withdrawal is less about tapping a button and more about passing a checklist. The withdrawal screen shows the conditions attached to your account, and each one must be complete before the request can proceed. Common conditions include a verified phone number, a face-verification step and a linked MetWallet account."),
        p("Read the checklist from top to bottom before you tap anything. A condition marked incomplete is the reason a Withdraw button may look inactive or a request may fail. Fixing the condition is faster than contacting support, and it gives you a clear explanation of what was missing if you do need help."),
        table(
          ["Condition", "What it confirms", "Where to complete it"],
          [
            ["Phone number", "The account belongs to a contact you control", "The verification prompt shown on the withdrawal screen"],
            ["Face verification", "A real person matching the profile is present", "The in-app face check, usually before a protected action"],
            ["MetWallet link", "A wallet is connected to receive the funds", "The MetWallet condition, then the wallet app"],
            ["Available balance", "The amount is eligible, not pending or locked", "My Earning, above the Withdraw button"],
          ],
          "Chamet host withdrawal conditions",
        ),
        p("Do not use a screenshot from this guide to judge your own balance. Example screenshots show an example account with example amounts. Your eligibility depends on your own activity, your own conditions and the rules that apply to your region."),
      ],
    },
    {
      id: "earnings-screen",
      heading: "Find My Earning in the Chamet app",
      blocks: [
        p("Open the Chamet app and tap the profile icon at the bottom right. Look for My Earning or the earnings label used in your version of the app. Menu labels can change, so follow the function rather than an exact word: you are looking for the screen that shows your Beans balance and a withdrawal action."),
        steps([
          "Open the app and sign in with the same phone or email method you used at registration.",
          "Tap the profile tab at the bottom right of the screen.",
          "Select My Earning, or the equivalent earnings entry in your menu.",
          "Review the balance shown and look for the Withdraw action beside the withdrawable amount.",
          "Tap Withdraw to open the conditions and the withdrawal form.",
        ]),
        p("If the menu shows several balance-like numbers, identify which one is withdrawable. A lifetime total, a bonus balance and an available balance can all appear on the same screen. The withdrawal screen should make the eligible amount clear; if it does not, stop and ask support rather than guessing."),
        note("The screen you see may differ from our example because of app version, region or account status. Use the current menu in your app and follow the label descriptions rather than forcing a path that is not present."),
      ],
    },
    {
      id: "conditions",
      heading: "Phone and face verification before a host withdrawal",
      blocks: [
        p("Phone verification is usually a code sent to the number attached to the account. If the number is old or inactive, update it before requesting a payout. Face verification is a liveness check: it confirms that the person completing the withdrawal matches the profile. Both checks exist to protect the balance from someone who has stolen a password."),
        p("For face verification, use even lighting and hold the phone at eye level. Remove sunglasses, caps and masks, and follow the prompts slowly. A failed check is often a lighting or connection problem rather than an identity problem. Try a stable network and a brighter room before concluding that the check is broken."),
        p("If face verification keeps failing, do not ask a friend to complete it for you. That defeats the check and can lead to a restriction. Use the in-app support route and explain what the screen says. If your appearance has changed significantly since your identity document, mention that when you contact support."),
      ],
    },
    {
      id: "link-wallet",
      heading: "Link MetWallet to your Chamet host account",
      blocks: [
        p("The wallet link is a hand-off between two apps. Chamet opens MetWallet, you sign in or create a wallet account, you verify the account and you authorize the connection. Then you return to Chamet and confirm that the wallet is linked. The authorization screen is the most important step because it shows which wallet account you are connecting."),
        steps([
          "On the withdrawal conditions screen, tap the MetWallet condition.",
          "Tap Go to MetWallet and wait for the wallet to open.",
          "Read the terms and continue only if you agree.",
          "Choose a sign-in method, such as phone, and enter the details requested.",
          "Enter the verification code sent to that phone or email.",
          "Review the account shown on the authorization screen. Tap Authorize if it is yours, or Switch Account if it is not.",
          "Complete any Basic Level details the wallet requests.",
          "Return to Chamet and confirm that MetWallet is marked as linked.",
        ]),
        p("If the authorization screen shows a phone number or email you do not recognize, stop. Tap Switch Account or close the flow and sign in to the correct wallet. Authorizing the wrong account can send a future transfer to a wallet you do not control, and recovering it may require the other account holder's cooperation."),
        p("A link is not a payment. The green check or linked label confirms the connection only. Your balance still has to be eligible, and the withdrawal request still has to be submitted and processed."),
      ],
    },
    {
      id: "submit-withdrawal",
      heading: "Submit the host withdrawal request and confirm the result",
      blocks: [
        p("After the conditions are complete, return to the withdrawal screen and review the amount, the destination and any fee or minimum shown. Enter the amount you want to withdraw, or use the maximum option if it is offered. Read the confirmation screen before you submit; it is the last point where a wrong destination can be corrected cheaply."),
        p("When you submit, the app may ask for a password, a code or a confirmation tap. Complete it and wait for the request status. Save the reference number and take a screenshot of the confirmation with any personal details masked. That record is what support will ask for if the transfer does not arrive."),
        p("The expected result is a request status in your account, not a bank credit. Payment processing is a separate stage. A message saying the request was submitted is not a promise that the money has reached MetWallet or your bank."),
      ],
    },
    {
      id: "minimum",
      heading: "What is the minimum Chamet host withdrawal?",
      blocks: [
        p("Chamet's published host earnings page currently lists a US$10 minimum for withdrawing an eligible host balance to MetWallet. The page also states that 10,000 Beans equal US$1. Those two facts let you estimate the dollar value of your Beans, but they do not promise a rupee amount."),
        table(
          ["Beans", "Published US$ value", "What it means for the minimum"],
          [
            ["10,000", "US$1", "Below the published US$10 minimum"],
            ["100,000", "US$10", "Meets the published minimum before any deductions"],
            ["500,000", "US$50", "Well above the minimum, subject to the account conditions"],
            ["1,000,000", "US$100", "A larger transfer still depends on wallet and payment rules"],
          ],
          "Chamet Beans and the published host minimum",
        ),
        p("The minimum is not a fee and not a guarantee. Your app may show a different threshold based on region, method or account status. If the Withdraw action is unavailable, compare your available balance with the threshold shown on your screen before assuming something is broken."),
        p("After the balance reaches MetWallet, the wallet's own minimum, fee and method rules apply. A successful host withdrawal can still be followed by a wallet cash-out requirement that you have not met yet."),
      ],
    },
    {
      id: "no-button",
      heading: "No Withdraw button or an incomplete condition?",
      blocks: [
        table(
          ["Symptom", "Likely reason", "What to check"],
          [
            ["Withdraw is greyed out", "A condition is incomplete or the balance is below the minimum", "Read the condition list and compare the available balance with the threshold"],
            ["MetWallet shows incomplete", "The link was never authorized or the wallet session expired", "Reopen the wallet flow, authorize the correct account and return to Chamet"],
            ["Face verification loops", "Lighting, camera permissions or connection", "Allow camera access, improve lighting, restart the app and retry"],
            ["Balance looks lower than expected", "Pending activity, deductions or a different balance type", "Compare the available balance with the lifetime total and any notices"],
            ["Error after tapping Withdraw", "Temporary service issue or account check", "Note the exact message, wait, retry once and contact support if it repeats"],
          ],
          "Chamet host withdrawal troubleshooting",
        ),
        p("Change one thing at a time. If you reinstall the app, switch networks, clear the cache and update your wallet all at once, you will not know which action fixed the problem, and you may create a new session that hides the original error."),
        p("Do not create a second Chamet account to work around a blocked withdrawal. Duplicate accounts complicate identity checks and can put both accounts at risk. Fix the existing account with support."),
      ],
    },
    {
      id: "status",
      heading: "Pending, completed or not received: reading the request status",
      blocks: [
        p("A submitted withdrawal usually has a status. Pending means the request exists but is not finalised. Processing means it is moving through the payment path. Completed means the provider marked it successful. Failed means it did not complete. The definitions can vary, so read the explanation next to the status in your app."),
        p("If the status is pending, use the displayed estimate. Do not resubmit the same request every few minutes. Multiple requests can create multiple references and make reconciliation harder. If the estimate has passed, contact support with the reference, amount, destination and timestamps."),
        p("If the status is completed but MetWallet does not show the funds, check the wallet account that is actually linked. A transfer sent to the wrong wallet may show as completed on the sending side. If the linked wallet is correct, check the wallet's transaction history and contact wallet support with the reference."),
        p("If the money is in MetWallet but not in your bank, you are at the wallet cash-out stage. That is a separate request with its own status and support route. The [MetWallet cash out guide](/metwallet-withdrawal/) explains the next steps."),
      ],
    },
    {
      id: "fees-rupees",
      heading: "Why the rupee amount can be lower than the dollar balance",
      blocks: [
        p("The number in Chamet is a dollar value. The number in your bank is a rupee credit after the wallet's exchange rate and charges. Between those two numbers sit currency conversion, a possible wallet fee, a possible payment-partner charge and the destination method's own terms."),
        p("This site does not publish a fixed USD-to-INR rate because the rate moves and the provider decides which rate applies. Use the quote shown at cash out. Compare the final credit with that quote rather than with the dollar balance, and keep the quote screenshot with your records."),
        p("A lower credit is not automatically an error. A small difference is usually conversion and rounding; a large difference deserves a support query with the reference and the quote. If a fee was not shown before you confirmed, that is also worth raising with the wallet's support."),
      ],
    },
    {
      id: "safety",
      heading: "Host withdrawal safety: OTPs, wallet details and support scams",
      blocks: [
        list([
          "Never share your Chamet password, OTP or payment password with anyone.",
          "Authorize only a MetWallet account you control and recognize.",
          "Do not install remote-access apps or APKs sent by a helper.",
          "Do not send money to unlock a withdrawal or speed up processing.",
          "Use official support routes shown in the app or wallet.",
          "Mask personal details before posting a screenshot in a group.",
          "If someone claims to be from Chamet support, verify through the official website first.",
        ]),
        p("A common scam is a message claiming your withdrawal is blocked and asking for an OTP to release it. No legitimate withdrawal process needs an OTP from a support agent. Another version asks you to pay a release fee to a personal account. Fees, if any, are shown in the app or wallet and are not paid to an individual."),
        p("If you already shared a code, change your password immediately, check the linked wallet and contact official support. Acting quickly is more useful than blaming yourself. Keep the scammer's messages as evidence."),
      ],
    },
    {
      id: "records",
      heading: "Keep records of every host withdrawal",
      blocks: [
        p("A simple record prevents most payment disputes. For each request, note the date, amount, reference, linked wallet, fee and the credit you eventually receive. A note on your phone or a spreadsheet is enough. If you withdraw regularly, the record also helps you spot a change in fees or processing time."),
        p("Keep the wallet statement and the bank statement for the same period. If you need to raise a dispute, you can show the request, the quote and the missing credit together. Screenshots of a balance alone are much weaker evidence."),
        p("Hosting income may be taxable depending on your total income and circumstances. Keep your statements and speak to a qualified tax professional. This guide explains the withdrawal screens, not tax law."),
      ],
    },
    {
      id: "first-payout",
      heading: "What to expect from your first host payout",
      blocks: [
        p("The first payout is a test of the whole chain: verification, wallet linking, eligibility and destination details. It is normal for it to feel slower than later payouts, because every prerequisite is being checked for the first time. Treat it as a setup run rather than a race."),
        steps([
          "Complete phone and face verification before you request anything.",
          "Link MetWallet and confirm the masked account belongs to you.",
          "Check that the eligible balance meets the displayed minimum.",
          "Submit a modest first request rather than the entire balance.",
          "Save the reference and the displayed estimate.",
          "Confirm the wallet credit, then complete the cash out.",
        ]),
        p("A first request may trigger a review even when everything looks complete. That is a security step, not a signal that you did something wrong. Respond through the official app or support flow, and avoid submitting a second request while the first is open."),
        p("Do not compare your first payout timeline with a screenshot from someone else. Their verification, wallet, method and bank are different. Compare your own request with the estimate shown for it, and contact support only when that estimate has clearly passed."),
      ],
    },
    {
      id: "amount-planning",
      heading: "How much should a host withdraw at a time?",
      blocks: [
        p("There is no single correct amount, but there are better and worse patterns. Withdrawing everything the moment a balance appears can leave you below the wallet's cash-out minimum. Withdrawing only once a year concentrates risk and makes reconciliation harder. A monthly routine usually balances effort and flexibility."),
        table(
          ["Pattern", "Advantage", "Watch out for"],
          [
            ["Small, frequent requests", "Regular cash flow", "More fees and more references to track"],
            ["Monthly request", "Simple records", "A delay affects a whole month of income"],
            ["Large, infrequent request", "Fewer transactions", "More exposure if the destination is wrong"],
            ["Leaving a buffer", "Room for fees and timing", "A balance that is easy to forget"],
          ],
          "Host withdrawal patterns",
        ),
        p("Keep a small buffer only if you are comfortable leaving money in the platform. Some hosts prefer to move everything eligible each month and keep the buffer in the wallet instead. Either approach works as long as you know where the money is and can reconcile it."),
        p("If you have a large expense coming, start the process earlier than you think you need to. Verification, reviews and bank posting can add days. A request made on the day of a payment is a request under pressure, and pressure is when people share OTPs or pay fake release fees."),
      ],
    },
    {
      id: "eligibility-edge",
      heading: "Edge cases: bonuses, pending amounts and account changes",
      blocks: [
        p("Not every number on the earning screen is withdrawable. Some amounts may be pending, tied to a programme condition or excluded from the eligible balance. The withdrawal screen should show the withdrawable figure; if it is lower than the total, that difference is a clue rather than a bug."),
        list([
          "A promotional or bonus amount may have conditions attached.",
          "A recent earning may still be settling.",
          "A portion may be reserved against a prior request.",
          "A restriction on the account can pause withdrawals.",
          "A changed phone number may require re-verification.",
          "A newly linked wallet may need a first-payment check.",
        ]),
        p("Before contacting support about a missing amount, compare the total balance, the eligible balance and the pending balance. Write down all three. A support agent can explain the difference much faster when you show the three numbers rather than only the largest one."),
        p("If you changed your phone number or wallet, resolve that change before requesting. A request sent to an old destination is not redirected by updating the profile afterwards. The safest sequence is: update, verify, test with a small eligible amount, then withdraw routinely."),
      ],
    },
    {
      id: "host-evidence",
      heading: "Building an evidence pack for a host payment issue",
      blocks: [
        p("Host support can act faster when the request is documented. The goal is not a long complaint but a small set of facts that identifies the account, the request and the problem. Assemble it once and reuse it for every follow-up."),
        steps([
          "Account identifier and registered phone, masked.",
          "The eligible amount and the request amount.",
          "The request date, time and reference.",
          "A screenshot of the status and any message.",
          "The linked wallet in masked form.",
          "A short list of what you already tried.",
        ]),
        p("Mask names, full numbers and identity details before sending. Support can match a request from a reference and a masked account. Sending a full document in a chat creates a new privacy risk without speeding up the case."),
        p("If the issue is repeated, add a simple timeline: first request, response, second request, current status. A timeline shows a pattern that a single message cannot, and it makes escalation easier to justify."),
      ],
    },
    {
      id: "paused-withdrawals",
      heading: "Why a host withdrawal can pause",
      blocks: [
        p("A paused withdrawal is not always a punishment. Platforms pause payouts when a condition is unresolved: verification is incomplete, a wallet change is recent, a request looks unusual or an account review is open. The pause is a control, and the way to clear it is to resolve the named condition rather than to send more requests."),
        table(
          ["Reason", "How it usually appears", "What helps"],
          [
            ["Verification incomplete", "A prompt or a greyed-out button", "Complete phone or face verification"],
            ["Recent wallet change", "A note about the linked account", "Wait for the stated period and confirm the wallet"],
            ["Unusual activity", "A review notice or a blocked request", "Respond through official support"],
            ["Rule or policy issue", "A restriction message", "Follow the appeal route"],
            ["Destination mismatch", "A failed or returned transfer", "Correct the name or account details"],
          ],
          "Why host withdrawals pause",
        ),
        p("Do not open a second account to bypass a pause. That creates a duplicate identity and usually prolongs the review. Do not pay anyone who claims they can “unlock” the withdrawal; a genuine review does not have a paid shortcut."),
        p("If the reason is unclear, ask one specific question: “Which condition is preventing this withdrawal from completing?” A specific question is easier to answer than a general complaint, and the reply usually tells you what to fix."),
      ],
    },
  ],
  faqs: [
    { q: "How do I withdraw money from the Chamet app?", a: "Open the app, tap the profile tab, select My Earning and tap Withdraw. Complete the phone, face-verification and MetWallet conditions, then submit an eligible request and save the reference." },
    { q: "What is the minimum withdrawal on Chamet for hosts?", a: "Chamet's published host earnings page currently lists a US$10 minimum for an eligible host balance to MetWallet. Check the value shown on your own withdrawal screen because regional or method rules can differ." },
    { q: "Why is my Chamet withdrawal not showing in MetWallet?", a: "Check the status in Chamet, confirm the masked wallet account is the one you control and allow for the displayed processing estimate. If the status is completed and the wallet is correct, contact wallet support with the reference." },
    { q: "Can I withdraw Chamet Beans without MetWallet?", a: "The host flow described by Chamet requires a linked MetWallet before an eligible balance can be transferred. Create or sign in to the wallet, authorize the correct account and confirm the link in Chamet." },
    { q: "Why is the Withdraw button greyed out?", a: "A condition is probably incomplete or the available balance is below the posted minimum. Read the condition list, complete verification and compare the eligible amount with the threshold on the screen." },
    { q: "Do I need face verification to withdraw?", a: "Some accounts are asked to complete face verification before a withdrawal or another protected action. If your screen shows the condition, complete it in good lighting and follow the prompts. It protects your balance from unauthorized access." },
    { q: "What does linked MetWallet mean?", a: "It means Chamet and the wallet account are connected. It does not mean a payment has been sent. You still need an eligible balance and a submitted withdrawal request." },
    { q: "How long does a host withdrawal take?", a: "Use the estimate displayed when you submit. The time can vary by method, provider and account checks. If the window passes, contact support with the reference rather than resubmitting repeatedly." },
    { q: "Can I send my Chamet withdrawal to a friend's wallet?", a: "The wallet should belong to the account holder and match your identity details. Using someone else's account can trigger a review or fail a name check. Keep the wallet and destination in your own name." },
    { q: "What should I do if I authorized the wrong MetWallet?", a: "Do not submit a withdrawal. Return to My Profile or the wallet condition and use the option to switch or unbind the account. If no option is available, contact official support before sending funds." },
    { q: "Does Chamet charge a withdrawal fee?", a: "Any fee or minimum that applies to your request should be shown on the withdrawal screen or at wallet cash out. A fee is different from a minimum. Read the confirmation before submitting." },
    { q: "Why is my rupee credit lower than the dollar amount?", a: "The wallet applies an exchange rate and may charge a fee, and the payment partner or bank may apply its own terms. Compare the final credit with the quote shown at cash out, not with the dollar balance in Chamet." },
  ],
};