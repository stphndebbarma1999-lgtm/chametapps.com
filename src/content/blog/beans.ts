import { list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postBeans: BlogPost = {
  slug: "chamet-beans-to-dollars",
  category: "Payments",
  published: "2026-10-10",
  updated: "2026-11-26",
  readingMinutes: 8,
  excerpt:
    "The 10,000 Beans = US$1 rule, worked examples, and why the rupee amount in your bank is usually lower than the dollar figure you calculated.",
  keywords: ["chamet beans to dollars", "chamet beans to rupees", "chamet beans conversion", "chamet 10000 beans"],
  quickAnswer:
    "Chamet's published rule is 10,000 Beans = US$1. Multiply your Beans by 0.0001 to get a dollar estimate. The rupee credit is lower or different after wallet fees, the exchange rate and the payment method. The app and the Go to Metwallet screens show the authoritative numbers for your account.",
  sections: [
    {
      id: "rule",
      heading: "The published conversion rule",
      blocks: [
        p("Try the free [Beans to rupees calculator](/chamet-beans-to-rupees-calculator/) to see the conversion with your own balance and rate before reading the rest of this guide."),
        p("Chamet's host earnings page states that 10,000 Beans equal US$1. That is the cleanest starting point for understanding a Beans balance. It converts a platform unit into a familiar currency, which makes a large Beans number easier to interpret."),
        p("The rule is a conversion, not a promise of payout. Your eligible balance, the minimum, wallet fees and the exchange rate still determine what reaches your bank. A Beans balance of 250,000 is roughly US$25 before those later steps, not 250,000 rupees."),
        note("ChametApps.com does not set the conversion or the payout rate. Use the figures shown in your app and wallet, especially before submitting a withdrawal."),
      ],
    },
    {
      id: "examples",
      heading: "Beans to dollars: a quick reference table",
      blocks: [
        table(
          ["Beans", "US$ at 10,000 = US$1", "Context"],
          [
            ["10,000", "US$1", "The basic unit in the published rule"],
            ["50,000", "US$5", "Below the published US$10 host withdrawal minimum"],
            ["100,000", "US$10", "Meets the published minimum before deductions"],
            ["250,000", "US$25", "A mid-sized balance in this example"],
            ["500,000", "US$50", "Well above the minimum"],
            ["1,000,000", "US$100", "Larger transfer, still subject to wallet rules"],
          ],
          "Beans to US dollars at the published rate",
        ),
        p("To do the arithmetic yourself, divide Beans by 10,000. To go the other way, multiply dollars by 10,000. If the app shows a different rate or a promotional conversion, follow the app; published rules can change and regional rules can differ."),
        p("Avoid rounding too early. 37,500 Beans is US$3.75, not US$4. A small difference matters when you are close to a minimum. Use the exact figure until the final step."),
      ],
    },
    {
      id: "to-rupees",
      heading: "Why Beans to rupees is not one multiplication",
      blocks: [
        p("Converting Beans to dollars is one step. Converting dollars to rupees is another, and it happens inside MetWallet at cash out. The wallet applies an exchange rate and may charge a fee, and the destination bank or payment method may add its own terms."),
        steps([
          "Convert Beans to dollars using the published rule or the app figure.",
          "Check the eligible balance and the withdrawal minimum.",
          "Link the correct MetWallet account and submit an eligible request.",
          "Open MetWallet and check the arrived dollar balance.",
          "Read the cash-out quote: rate, fee and estimated arrival.",
          "Confirm and compare the final rupee credit with the quote.",
        ]),
        p("This is why a fixed “Beans to rupees” calculator on a random website can mislead. It usually assumes a rate that the wallet does not apply, ignores fees and ignores the possibility that the balance is not fully eligible."),
        note("This guide does not publish a fixed USD-to-INR rate. Rates move and the wallet decides the rate for your transaction. Use the quote at cash out."),
      ],
    },
    {
      id: "worked-example",
      heading: "A worked example from Beans to bank credit",
      blocks: [
        p("Suppose a host has 300,000 eligible Beans. At the published rule, that is US$30. The host withdraws to MetWallet, where US$30 arrives. At cash out, the wallet shows a rate, a fee and an arrival estimate. The final rupee credit is whatever the quote produces, not 300,000 and not necessarily US$30 multiplied by a rate you saw on a news site."),
        table(
          ["Stage", "Example figure", "What it means"],
          [
            ["Beans balance", "300,000", "Platform units"],
            ["Dollar equivalent", "US$30", "At 10,000 Beans = US$1"],
            ["Wallet balance", "US$30", "After the platform transfer, before cash-out costs"],
            ["Cash-out quote", "Rate and fee shown in the wallet", "The actual conversion terms"],
            ["Bank credit", "Quote result", "What you can reconcile against the statement"],
          ],
          "Beans to bank: illustrative stages",
        ),
        p("The example deliberately avoids a rupee figure. Any rupee number would depend on a rate that changes, and publishing one would create a false expectation. The useful lesson is the sequence, not the total."),
      ],
    },
    {
      id: "minimum",
      heading: "Beans and the withdrawal minimum",
      blocks: [
        p("Chamet's published host earnings page currently lists a US$10 minimum for withdrawing an eligible host balance to MetWallet. At the published conversion, that is 100,000 Beans. A balance below that threshold may not be withdrawable yet, even though the app displays it."),
        p("The minimum is a threshold, not a fee. Reaching it does not deduct US$10; it makes the request eligible. The wallet may have its own minimum for a cash out, which can be different from the platform's withdrawal minimum."),
        p("If your balance is close to the threshold, check whether all of it is eligible. A bonus, a pending amount or a restricted portion may not count. The withdrawal screen should show the withdrawable figure; use that rather than the lifetime total."),
      ],
    },
    {
      id: "mistakes",
      heading: "Common Beans conversion mistakes",
      blocks: [
        list([
          "Treating Beans as rupees one-to-one.",
          "Using an old screenshot's rate instead of the current app figure.",
          "Forgetting that only eligible Beans can be withdrawn.",
          "Assuming the wallet rate equals a news headline rate.",
          "Ignoring wallet fees and bank charges.",
          "Comparing a dollar balance with a rupee credit without the quote.",
        ]),
        p("A simple habit prevents most of these: write the stage next to every number. “300,000 Beans”, “US$30 wallet”, “INR credit per quote” are three different facts. When they are labelled, they stop blending into one confusing total."),
      ],
    },
    {
      id: "records",
      heading: "Keeping a conversion record",
      blocks: [
        p("For each withdrawal, note the Beans amount, the dollar equivalent, the wallet balance, the quote, the fee and the final credit. If you withdraw monthly, a spreadsheet with those columns makes reconciliation and tax filing much easier."),
        p("If the credit differs from the quote by more than a small rounding amount, contact the wallet with the reference and the quote. If the dollar balance in the wallet differs from your calculation, check the platform's report and the eligible amount before contacting support."),
        p("For the host withdrawal steps, read [how to withdraw from Chamet](/chamet-host-withdrawal/). For the wallet stage, read [MetWallet cash out](/metwallet-withdrawal/)."),
      ],
    },
    {
      id: "beans-mistakes",
      heading: "Five Beans math mistakes worth avoiding",
      blocks: [
        p("Most conversion confusion comes from mixing stages rather than from arithmetic. The same plan produces very different expectations depending on whether you start with Beans, dollars or rupees. These are the mistakes readers report most often."),
        list([
          "Treating Beans as rupees instead of converting to dollars first.",
          "Assuming every Bean in the balance is eligible for withdrawal.",
          "Using a news or video rate instead of the quote in the wallet.",
          "Forgetting that the wallet's rate and fee apply before the bank credit.",
          "Comparing a gross gift value with a net bank credit.",
        ]),
        p("A useful exercise is to write the four numbers on one line: Beans, dollars, wallet payout, bank credit. If one number is missing, that is the step you have not verified. The gap between the first and last is not lost money; it is the cost of the chain plus the platform's share."),
        p("Do not make decisions from a single conversion. Look at a month of records. A host's real earning pattern is the average after deductions, not the best screenshot."),
      ],
    },
  ],
  faqs: [
    { q: "How many Chamet Beans equal one dollar?", a: "Chamet's published host earnings page states that 10,000 Beans equal US$1. Check the app for the figure that applies to your account, because rules can change." },
    { q: "How do I convert Beans to dollars?", a: "Divide the Beans amount by 10,000. For example, 250,000 Beans is US$25 at the published rule. Multiply dollars by 10,000 to go the other way." },
    { q: "How many Beans make 10 dollars?", a: "At 10,000 Beans per US$1, US$10 is 100,000 Beans. That also matches the published US$10 host withdrawal minimum before deductions." },
    { q: "Why is my rupee payout lower than Beans divided by 10,000?", a: "The Beans rule gives a dollar figure. The wallet then applies an exchange rate and possibly a fee, and the bank may add its own terms. Compare the credit with the cash-out quote." },
    { q: "Can I convert Beans to rupees directly in the app?", a: "The flow moves an eligible balance to MetWallet in dollar terms, then the wallet cashes out to a supported rupee destination. The wallet quote determines the final conversion." },
    { q: "Are all Beans eligible for withdrawal?", a: "No. Bonuses, pending amounts or restricted portions may not count. The withdrawal screen shows the eligible balance; use that rather than a lifetime total." },
    { q: "Does the Beans rate change?", a: "Published rules and app display can change. Use the current figure in your app and the wallet quote for the transaction. This guide does not guarantee a rate." },
    { q: "Why does my balance show Beans but my wallet shows dollars?", a: "The platform balance is in Beans, and the transfer to MetWallet is denominated in dollars. The wallet then converts to rupees at cash out." },
    { q: "Is 100,000 Beans enough to withdraw?", a: "At the published rule, 100,000 Beans is US$10, which matches the published host minimum. Your eligible balance and the current app requirements still decide whether the request can proceed." },
    { q: "Where can I see the exact rupee amount before withdrawing?", a: "The MetWallet cash-out confirmation shows the rate, fee and estimated payout for the method you select. That quote is the relevant figure, not a rate from a blog." },
  ],
  related: [
    { href: "/chamet-host-withdrawal/", label: "Host withdrawal steps" },
    { href: "/metwallet-withdrawal/", label: "MetWallet cash out" },
    { href: "/blog/chamet-host-earnings-guide/", label: "How host earnings work" },
  ],
};