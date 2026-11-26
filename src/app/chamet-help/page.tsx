import Link from "next/link";
import { Banner } from "@/components/Banner";
import { WhatsAppButton } from "@/components/Buttons";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { pageMetadata } from "@/lib/routes";
import { WA } from "@/lib/site";

export const metadata = pageMetadata("help");

const LOGIN: [string, string, string][] = [
  ["Verification code missing", "Phone country code or email spelling", "Wait for resend; check spam for email; use support if it continues"],
  ["Agency password forgotten", "You are on the agency portal", "Use the portal's recovery option"],
  ["Registered profile not found", "You used the same sign-in method", "Return to the original email/phone method"],
  ["Dashboard page appears blank", "Browser and JavaScript settings", "Try a current browser and another connection"],
  ["Invited member not listed", "Correct host/agent list and invitation used", "Check the completed registration and ask platform support to investigate"],
];

const PAYMENT: [string, string, string][] = [
  ["MetWallet not linked", "Connection is not confirmed", "Finish authorization and inspect the linked account details"],
  ["Cash Out unavailable", "A requirement may remain incomplete", "Read balance, verification and other messages shown in the wallet"],
  ["Pending", "The request is not shown as completed", "Note submission time and the displayed processing estimate"],
  ["Failed", "The request did not complete successfully", "Read the reason; check details and instructions before retrying"],
  ["Completed but not received", "One stage is complete; receipt still needs checking", "Confirm the destination, reference and receipt with the payment provider"],
];

function Table({ caption, cols, rows }: { caption: string; cols: [string, string, string]; rows: [string, string, string][] }) {
  return (
    <div className="table-wrap" data-reveal>
      <table className="table-site table-stack">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {cols.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a}>
              <th scope="row">{a}</th>
              <td data-label={cols[1]}>{b}</td>
              <td data-label={cols[2]}>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HelpPage() {
  return (
    <>
      <Hero page="help" hero="help" accent="Find the step where the process stopped" title="Chamet Registration, Login and Withdrawal Help">
        <p>Find the step where the process stopped. A specific screen message and the correct account type make it easier to choose the right guide.</p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="login" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "8%", left: "2%", size: 80 }]}>
        <SectionHeading id="login">Registration and Login</SectionHeading>
        <Table caption="Registration and login problems" cols={["Problem", "First check", "Next action"]} rows={LOGIN} />
        <p className="mt-4">
          Related guides: <Link href="/agency.html">agency registration</Link>, <Link href="/host.html">host registration</Link> and{" "}
          <Link href="/chamet-agency-login/">agency login</Link>.
        </p>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section id="payment-problems" labelledBy="payment-heading">
        <SectionHeading id="payment-heading">Payment Problems</SectionHeading>
        <Table caption="Payment statuses and what to check" cols={["What you see", "What it tells you", "What to check"]} rows={PAYMENT} />
        <p className="mt-4 max-w-3xl">These checks help identify the stage; they are not a diagnosis of every payment problem.</p>
        <p className="mt-2">
          Step-by-step guides: <Link href="/chamet-host-withdrawal/">host withdrawal</Link>, <Link href="/chamet-agency-withdrawal/">agency withdrawal</Link> and{" "}
          <Link href="/metwallet-withdrawal/">MetWallet cash out</Link>.
        </p>
      </Section>

      <Section tone="surface" labelledBy="ask">
        <Banner kind="support" />
        <div className="prose-site mt-8 max-w-3xl">
          <h2 id="ask" data-reveal>
            Ask for Help With the Right Details
          </h2>
          <p>
            Include your account type, the step you reached, the exact error message and the time it happened. For payment enquiries, keep the transaction reference
            ready. Hide private information in screenshots and do not send passwords, OTPs or payment passwords.
          </p>
          <div className="pt-2">
            <WhatsAppButton message={WA.help} variant="primary">
              Ask ChametApps.com on WhatsApp
            </WhatsAppButton>
          </div>
          <p className="text-sm">Account restrictions and payment-provider decisions must be reviewed by the relevant service. Our guidance does not override them.</p>
        </div>
      </Section>
    </>
  );
}
