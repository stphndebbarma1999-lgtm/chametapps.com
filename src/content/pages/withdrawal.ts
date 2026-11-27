import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const withdrawalContent: PageContent = {
  quickAnswer:
    "Chamet withdrawals happen in stages. Hosts start in the app at My Earning and link MetWallet; agencies start in the dashboard at My Profile and bind the agency wallet; MetWallet cash out is a separate request after funds arrive. A linked wallet is not a payment, and a submitted request is not money received. Check the minimum and fees inside your own account before confirming.",
  sections: [
    {
      id: "find-your-stage",
      heading: "Which Chamet withdrawal guide do you need?",
      blocks: [
        p("Withdrawal questions are easier to answer when you name the stage you are in. There are four common situations: a host whose balance is still inside the app, an agency whose commission sits in the portal, a person whose money is already in MetWallet, and a person whose request is pending or failed. Each has a different starting screen and a different support route."),
        table(
          ["Your situation", "Where the money is", "Guide to open"],
          [
            ["I am a host and need to withdraw", "Chamet app, My Earning", "[Chamet host withdrawal](/chamet-host-withdrawal/)"],
            ["I manage an agency and need to connect the wallet", "Agency portal, My Profile", "[Chamet agency withdrawal](/chamet-agency-withdrawal/)"],
            ["My funds are already in MetWallet", "MetWallet balance", "[MetWallet cash out](/metwallet-withdrawal/)"],
            ["My request is pending, failed or missing", "Submitted request", "[Payment problem help](/chamet-help/#payment-problems)"],
          ],
          "Chamet withdrawal situations and guides",
        ),
        p("If you are not sure where the money is, open the last place you saw a balance. A number inside Chamet is not a wallet balance, and a wallet balance is not a bank balance. Screenshot the screen with the amount and the label above it; the label tells you which stage you are actually in."),
      ],
    },
    {
      id: "four-stages",
      heading: "The four Chamet payment stages, explained without jargon",
      blocks: [
        p("The four stages are deliberately simple, but they are often confused because each one produces a satisfying confirmation. A linked wallet shows a success message. A submitted request shows a reference. A completed status shows a checkmark. None of those is the same as a credit in your bank account."),
        cards([
          { title: "1. Account linked", text: "Chamet and MetWallet are connected. This proves the connection exists, not that money has moved. Confirm the masked wallet details belong to you." },
          { title: "2. Balance available", text: "Your account shows funds eligible for withdrawal. Check that the amount is not pending, bonus-locked or below the minimum shown on the screen." },
          { title: "3. Request submitted", text: "A withdrawal has been sent for processing. Save the reference and the displayed estimate. The request can still fail or need verification." },
          { title: "4. Money received", text: "The destination account confirms the credit. Compare it with the quote and keep the statement. Only this stage proves the transfer reached you." },
        ]),
        p("A useful habit is to say the stage out loud before asking for help: my wallet is linked and my request is pending is a much better starting point than my payment is not coming. The first sentence tells support what to investigate; the second requires a conversation before anyone can help."),
      ],
    },
    {
      id: "host-path",
      heading: "Host withdrawal path: from Chamet Beans to MetWallet",
      blocks: [
        p("A host's withdrawal starts in the Chamet app, not in the agency portal. Open your profile, find My Earning and tap Withdraw. The screen lists the conditions that must be complete, which may include a phone check, face verification and a linked MetWallet. Complete the incomplete items before submitting."),
        p("Chamet's published host earnings page currently lists a US$10 minimum for withdrawing an eligible host balance to MetWallet, and states that 10,000 Beans equal US$1. The app screen is the final authority for your account, and the minimum or conditions may differ by region or change over time. Never treat a screenshot from another account as your own eligibility."),
        p("The wallet link is a separate flow. You leave Chamet, sign in to MetWallet, verify the account and authorize the connection, then return to Chamet to confirm the linked status. If you authorize the wrong wallet account, the screen may still show a successful link; check the masked phone or email before submitting a withdrawal."),
        steps([
          "Open the profile tab and select My Earning.",
          "Tap Withdraw and read every condition on the page.",
          "Complete phone or face verification if it is incomplete.",
          "Tap the MetWallet condition and follow the wallet linking flow.",
          "Return to Chamet, confirm the linked account and review the withdrawable amount.",
          "Submit only when the amount is eligible and the destination is correct.",
        ]),
      ],
    },
    {
      id: "agency-path",
      heading: "Agency withdrawal path: commission, My Profile and MetWallet",
      blocks: [
        p("An agency does not use the host withdrawal screen. Sign in to the agency portal, open My Profile and find MetWallet Account. Choose Bind Wallet, complete the wallet authorization and confirm the masked account that appears in the profile. A linked wallet is a prerequisite for agency payments, not proof that a commission transfer has occurred."),
        p("Agency commission has its own reporting cycle. The dashboard may show team revenue, calculated commission and available payment as separate figures. Read the period and the explanation attached to each one. A newly linked wallet does not retroactively change a calculated amount, and a payment status may lag behind a report."),
        p("If the dashboard says a payment was made but the wallet is empty, check the masked wallet details and the wallet's transaction history before contacting support. If the wallet details are wrong, do not request another payout to a second wallet; get the account corrected first. The [agency withdrawal guide](/chamet-agency-withdrawal/) covers the My Profile screens and the confirmation checks."),
      ],
    },
    {
      id: "wallet-path",
      heading: "MetWallet cash-out path: method, fee and final credit",
      blocks: [
        p("Once money is inside MetWallet, the cash-out request belongs to the wallet, not to Chamet. Open the wallet, check the available balance, complete any required verification and choose Cash Out where it is offered. The available methods, minimums, fees and arrival estimates are displayed by the wallet and its payment partners."),
        p("The final rupee amount is not simply the dollar balance multiplied by a rate you found online. The wallet applies its exchange rate and charges, and the receiving bank or payment method may add its own terms. Write down the quote before you confirm. After the transfer, compare the credit with the quote, not with the number in Chamet."),
        p("MetWallet verification, Basic Level details and payment-password setup can appear at different points. Complete them before you need a payout. A common failure is waiting until an urgent withdrawal to discover that the wallet profile is incomplete or that the name does not match the destination account."),
      ],
    },
    {
      id: "minimums-fees",
      heading: "Minimums, fees and exchange rates: why the final amount differs",
      blocks: [
        table(
          ["Deduction or rule", "Where it appears", "Can you avoid it?"],
          [
            ["Withdrawal minimum", "Chamet withdrawal screen", "No, the threshold is set by the platform or method"],
            ["Wallet or payment fee", "MetWallet cash-out quote", "Sometimes, by choosing a different method or amount"],
            ["Currency conversion", "MetWallet cash-out quote", "No, but comparing methods can reduce the difference"],
            ["Bank posting delay", "Destination account", "No, posting times vary by bank and day"],
          ],
          "Chamet withdrawal minimums, fees and conversion",
        ),
        p("A minimum is not a fee. A US$10 minimum means the request must meet a threshold; it does not mean US$10 is deducted. A fee is an amount removed from the transfer. An exchange rate determines how many rupees a dollar becomes. Keeping those three ideas separate prevents most where did my money go confusion."),
        p("Fees and rates change. This site does not publish a fixed USD-to-INR rate and does not guarantee a specific payout. Use the quote shown at the moment of cash out, and keep a screenshot of it. If the credit differs from the quote by more than a small rounding amount, contact the wallet's support with the reference and the quote."),
        p("For the dollar conversion itself, Chamet's published rule is 10,000 Beans = US$1. That gives you a dollar estimate, not a rupee promise. Read [Chamet Beans to dollars](/blog/chamet-beans-to-dollars/) for worked examples and [Chamet host earnings](/blog/chamet-host-earnings-guide/) for how the balance is built."),
      ],
    },
    {
      id: "statuses",
      heading: "Pending, processing, completed and failed: what each status means",
      blocks: [
        p("Status labels are not standardized across every provider, so read the explanation next to the label. In general, pending means the request exists but has not been finalised, processing means it is moving through the provider, completed means the provider marked it successful, and failed means it did not complete. Completed is still not the same as received until your destination account shows the credit."),
        table(
          ["Status", "What to do now", "What not to do"],
          [
            ["Pending", "Note the time, check the estimate and wait for the stated window", "Do not resubmit every few minutes"],
            ["Processing", "Check that the destination details are correct and keep the reference", "Do not send the same request to a second wallet"],
            ["Completed", "Check the destination account and wallet statement", "Do not assume the bank has posted it instantly"],
            ["Failed", "Read the reason, fix the cause and ask support if unclear", "Do not retry repeatedly without changing anything"],
            ["No record at all", "Confirm you submitted on the correct account and screen", "Do not create a duplicate request"],
          ],
          "Chamet and MetWallet withdrawal statuses",
        ),
        p("If a status has not changed after the displayed window, collect four things: the reference, the amount, the destination and the timestamps. Then contact the support channel for the surface where you submitted the request. Chamet support cannot trace a wallet-to-bank transfer, and the wallet cannot explain a balance that never left Chamet."),
      ],
    },
    {
      id: "india-payments",
      heading: "Receiving Chamet payouts in India: rupees, methods and records",
      blocks: [
        p("Indian users eventually receive rupees, but the route depends on the wallet and the methods available to their account. Do not assume that a method shown in a screenshot is available to you. The wallet lists the methods it can support for your profile, and availability can change."),
        p("Name matching matters. The MetWallet profile and the destination bank or payment account should belong to the same person. A mismatch can trigger a review or a failed transfer. If you use a joint account or a family member's account, check the provider's rules first; guessing can delay the payout and complicate support."),
        p("Keep records for every transfer: the request date, amount, reference, fee, exchange rate and the credit in your bank statement. If you receive payouts regularly, a simple monthly spreadsheet is enough. These records help with support disputes and with your own tax filing. Commission and hosting income may be taxable depending on your circumstances; speak to a qualified professional for advice specific to you."),
        note("ChametApps.com does not process payments and cannot release a withdrawal. We explain the screens and the checks. Account restrictions, wallet reviews and payment-provider decisions are made by those services."),
      ],
    },
    {
      id: "problems",
      heading: "Quick checks before you report a Chamet payment problem",
      blocks: [
        list([
          "Confirm which account you used: host, agency or MetWallet.",
          "Check the available balance, not the lifetime or pending total.",
          "Confirm the minimum and any condition shown on the withdrawal screen.",
          "Check the masked wallet account and the destination details.",
          "Read the status and the estimate attached to the request.",
          "Compare the quote with the credit before assuming an amount is missing.",
          "Save the reference, timestamp and screenshots with personal data masked.",
          "Use the support route for the surface where the request was submitted.",
        ]),
        p("If you changed your phone number, lost access to the registered email or switched wallets recently, mention that first. Contact-detail changes are a common reason a confirmation or transfer goes somewhere unexpected. Updating the profile before a payout is much easier than recovering an account after one."),
        p("For a structured troubleshooting path, open [Chamet payment problem help](/chamet-help/#payment-problems). It separates pending, failed and not-received cases so you do not apply a fix for the wrong status."),
      ],
    },
    {
      id: "choose-amount",
      heading: "How to choose the right amount to withdraw",
      blocks: [
        p("A withdrawal is not an all-or-nothing decision. You can leave a balance in the platform, move part of it to the wallet and cash out a smaller amount. The right split depends on what you need, how often you want to repeat the process and how much you value keeping a buffer for fees and timing."),
        p("Start with the minimum. If your eligible balance is barely above the threshold, withdrawing everything may leave you with a small wallet balance that is below the wallet's own cash-out minimum. In that case the money has moved stage but not reached your bank, and you have added a step without getting paid."),
        table(
          ["Situation", "Sensible approach", "Why"],
          [
            ["First payout", "Withdraw a modest eligible amount after verification", "Confirms the whole chain works before a larger transfer"],
            ["Balance just above the minimum", "Check the wallet minimum before moving everything", "Avoids funds sitting in the wallet below its cash-out threshold"],
            ["Urgent expense", "Check the quote and the arrival estimate first", "Urgency is the wrong time to discover a fee or a delay"],
            ["Monthly routine", "Withdraw on a fixed date and record the reference", "Makes reconciliation and tax records simpler"],
            ["Team commission", "Confirm the settlement period before requesting", "A calculated figure may not be payable yet"],
          ],
          "Choosing a Chamet withdrawal amount",
        ),
        p("Do not withdraw in a panic because a balance looks large. A Beans number is not rupees, and a wallet balance is not a bank credit. Decide the amount in the currency of the stage you are actually using, then check the next stage's rules before confirming."),
        p("If you are withdrawing for the first time, keep the amount small enough that a delay would not damage your plans. A first transfer is partly a test of verification, name matching and destination details. Once those are proven, larger routine transfers are less stressful."),
      ],
    },
    {
      id: "reconciliation",
      heading: "Reconciling the quote, the wallet and the bank statement",
      blocks: [
        p("Reconciliation means proving that the money you expected is the money you received, after the deductions you agreed to. It is easier than it sounds if you record four numbers in order: the amount requested, the amount that arrived in the wallet, the cash-out quote and the amount credited by the bank."),
        steps([
          "Record the request date, amount and reference from the platform.",
          "Confirm the dollar amount that appears in the wallet.",
          "Save the cash-out quote, including the rate, fee and estimated payout.",
          "Compare the bank credit with the quote, allowing for small rounding.",
          "Note any difference and the date it appeared.",
          "Keep the record with your monthly income notes.",
        ]),
        p("A difference of a few rupees can come from rounding or a bank charge. A large difference usually means a different rate, an unexpected fee or a transfer that went somewhere else. In the last case, contact support before sending more money or changing the destination."),
        p("If the platform says paid and the wallet is empty, check whether an earlier wallet is still linked. If the wallet says completed and the bank is empty, check the destination details and the bank's posting time. Each mismatch belongs to a different support team, and naming the stage correctly saves a week of messages."),
      ],
    },
    {
      id: "payout-day",
      heading: "Payout-day security rules",
      blocks: [
        p("Payment day attracts fraud because people are anxious and willing to accept help. The rules are simple and do not change: no password, no OTP, no payment password and no remote access to your phone. A genuine support agent can see the request without seeing your secret."),
        list([
          "Open the app or portal yourself; do not use a link sent by a stranger.",
          "Check the domain before signing in.",
          "Never share a code, even with someone who quotes your reference.",
          "Do not install a screen-sharing app for a payment issue.",
          "Do not pay a release fee to an individual account.",
          "Keep your registered phone and email active.",
        ]),
        note("If someone contacts you first and claims your withdrawal is blocked unless you act immediately, treat it as a scam attempt. Close the chat and contact support through the official channel you already use."),
        p("A second rule is to avoid making account changes during a payout. Changing a phone number, wallet or bank details while a request is processing creates confusion about which destination was used. Resolve the current request first, then update the profile."),
      ],
    },
    {
      id: "team-payouts",
      heading: "Agency team payouts: questions to settle before month end",
      blocks: [
        p("Agencies often handle two kinds of money: their own commission and, in some arrangements, payments to hosts or sub-agents. Mixing them creates disputes. Decide in advance what the agency pays, when it pays and how a host can check the figure."),
        table(
          ["Question", "Why it matters"],
          [
            ["Is the host paid by the platform or by the agency?", "The payer determines the support route and the timing"],
            ["Which period does a payment cover?", "Prevents comparing different months"],
            ["What is deducted before payment?", "Fees, adjustments or prior advances change the total"],
            ["Where can a host see the calculation?", "Transparency reduces disputes"],
            ["What happens if the platform payment is delayed?", "The agency should not promise a date it cannot control"],
            ["How are corrections handled?", "A clear adjustment process avoids repeated errors"],
          ],
          "Agency payout questions",
        ),
        p("No agency should promise a fixed salary. Commission is activity-based, and a team member's payment depends on eligible activity and the platform's settlement. Explain that in writing before someone joins, and repeat it in the first month when expectations are forming."),
        p("If you use a spreadsheet, keep one row per host and one column per stage: eligible activity, commission, amount paid and payment date. Do not put passwords or identity documents in that sheet. Share only the row a host needs, with other people's details removed."),
      ],
    },
    {
      id: "fee-anatomy",
      heading: "Where fees appear in the withdrawal chain",
      blocks: [
        p("Fees rarely appear as one line called “fee”. They can be embedded in an exchange rate, deducted before a transfer, charged by the wallet or applied by the receiving bank. Understanding where each one sits explains why the final credit is lower than the amount you first saw."),
        table(
          ["Stage", "Possible deduction", "Where to see it"],
          [
            ["Platform balance to wallet", "Conversion or processing terms", "The withdrawal screen and its notice"],
            ["Wallet cash out", "Wallet fee and exchange rate", "The quote before you confirm"],
            ["Bank credit", "Receiving bank charges or conversion", "The bank statement or tariff sheet"],
            ["Failed and retried request", "Duplicate processing or return charges", "Support response and statement"],
          ],
          "Where withdrawal fees can appear",
        ),
        p("The number that matters is the quote you confirmed, not the headline rate. A quote that shows the final payout is more useful than a rate that ignores the fee. Save it before you submit, because the screen may not keep the same detail later."),
        p("If two deductions appear for the same request, ask for a breakdown rather than a refund demand. A breakdown shows whether one charge is a bank fee and the other a wallet fee, or whether something was charged twice."),
      ],
    },
  ],
  faqs: [
    { q: "How do I withdraw money from Chamet?", a: "Hosts open My Earning in the Chamet app, tap Withdraw and complete the listed conditions, including linking MetWallet. Agencies bind MetWallet from My Profile in the portal. MetWallet cash out is a separate request after funds arrive in the wallet." },
    { q: "What is the minimum Chamet withdrawal?", a: "Chamet's published host earnings page currently lists a US$10 minimum for withdrawing an eligible host balance to MetWallet. Agency and wallet methods have their own conditions. Always check the value displayed in your own account." },
    { q: "Why is my Chamet withdrawal pending?", a: "Pending means the request exists but is not finalised. It can reflect normal processing, a verification check or a provider delay. Note the estimate, avoid duplicate requests and contact support with the reference after the window passes." },
    { q: "Is a linked MetWallet the same as a payment?", a: "No. Linking confirms that the accounts are connected. A payment requires an available balance, a submitted request and a credit in the destination account. Check each stage separately." },
    { q: "Can I withdraw Chamet earnings directly to my bank account?", a: "The host flow described by Chamet moves an eligible balance to MetWallet first. From MetWallet, the available cash-out methods depend on your profile and region. The wallet shows the supported destination options." },
    { q: "Why is my rupee amount lower than the dollar balance?", a: "The final credit can be reduced by wallet fees, payment-partner charges and the exchange rate applied at cash out. Compare the credit with the quote shown for the transaction rather than with the dollar balance alone." },
    { q: "How long does a Chamet withdrawal take?", a: "Timing depends on the stage and provider. Use the estimate displayed for your request. Host balance transfers, agency commission settlement and MetWallet cash out can each take a different amount of time." },
    { q: "What should I do if my withdrawal failed?", a: "Read the failure reason, confirm the destination details and check that the account is verified. Fix the cause before retrying. If the reason is unclear, contact the support route for the surface where you submitted the request with the reference and screenshots." },
    { q: "Can someone else withdraw my Chamet money for me?", a: "Do not give anyone your password, OTP or payment password, even if they offer to fix a withdrawal. A legitimate support process does not require them. Use official support channels and keep control of your accounts." },
    { q: "Why does MetWallet ask for Basic Level details?", a: "Basic Level verification confirms your identity and contact details so the wallet can support payouts. Complete it before requesting a cash out. The exact documents depend on the wallet's current requirements." },
    { q: "Do I need to pay tax on Chamet earnings in India?", a: "Hosting and commission income may be taxable depending on your total income and circumstances. Keep statements and transaction records, and consult a qualified tax professional. This guide is not tax advice." },
    { q: "Which support channel should I contact for a payment issue?", a: "Contact the support channel for the stage where the problem occurred. Chamet or the agency portal handles platform balances; MetWallet handles wallet cash out; your bank or payment provider handles posting delays after a completed transfer." },
  ],
};