import Link from "next/link";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("withdrawal");

const ROUTES_TABLE = [
  { situation: "You are a host and need to find Withdraw or link MetWallet", href: "/chamet-host-withdrawal/", label: "How to withdraw host salary" },
  { situation: "You manage an agency and need to connect its wallet", href: "/chamet-agency-withdrawal/", label: "How to withdraw agency salary" },
  { situation: "Your money is already available in MetWallet", href: "/metwallet-withdrawal/", label: "MetWallet cash-out guide" },
  { situation: "A transaction is pending, failed or not received", href: "/chamet-help/#payment-problems", label: "Payment problem help" },
];

const STAGES = [
  ["Account linked", "the wallet connection is present."],
  ["Balance available", "the account shows funds that can be withdrawn."],
  ["Request submitted", "a withdrawal has been sent for processing."],
  ["Money received", "the destination account confirms the credit."],
];

export default function WithdrawalPage() {
  return (
    <>
      <Hero page="withdrawal" hero="withdrawals" title="Chamet Withdrawal Guide">
        <p>
          Choose your account type first. Host withdrawals begin in the Chamet app. Agency wallet setup begins in the agency dashboard. Cashing out an available
          MetWallet balance is a further step.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="which" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <SectionHeading id="which">Which Guide Do You Need?</SectionHeading>
        <div className="table-wrap" data-reveal>
          <table className="table-site table-stack">
            <thead>
              <tr>
                <th scope="col">Your situation</th>
                <th scope="col">Open this guide</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES_TABLE.map((r) => (
                <tr key={r.href}>
                  <th scope="row">{r.situation}</th>
                  <td data-label="Open this guide">
                    <Link href={r.href} className="font-semibold underline underline-offset-4">
                      {r.label} →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="stage">
        <SectionHeading id="stage">Check the Payment Stage</SectionHeading>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {STAGES.map(([t, d], i) => (
            <li key={t} className="card">
              <span className="text-sm font-bold tracking-wider text-pink uppercase">Stage {i + 1}</span>
              <h3 className="mt-1 text-lg">{t}</h3>
              <p className="mt-1">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl" data-reveal>
          Do not treat the first three stages as proof of the last one. Review the transaction status in the account where you submitted the request.
        </p>
      </Section>

      <Section tone="surface" labelledBy="minimums">
        <div className="prose-site max-w-3xl">
          <h2 id="minimums" data-reveal>
            Minimums, Fees and Timing
          </h2>
          <p>
            Host withdrawals have a minimum amount, currently US$10. MetWallet cash-out requirements and charges depend on the available method. Review the values
            displayed before submitting — your account&apos;s screen always takes priority.
          </p>
        </div>
      </Section>

      <Section labelledBy="support-cta">
        <Banner kind="support" />
        <div className="mt-8 max-w-2xl">
          <h2 id="support-cta" className="text-[1.5rem] sm:text-[1.9rem]" data-reveal>
            Not sure which guide fits?
          </h2>
          <p className="mt-3">Tap the WhatsApp button at the bottom of your screen and tell us your account type and the screen you reached. Never send passwords, OTPs or payment passwords.</p>
        </div>
      </Section>
    </>
  );
}
