import { list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postCoins: BlogPost = {
  slug: "chamet-coins-price",
  category: "Money",
  published: "2026-11-27",
  updated: "2026-11-28",
  readingMinutes: 8,
  excerpt:
    "What coins are for, why the price of a pack is not the price of a gift, and how to work out what a month of gifting actually costs before you tap buy.",
  keywords: [
    "chamet coins price",
    "chamet coins",
    "chamet coin rate",
    "chamet recharge",
  ],
  quickAnswer:
    "Coins are the viewer-side currency. You buy a coin pack through the app store or the in-app payment screen, then spend coins on gifts inside a live room. The pack price is set at checkout and includes the store's and the region's taxes, so it can differ between Android, iPhone and countries. There is no public fixed coin-to-rupee rate that applies to everyone.",
  sections: [
    {
      id: "what-coins-are",
      heading: "Coins, gifts and Beans: three different things",
      blocks: [
        p("Most confusion about coin prices comes from mixing up three ledgers. Coins are what a viewer buys. Gifts are what the coins are spent on. Beans are what a host receives when a gift is sent. Each has its own conversion, and only one of them is priced in rupees at checkout."),
        table(
          ["Item", "Who holds it", "How it moves"],
          [
            ["Coins", "The viewer", "Bought with real money, spent on gifts"],
            ["Gifts", "Nobody; they are events", "Sent in a room, converted to Beans for the host"],
            ["Beans", "The host", "Accumulated from gifts, converted to dollars, then paid out"],
            ["Rupee payout", "The host's bank", "Arrives after wallet conversion and fees"],
          ],
          "The three ledgers",
        ),
        p("That is why a viewer cannot 'convert coins to rupees' and a host cannot 'spend Beans'. The two sides of the app only meet at the moment a gift is sent."),
      ],
    },
    {
      id: "pack-price",
      heading: "Why the pack price changes",
      blocks: [
        p("The coin pack is sold through the app store on iPhone and through the app's payment flow on Android. Both routes add the store's commission and the local tax before you see the price, and both can run regional pricing."),
        list([
          "Store commission is built into the listed price, not added at the end.",
          "Local tax rules differ by country and can change the display price.",
          "Promotional packs and first-purchase offers expire.",
          "Currency conversion is handled by the store, not by the app.",
          "Prices in one country are not a reliable guide to another.",
        ]),
        p("This is why two people in the same city can see different rupee amounts for what looks like the same pack. Neither is being cheated; the store is showing a different combination of tax, promotion and account history."),
        note("There is no official Chamet coin price list published for India that an independent site can copy with confidence. Any table that claims one fixed rate for every pack, on every device, should be treated as an estimate."),
      ],
    },
    {
      id: "gift-value",
      heading: "What a gift actually costs you",
      blocks: [
        p("Gifts are priced in coins, and the coin cost is what matters. A pack that looks cheap per coin is only cheap if you were going to spend those coins anyway."),
        p("A simple way to see the real cost is to divide the pack price by the coins it contains. That gives a cost per coin, which you can multiply by the coin price of any gift."),
        steps([
          "Note the pack price and the coin count.",
          "Divide price by coins to get cost per coin.",
          "Note the gift's coin price.",
          "Multiply cost per coin by the gift's coins.",
          "Compare that with what the same money buys elsewhere.",
        ]),
        p("Do this once, on paper, before a big gifting session. The number is usually more memorable than the coin figure, and it is the number that decides whether the next gift is worth it."),
      ],
    },
    {
      id: "monthly-budget",
      heading: "Setting a monthly budget that survives a good stream",
      blocks: [
        p("Coin spending is designed to be frictionless: one tap, no cash leaving your hand. A budget only works if it is set before the stream and checked after it."),
        table(
          ["Approach", "How it works", "Where it fails"],
          [
            ["Monthly cap", "Decide a rupee amount per month", "Needs a weekly check"],
            ["Pack limit", "Buy one pack per week", "A big gift can skip weeks"],
            ["Prepaid wallet", "Load once, spend down", "Topping up mid-stream"],
            ["No-card rule", "Remove saved payment methods", "Convenience wins later"],
          ],
          "Budget methods and their weak points",
        ),
        p("The strongest version combines two: a monthly cap and a payment method that is not saved. If a purchase needs a deliberate card entry, the impulse has time to pass."),
        p("Check the purchase history once a month. If the total is higher than you expected, the problem is the limit, not your willpower, and the limit is the thing to change."),
      ],
    },
    {
      id: "refunds",
      heading: "Refunds, failed purchases and double charges",
      blocks: [
        p("A coin purchase is a store transaction. That matters, because the refund route usually runs through the store rather than the app."),
        steps([
          "Check the store's purchase history for the order.",
          "Confirm whether coins were credited in the app.",
          "If charged twice, note both order IDs.",
          "Request the refund from the store first.",
          "Contact in-app support with the store's response.",
        ]),
        p("Do not buy coins through a third-party 'top-up' service. Those services often use stolen payment methods, and an account that receives coins from a fraudulent source can be restricted. The cheap pack is the most expensive one in the end."),
        p("If a purchase failed and the money left your account, wait for the store's pending state to clear before assuming a loss. Most failed purchases reverse automatically within a few days."),
      ],
    },
    {
      id: "host-side",
      heading: "The host side of the same transaction",
      blocks: [
        p("When a viewer sends a gift, the host receives Beans. The published rule is that 10,000 Beans equals US$1, and the host minimum to MetWallet is US$10. The rupee amount depends on the conversion at withdrawal, not on the coin price the viewer paid."),
        p("This is the part most hosts underestimate: the coin price includes store commission and tax, the Bean value does not, and the rupee payout then passes through a wallet conversion. Each step is a different number, and none of them is a scam by itself."),
        p("If you are calculating what a gift is worth to you as a host, start from Beans, not from the viewer's coin price. The [Beans to rupees calculator](/chamet-beans-to-rupees-calculator/) does that arithmetic with your own rate."),
      ],
    },
    {
      id: "safety",
      heading: "Coin scams worth recognising",
      blocks: [
        list([
          "A 'coin generator' site that asks for your login.",
          "A reseller offering coins below the store price.",
          "A message claiming you won coins and must pay a fee.",
          "A screen-share request to 'fix' your payment.",
          "An APK that unlocks 'free coins'.",
        ]),
        p("All five have the same goal: your account, your card or your phone. None of them needs to exist for you to enjoy the app, and each one is a reason a viewer ends up posting in a support forum about a lost account."),
        note("This site never asks for a password, an OTP or a payment to 'activate' anything. If a page that looks like this one does, it is not this one."),
      ],
    },
    {
      id: "gift-mechanics",
      heading: "What the gift menu does not tell you",
      blocks: [
        p("A gift menu shows coin prices, not totals. Between the tap and the receipt there are a few mechanics that decide what a session actually costs, and none of them is hidden — they are just never summarised in one place."),
        table(
          ["Mechanic", "What it does", "Effect on the bill"],
          [
            ["Combos and multipliers", "Repeated gifts can stack", "One tap can spend several gifts"],
            ["Limited-time gifts", "Seasonal items appear briefly", "Higher price with urgency"],
            ["Leaderboards", "Spending is ranked publicly", "Encourages topping up to hold a rank"],
            ["Streaks and badges", "Daily participation is rewarded", "Small daily spends add up monthly"],
            ["Room events", "Hosts run timed goals", "Pressure to give within minutes"],
          ],
          "Mechanics that move the total",
        ),
        p("None of those is a trick by itself. They are engagement design, and engagement design is good at its job. The problem only appears when the design makes the decision and you find out afterwards."),
        p("A practical countermeasure is to decide the number of gifts before the room opens, not the rupee amount. 'Three gifts tonight' is a limit you can count. '₹500 tonight' becomes negotiable the moment a combo appears."),
        p("If a host asks for a specific gift to unlock something, that is a normal part of the format, not a personal obligation. You can decline, leave the room, or come back another day. A host who reacts badly to a polite no is telling you something useful about the relationship."),
        note("Screenshots of a leaderboard are public. If you would not want your name next to a total, spend less or use a display name you are comfortable with."),
      ],
    },
  ],
  faqs: [
    {
      q: "How much is 1 coin in rupees?",
      a: "There is no single public rate. The rupee price depends on the pack, the store, the region and the tax at checkout, so the cost per coin changes between packs and devices.",
    },
    {
      q: "Can I convert Chamet coins back to money?",
      a: "No. Coins are a viewer-side currency spent on gifts. Hosts earn Beans, and Beans convert to dollars before a rupee payout.",
    },
    {
      q: "Why is the same coin pack cheaper on Android?",
      a: "Store pricing, promotions and tax display can differ between platforms. The cheaper price is not automatically the better deal if the coin count differs.",
    },
    {
      q: "How do I get a refund for Chamet coins?",
      a: "Start with the app store's purchase history and refund flow, then contact in-app support with the order ID. Avoid third-party top-up services.",
    },
    {
      q: "Are cheap coin resellers safe?",
      a: "No. Resold coins often come from fraudulent payments, and receiving them can get the account restricted. Only buy through the official in-app route.",
    },
  ],
  related: [
    { href: "/blog/is-chamet-safe/", label: "Viewer spending safety" },
    { href: "/blog/chamet-beans-to-dollars/", label: "Beans to dollars" },
    { href: "/chamet-beans-to-rupees-calculator/", label: "Beans to rupees calculator" },
  ],
};