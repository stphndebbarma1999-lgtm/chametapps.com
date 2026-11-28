/**
 * Contextual links from the main guides to the blog articles.
 * Kept as plain data (not the full post objects) so the client bundle stays small.
 */
export type RelatedLink = { href: string; label: string; note: string };

export const RELATED_GUIDES: Record<string, RelatedLink[]> = {
  "/": [
    { href: "/blog/chamet-agency-commission-explained/", label: "Agency commission explained", note: "How the ratio, eligible base and reports fit together." },
    { href: "/blog/chamet-beans-to-dollars/", label: "Beans to dollars", note: "The published 10,000 Beans = US$1 rule and the rupee gap." },
    { href: "/blog/chamet-me-paise-kaise-kamaye/", label: "Paise kaise kamaye", note: "The three earning routes and the maths behind them." },
    { href: "/blog/chamet-agency-near-me/", label: "Agency near me checks", note: "How to verify an online agency before you join." },
  ],
  "/chamet-agency-registration": [
    { href: "/blog/chamet-agency-commission-explained/", label: "Commission explained", note: "What the agency account can earn and what it cannot promise." },
    { href: "/blog/chamet-agency-vs-host-account/", label: "Agency vs host account", note: "Pick the role that matches the work you want to do." },
    { href: "/blog/chamet-agency-near-me/", label: "Near-me agency checks", note: "Separate genuine online support from pressure offers." },
  ],
  "/chamet-host-registration": [
    { href: "/blog/chamet-host-earnings-guide/", label: "Host earnings guide", note: "Beans, bonuses and a realistic first month." },
    { href: "/blog/chamet-host-profile-tips/", label: "Host profile tips", note: "Photo, nickname, bio and languages that pass review." },
    { href: "/blog/chamet-app-download-install/", label: "App install help", note: "Safe install routes and first-launch fixes." },
    { href: "/blog/chamet-host-verification-failed/", label: "Verification failed", note: "Why the selfie or document is rejected, and the next step." },
  ],
  "/chamet-agency-login": [
    { href: "/blog/chamet-agency-login-problems/", label: "Login problem fixes", note: "Nine checks for a portal that will not sign in." },
    { href: "/blog/chamet-agency-commission-explained/", label: "Reading commission reports", note: "Ratio, eligible base and payment status without confusion." },
    { href: "/blog/chamet-agency-vs-host-account/", label: "Wrong door?", note: "Why the app and the portal use different logins." },
  ],
  "/chamet-withdrawal": [
    { href: "/blog/chamet-withdrawal-pending/", label: "Withdrawal pending checks", note: "Seven things to verify before you retry." },
    { href: "/blog/chamet-beans-to-dollars/", label: "Beans to rupees", note: "Why the bank credit differs from the Beans balance." },
    { href: "/blog/metwallet-kyc-verification/", label: "MetWallet verification", note: "Documents and rejection fixes before a cash out." },
  ],
  "/chamet-host-withdrawal": [
    { href: "/blog/chamet-host-earnings-guide/", label: "Host earnings", note: "How eligible balances build up over a month." },
    { href: "/blog/chamet-withdrawal-pending/", label: "Pending request?", note: "What to check before contacting support." },
    { href: "/blog/chamet-beans-to-dollars/", label: "Beans conversion", note: "Turn the in-app balance into an expected payout." },
  ],
  "/chamet-agency-withdrawal": [
    { href: "/blog/chamet-agency-commission-explained/", label: "Commission and reports", note: "Calculated, payable and paid, explained." },
    { href: "/blog/chamet-withdrawal-pending/", label: "Late payment checks", note: "Rule out the common causes first." },
    { href: "/blog/metwallet-kyc-verification/", label: "Wallet verification", note: "Fix a rejected KYC before the next payout." },
    { href: "/blog/chamet-agency-commission-not-received/", label: "Commission missing", note: "Eight checks for a payout that did not arrive." },
  ],
  "/metwallet-withdrawal": [
    { href: "/blog/metwallet-kyc-verification/", label: "KYC verification guide", note: "What Basic Level asks for and why a photo fails." },
    { href: "/blog/chamet-withdrawal-pending/", label: "Cash out pending", note: "Separate a wallet delay from a platform delay." },
    { href: "/blog/chamet-beans-to-dollars/", label: "Payout math", note: "Follow the money from Beans to the bank credit." },
    { href: "/blog/chamet-agency-commission-not-received/", label: "Missing commission", note: "If a reported payment never reached the wallet." },
  ],
  "/chamet-app-download": [
    { href: "/blog/chamet-app-download-install/", label: "Install and first launch", note: "Android and iPhone steps, errors and fixes." },
    { href: "/blog/chamet-host-profile-tips/", label: "Profile setup", note: "Make the first screen viewers see count." },
    { href: "/blog/chamet-host-earnings-guide/", label: "Earnings basics", note: "What happens after the app is installed." },
    { href: "/blog/chamet-coins-price/", label: "Coins and gifts", note: "What viewers pay, and why packs differ by store." },
  ],
  "/chamet-agency-india": [
    { href: "/blog/chamet-agency-near-me/", label: "Near-me searches", note: "Why an online agency has no shopfront to visit." },
    { href: "/blog/chamet-agency-commission-explained/", label: "Commission in India", note: "Dollar earnings, rupee payouts and records." },
    { href: "/blog/metwallet-kyc-verification/", label: "Wallet KYC", note: "Identity checks Indian users meet before cashing out." },
    { href: "/blog/chamet-me-paise-kaise-kamaye/", label: "Paise kaise kamaye", note: "Three routes, the maths and the offers that never pay." },
  ],
  "/chamet-help": [
    { href: "/blog/chamet-agency-login-problems/", label: "Login problems", note: "Portal, password and browser fixes." },
    { href: "/blog/chamet-withdrawal-pending/", label: "Pending withdrawal", note: "A checklist before you open a ticket." },
    { href: "/blog/metwallet-kyc-verification/", label: "KYC rejection", note: "Fix the document or photo that failed." },
    { href: "/blog/chamet-customer-care-number/", label: "Real support vs scams", note: "The official route and the numbers to ignore." },
    { href: "/blog/chamet-me-paise-kaise-kamaye/", label: "Earning routes", note: "What pays, what does not, and the maths in between." },
  ],
};