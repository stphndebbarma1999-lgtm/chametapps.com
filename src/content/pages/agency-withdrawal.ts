import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const agencyWithdrawalContent: PageContent = {
  quickAnswer:
    "Agency payments start in the Chamet agency dashboard, not in the host app. Sign in to the portal, open My Profile, scroll to MetWallet Account and choose Bind Wallet. Complete the wallet authorization and confirm the masked phone or email. A linked wallet is necessary but not proof of payment; commission still has to be calculated, settled and transferred.",
  sections: [
    {
      id: "agency-vs-host",
      heading: "Agency withdrawal is not the same as a host withdrawal",
      blocks: [
        p("Hosts and agencies both end up in MetWallet, but they start in different places. A host opens My Earning inside the Chamet app. An agency opens My Profile inside the browser-based agency portal. Using the host instructions on an agency account, or the reverse, leads to screens that do not exist and support tickets that begin with the wrong assumption."),
        table(
          ["Step", "Host", "Agency"],
          [
            ["Starting point", "Chamet app", "Agency portal"],
            ["Menu", "My Earning", "My Profile"],
            ["Wallet action", "Withdraw, then the MetWallet condition", "MetWallet Account, then Bind Wallet"],
            ["Balance source", "Host gifts and eligible programmes", "Eligible team commission"],
            ["Confirmation", "Linked wallet plus a submitted request", "Masked wallet account plus a settlement or payment status"],
          ],
          "Host and agency withdrawal paths compared",
        ),
        p("The two accounts can belong to the same person, but they are separate ledgers. Do not move money between them or ask a host to withdraw agency commission. If you hold both roles, label your notes clearly so you know which account a reference belongs to."),
      ],
    },
    {
      id: "prepare-wallet",
      heading: "Prepare the MetWallet account before binding it",
      blocks: [
        p("Before you connect a wallet, make sure it is a wallet you control and can verify. You will need access to the registered phone or email, the wallet password or sign-in method and, depending on the wallet's requirements, identity details for Basic Level verification. Name matching matters: the wallet holder and the destination payout account should be the same person."),
        list([
          "Use a phone number you will keep active; changing it later can complicate verification.",
          "Complete the wallet's own sign-up before starting the bind flow, or be ready to create it during the flow.",
          "Have your identity details available if the wallet requests Basic Level information.",
          "Do not use a wallet that belongs to a friend, a relative or another agency.",
          "Note the masked phone or email that identifies the wallet; you will need it to confirm the link.",
        ]),
        p("A wallet that has never been verified may still connect, but the cash-out stage can later fail or require additional documents. Setting up the wallet properly before the first commission transfer is less stressful than fixing it after money has arrived."),
      ],
    },
    {
      id: "open-profile",
      heading: "Open My Profile in the Chamet agency dashboard",
      blocks: [
        p("Sign in to the agency portal with your agency credentials. Open the menu at the top left and select My Profile. Scroll down until you reach the MetWallet Account section. If a wallet is already linked, the section shows a masked account; if not, it shows a Bind Wallet action."),
        steps([
          "Open the agency portal in a current browser and sign in.",
          "Open the menu and select My Profile.",
          "Scroll to MetWallet Account.",
          "Check whether a wallet is already connected.",
          "If a wallet exists but is wrong, resolve that before binding another one.",
          "If no wallet is connected, choose Bind Wallet.",
        ]),
        p("If My Profile does not load, the portal session may have expired or a script may be blocked. Sign out, sign in again, allow JavaScript and try a private window. A blank profile is usually a browser session issue rather than a deleted account."),
      ],
    },
    {
      id: "bind-wallet",
      heading: "Bind MetWallet from My Profile, step by step",
      blocks: [
        p("The bind flow hands you from the portal to MetWallet. Read each screen before tapping continue. The authorization screen is the one that matters most because it shows which wallet account will receive future transfers."),
        steps([
          "Tap Bind Wallet in the MetWallet Account section.",
          "Tap Go to MetWallet when the portal offers the hand-off.",
          "Sign in to MetWallet with phone, email or another available method.",
          "Verify the sign-in with the code sent to you.",
          "Read the authorization request and check the account details shown.",
          "Tap Authorize if the account is yours; tap Switch Account if it is not.",
          "Complete any required wallet profile or Basic Level details.",
          "Return to the agency portal and confirm the linked account appears.",
        ]),
        p("Do not authorize a wallet simply because the page opened it automatically. Shared devices, saved sessions and old browser logins can open the wrong wallet. The extra ten seconds you spend checking the masked details can prevent a payout from going to the wrong place."),
        note("ChametApps.com does not receive or store your wallet password or verification code. Complete the wallet authorization yourself and never send a code to a support contact."),
      ],
    },
    {
      id: "confirm-account",
      heading: "Confirm the linked wallet and where to go next",
      blocks: [
        p("After you return from the wallet, refresh My Profile if necessary. The MetWallet Account section should show a masked phone or email. Compare it with the wallet you actually intended to use. If a Withdraw From Wallet option is present, it usually opens the wallet flow; it is not an agency commission request by itself."),
        p("Write down the masked identifier and the date you linked the wallet. If you later change phones or switch wallets, that record tells you which account received earlier transfers. It also helps support understand the sequence if a payment is missing."),
        cards([
          { title: "Wallet linked", text: "The connection exists. No money has moved yet." },
          { title: "Commission calculated", text: "The dashboard has a figure for a period, but it may not be payable yet." },
          { title: "Payment available", text: "The amount is marked payable under the rules attached to your account." },
          { title: "Money received", text: "MetWallet shows the funds. Cash out to a payment method is a separate step." },
        ]),
        p("The [agency login guide](/chamet-agency-login/) explains each portal menu if you are still learning where things live. The [MetWallet cash out guide](/metwallet-withdrawal/) takes over once the funds are in the wallet."),
      ],
    },
    {
      id: "commission-where",
      heading: "Where is my agency commission, and why is it not in the wallet?",
      blocks: [
        p("Agency commission is calculated from eligible team activity under the rules attached to your account. The dashboard can show team revenue, a commission ratio, a calculated commission and a payment status. Those are four different numbers. The wallet only changes when a payment is actually transferred, so an empty wallet does not necessarily mean the report is wrong."),
        p("Start with the reporting period. A commission figure for last month will not match a wallet balance for this month. Then check whether the amount is marked payable or still calculated. Finally, check whether the wallet attached at the time of payment is the same wallet you are looking at now."),
        p("If you changed wallets after a payment was sent, the funds may be in the earlier wallet. Look for the masked identifier you recorded when you linked it. If you never recorded it, check your wallet history for the transfer date and amount."),
        p("For a full explanation of ratios and report columns, read [Chamet agency commission explained](/blog/chamet-agency-commission-explained/). It includes a worked example and explains why a percentage is not a salary."),
      ],
    },
    {
      id: "payment-status",
      heading: "Agency commission payment status: calculated, payable and paid",
      blocks: [
        table(
          ["Status", "Meaning", "What to check"],
          [
            ["Calculated", "A figure exists for the period", "The period filter and the eligible base"],
            ["Payable", "The rules mark the amount as available", "The linked wallet and any minimum"],
            ["Processing", "A transfer is moving", "The wallet identifier and the estimate"],
            ["Paid", "The platform marked the transfer complete", "The wallet transaction history"],
            ["Failed", "The transfer did not complete", "The reason, the wallet status and support guidance"],
          ],
          "Agency commission status meanings",
        ),
        p("A payment marked paid is not the same as money in your bank. If the wallet shows the funds, the next step is a wallet cash out. If the wallet does not show them, check the wallet account and the transaction history before contacting support. A completed status on the portal side can coexist with a wallet-side delay or a wrong destination."),
        p("Do not ask a host to withdraw on your behalf or send commission through a personal account. Keep agency payments inside the official flow so the records stay consistent."),
      ],
    },
    {
      id: "wrong-wallet",
      heading: "Wrong wallet linked? Fix it before the next payment",
      blocks: [
        p("If My Profile shows a masked wallet that is not yours, do not submit or request a payout. Look for an unbind, switch or change option in the wallet section. If the portal offers a Withdraw From Wallet option, it may open the wallet and let you switch accounts, but do not assume a switch also changes the agency link."),
        p("If no self-service option exists, contact the portal's support route with the agency account details, the masked wallet currently shown and the wallet you intended to link. Do not send money to the wrong wallet to test it. If a payment has already gone to the wrong wallet and that wallet belongs to someone else, contact support immediately; recovery depends on the other account holder and the provider, and it is not guaranteed."),
        p("After any change, refresh My Profile and confirm the new masked identifier. Then update your notes. A screenshot of the confirmed profile is useful evidence if a later payment is questioned."),
      ],
    },
    {
      id: "wallet-cashout",
      heading: "From agency wallet balance to rupees",
      blocks: [
        p("Once commission reaches MetWallet, the wallet controls the cash-out experience. Available methods, minimums, fees, exchange rates and arrival estimates are set by the wallet and its partners. The agency portal will not show the rupee quote, and Chamet support cannot trace a wallet-to-bank transfer."),
        p("Complete wallet verification before you need the money. Basic Level details, a payment password and a bound payout method can each take time. If the wallet allows more than one method, compare the quote rather than assuming the first option is cheapest."),
        p("Keep the wallet reference and the bank credit together. If the amount differs from the quote, compare the fee and the exchange rate before concluding that commission was short. The [MetWallet cash out guide](/metwallet-withdrawal/) walks through the eight steps."),
      ],
    },
    {
      id: "records-tax",
      heading: "Records, tax and reporting for Chamet agency income",
      blocks: [
        p("Agency commission is business income. Keep monthly records of the report period, team revenue, calculated commission, payments received and wallet cash-outs. If you pay sub-agents or staff, keep those records separately. Good records make it easier to answer a tax question, prove a payment and spot a calculation error."),
        p("In India, tax treatment depends on your total income, business structure and turnover. GST may apply in some situations. A chartered accountant can explain your obligations; this page cannot. Do not rely on a social media post for tax advice."),
        p("Privacy matters too. Reports contain invitee names, numbers and activity. Do not publish raw screenshots or share the dashboard with people who do not need access. If you must share an excerpt for support, mask personal data while keeping the period and the amount visible."),
      ],
    },
    {
      id: "security",
      heading: "Protect the agency wallet and dashboard access",
      blocks: [
        list([
          "Use a unique agency password and a password manager.",
          "Do not share the agency login with hosts or outside contractors.",
          "Change the password when a team member who had access leaves.",
          "Keep the registered phone and email active.",
          "Log out on shared computers and avoid public Wi-Fi for wallet changes.",
          "Verify the portal domain before entering credentials.",
          "Review My Profile after any suspicious message or login alert.",
          "Never send a wallet code or payment password to anyone.",
        ]),
        p("Agency accounts can control money and personal data, which makes them a target. A message that says your commission is blocked and asks for a code is a scam, not support. A person who offers to bind the wallet for you does not need your password, and a legitimate wallet authorization happens inside the wallet, not in a chat."),
        p("If you suspect unauthorized access, change the password, check the wallet link, review recent payments and contact the official support channels for the portal and the wallet. Speed matters more than perfect wording."),
      ],
    },
    {
      id: "wallet-ownership",
      heading: "Agency wallet ownership: one wallet, clear rules",
      blocks: [
        p("An agency wallet receives commission and, in some arrangements, funds that are later distributed to hosts. That mix creates a simple requirement: everyone involved must know whose wallet it is and what it is allowed to receive. A shared wallet without rules becomes a source of disputes."),
        table(
          ["Setup", "When it works", "Risk"],
          [
            ["Agency owner's personal verified wallet", "Small team, owner handles all payouts", "Mixing personal and business money"],
            ["Dedicated wallet for the agency", "Regular commission and team payments", "Requires disciplined record-keeping"],
            ["A host's own wallet", "Host receives directly from the platform", "Agency cannot see or control the transfer"],
            ["A third party's wallet", "Almost never appropriate", "Ownership, tax and access problems"],
          ],
          "Agency wallet setups",
        ),
        p("A dedicated wallet is usually cleaner once commission becomes regular. It separates personal spending from team money and makes reconciliation easier. If you use one, keep its login under the owner's control, document who can request a transfer and review the statement monthly."),
        p("Never let a sub-agent bind their personal wallet to the agency account without a written agreement. When that person leaves, the wallet may leave with them, and recovering access can be slow. The agency account should control its own payout destination."),
      ],
    },
    {
      id: "month-end-close",
      heading: "A month-end close routine for agency commission",
      blocks: [
        p("A short month-end routine turns commission from a vague number into a record you can defend. It also makes the next month's comparison meaningful, because you are comparing the same fields rather than whatever happened to be on screen."),
        steps([
          "Set the report to the closed month and confirm the time zone.",
          "Record team revenue, eligible base and calculated commission separately.",
          "Check the payment status for the same period.",
          "Compare the linked wallet and any changes made during the month.",
          "Save masked screenshots and the key figures in one file.",
          "Note questions for support before the next payout, not after.",
        ]),
        p("A close routine should take minutes, not hours. If it takes hours, the reports are being read at the wrong level of detail. Export or screenshot the summary, then drill into a host only when a number looks inconsistent."),
        p("Keep the record for the period required by your tax adviser. Commission income, wallet transfers and bank credits are three different records, and a dispute or a filing may need all three. The [withdrawal overview](/chamet-withdrawal/) explains how the stages fit together."),
      ],
    },
    {
      id: "team-payout-ops",
      heading: "Paying hosts correctly: an operating checklist",
      blocks: [
        p("If your agency pays hosts directly, the process deserves the same care as a payroll. A clear schedule, a written calculation and a consistent channel prevent most disputes. Ambiguity is what turns a small delay into a trust problem."),
        list([
          "Agree in writing what the agency pays and what the platform pays.",
          "State the period covered by each payment.",
          "Show the eligible activity and any deduction before the total.",
          "Use one payment channel and one reference format.",
          "Send a short statement with each payment.",
          "Handle corrections in the next cycle, not by informal adjustments.",
        ]),
        p("Do not promise a fixed salary to a host. If the platform's payment is delayed, say so and explain the stage rather than covering it with a personal loan or a vague assurance. Honesty about timing is more valuable than a smooth promise that fails."),
        p("Keep personal data out of group chats. A host should see their own figures, not the whole team's. If you need to discuss a specific payment, use a private channel and mask other people's details."),
      ],
    },
    {
      id: "commission-timing",
      heading: "Why agency commission can arrive later than expected",
      blocks: [
        p("Commission is calculated from team activity and released under the platform's schedule. A figure that looks final in a report can still be provisional, and a payment that looks due can still be waiting for a settlement step. The dashboard usually distinguishes calculated, payable and paid, and the difference explains most timing questions."),
        table(
          ["Label", "What it means", "What to do"],
          [
            ["Calculated", "The amount has been computed for the period", "Wait for it to become payable"],
            ["Payable", "Eligible for payment under the schedule", "Confirm the wallet and payment method"],
            ["Paid", "Released by the platform", "Check the wallet, then the bank"],
            ["Adjustment", "A correction to an earlier figure", "Read the note before querying"],
          ],
          "Agency commission status labels",
        ),
        p("A delay can also come from verification, a wallet change or a review of unusual activity. In those cases the amount does not disappear; it waits. Contacting support before the stated schedule has passed usually produces a generic reply and delays a real answer."),
        p("Keep the period, the amount and the status in your monthly record. If a payment is late, you can show exactly which period and which status changed, which is far more useful than describing the delay in general terms."),
      ],
    },
    {
      id: "sub-agent-payments",
      heading: "Sub-agent and host payments from the agency wallet",
      blocks: [
        p("Some agencies receive a combined payment and then distribute a share to sub-agents or hosts. That arrangement is an internal agreement, not a platform guarantee. Before money moves, the agency should be able to answer who is paid, for which period, at what rate and with what record."),
        list([
          "Agree the share and the period in writing.",
          "Show the calculation before payment, not after a complaint.",
          "Use one payment reference format so a transfer can be matched.",
          "Do not deduct unexplained charges from someone else's share.",
          "Keep identity and bank details private between team members.",
          "Resolve corrections in the next cycle with a clear note.",
        ]),
        p("If the platform pays hosts directly, the agency's role is support rather than distribution. Mixing the two models confuses everyone. Decide which model applies and state it in the onboarding message."),
        p("A wallet that receives both agency commission and team money needs a clean record. Keep personal spending out of it, and reconcile it monthly. The extra discipline protects the agency if a host later questions a payment."),
      ],
    },
    {
      id: "before-you-ask",
      heading: "Before you ask support about a missing commission",
      blocks: [
        p("A commission question is easier to answer when it starts with a period and a status rather than a balance. Check three things first: the report period, whether the figure is calculated or payable, and whether the wallet linked during that period is still linked now."),
        p("If all three are correct and the payment window has passed, send the period, the amount, the status and the last four digits of the wallet. That message can be answered without a back-and-forth, and it keeps the case focused on the payment rather than the whole account."),
      ],
    },
  ],
  faqs: [
    { q: "How do I withdraw agency commission from Chamet?", a: "Sign in to the agency portal, open My Profile, bind the correct MetWallet account, then check the payment or withdrawal section for amounts marked payable. Commission must be calculated and settled before a transfer can occur." },
    { q: "Where is MetWallet in the Chamet agency dashboard?", a: "Open My Profile from the dashboard menu and scroll to the MetWallet Account section. If no wallet is linked, the section shows Bind Wallet. If one is linked, it shows a masked phone or email." },
    { q: "Is agency commission paid automatically to MetWallet?", a: "The dashboard determines when an amount is payable and the transfer is processed. A linked wallet is required, but linking alone does not create a payment. Check the payment status and the wallet history separately." },
    { q: "Why is my agency commission not in my wallet?", a: "Check the period, whether the amount is calculated or payable, the wallet masked in My Profile and the wallet transaction history. If the wallet is wrong or the status is paid but funds are missing, contact the relevant support with the reference." },
    { q: "Can I use a family member's MetWallet for agency payments?", a: "The wallet should belong to the account holder and match the identity details used for verification. Using someone else's wallet can trigger a review or fail a name check. Confirm the wallet's rules before linking." },
    { q: "How do I change the wallet linked to my agency?", a: "Look for an unbind, switch or change option in the MetWallet Account section of My Profile. If none is available, use the portal support route. Do not send a test payment to a new wallet before the link is confirmed." },
    { q: "Does linking MetWallet cost anything?", a: "The link itself is a connection between accounts. Fees can apply when the wallet converts or cashes out funds, and those are shown by the wallet. Review the quote before confirming a cash out." },
    { q: "Why does the agency dashboard show a commission but no payment date?", a: "A calculated figure is not a payment schedule. Read the explanation and notices for the applicable payment cycle. If the amount is marked payable and no transfer appears, contact support with the period and amount." },
    { q: "Can I withdraw agency commission from the Chamet app?", a: "No. Agency commission is managed through the agency portal and its linked wallet. The app's My Earning screen belongs to a host account. Use the portal for agency payments." },
    { q: "What documents does MetWallet need for agency payouts?", a: "Requirements depend on the wallet and region and may include identity and contact verification at Basic Level. Complete the wallet's requested steps before a payout is due. The wallet shows the current requirements." },
    { q: "Do I pay tax on Chamet agency commission in India?", a: "Commission is business income and may be taxable depending on your total income and structure. Keep monthly records and consult a qualified tax professional. This guide is not tax advice." },
    { q: "What should I do if my agency wallet is wrong?", a: "Do not request another payout. Use the portal's change or support option, confirm the new masked identifier in My Profile and update your records. If funds already went to the wrong wallet, contact support immediately." },
  ],
};