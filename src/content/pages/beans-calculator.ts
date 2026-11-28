import { list, note, p, table, type PageContent } from "@/lib/content";

export const beansCalculatorContent: PageContent = {
  quickAnswer:
    "Chamet publishes 10,000 Beans = US$1. Enter your Beans balance to see the dollar value, then enter the exchange rate you actually receive to estimate rupees. The tool does not promise a payout: wallet rules, minimums and fees still apply.",
  sections: [
    {
      id: "how-the-rule-works",
      heading: "How the Beans rule works",
      blocks: [
        p("Chamet's host earnings page states that 10,000 Beans equal US$1. That is a fixed conversion inside the platform's own accounting. It is not an exchange rate and it does not include any fee a wallet or bank charges later."),
        p("The arithmetic is simple: divide Beans by 10,000 to get dollars. Multiply dollars by the rate you actually receive to get an estimate in rupees. The first step is fixed by the platform. The second step is your own number, and it changes."),
        table(
          ["Beans", "US$ (at 10,000 = $1)", "Rupees at ₹88 (example only)"],
          [
            ["10,000", "$1.00", "₹88"],
            ["100,000", "$10.00", "₹880"],
            ["1,000,000", "$100.00", "₹8,800"],
            ["10,000,000", "$1,000.00", "₹88,000"],
          ],
          "Illustrative conversion at an example rate",
        ),
        note("The rupee column uses ₹88 only to show the method. Your wallet credit depends on the rate and fees applied on the day, so use the calculator with your own rate."),
      ],
    },
    {
      id: "use-the-calculator",
      heading: "How to use the calculator without fooling yourself",
      blocks: [
        list([
          "Enter the Beans balance shown in the app, not the balance you expect after a bonus.",
          "Convert to dollars first and check it against the app's own figure.",
          "Enter the rupee rate your wallet or bank actually gives, not a headline rate.",
          "Treat the result as a ceiling, then subtract known fees.",
          "Compare the estimate with the last payout you actually received.",
        ]),
        p("If the estimate and the real payout differ by a little, that is normal. If they differ by a lot, one of the inputs is wrong: an old rate, a fee you forgot, or a minimum that has not been reached."),
      ],
    },
    {
      id: "why-rupees-differ",
      heading: "Why the rupee amount differs from a simple conversion",
      blocks: [
        p("Between the platform and your bank there are at least three steps: the dollar figure, the wallet's conversion, and the bank's credit. Each step can include a spread or a fee. That is why two people converting the same dollar amount on the same day can receive different rupee amounts."),
        table(
          ["Stage", "What happens", "What it means for your estimate"],
          [
            ["Beans to dollars", "Fixed platform rule", "Predictable"],
            ["Dollars to wallet", "Conversion at the wallet's rate", "Changes daily"],
            ["Wallet to bank", "Transfer and fees", "Small but real"],
            ["Bank posting", "Processing time", "Delayed, not lost"],
          ],
          "Where the rupee figure is decided",
        ),
        p("A calculator can only model the first step exactly. The other three are estimates, which is why the tool asks for your rate instead of inventing one."),
      ],
    },
    {
      id: "minimum-and-fees",
      heading: "The minimum and the fees that change the result",
      blocks: [
        p("Chamet's published host rule references a US$10 minimum for an eligible balance to move to MetWallet. Ten dollars is 100,000 Beans at the published rule. Below that, the balance can look healthy in Beans and still be too small to withdraw."),
        p("Fees are the other adjustment. A wallet may charge for a transfer, and a bank may apply its own charge. Neither is visible in a Beans balance. Add them to your estimate before you plan a purchase."),
        note("Minimums and fees can change. Check the current app screen and the wallet's own terms before relying on an old number."),
      ],
    },
    {
      id: "planning",
      heading: "Using the estimate for planning, not promises",
      blocks: [
        p("An estimate is useful for comparing months, not for guaranteeing income. If this month's Beans are 30% higher than last month's, the dollar value is 30% higher too. The rupee value may move differently because the rate moved."),
        p("Keep a simple monthly note: Beans earned, dollar value, rate used, wallet credit, bank credit. After three months you will know your own typical gap, which is far more useful than a generic calculator."),
        p("For the full chain, read the [withdrawal overview](/chamet-withdrawal/) and the [host withdrawal guide](/chamet-host-withdrawal/). For the reasoning behind the rule, the [Beans to dollars explainer](/blog/chamet-beans-to-dollars/) goes deeper."),
      ],
    },
    {
      id: "agency-context",
      heading: "Agency commission is a separate calculation",
      blocks: [
        p("Agency commission is not a Beans conversion. It is a ratio applied to an eligible base, reported in dollars and then paid through the agency wallet. Using the Beans calculator for commission will give a wrong answer even if the numbers look similar."),
        p("If you run an agency, use the [commission explainer](/blog/chamet-agency-commission-explained/) and the [commission not received checklist](/blog/chamet-agency-commission-not-received/) instead. Those pages follow the agency report, not the host Beans balance."),
        p("Hosts who are connected to an agency still see their own Beans balance. The agency's share is calculated on the agency side and does not reduce the Beans figure shown to the host."),
      ],
    },
    {
      id: "mistakes",
      heading: "Five conversion mistakes worth avoiding",
      blocks: [
        list([
          "Converting Beans at a rate you saw in a video instead of the rate your wallet used.",
          "Forgetting that 10,000 Beans is one dollar, not one rupee.",
          "Planning a payout below the published minimum.",
          "Treating a wallet credit as a bank credit.",
          "Assuming a bonus Bean has the same value before it settles.",
        ]),
        p("Each mistake is small on its own and expensive across a year. The calculator helps most when you use the same inputs every month, so the trend is comparable."),
      ],
    },
    {
      id: "limits",
      heading: "What this calculator does not do",
      blocks: [
        p("It does not connect to your account, read your balance or verify a payout. It does not know your wallet's rate, your bank's fees or whether a balance is eligible. It cannot tell you when a payment will arrive."),
        p("It also cannot confirm that a bonus is withdrawable. Some promotional Beans may settle later or carry conditions. The app's own balance and the platform's rules are authoritative for your account."),
        p("If a payment is late, the [pending withdrawal checklist](/blog/chamet-withdrawal-pending/) is the right next step, not another conversion."),
      ],
    },
    {
      id: "worked-examples",
      heading: "Worked examples for common balances",
      blocks: [
        p("The table below converts a few typical balances at the published rule and shows what the rupee result looks like at two different example rates. Neither rate is a prediction; they exist to show how much the final number moves when the rate moves."),
        table(
          ["Beans", "US$", "₹ at 88", "₹ at 84"],
          [
            ["10,000", "$1", "₹88", "₹84"],
            ["50,000", "$5", "₹440", "₹420"],
            ["100,000", "$10", "₹880", "₹840"],
            ["250,000", "$25", "₹2,200", "₹2,100"],
            ["500,000", "$50", "₹4,400", "₹4,200"],
            ["1,000,000", "$100", "₹8,800", "₹8,400"],
          ],
          "Example conversions at two illustrative rates",
        ),
        p("A four-rupee difference per dollar looks small on a single payout and adds up across a year. That is why the calculator asks for your rate rather than showing one fixed number: the same Beans balance can produce different rupee results in different months."),
        p("Use the dollar column when you compare months. The dollar value only changes when the Beans change, so it is the cleanest measure of whether your sessions are growing."),
      ],
    },
    {
      id: "bonuses",
      heading: "Bonuses, promotions and Beans that may not convert",
      blocks: [
        p("Not every Bean in a balance is necessarily withdrawable in the same way. Promotional or event Beans can settle later, carry conditions or be counted differently from Beans earned through gifts. The app's balance and its notes are the authority for your account."),
        list([
          "Check whether a bonus has a separate status or a settlement date.",
          "Compare the balance before and after a promotion to see what actually arrived.",
          "Do not include an unsettled bonus in a payout plan.",
          "If a bonus disappears, read the promotion's conditions before assuming an error.",
        ]),
        p("A calculator that ignores bonus rules will overstate what you can withdraw. When in doubt, convert the confirmed balance only and treat the rest as pending."),
      ],
    },
    {
      id: "estimate-differs",
      heading: "If your estimate does not match the payout",
      blocks: [
        p("Small differences are normal. Large differences usually come from one of four places, and each is easy to check in a few minutes."),
        table(
          ["Difference", "Likely cause", "Check"],
          [
            ["A few rupees", "Rate movement or a small fee", "Compare the payout date's rate"],
            ["A few percent", "Wallet fee deducted", "Read the wallet statement"],
            ["Missing dollars", "Unsettled or ineligible Beans", "Look for a bonus or review note"],
            ["Nothing arrived", "Minimum not met or request not submitted", "Check status and threshold"],
          ],
          "Estimate versus payout differences",
        ),
        p("If the gap is unexplained after those checks, the [pending withdrawal checklist](/blog/chamet-withdrawal-pending/) lists the next steps. Keep the estimate, the payout date and the wallet statement together so the comparison is easy to explain."),
      ],
    },
    {
      id: "quick-values",
      heading: "Quick values people search for",
      blocks: [
        p("These are the conversions most readers look up. Each uses the published 10,000 Beans = US$1 rule; the rupee figure still depends on your rate."),
        table(
          ["Search phrase", "Dollar value", "Beans needed"],
          [
            ["1,000 Beans", "$0.10", "1,000"],
            ["10,000 Beans", "$1", "10,000"],
            ["20,000 Beans", "$2", "20,000"],
            ["100,000 Beans", "$10", "100,000"],
            ["1 lakh Beans", "$10", "100,000"],
            ["1 million Beans", "$100", "1,000,000"],
          ],
          "Common Beans conversions",
        ),
        p("The US$10 line matters because Chamet's published host rule references a US$10 minimum for an eligible balance to MetWallet. Below 100,000 Beans, a balance can look substantial and still be under the threshold. The calculator shows this in plain language so it is not a surprise at withdrawal time."),
      ],
    },
    {
      id: "beans-vs-coins",
      heading: "Beans, coins and diamonds are not the same balance",
      blocks: [
        p("Viewers buy coins or diamonds to send gifts. Hosts receive Beans when those gifts are sent. The 10,000 Beans = US$1 rule applies to the host's Beans, not to a viewer's purchase balance, and not to a promotional counter on a profile."),
        table(
          ["Balance", "Who holds it", "What the rule means"],
          [
            ["Coins or diamonds", "Viewer", "Spent on gifts; not a payout"],
            ["Beans", "Host", "Converts at the published rule"],
            ["Agency commission", "Agency account", "A ratio on an eligible base"],
            ["Bonus Beans", "Host", "May settle later or carry conditions"],
          ],
          "Which balance converts",
        ),
        p("If you are a viewer, this calculator will not tell you what your coins are worth in rupees, because they are not a withdrawal balance. If you are a host, use the Beans figure from your earnings area, not the number shown on someone else's profile."),
        p("Agency owners should use the [commission guide](/blog/chamet-agency-commission-explained/) instead. Mixing the three balances is the most common reason a conversion looks wrong."),
      ],
    },
  ],
  faqs: [
    {
      q: "Are Chamet coins the same as Beans?",
      a: "No. Coins or diamonds are a viewer's purchase balance used to send gifts. Beans are what a host earns, and only Beans follow the 10,000 Beans = US$1 rule. A viewer's coin balance is not a withdrawal balance.",
    },
    {
      q: "How many Chamet Beans are in one dollar?",
      a: "Chamet's host earnings page states 10,000 Beans = US$1. That is the published rule; the app is authoritative for a specific account and the rule can change.",
    },
    {
      q: "How do I convert Chamet Beans to rupees?",
      a: "Divide Beans by 10,000 to get dollars, then multiply by the rupee rate your wallet or bank actually applies. The calculator does both steps and lets you enter your own rate.",
    },
    {
      q: "Is the rupee figure in the calculator exact?",
      a: "No. Only the Beans-to-dollar step is fixed. The rupee value depends on the conversion rate and fees at the wallet and bank, so the result is an estimate.",
    },
    {
      q: "What is the minimum withdrawal in Beans?",
      a: "Chamet's published host rule references a US$10 minimum for an eligible balance to MetWallet, which is 100,000 Beans at the published conversion. Confirm the current minimum in the app before relying on it.",
    },
    {
      q: "Does the calculator work for agency commission?",
      a: "No. Agency commission is a ratio applied to an eligible base and is reported separately. Use the agency commission guides for that calculation.",
    },
  ],
};