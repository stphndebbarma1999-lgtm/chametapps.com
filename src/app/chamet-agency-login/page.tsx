import { ButtonLink, ExternalButton } from "@/components/Buttons";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { NextSteps } from "@/components/NextSteps";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("dashboard");

const MENU: [string, string][] = [
  ["Home", "Invitation links and commission overview"],
  ["My Profile", "Account identification, contact details and MetWallet information"],
  ["My Invitation → Invitee List → Hosts List", "Check invited hosts"],
  ["My Invitation → Invitee List → Agents List", "Check invited agents"],
  ["Invitees' Daily Report → Hosts Report", "Review the host report provided for the selected period"],
  ["Invitees' Daily Report → Agents Report", "Review the agent report provided for the selected period"],
  ["Invitation Rewards", "Open available reward options"],
  ["Diamonds Seller", "Review the section and any account requirements shown"],
  ["Notification", "Read notices and updates"],
  ["Report", "Expand the section to see the available functions"],
  ["Help Center", "Find help and guidance"],
];

const PORTAL = (
  <ExternalButton href={LINKS.agencyDashboard} track="dashboard_outbound">
    Open Agency Login
  </ExternalButton>
);

export default function DashboardPage() {
  return (
    <>
      <Hero
        page="dashboard"
        hero="dashboard"
        title="Chamet Agency Login and Dashboard Guide"
        actions={
          <>
            {PORTAL}
            <ButtonLink href="/agency.html" variant="secondary">
              Need an Account?
            </ButtonLink>
          </>
        }
      >
        <p>Open the agency portal to sign in to your agent account. Use this page for agency login; personal Chamet app sign-in is a separate journey.</p>
        <p className="text-base">
          <strong className="text-white">{LINKS.agencyDashboardLabel}</strong> — opens the agency portal in a new tab.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="sign-in" deco={[{ top: "8%", right: "3%", size: 100, mobile: true }, { bottom: "12%", left: "2%", size: 80 }]}>
        <div className="prose-site">
          <h2 id="sign-in" data-reveal>
            How to Sign In
          </h2>
          <p>
            Enter your agency username and password, then tap <strong>Login</strong>. If your screen offers <strong>Login via Phone Number</strong>, you can use that
            option instead.
          </p>
          <p>
            Select <strong>Forget My Password</strong> if you need to recover access. Complete recovery on the portal itself. ChametApps.com does not need your password
            or verification code.
          </p>
          <ImageNote />
        </div>
        <div className="mt-10">
          <GuideBlock
            id="walkthrough"
            level={3}
            heading="Dashboard walkthrough"
            carouselLabel="Agency login and dashboard screenshots"
            images={guideImages("dashboard")}
            steps={[
              <>Log in with your agency username and password, or use the phone login option where offered.</>,
              <>
                On the homepage, use the <strong>Share</strong> button on the New Hosts or New Agents invitation card and check your commission ratio.
              </>,
              <>Open the menu (☰) at the top left to reach each dashboard section.</>,
            ]}
          />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="invites">
        <div className="prose-site max-w-3xl">
          <h2 id="invites" data-reveal>
            Find Your Host and Agent Invitation Links
          </h2>
          <p>
            The homepage has two invitation cards. <strong>New Hosts</strong> is for host invitations; <strong>New Agents</strong> is for agent invitations. Use the Share
            button on the appropriate card.
          </p>
          <p>The commission area shows your account&apos;s rate and progress. Review its explanation and period before comparing numbers from different reports.</p>
        </div>
      </Section>

      <Section tone="surface" labelledBy="menu">
        <h2 id="menu" className="mb-6 text-[1.65rem] sm:text-[2.1rem]" data-reveal>
          What Each Menu Does
        </h2>
        <div className="table-wrap" data-reveal>
          <table className="table-site table-stack">
            <thead>
              <tr>
                <th scope="col">Menu</th>
                <th scope="col">Where it helps</th>
              </tr>
            </thead>
            <tbody>
              {MENU.map(([m, d]) => (
                <tr key={m}>
                  <th scope="row">{m}</th>
                  <td data-label="Where it helps">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm">Submenu contents that are not opened in our example screenshots are not described here; check your own dashboard.</p>
      </Section>

      <Section labelledBy="cannot">
        <div className="card prose-site max-w-3xl" data-reveal>
          <h2 id="cannot" className="text-2xl!">
            Cannot Log In?
          </h2>
          <p>
            Check that you are using the agency portal rather than the personal app sign-in, then confirm your account details. Use recovery for a forgotten password. If
            the page does not display, allow JavaScript and try a current browser. Contact portal support if a restriction or error remains.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {PORTAL}
          </div>
        </div>
      </Section>

      <WaveDivider />
      <Section tone="surface">
        <NextSteps
          items={[
            { href: "/chamet-agency-withdrawal/", label: "Link Agency MetWallet", note: "Bind MetWallet from My Profile." },
            { href: "/chamet-help/", label: "Login and Registration Help", note: "Missing codes, blank pages and unlisted invitees." },
          ]}
        />
      </Section>
    </>
  );
}
