import { cards, list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postCommission: BlogPost = {
  slug: "chamet-agency-commission-explained",
  category: "Agency basics",
  published: "2026-10-06",
  updated: "2026-11-26",
  readingMinutes: 9,
  excerpt:
    "A plain-language explanation of Chamet agency commission: what the ratio means, how reports differ from payments, and which numbers to check before you promise anyone anything.",
  keywords: ["chamet agency commission", "chamet agency commission ratio", "chamet agency salary", "chamet commission report"],
  quickAnswer:
    "Chamet agency commission is a percentage of eligible team activity under the rules attached to your account. It is not a salary. The dashboard shows a ratio, a report total and a payment status, and those are three different things. Check the period and the eligible base before comparing amounts.",
  sections: [
    {
      id: "what-commission-is",
      heading: "What Chamet agency commission actually is",
      blocks: [
        p("An agency account earns a commission on eligible activity from the hosts and agents connected to it. The platform sets the rules, the dashboard applies them and the wallet receives whatever becomes payable. The agency does not set the rate, and it cannot turn activity into money by wishing it."),
        p("That definition sounds obvious, but most confusion comes from skipping it. People say “agency salary” when they mean commission, and then expect the same amount every month. Commission moves with activity: a quiet month produces a smaller figure, and a new team produces very little until the hosts are active."),
        p("Commission is also not the same as the host's earnings. A host earns from their own room activity. An agency earns a share of eligible team activity, which may include several hosts and sub-agents. The two numbers can exist in the same week without being related one-to-one."),
        note("ChametApps.com does not set commission rates and cannot change them. The rate that applies to your account is the one shown in your dashboard and the terms attached to it."),
      ],
    },
    {
      id: "ratio",
      heading: "What the commission ratio means",
      blocks: [
        p("The commission ratio is the percentage applied to an eligible base. The base is the part of team activity the platform counts under its rules. A ratio without a base is not an amount. Ten percent of a small base is a small number, and five percent of a large base can be larger."),
        table(
          ["Term", "What it refers to", "Where to see it"],
          [
            ["Commission ratio", "The percentage applied to eligible activity", "Dashboard home or commission section"],
            ["Eligible base", "The activity the rules count for commission", "Reports and the explanation attached to the ratio"],
            ["Calculated commission", "Ratio applied to the base for a period", "Report or commission summary"],
            ["Payable amount", "The part marked available for payment", "Payment or withdrawal section"],
            ["Paid amount", "A transfer the platform marked complete", "Payment record and wallet history"],
          ],
          "Chamet agency commission terms",
        ),
        p("The ratio can depend on the account's arrangement, the team structure and the platform's current rules. Do not compare your ratio with a screenshot from another agency unless you also compare the base and the period. A higher percentage on a smaller base can pay less."),
        p("If your dashboard shows a ratio but no clear explanation, ask the portal support what the eligible base includes. “What counts toward my commission?” is a better question than “Why is my commission low?” because it produces a definition instead of a guess."),
      ],
    },
    {
      id: "worked-example",
      heading: "A worked example (with numbers that are clearly examples)",
      blocks: [
        p("Suppose an agency's dashboard shows a ratio of 10 percent and an eligible base of US$1,000 for a month. The calculated commission before any other rule would be US$100. If the base is US$400, the same ratio produces US$40. The arithmetic is simple; the difficulty is knowing which base applies."),
        table(
          ["Eligible base", "Ratio", "Calculated commission"],
          [
            ["US$400", "10%", "US$40"],
            ["US$1,000", "10%", "US$100"],
            ["US$1,000", "5%", "US$50"],
            ["US$2,500", "8%", "US$200"],
          ],
          "Illustrative commission arithmetic",
        ),
        p("These figures are arithmetic examples, not rates offered by this site or promises about your account. The real ratio and base come from your dashboard. Fees, settlement rules and payment timing can change what actually arrives in the wallet."),
        p("This is also why “Chamet agency salary” is a misleading search phrase. A salary is fixed by an employer. Commission is calculated from activity, and a month with no eligible activity can produce no commission. Anyone who promises a fixed monthly salary is either misusing the word or selling something."),
      ],
    },
    {
      id: "reports",
      heading: "How to read the reports without mixing up the columns",
      blocks: [
        p("The dashboard reports on hosts and agents separately. A host report shows host activity; an agent report shows agent and sub-agent activity. Team revenue, your share and the payment status may appear in different places. Read the headings before you add anything together."),
        steps([
          "Open the report that matches the question: hosts, agents or commission.",
          "Set the period you actually care about.",
          "Identify whether the figure is revenue, eligible base, commission or payment.",
          "Compare it with the previous period using the same filter.",
          "Check the payment section for what has been settled.",
          "Write down the numbers before contacting support.",
        ]),
        p("A common mistake is comparing this month's team revenue with last month's paid amount. Those are different columns and different timing. Another is comparing a host report with an agent report and concluding that money is missing, when the two cover different populations."),
        p("If a report looks wrong, export or screenshot the period, the filter and the total together. A number without its filter is not evidence. Support can investigate a specific period; it cannot investigate “my commission is low” without a date."),
      ],
    },
    {
      id: "payment",
      heading: "From calculated commission to money in the wallet",
      blocks: [
        p("A calculated figure is not a payment. The platform applies its settlement rules, marks an amount payable, and then processes a transfer to the linked wallet. Each step can take time, and a newly linked wallet does not retroactively change a figure that was already calculated."),
        cards([
          { title: "Calculated", text: "The dashboard has a figure for a period. Check the period and the base." },
          { title: "Payable", text: "The rules mark the amount available. Confirm the linked wallet is correct." },
          { title: "Processing", text: "A transfer is moving. Keep the reference and the masked wallet details." },
          { title: "Paid", text: "The platform marked it complete. Check the wallet history for the credit." },
        ]),
        p("If the dashboard says paid and the wallet is empty, check the masked wallet account in My Profile and the wallet's transaction history. A transfer sent to an earlier wallet may be there. If the wallet is correct and the amount is missing, contact support with the period, amount and wallet reference."),
      ],
    },
    {
      id: "increase",
      heading: "What actually influences agency commission",
      blocks: [
        p("An agency cannot control the platform's rate, but it can influence the eligible activity. Supporting hosts so they go live consistently, helping them complete verification and teaching them the basics usually matters more than recruiting a large list of inactive people."),
        list([
          "Active, verified hosts produce more eligible activity than a long inactive list.",
          "Hosts who understand the app stay longer and need less support.",
          "Sub-agents who onboard their own teams can add activity, if the structure allows it.",
          "Compliance matters: a restricted host may stop contributing entirely.",
          "Accurate reporting builds trust and reduces churn.",
        ]),
        p("Be sceptical of anyone selling a “high commission agency slot”. A rate on paper is worthless if the base never grows or the payment never settles. Ask how the agency supports hosts, how it reports activity and what happens when a payment is delayed."),
        p("For the host side of the equation, read [Chamet host earnings](/blog/chamet-host-earnings-guide/). For the mechanical steps of linking a wallet and checking a transfer, read the [agency withdrawal guide](/chamet-agency-withdrawal/)."),
      ],
    },
    {
      id: "mistakes",
      heading: "Five commission mistakes that create support tickets",
      blocks: [
        table(
          ["Mistake", "What it causes", "Better approach"],
          [
            ["Promising a fixed salary", "Disappointed hosts and lost trust", "Explain commission as activity-based"],
            ["Comparing different periods", "A false sense of a drop or spike", "Use the same filter for both periods"],
            ["Ignoring the eligible base", "Arguing about a percentage without context", "Check what the base includes"],
            ["Assuming a link equals a payment", "Panic when the wallet is empty", "Check the payment status separately"],
            ["Sharing raw report screenshots", "Exposes invitee data", "Mask names and numbers before sharing"],
          ],
          "Agency commission mistakes",
        ),
        p("The fifth mistake is also a privacy problem. Reports contain personal data about your team. Share only what support needs, and never post a full report in a public group to ask whether a number looks right."),
      ],
    },
    {
      id: "checklist",
      heading: "A five-minute monthly commission review",
      blocks: [
        steps([
          "Confirm the reporting period and the time zone.",
          "Note team revenue, eligible base and calculated commission separately.",
          "Compare with the previous month using the same filter.",
          "Check the payment status and the linked wallet.",
          "Save a masked screenshot and update your records.",
        ]),
        p("If something looks wrong, contact support with those five items. A short, specific message is more likely to get a useful answer than a long complaint, and it gives you a record for next month."),
      ],
    },
    {
      id: "india-rupees",
      heading: "Commission in India: rupees, records and the questions agencies ask",
      blocks: [
        p("Indian agency owners usually ask three questions that the dashboard does not answer directly: what the commission is worth in rupees, when it lands, and what records to keep for tax. The dashboard reports in dollars; the wallet and bank work in rupees. The gap between them is the exchange rate and the fees at each stage, not extra commission."),
        table(
          ["Question", "Where the answer lives", "What to record"],
          [
            ["What is it worth in rupees?", "Wallet credit after conversion", "Dollar figure, rupee credit, date"],
            ["When will it arrive?", "Payment status and wallet history", "Status changes with dates"],
            ["What do I owe tax on?", "Your own books and a tax professional", "Income, fees and transfers out"],
            ["What if a host is paid in cash?", "Your internal record", "Host, amount, date, purpose"],
          ],
          "Rupee questions Indian agencies ask about commission",
        ),
        p("Keep one sheet per month: team revenue, eligible base, calculated commission, paid amount, wallet credit and bank credit. Five columns make a support question specific and a tax conversation short. Do not rely on screenshots alone; export or note the figures while the report is open."),
        p("Commission paid to sub-agents or shared with hosts is a separate transfer. Record it as a payout, not as a reduction in platform commission, or your monthly totals will never reconcile. The [agency withdrawal guide](/chamet-agency-withdrawal/) covers wallet binding and the payout order."),
      ],
    },
  ],

  faqs: [
    {
      q: "How much is Chamet agency commission in rupees?",
      a: "The commission is reported in dollars and converted to rupees when it reaches the wallet, so the rupee value depends on the rate and the fees at each stage. Check the wallet credit and the bank credit separately instead of converting the dashboard figure at today's rate.",
    },
    { q: "How is Chamet agency commission calculated?", a: "A commission ratio is applied to an eligible base of team activity for a period, under the rules attached to the account. The dashboard shows the ratio, report totals and payment status separately." },
    { q: "Is Chamet agency commission a salary?", a: "No. It is activity-based and can vary by month. A salary is fixed by an employer. Anyone promising a guaranteed monthly salary is misrepresenting how commission works." },
    { q: "What is a good commission ratio?", a: "There is no universal number. A ratio only matters with its base, its rules and its payment reliability. Compare the total outcome and the support you receive, not the percentage alone." },
    { q: "Where do I find my commission ratio?", a: "It appears in the agency dashboard, often on the home or commission section. Read the explanation attached to it and check the report period before comparing amounts." },
    { q: "Why is my commission lower than last month?", a: "Activity, eligible base, team composition and the reporting period can all change the figure. Compare the same report and filter for both months before assuming an error." },
    { q: "Does a linked wallet change my commission?", a: "No. Linking a wallet changes where a payment can be sent, not how much is calculated. A calculated amount still has to become payable and be processed." },
    { q: "When does commission become payable?", a: "The dashboard applies the platform's settlement rules. Check the payment section and any notices for the applicable cycle. A calculated figure is not automatically payable." },
    { q: "Can I negotiate a higher commission rate?", a: "Rates and terms are set by the platform or the agency arrangement, not by this guide. Ask the portal support what applies to your account rather than relying on a social media claim." },
    { q: "Do sub-agents affect my commission?", a: "If the account structure includes sub-agents, their eligible activity may contribute under the platform's rules. Check the agents report and the explanation attached to your ratio." },
    { q: "Why does the dashboard show paid but my wallet is empty?", a: "Check the masked wallet in My Profile and the wallet's transaction history. A payment may have gone to an earlier wallet. If the correct wallet shows nothing, contact support with the reference." },
  ],
  related: [
    { href: "/chamet-agency-registration/", label: "Agency registration guide" },
    { href: "/chamet-agency-withdrawal/", label: "Agency withdrawal and MetWallet" },
    { href: "/blog/chamet-agency-login-problems/", label: "Agency login problems" },
  ],
};