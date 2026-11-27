import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const metwalletContent: PageContent = {
  quickAnswer:
    "MetWallet cash out is the step after money has already arrived in the wallet. Open MetWallet, complete any verification the app requests, check the available balance, choose Cash Out or Withdraw, enter an amount, review the method, fee and exchange-rate quote, then confirm with your payment password. The request is separate from the original Chamet transfer and has its own status and support route.",
  sections: [
    {
      id: "what-is-metwallet",
      heading: "What MetWallet is, and what it is not",
      blocks: [
        p("MetWallet is a separate wallet app used in the Chamet payment flow. When a host withdrawal or an agency payment is approved, the funds are sent to a linked MetWallet account rather than directly to a bank account. From there, a cash-out request moves the balance to a supported destination, such as a bank account or another payment method, depending on the wallet and the region."),
        p("MetWallet is not a bank. It is not a Chamet balance either. Money in the wallet has left the platform but has not necessarily reached your bank. That middle position explains most confusion: a person checks Chamet, sees a completed request, checks the bank, sees nothing, and assumes the money is lost. In reality it is sitting in a third place with its own rules."),
        table(
          ["Balance location", "What it is", "How to move it"],
          [
            ["Chamet Beans or host balance", "Platform balance before withdrawal", "Host withdrawal or agency payment flow"],
            ["MetWallet balance", "Wallet funds after the platform transfer", "MetWallet cash out to a supported method"],
            ["Bank or payment account", "Final destination", "No action; wait for the provider to post it"],
          ],
          "Where Chamet money sits at each stage",
        ),
        p("The wallet is also not a savings account you should leave large balances in. Cash out when you need the money, keep records, and avoid treating an app balance as an emergency fund. Wallet availability and terms can change, and the conversion rate at the time of cash out is what matters."),
      ],
    },
    {
      id: "before-cashout",
      heading: "Before you cash out: verification, password and destination",
      blocks: [
        p("A cash out can fail at the last step because a prerequisite was never completed. The wallet may ask for Basic Level verification, a payment password, a bound phone number or a destination account. Finish those before you need an urgent transfer, not during one."),
        list([
          "Confirm you can sign in to the wallet and receive its codes.",
          "Complete Basic Level or identity verification if the wallet requests it.",
          "Set a payment password you can remember and have not reused elsewhere.",
          "Add or confirm the destination bank or payment method.",
          "Check that the name on the wallet matches the destination account.",
          "Review any limit that applies to your verification level.",
        ]),
        p("Name matching is a frequent cause of failed cash outs. If the wallet is in your name and the bank account is in a relative's name, the provider may reject or hold the transfer. Do not wait until the money is in the wallet to discover this; check the wallet's rules and use a destination that matches."),
        p("Verification requirements differ by country and by the amount. A small first cash out may need less than a large one. The wallet shows the current requirement, and that screen is more reliable than a tutorial written months ago."),
      ],
    },
    {
      id: "eight-steps",
      heading: "MetWallet cash out in eight steps",
      blocks: [
        steps([
          "Open MetWallet and sign in with the account linked to Chamet.",
          "Check the available balance and confirm the funds have actually arrived.",
          "Tap Cash Out, Withdraw or the equivalent action in your version of the app.",
          "Enter the amount, or choose the maximum option if it is offered.",
          "Select a destination method and review the details carefully.",
          "Read the fee, exchange-rate and arrival quote before continuing.",
          "Confirm with your payment password or the verification step shown.",
          "Save the reference and check the status until the destination account is credited.",
        ]),
        p("Do not confirm on autopilot. The confirmation screen is where the fee and the rate appear, and it is the last point before the request becomes difficult to reverse. A screenshot of that screen is also the best evidence if the credit differs from the quote."),
        p("If the app asks for a code by SMS or email, use the newest code and enter it promptly. Old codes can expire, and repeated requests may trigger a temporary cooldown. If codes never arrive, check spam, confirm the registered contact and try again later rather than requesting ten codes in a row."),
      ],
    },
    {
      id: "methods-india",
      heading: "Cash-out methods for users in India",
      blocks: [
        p("The methods available to you depend on your wallet profile, verification level and region. A common route is a bank transfer, and some wallets support other local payment methods where the provider makes them available. Do not assume that a method shown in someone else's screenshot is enabled for your account."),
        p("Bank transfer details usually include the account number and IFSC for an Indian bank. Check every digit before confirming, and use the account holder name exactly as the bank holds it. A single wrong digit can send the transfer to the wrong account or cause a rejection, and recovery is slow."),
        p("If the wallet supports more than one method, compare the total received rather than the headline fee. One method may have a lower fee but a worse exchange rate, or a faster estimate but a lower limit. The best choice depends on how urgently you need the money and how much you are moving."),
        p("Keep the destination details saved and verified in the wallet. Re-entering them under time pressure is how typos happen. If you change banks, update the destination and test with a small cash out before moving a large balance."),
      ],
    },
    {
      id: "fees-fx",
      heading: "Fees and exchange rates: how the final rupee amount is calculated",
      blocks: [
        p("The wallet receives a dollar balance and delivers rupees. Between those two numbers are an exchange rate and, often, a fee. The rate may include a spread, which means it differs from the mid-market rate you see on a news site. That is normal for a conversion service, but the difference should be visible in the quote."),
        table(
          ["Component", "Where it is shown", "What to compare"],
          [
            ["Exchange rate", "Cash-out confirmation or quote", "The rate applied to this transaction, not a headline rate"],
            ["Wallet fee", "Fee line in the quote", "The amount deducted before conversion"],
            ["Payment-partner charge", "Quote or destination statement", "Any charge by the bank or method"],
            ["Arrival estimate", "Status screen", "The expected window, not a guarantee"],
          ],
          "MetWallet cash-out cost components",
        ),
        p("This site does not publish a fixed USD-to-INR rate. Rates move, and the wallet decides the rate for your transaction. A worked example with an assumed rate can teach the arithmetic, but it must not be read as a promise. Use the quote shown at the moment you confirm."),
        p("If the final credit is lower than expected, compare three things: the amount requested, the rate applied and the total deductions. A small gap can be rounding; a large gap may be a fee you missed or a charge from the receiving bank. Raise it with the wallet's support using the reference and the quote."),
      ],
    },
    {
      id: "payment-password",
      heading: "Payment password, OTP and account recovery",
      blocks: [
        p("A payment password is a second lock on your money. It should be different from your login password and from any password you use on other sites. If the wallet offers biometric confirmation, use it in addition to, not instead of, a strong password. Never share the payment password with anyone, including someone claiming to be support."),
        p("An OTP is temporary and single-use. A support agent does not need it. If someone asks for the code to release a cash out, the request is a scam. Close the conversation, check your wallet activity and change your password if you already shared anything."),
        p("If you forget the payment password, use the wallet's recovery flow. Recovery may require the registered phone, email, identity details or a waiting period. Start it early rather than during an urgent payout. If you lose access to the registered contact method, contact wallet support and be ready to prove ownership."),
        note("ChametApps.com cannot reset a MetWallet password, release a cash out or view your wallet balance. We explain the flow; the wallet controls the account."),
      ],
    },
    {
      id: "status-timing",
      heading: "How long does a MetWallet cash out take?",
      blocks: [
        p("Arrival time depends on the method, the amount, the provider and sometimes the time of day. A bank transfer may be faster or slower than another method, and weekends or bank holidays can add time. The app shows an estimate for your request; use that instead of a generic number from a forum."),
        p("A status of processing means the request is moving. A status of completed means the provider marked it successful, but the destination bank may still need time to post the credit. If the estimate passes, check the destination statement and then contact the wallet with the reference. Do not submit a second cash out for the same balance while the first is unresolved."),
        p("Large transfers can receive additional checks. If the wallet asks for documents, provide them through the official app or support channel. Do not send identity documents to an individual on social media, even if they claim to be expediting your payment."),
      ],
    },
    {
      id: "failed",
      heading: "Cash out failed or funds not received: what to check",
      blocks: [
        table(
          ["Problem", "Likely cause", "Next step"],
          [
            ["Cash-out button unavailable", "Balance below the minimum or verification incomplete", "Check the minimum and complete the requested verification"],
            ["Request rejected", "Destination details or name mismatch", "Correct the destination and confirm the account holder name"],
            ["Status stuck on processing", "Provider review or bank delay", "Wait for the estimate, then contact wallet support with the reference"],
            ["Completed but no bank credit", "Bank posting delay or wrong account", "Check the statement, then contact the bank and wallet support"],
            ["Wrong amount received", "Fee, rate or partial deduction", "Compare with the quote and raise a query with evidence"],
            ["Payment password fails", "Wrong password or locked attempts", "Use the official recovery flow; do not keep guessing"],
          ],
          "MetWallet cash-out problems and checks",
        ),
        p("Write down the reference before you contact anyone. Support conversations that begin with a reference, amount, date and destination are resolved faster than ones that begin with a screenshot of a balance. Keep the quote and the bank statement too."),
        p("If the destination account was wrong, contact the wallet immediately. A transfer to another person's account may not be recoverable, and the bank may require the recipient's consent. Prevention is far cheaper than recovery."),
      ],
    },
    {
      id: "safety",
      heading: "MetWallet safety: scams that target cash-out users",
      blocks: [
        list([
          "No legitimate agent needs your payment password or OTP.",
          "No one should ask you to pay a fee to a personal account to release funds.",
          "Do not install remote-access tools for a helper.",
          "Do not share wallet screenshots that show your full phone number or balance.",
          "Verify the app comes from the official store before installing or updating.",
          "Check the domain or app name before entering credentials.",
          "Log out on shared devices and use a screen lock.",
          "If a message creates urgency, slow down; urgency is a scam tactic.",
        ]),
        p("A common script says your cash out is blocked and a small payment will clear it. Another asks you to receive money for someone else and forward it, which can involve you in money laundering. Refuse both. Report the messages and keep your account details private."),
        p("If you suspect unauthorized access, change the login and payment passwords, review recent transactions, check the linked phone and email, and contact wallet support. If money has moved without your authorization, also report it to your bank and the local authorities as appropriate."),
      ],
    },
    {
      id: "records-tax",
      heading: "Records to keep for MetWallet cash outs",
      blocks: [
        p("For each cash out, keep the date, amount in dollars, exchange rate, fee, rupee credit, reference and destination. If you receive Chamet payouts regularly, a monthly spreadsheet makes reconciliation simple and gives you a clean record for tax filing."),
        p("Compare the wallet statement with the bank statement at the end of each month. If a transfer is missing, you will notice it while the details are still fresh. If a fee changes, the comparison shows when it started."),
        p("Hosting and commission income may be taxable in India depending on your total income and circumstances. Keep the records and consult a qualified professional. The wallet statement alone may not be enough; the platform reports and the bank credits together tell the full story."),
      ],
    },
    {
      id: "common-questions",
      heading: "MetWallet and Chamet: the three balances people mix up",
      blocks: [
        p("The first balance is inside Chamet: Beans, gifts or an eligible host amount. The second is inside MetWallet after a transfer. The third is in your bank. Each balance has its own app, its own status and its own support route. When a number does not match, identify which balance you are looking at before assuming an error."),
        cards([
          { title: "Chamet balance", text: "Platform activity. Withdraw through the app or the agency portal." },
          { title: "MetWallet balance", text: "Funds that arrived from Chamet. Cash out to a supported method." },
          { title: "Bank balance", text: "Money posted by the payment provider. Check the statement and reference." },
        ]),
        p("If you are still at the Chamet stage, read [host withdrawal](/chamet-host-withdrawal/) or [agency withdrawal](/chamet-agency-withdrawal/). If the money is already in the wallet, this page is the right guide. If a request is pending or failed, the [withdrawal hub](/chamet-withdrawal/) shows which status path to follow."),
      ],
    },
    {
      id: "wallet-limits",
      heading: "Wallet limits, multiple accounts and device changes",
      blocks: [
        p("A wallet is not a bank account with unlimited throughput. Providers set limits for verification tiers, methods and risk controls, and those limits can change. The wallet shows the applicable limit when you start a cash out; if an amount is above it, the app usually offers a smaller request or asks for additional verification."),
        table(
          ["Situation", "What to expect", "What to do"],
          [
            ["Amount above the displayed limit", "The request is blocked or split", "Follow the wallet's instruction; do not create a second account"],
            ["New device sign-in", "Extra verification or a cooldown", "Use the registered number and complete the check"],
            ["Multiple wallet accounts", "Confusion about which one receives funds", "Keep one verified wallet for Chamet payouts"],
            ["Dormant wallet", "Re-verification may be required", "Sign in before you need a payout"],
            ["Changed phone number", "Codes go to the old number", "Update the number through the official process first"],
          ],
          "MetWallet account situations",
        ),
        p("Multiple accounts are a common self-inflicted problem. Someone creates a second wallet because the first one had a verification issue, then links the second one to Chamet and later cannot remember which wallet received an earlier payment. Keep one wallet, verify it properly and close or ignore the others."),
        p("If you change phones, sign in to the wallet on the new device before a payout. A new device can trigger a security check, and discovering that during a withdrawal adds a day to the process. Keep the old device available until the new one is confirmed."),
      ],
    },
    {
      id: "international",
      heading: "Travelling, NRI readers and currency mismatches",
      blocks: [
        p("This site is written primarily for readers in India, but people travel, study abroad and move. A wallet verified in one country may behave differently when you sign in from another. That is not necessarily a problem, but it can trigger a location or identity review."),
        list([
          "Keep the registered phone number reachable while travelling.",
          "Avoid switching VPN countries during verification or cash out.",
          "Check whether the destination method is available in your current location.",
          "Use a bank account that matches the wallet holder's name.",
          "Expect the wallet's own rate and fees, which may differ from your home bank.",
          "Contact wallet support before a large international transfer.",
        ]),
        p("A currency mismatch is not only about exchange rates. A destination account in a different country can involve correspondent banking, additional checks and a longer posting time. The wallet quote may show one figure while the receiving bank applies its own conversion or charge."),
        p("If you are an NRI planning to receive Chamet income, speak to a tax professional in your country of residence. The platform and wallet handle the transfer mechanics, but the tax treatment of the income is a separate question that this guide cannot answer."),
      ],
    },
    {
      id: "support-pack",
      heading: "The evidence pack wallet support actually needs",
      blocks: [
        p("Wallet support cannot investigate a feeling. It needs identifiers. Before you open a ticket, assemble a small pack of facts: the wallet account, the cash-out reference, the amount, the method, the quote, the status and the time. With those, an agent can locate the transaction instead of asking you five questions."),
        steps([
          "Screenshot the transaction detail with its reference visible.",
          "Screenshot the quote, including the rate and fee if shown.",
          "Note the date, time and the method used.",
          "Note the destination details in masked form.",
          "Write one sentence describing what is wrong.",
          "List what you already tried, with times.",
        ]),
        p("Mask names, full account numbers and identity numbers before sharing. Support can identify a transaction from a reference and a masked account; it does not need your full document in a chat. If a document upload is required, use the official in-app flow."),
        p("Keep the pack until the money is reconciled. If the issue is escalated, you can resend the same facts rather than reconstructing them from memory. Consistency also makes it harder for a case to be closed with a generic reply."),
      ],
    },
    {
      id: "wallet-hygiene",
      heading: "Wallet hygiene between cash outs",
      blocks: [
        p("Most wallet problems are easier to prevent than to fix. The habits below take a few minutes a month and remove the common causes of a blocked cash out: an expired verification, an outdated phone number, a forgotten payment password or a second account nobody remembers."),
        list([
          "Sign in once a month so the account is not dormant.",
          "Keep the registered phone number active.",
          "Review the verified name and destination details.",
          "Do not share the payment password with anyone.",
          "Remove old devices you no longer use.",
          "Keep the wallet app updated from the official source.",
        ]),
        p("If you are planning a large transfer, do a small test first. A successful small cash out proves the method, the name match and the bank connection. A large transfer is the wrong place to discover a problem."),
        p("Keep the wallet's support contact somewhere you can find it without opening the app. If the app will not open, the contact route should still be available."),
      ],
    },
    {
      id: "receipts",
      heading: "Receipts and statements worth keeping",
      blocks: [
        p("A wallet receipt is evidence of one stage, not proof that money reached your bank. Keep the wallet receipt, the cash-out quote and the bank statement together. If a question arises later, the three documents tell the full story without relying on memory."),
        list([
          "Cash-out reference and date.",
          "Amount, method and quote.",
          "Wallet status at completion.",
          "Bank credit date and amount.",
          "Any support case number.",
        ]),
        p("Store them in a folder you can open without the app. A screenshot in a chat is easy to lose; a named file in a secure folder is not. If you file taxes, the same folder supports your income records."),
      ],
    },
  ],
  faqs: [
    { q: "What is MetWallet used for in Chamet?", a: "MetWallet receives eligible host withdrawals and agency payments from Chamet. Once funds arrive, you can request a cash out to a supported destination such as a bank account, subject to the wallet's verification and method rules." },
    { q: "How do I cash out from MetWallet?", a: "Sign in, confirm the available balance, tap Cash Out or Withdraw, enter the amount, choose a destination, review the fee and exchange-rate quote, then confirm with your payment password. Save the reference." },
    { q: "Is MetWallet the same as my Chamet balance?", a: "No. Chamet holds the platform balance before withdrawal. MetWallet holds funds after the transfer. Your bank holds the final credit. Each stage has a different status and support route." },
    { q: "Why is my MetWallet cash out pending?", a: "Pending can mean normal processing, a provider review or a bank delay. Use the estimate shown, avoid submitting a duplicate request and contact wallet support with the reference after the window passes." },
    { q: "What fees does MetWallet charge?", a: "Fees depend on the method and region and are shown in the cash-out quote. A fee is separate from the exchange rate. Review the total received before confirming rather than comparing headline fees alone." },
    { q: "Why is the rupee amount different from the dollar balance?", a: "The wallet applies an exchange rate and may deduct a fee, and the destination provider may add its own charge. Compare the final credit with the quote shown for that transaction." },
    { q: "Do I need KYC for MetWallet?", a: "Verification requirements depend on the wallet, region and amount. Basic Level details may be requested before a cash out. Complete the steps shown in the app before you need an urgent transfer." },
    { q: "Can I cash out to someone else's bank account?", a: "The wallet and destination should belong to the same verified person. Using another person's account can fail a name check or trigger a review. Confirm the wallet's rules before adding a destination." },
    { q: "How long does MetWallet take to send money to a bank?", a: "Timing varies by method, amount, provider and banking hours. Use the estimate displayed for your request. A completed status can still be followed by a short bank posting delay." },
    { q: "What if my MetWallet cash out fails?", a: "Read the reason, confirm the destination and verification status, and fix the cause before retrying. If the reason is unclear, contact wallet support with the reference, amount and quote." },
    { q: "Is it safe to share my MetWallet OTP?", a: "No. An OTP is single-use and must never be shared. No legitimate support process needs it. If you shared a code, change your passwords and review recent transactions immediately." },
    { q: "Can ChametApps.com recover my MetWallet funds?", a: "No. We do not operate MetWallet or process payments. We can explain the flow and the checks, but account recovery and transaction disputes are handled by the wallet and its payment partners." },
  ],
};