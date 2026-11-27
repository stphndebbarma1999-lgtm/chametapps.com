import { cards, list, note, p, steps, table, type BlogPost } from "@/lib/content";

export const postMetwalletKyc: BlogPost = {
  slug: "metwallet-kyc-verification",
  category: "Payments",
  published: "2026-10-20",
  updated: "2026-11-26",
  readingMinutes: 9,
  excerpt:
    "What MetWallet Basic Level verification usually asks for, why a document gets rejected, and how to prepare before a Chamet payout depends on it.",
  keywords: ["metwallet kyc", "metwallet verification", "metwallet basic level", "metwallet india kyc"],
  quickAnswer:
    "MetWallet may ask you to complete Basic Level verification before a cash out. The exact documents depend on the wallet, your region and the amount. Use clear photos, a document with the same name as the wallet, and a phone number you control. Complete it before you need a payout, and never send documents to an individual in chat.",
  sections: [
    {
      id: "what-kyc-is",
      heading: "What Basic Level verification is for",
      blocks: [
        p("Verification connects a wallet account to a real person. It helps the provider meet financial rules, reduce fraud and make sure a payout goes to the right account holder. The wallet decides what it needs, and the requirements can differ by country, amount and account history."),
        p("Basic Level usually means the first tier of verification: identity, contact details and sometimes a selfie. A higher tier may be needed for larger transfers or additional methods. You do not need to guess which tier applies; the wallet shows the next step in your profile."),
        p("A confirmed wallet makes later payouts smoother. The awkward alternative is discovering a missing document when a withdrawal is already waiting. Set the wallet up properly before the first commission or host payment arrives."),
      ],
    },
    {
      id: "documents",
      heading: "What you may be asked for",
      blocks: [
        table(
          ["Item", "Why it is requested", "Practical note"],
          [
            ["Full legal name", "Matches the wallet to the identity document", "Use the name on the document, not a nickname"],
            ["Date of birth", "Age and identity check", "Must meet the platform and wallet age rules"],
            ["Phone number", "Contact and verification", "Use a number you can access now and later"],
            ["Email address", "Contact and codes", "Check the spelling; a typo breaks recovery"],
            ["Government ID", "Identity verification", "Use a current, legible document"],
            ["Selfie or liveness check", "Confirms a real person", "Good lighting, no filters, face uncovered"],
            ["Address details", "Region and compliance", "Enter a real address you can evidence if asked"],
          ],
          "Typical MetWallet Basic Level fields",
        ),
        p("Not every account sees every field. The wallet may ask for a subset, or request additional information for a particular payout method. The screen in your app is the current requirement; a list from a blog is only an orientation."),
        note("ChametApps.com does not verify identities or receive your documents. Complete verification inside MetWallet or the official support flow."),
      ],
    },
    {
      id: "prepare",
      heading: "How to prepare before you start",
      blocks: [
        steps([
          "Use the exact legal name that appears on your identity document.",
          "Have the document ready and check that it is current and readable.",
          "Find a well-lit spot with a plain background for a selfie.",
          "Use a stable connection so the upload does not time out.",
          "Keep the registered phone nearby for codes.",
          "Do not use a VPN that makes your location inconsistent.",
          "Complete the flow in one sitting if possible.",
        ]),
        p("A VPN can be useful for privacy, but switching countries during a financial verification can trigger a mismatch review. If you need a VPN for connectivity, use one consistent location and be ready to explain it if support asks."),
        p("Avoid editing a document photo with filters or cropping out corners. Providers reject edited images because they cannot verify authenticity. A plain, sharp photo is better than a beautiful one."),
      ],
    },
    {
      id: "rejected",
      heading: "Why a document or selfie gets rejected",
      blocks: [
        table(
          ["Problem", "Likely cause", "Fix"],
          [
            ["Blurry image", "Motion, low light or low resolution", "Retake in bright light and hold steady"],
            ["Glare on the document", "Direct light or a laminated surface", "Change the angle and move the light source"],
            ["Expired document", "The ID is no longer valid", "Use a current document"],
            ["Name mismatch", "Nickname, spelling or a different account name", "Use the legal name consistently"],
            ["Selfie mismatch", "Filters, sunglasses, poor lighting or an old photo", "Retake without filters in even light"],
            ["Address mismatch", "Old address or a different region", "Update the details or provide evidence if requested"],
            ["Upload timeout", "Weak connection or a large file", "Retry on a stable network"],
          ],
          "MetWallet verification rejection fixes",
        ),
        p("Read the rejection reason before resubmitting. Sending the same image again usually produces the same result. If the reason is unclear, contact wallet support and ask which field failed; you do not need to send the document in the chat."),
        p("Repeated failed attempts can trigger a cooldown. Slow down, fix the specific issue and try once with a better image rather than submitting five times in a row."),
      ],
    },
    {
      id: "name-match",
      heading: "Name matching and the destination account",
      blocks: [
        p("The wallet holder, the verified identity and the destination bank account should belong to the same person. A payout to a relative's account can fail a name check or trigger a review. If you need to use a joint account, check the provider's rules first."),
        p("This is also why changing a surname, using a shortened name or opening a wallet with a nickname causes trouble later. The platform sees a mismatch even if the person is the same. Fix the wallet name through the official process before a payout, not after."),
        p("If you have multiple wallets, verify the one you actually intend to use and remove or ignore the others. A payout sent to a wallet you forgot about is still a payment; it just is not where you are looking."),
      ],
    },
    {
      id: "privacy",
      heading: "Sharing documents safely",
      blocks: [
        p("Identity documents are sensitive. Send them only through the wallet's official upload or support channel. Do not send them to a WhatsApp contact, a Telegram group or an agency that offers to “verify” you faster."),
        list([
          "Check the app or website domain before uploading.",
          "Do not send an OTP along with a document.",
          "Mask unrelated details when a support screenshot only needs one field.",
          "Keep a note of what you submitted and when.",
          "If a review stalls, ask for a case reference rather than resending everything.",
        ]),
        p("An agency does not need your identity documents to invite you. If someone asks for them before registration, treat it as a red flag and verify the request with the platform."),
      ],
    },
    {
      id: "before-payout",
      heading: "Verification checklist before a Chamet payout",
      blocks: [
        cards([
          { title: "Wallet verified", text: "Basic Level complete and the name matches your ID." },
          { title: "Phone active", text: "You can receive codes on the registered number today." },
          { title: "Destination ready", text: "The bank or method belongs to you and the details are correct." },
          { title: "Password set", text: "A payment password you have not reused elsewhere." },
        ]),
        p("Run this checklist before you submit a withdrawal, not after. A verified wallet with a correct destination turns a payout into a routine transfer instead of a support case."),
        p("For the cash-out steps, read [MetWallet cash out](/metwallet-withdrawal/). For a pending withdrawal, read [Chamet withdrawal pending](/blog/chamet-withdrawal-pending/)."),
      ],
    },
    {
      id: "kyc-mistakes",
      heading: "KYC mistakes that delay approval",
      blocks: [
        p("Most verification rejections are avoidable. They come from a document photo that is cropped, a name that does not match, a selfie taken in poor light or a document that has expired. The reviewer is checking whether the person, the document and the account are the same."),
        list([
          "Photograph the whole document, including all four corners.",
          "Avoid glare, shadows and a patterned background.",
          "Use the exact name spelling shown on the document.",
          "Check the document's expiry date before uploading.",
          "Take the selfie in daylight without a hat or filter.",
          "Upload once, then wait rather than sending duplicates.",
        ]),
        p("If a submission is rejected, read the reason before retrying. Re-uploading the same image usually produces the same result. If the reason is unclear, ask support which element failed rather than starting a new verification."),
        p("Never send documents to a person who contacts you first. Verification happens inside the wallet's own flow, not in a chat. A request for documents by message is a red flag, even if the sender uses an official-looking logo."),
      ],
    },
  ],
  faqs: [
    { q: "What is MetWallet Basic Level verification?", a: "It is the first verification tier in the wallet, usually covering identity, contact details and sometimes a selfie. It helps the provider comply with financial rules and confirm the account holder." },
    { q: "Which documents does MetWallet accept?", a: "The wallet shows the accepted documents for your region and amount. Typically a current government ID, your legal name, contact details and a selfie may be requested. Follow the screen in your app." },
    { q: "Why was my MetWallet verification rejected?", a: "Common reasons are blur, glare, an expired document, a name mismatch, a filtered selfie or an upload timeout. Read the reason and fix that specific issue before resubmitting." },
    { q: "Do I need KYC before withdrawing from Chamet?", a: "Chamet's host flow moves an eligible balance to MetWallet, and the wallet may require verification before a cash out. Complete it before you need the money." },
    { q: "Can I use a family member's MetWallet account?", a: "The wallet, identity and destination should belong to the same person. Using someone else's account can fail a name check or trigger a review. Check the provider's rules first." },
    { q: "How long does MetWallet verification take?", a: "Timing varies by provider and workload. The app shows a status or estimate. If it stalls beyond the stated time, contact wallet support with your case details rather than resubmitting repeatedly." },
    { q: "Is it safe to send my ID to MetWallet support on WhatsApp?", a: "Use the official in-app or website support route. Avoid sending identity documents to an individual chat contact, even if they claim to be support." },
    { q: "Why does my name not match?", a: "Nicknames, spelling differences, a maiden name or a different account name can cause a mismatch. Use the legal name consistently and fix the wallet profile through the official process." },
    { q: "Does verification cost anything?", a: "The wallet shows any applicable charge. Be cautious of anyone demanding a fee to a personal account to “clear” verification. Official fees appear in the app, not in a chat." },
    { q: "What if I cannot complete verification?", a: "Contact wallet support, explain which step fails and ask what alternative evidence is accepted. Do not create multiple accounts to work around the issue." },
  ],
  related: [
    { href: "/metwallet-withdrawal/", label: "MetWallet cash out steps" },
    { href: "/chamet-host-withdrawal/", label: "Host withdrawal guide" },
    { href: "/blog/chamet-beans-to-dollars/", label: "Beans to dollars" },
  ],
};