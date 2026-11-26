import Link from "next/link";

type StageKey = "host" | "agency" | "metwallet";

const ROWS: { key: StageKey; stage: string; means: string; check: string; href: string; guide: string }[] = [
  {
    key: "host",
    stage: "Chamet host withdrawal",
    means: "Moving an eligible host balance to MetWallet",
    check: "Available balance and current Chamet withdrawal requirements",
    href: "/chamet-host-withdrawal/",
    guide: "Host withdrawal guide",
  },
  {
    key: "agency",
    stage: "Agency payment",
    means: "Settlement of eligible agency commission",
    check: "Applicable reporting period, payment status and dashboard notices",
    href: "/chamet-agency-withdrawal/",
    guide: "Agency withdrawal guide",
  },
  {
    key: "metwallet",
    stage: "MetWallet cash out",
    means: "Requesting payout to an available payment method",
    check: "Method-specific minimum, charges, exchange rate and processing estimate",
    href: "/metwallet-withdrawal/",
    guide: "MetWallet cash-out guide",
  },
];

/** Comparison of the three payment stages, each linked to its existing guide. */
export function PaymentStagesTable({ current }: { current?: StageKey }) {
  return (
    <div className="table-wrap" data-reveal>
      <table className="table-site table-stack">
        <caption className="sr-only">Chamet payment stages compared</caption>
        <thead>
          <tr>
            <th scope="col">Stage</th>
            <th scope="col">What it means</th>
            <th scope="col">What to check</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.key}>
              <th scope="row">
                {r.key === current ? (
                  <>
                    {r.stage} <span className="font-normal">(this guide)</span>
                  </>
                ) : (
                  <Link href={r.href} className="underline underline-offset-4">
                    {r.stage}
                  </Link>
                )}
              </th>
              <td data-label="What it means">{r.means}</td>
              <td data-label="What to check">{r.check}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
