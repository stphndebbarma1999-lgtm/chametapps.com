import { list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postVerificationFailed: BlogPost = {
  slug: "chamet-host-verification-failed",
  category: "Troubleshooting",
  published: "2026-11-22",
  updated: "2026-11-28",
  readingMinutes: 8,
  excerpt:
    "A failed host verification is usually a photo, light or document problem, not a permanent rejection. Here is what the check looks for and how to fix a failed attempt before you retry.",
  keywords: [
    "chamet host verification failed",
    "chamet face verification failed",
    "chamet verification problem",
    "chamet host verification fix",
  ],
  quickAnswer:
    "Most host verification failures come from four things: poor light, a face that is partly covered, a photo of a document instead of the live check, or a name that does not match. Read the exact message, fix that one element, and wait for any cooldown before retrying. Repeated attempts without a change can extend the wait.",
  sections: [
    {
      id: "what-is-checked",
      heading: "What a host verification check is actually looking for",
      blocks: [
        p("Verification confirms that the person using the account is the person who registered. It is not a judgement about how you look. The check compares a live image with the registered details and looks for signs that the image is genuine and current."),
        table(
          ["Element", "What helps", "What fails"],
          [
            ["Light", "Even, front-facing daylight or a soft lamp", "Backlight, a dark room, a bright screen behind you"],
            ["Face", "Whole face visible, eyes open, no hat or filter", "Mask, sunglasses, hair covering the face, heavy filter"],
            ["Camera", "Rear or front camera clean and steady", "Smudged lens, extreme angle, motion blur"],
            ["Details", "Name and number matching the registration", "Nickname instead of legal name, old number"],
            ["Environment", "Plain background, one person in frame", "Crowd, another face, a screen showing a photo"],
          ],
          "What a host verification check looks for",
        ),
        p("A live check is not the same as uploading a picture from your gallery. If the prompt asks for a live image, a stored photo or a screenshot of a photo will fail even if it is a good picture of you."),
      ],
    },
    {
      id: "read-the-message",
      heading: "Read the exact failure message before changing anything",
      blocks: [
        p("The message usually names the problem: face not detected, image unclear, document unreadable, information mismatch or too many attempts. Each has a different fix. Retrying without reading it is how people get stuck in a loop."),
        list([
          "“Face not detected” — light, framing or something covering the face.",
          "“Image unclear” — focus, motion or lens quality.",
          "“Document unreadable” — glare, crop or an expired document.",
          "“Information mismatch” — the name or number does not match.",
          "“Too many attempts” — a cooldown is active; wait before retrying.",
        ]),
        p("Take a screenshot of the message. If you later contact support, the exact wording is more useful than a description, and it tells the agent which check failed."),
      ],
    },
    {
      id: "face-fixes",
      heading: "Fixes for a failed face check",
      blocks: [
        p("Face checks fail most often in low light or when the phone is held too close. A few small changes fix most attempts, and none of them require special equipment."),
        steps([
          "Move to a room with even light and face a window, not the window behind you.",
          "Hold the phone at eye level, an arm's length away.",
          "Remove a hat, mask or sunglasses and move hair away from the face.",
          "Turn off beauty filters and any background blur.",
          "Clean the front camera lens.",
          "Hold still for the countdown and follow the on-screen movement.",
          "Retry once; if it fails again, wait rather than repeating immediately.",
        ]),
        p("Do not use a photo of a photo, a printed image or a friend's phone screen. Those attempts can be flagged as spoofing, which is a harder problem than poor light."),
        note("A verification check never needs remote access to your phone, a screen-share or a code read aloud to a stranger. If someone offers to “verify” the account for you, it is a scam."),
      ],
    },
    {
      id: "document-fixes",
      heading: "Fixes for a document or detail mismatch",
      blocks: [
        p("If the check asks for a document, the reviewer is comparing the document, the account details and the live person. The most common failure is a name that appears differently across those three places."),
        table(
          ["Problem", "Why it fails", "Fix"],
          [
            ["Name spelling differs", "Account uses a nickname or different spelling", "Update the account detail to match the document"],
            ["Document expired", "The check needs a current document", "Use a valid document"],
            ["Cropped photo", "Edges or numbers are missing", "Photograph the whole document on a flat surface"],
            ["Glare or shadow", "Text cannot be read", "Use indirect light and avoid a flash"],
            ["Old phone number", "Details cannot be confirmed", "Update the number through the official flow"],
          ],
          "Document verification problems",
        ),
        p("Upload once and wait. Sending the same image repeatedly does not make it readable, and it can add a review delay. If the rejection reason is unclear, ask which element failed rather than starting a new verification from scratch."),
      ],
    },
    {
      id: "cooldowns",
      heading: "Cooldowns and retry limits",
      blocks: [
        p("Repeated failed attempts can trigger a temporary block. That block is a security control, not a punishment, and it usually clears with time. Trying again during the cooldown generally extends it."),
        p("Use the wait to fix the underlying issue: better light, a valid document, matching details. Then retry once with everything corrected. If the same message appears again, contact support with the screenshot and a short description of what you changed."),
        p("Do not create a new account to get around a verification block. A second account starts with the same verification requirement, splits your history and can put both accounts under review."),
      ],
    },
    {
      id: "support",
      heading: "What to send support after a failed verification",
      blocks: [
        p("Support needs the account, the check that failed, the message and what you already tried. That is enough to locate the attempt and explain the next step."),
        list([
          "Account identifier and registered phone, masked.",
          "The exact error message.",
          "The date and time of the attempt.",
          "What you changed between attempts.",
          "Whether a cooldown is showing.",
          "One screenshot with personal details masked.",
        ]),
        p("Do not attach your full identity document in a chat unless the official flow asks for it. A support agent can explain the check without receiving the document by message."),
        p("If the account is a host account created through an invitation, tell support that the registration came from an invitation link. It helps them understand the account type and the expected flow."),
      ],
    },
    {
      id: "prevention",
      heading: "Getting it right the first time",
      blocks: [
        p("Verification is easier before you are in a hurry. Do it on a quiet connection, in daylight, with the document you will use for payouts nearby. Correcting a detail before the check is faster than correcting it after a failure."),
        p("Keep the registered phone number active and the name consistent across the account, the wallet and the bank. When those three match, verification, payouts and recovery all become simpler. The [host registration guide](/chamet-host-registration/) walks through the setup order, and the [MetWallet KYC guide](/blog/metwallet-kyc-verification/) covers the wallet's own checks."),
        p("If a check fails, treat it as information rather than a verdict. Read the message, change one thing, and retry after the cooldown. That approach solves most cases without a support ticket."),
      ],
    },
  ],
  faqs: [
    {
      q: "Why did my Chamet host verification fail?",
      a: "The usual causes are poor light, a partly covered face, motion blur, a stored photo instead of a live check, or a name that does not match the registered details. The exact message on screen tells you which one applies.",
    },
    {
      q: "Can I retry immediately after a failed verification?",
      a: "Sometimes, but repeated attempts can trigger a cooldown. Fix the cause first, then retry once. If a cooldown message appears, wait for it to clear rather than trying again.",
    },
    {
      q: "Does a failed face check mean my account is rejected?",
      a: "No. A failed check is usually a technical or image-quality issue. A rejection is a separate decision with its own message. Read the wording to tell the difference before contacting support.",
    },
    {
      q: "Can someone verify my account for me?",
      a: "No. Verification requires you and your document. Anyone offering to complete it for a fee, or asking for remote access or a code, is a security risk. Never share a code or install a remote-access app for verification.",
    },
    {
      q: "Will a new account avoid the verification problem?",
      a: "No. A new account faces the same check, and duplicate accounts complicate recovery and payouts. Fix the original account instead.",
    },
  ],
  related: [
    { href: "/chamet-host-registration/", label: "Host registration and profile setup" },
    { href: "/blog/metwallet-kyc-verification/", label: "MetWallet verification documents" },
    { href: "/chamet-help/", label: "Help by stage: registration and login" },
  ],
};