import { cards, list, note, p, steps, table, type PageContent } from "@/lib/content";

export const hostContent: PageContent = {
  quickAnswer:
    "Chamet host registration creates your personal live-streaming account. Open the host invitation link, enter your email or phone, complete the image check, enter the verification code, choose a password and download the app. Then sign in with the same method, finish face verification if asked and complete My Profile with a photo, nickname, languages, tags and a short introduction.",
  sections: [
    {
      id: "what-is-host-account",
      heading: "What is a Chamet host account and how does hosting work?",
      blocks: [
        p(
          "A Chamet host account is your personal creator profile inside the Chamet app. It holds your nickname, photo, languages, tags and introduction, and it is the account you use to go live, chat with viewers and receive virtual gifts. Hosting is not a salaried job: your balance depends on eligible viewer activity and the programmes attached to your account, and a screenshot of someone else's balance is not a forecast of yours.",
        ),
        p(
          "The host experience has three layers. The app is where you stream. The earnings area is where Beans accumulate and where withdrawal starts. MetWallet is the wallet that receives an eligible balance before you cash out to a payment method. Each layer has its own verification and its own support path. Confusing them is the main reason new hosts think money has disappeared when it has simply not moved yet.",
        ),
        p(
          "Hosting also involves a performance element that no registration guide can create for you. Viewers choose creators they enjoy and return to. A clear profile, a consistent schedule, good audio and a genuine interest in conversation matter more than expensive equipment. Treat the first month as practice and audience research rather than a race to a balance target.",
        ),
      ],
    },
    {
      id: "prepare",
      heading: "What you need before Chamet host registration",
      blocks: [
        p(
          "Chamet's published host guidance is for adults aged 18 or older. Before you open the invitation link, make sure the basics are ready: a smartphone with a working front camera and microphone, a stable internet connection, a phone number or email address you can access during registration, a clear profile photo and a password you have not reused elsewhere.",
        ),
        table(
          ["Item", "Good example", "Why it matters"],
          [
            ["Age and identity", "Your own details, 18 or older", "Borrowed details fail verification and can lose the account"],
            ["Contact method", "A phone or email you check daily", "Codes, recovery and notices arrive there"],
            ["Profile photo", "A clear, recent photo of you", "Viewers need to recognise the person on camera"],
            ["Introduction", "Two or three honest sentences", "Helps viewers decide whether to join your room"],
            ["Network", "Stable Wi-Fi or 4G/5G with good upload speed", "Drops end streams and frustrate viewers"],
            ["Time", "A schedule you can repeat", "Consistency is more useful than one long session"],
          ],
          "Chamet host registration preparation checklist",
        ),
        p(
          "Do not wait until payout day to think about the wallet. If you plan to withdraw, you will need a MetWallet account that can pass its own verification, and the name and phone details should match your identity documents. Setting that up early avoids the situation where a host has an eligible balance but cannot complete the wallet requirements.",
        ),
        p(
          "Finally, decide how much personal information you want on the profile. Your face is part of the product, but your address, workplace, family details and exact schedule do not need to be public. A stage name or a shortened nickname is acceptable if it does not mislead viewers about who you are.",
        ),
      ],
    },
    {
      id: "register-sign-in",
      heading: "Chamet host registration and sign-in, step by step",
      blocks: [
        p(
          "The walkthrough above shows the registration screens with example images. The written steps below explain the decision at each point, so you can recover if your screen looks slightly different from the example.",
        ),
        steps([
          "**Open the host invitation link.** Confirm that it is a host registration page, then enter the registration details it requests. If the page offers email registration, our example uses that route; phone registration is also common.",
          "**Complete the image or security check.** Follow the instruction exactly. If it fails repeatedly, refresh the page, allow scripts and try a standard browser instead of an in-app browser.",
          "**Enter the verification code.** The code goes to the email address or phone number you entered. Check the spelling of the email address before requesting a resend, and look in spam or promotions folders if it does not appear.",
          "**Set a password.** Use a unique password and store it safely. This is the password you will use for the app, so do not share it with an agency, a friend or a support agent.",
          "**Finish registration and install the app.** On the success screen, tap Download to install Chamet, or visit the official website for the correct download route.",
          "**Sign in with the same method.** Open the app and use the email or phone method you registered with. Choosing a different method can create a new account instead of opening the existing one.",
          "**Enter the sign-in code.** If the app sends a fresh code, enter it and tap Next. Codes expire, so request a new one if the message is old.",
          "**Complete face verification if asked.** Follow the on-screen frame and lighting instructions. Face verification usually exists to confirm that the person on the profile is the person streaming.",
        ]),
        p(
          "If you registered with email but later try to sign in with a phone number, the app may not find your profile. That is not a lost account; it is a different login method. Return to the original method and use the password or code associated with it. Write the method into your notes so future you does not repeat the confusion.",
        ),
      ],
    },
    {
      id: "verification-problems",
      heading: "Verification code and sign-in problems",
      blocks: [
        table(
          ["What you see", "What it usually means", "What to try"],
          [
            ["Code never arrives", "Wrong address, spam filter or SMS blocking", "Recheck the email or number, wait for the resend timer, check spam, then try another contact method"],
            ["Code is rejected", "Expired code or a typo", "Request a fresh code and enter it immediately without leading spaces"],
            ["Email already registered", "An account exists for that address", "Try signing in or use password recovery instead of registering again"],
            ["Password not accepted", "Caps lock, keyboard language or a different account", "Retype slowly, check the keyboard language and confirm the sign-in method"],
            ["Face verification fails", "Poor light, glasses glare or an unsupported browser", "Move to even lighting, remove glare, keep your face inside the frame and retry"],
            ["App opens as a new user", "Different login method or a reinstall", "Sign out and sign in with the original email or phone method"],
          ],
          "Chamet host verification and sign-in problems",
        ),
        p(
          "Repeatedly requesting codes is counterproductive. Many systems throttle requests after several attempts, which makes the next code slower to arrive. Wait for the cooldown, check the details once, then request again. If the contact method itself is lost, use the recovery options in the app or contact official support; a new account will not recover the old profile.",
        ),
        note(
          "ChametApps.com does not need your Chamet password or a verification code. If someone asks for either while offering registration help, treat it as a security risk and end the conversation.",
        ),
      ],
    },
    {
      id: "face-verification",
      heading: "How to pass Chamet face verification",
      blocks: [
        p(
          "Face verification is a liveness check. It confirms that a real person matching the profile is present, rather than a photo or a recorded video. The exact prompts vary, but the conditions for success are similar: good light, a clear view of your face, no obstruction and a stable connection.",
        ),
        list([
          "Face a window or a soft light source rather than sitting with a bright lamp behind you.",
          "Remove sunglasses, caps and masks; keep hair away from your eyes.",
          "Hold the phone at eye level and follow the on-screen movement or blink prompts slowly.",
          "Avoid strong backlight, filters, beauty modes and another person in the frame.",
          "If the check fails twice, restart the app and try again on Wi-Fi before assuming the account is blocked.",
        ]),
        p(
          "Some accounts are not asked to verify immediately. If the app asks later before a live feature or a withdrawal, complete it then. Do not use a photo of another person or a manipulated image; that defeats the purpose of the check and can lead to account restrictions. If your face has changed significantly since your identity document, use official support rather than repeated attempts.",
        ),
      ],
    },
    {
      id: "profile-setup",
      heading: "Chamet host profile setup: photo, nickname, languages and intro",
      blocks: [
        p(
          "Your profile is the first thing a viewer sees and the last thing they remember. A clear face photo, a pronounceable nickname, the languages you actually speak and two honest sentences are enough to start. You can refine the details later, but an empty profile makes every conversation harder.",
        ),
        cards([
          {
            title: "Avatar",
            text: "Choose a recent, sharp photo where your face is visible. Avoid group photos, heavy filters, logos or images that are not you. A plain background keeps attention on your face.",
          },
          {
            title: "Nickname",
            text: "Pick something short, easy to pronounce and searchable. Avoid impersonating celebrities, other hosts or Chamet staff, and avoid numbers that look like an account ID.",
          },
          {
            title: "Languages and tags",
            text: "List only languages you can hold a conversation in. Add tags that describe real interests: music, comedy, cooking, travel or fitness. Tags set expectations you can meet.",
          },
          {
            title: "Introduction",
            text: "Write two or three sentences about what you enjoy talking about and when you usually go live. Avoid promises, contact details, prices or anything that looks like an advertisement.",
          },
        ]),
        p(
          "A simple introduction works better than a long biography. For example: “I enjoy music and everyday conversation. I speak Hindi and English and usually go live in the evening.” That tells a viewer the language, the mood and the timing without exaggerating. Rewrite it in your own words and update it when your schedule changes.",
        ),
        p(
          "For more examples and a review checklist, read [Chamet host profile tips](/blog/chamet-host-profile-tips/). If a photo is rejected, check the app's current image rules rather than uploading the same file repeatedly. Profile images are public, so do not use a photo you would not want a stranger to save.",
        ),
      ],
    },
    {
      id: "beans-dollars",
      heading: "Chamet Beans to dollars and rupees: how host earnings work",
      blocks: [
        p(
          "Chamet's published host earnings page states that 10,000 Beans equal US$1. The dollar value of a Bean balance is therefore the number of Beans divided by 10,000. If you have 250,000 Beans, the published equivalent is US$25. If you have 800,000 Beans, it is US$80. This is a conversion, not a promise that the same amount will reach your bank account.",
        ),
        p(
          "The rupee credit is decided later, by the wallet and payment method. Currency conversion, wallet fees, payment-partner charges and the destination method can all change the final amount. The correct number to trust is the quote shown at cash out, not a rate copied from a blog or a screenshot. This site deliberately avoids publishing a fixed rupee rate because rates move.",
        ),
        table(
          ["Stage", "Where it happens", "What to check"],
          [
            ["Gift becomes Beans", "Chamet app", "The balance shown in My Earning or the earnings area"],
            ["Beans become dollars", "Chamet withdrawal screen", "The published 10,000 Beans = US$1 conversion and the minimum"],
            ["Dollars become wallet balance", "MetWallet link", "The linked account and the transferred amount"],
            ["Wallet becomes rupees", "MetWallet cash out", "Method, fee, exchange rate and estimated arrival time"],
          ],
          "The four stages from a Chamet gift to a rupee credit",
        ),
        p(
          "For worked examples and a closer look at minimums, read [Chamet Beans to dollars](/blog/chamet-beans-to-dollars/) and [Chamet host earnings](/blog/chamet-host-earnings-guide/). Neither guide promises an income. They explain how to read the numbers you already have.",
        ),
      ],
    },
    {
      id: "first-week",
      heading: "Your first week as a Chamet host",
      blocks: [
        p(
          "The first live session is rarely the best one, and that is normal. Treat it as a test: check your audio, your lighting, your angles and how the app feels when a viewer joins. Do not judge your potential from a single quiet room. Hosts who improve fastest are the ones who review what happened and change one thing at a time.",
        ),
        list([
          "Test your setup with a short private or low-pressure session before announcing a schedule.",
          "Use headphones to avoid echo and keep the microphone at a consistent distance.",
          "Put a soft light in front of you rather than behind you.",
          "Write down three conversation topics so you are not starting from silence.",
          "Choose a repeatable time slot and tell viewers when you will be back.",
          "Keep a glass of water nearby and take breaks; long sessions without breaks hurt your voice and focus.",
        ]),
        p(
          "Set boundaries early. Decide what you will and will not discuss, how you handle requests you are uncomfortable with and when you will stop for the day. If a viewer becomes abusive, use the app's reporting and blocking tools instead of arguing on camera. Your safety and your account are more valuable than one viewer's gift.",
        ),
      ],
    },
    {
      id: "safety-privacy",
      heading: "Host safety, privacy and common Chamet scams",
      blocks: [
        p(
          "A public live-streaming profile attracts attention, and not all of it is welcome. Keep your address, workplace, family names and financial details out of your bio and your streams. If you use a stage name, keep the link between that name and your personal accounts private. Avoid showing documents, bank apps or screens that reveal your phone number.",
        ),
        list([
          "Never share your Chamet password, OTP or payment password with a viewer, agency or self-described moderator.",
          "Treat requests to move the conversation to another app with caution, especially before you know the person.",
          "Do not accept a payment outside the platform to bypass rules or fees; it removes your protection.",
          "Do not install remote-access apps or APKs sent by a viewer or an unverified agency.",
          "Use the app's block and report tools for harassment, threats or requests for sexual content.",
          "If you feel unsafe, end the stream, save the evidence and contact local authorities where appropriate.",
        ]),
        p(
          "Agency recruitment scams often target new hosts. A genuine agency explains its referral relationship, does not charge a joining fee and does not need your login. If an agency asks you to create an account with a specific phone number it controls, walk away: an account registered with someone else's number is not fully yours. Our [Chamet agency near me guide](/blog/chamet-agency-near-me/) explains how to verify an agency online.",
        ),
      ],
    },
    {
      id: "next-steps",
      heading: "After registration: withdrawal, agency support and next steps",
      blocks: [
        p(
          "Once your profile is complete, the next practical step is understanding the withdrawal path before you need it. Open My Earning, review the conditions and link MetWallet if you plan to withdraw. The [host withdrawal guide](/chamet-host-withdrawal/) walks through the screens, including the wallet sub-guide and the final linked check.",
        ),
        p(
          "If you want agency support, compare agencies before registering. You can read guides without joining one, and Chamet's published guidance describes agency membership as optional. An agency may help with onboarding, coaching or local-language questions, but it should never ask for your password or promise a fixed income. For a comparison of the two account types, read [Chamet agency vs host account](/blog/chamet-agency-vs-host-account/).",
        ),
        p(
          "If you have not installed the app yet, use the [Chamet app download guide](/chamet-app-download/) to find the official route for your device. Avoid APK mirrors and modified builds. After installation, sign in with the same contact method you used during registration so the app opens your existing profile rather than creating a new one.",
        ),
      ],
    },
    {
      id: "setup",
      heading: "A simple hosting setup that does not cost much",
      blocks: [
        p("Viewers judge a stream in seconds, and most of that judgement is about light, sound and framing rather than equipment. A phone with a clean lens, a window or a soft lamp and a quiet room can look better than an expensive camera pointed at a dark corner."),
        list([
          "Face a window or a soft light; avoid a bright light behind you.",
          "Put the phone at eye level so you are not looking down.",
          "Use a plain background or tidy the visible area.",
          "Test the microphone at the volume you will actually speak.",
          "Keep the room quiet and close the door.",
          "Charge the phone and keep a power bank nearby.",
        ]),
        p("Do not buy a ring light, microphone and backdrop before your first session. Test with what you have, watch how the stream looks on another device and fix the biggest problem first. Usually that is sound or light, not resolution."),
        p("A short checklist before going live prevents most technical interruptions: connection stable, battery charged, notifications silenced, background tidy, water nearby. A calm start is part of the content."),
      ],
    },
    {
      id: "gifts-and-expectations",
      heading: "Gifts, Beans and viewer expectations",
      blocks: [
        p("Viewers send virtual gifts, and those gifts convert into Beans under the platform's rules. A host's income therefore depends on engagement and gifts, not on a fixed wage. Saying that clearly at the start prevents misunderstandings later, especially when a viewer expects something in return."),
        table(
          ["Expectation", "Reality", "How to respond"],
          [
            ["“I sent gifts, so you owe me a private call”", "A gift is not a contract for personal contact", "Decline politely and restate your boundaries"],
            ["“I will pay you outside the app”", "Off-platform payments remove platform protection", "Keep payments on-platform"],
            ["“Send me your personal number”", "Personal contact creates risk", "Use the app's tools only"],
            ["“Why is my gift not showing?”", "Gift processing and display can lag", "Ask the viewer to check with platform support"],
            ["“How much do you earn?”", "Income varies with activity", "Explain Beans and that no fixed amount is promised"],
          ],
          "Host boundaries around gifts",
        ),
        p("Never promise a specific return for a gift, a private meeting or a relationship. It is unfair to the viewer and it puts you in a position you cannot control. A friendly boundary is easier to hold on day one than after months of ambiguous messages."),
        p("If a viewer becomes demanding or abusive, use the platform's block and report tools and tell someone you trust. Do not negotiate with someone who is trying to make you feel unsafe."),
      ],
    },
    {
      id: "sustainable-schedule",
      heading: "A schedule you can keep",
      blocks: [
        p("Consistency matters more than long sessions. Two shorter sessions at predictable times are easier to maintain than a five-hour stream followed by a week of exhaustion. Viewers learn when to find you, and you learn how much energy the work actually takes."),
        steps([
          "Pick two or three times you can realistically keep for a month.",
          "Start with short sessions and extend only if you feel comfortable.",
          "Note which times brought more conversation, not just more viewers.",
          "Protect sleep and meals; do not host when you are unwell.",
          "Review the schedule at the end of the month.",
          "Change it openly rather than disappearing.",
        ]),
        p("Burnout is a real risk in live hosting. The app rewards presence, and presence can quietly become all-day availability. Set an end time, take breaks and keep interests outside the platform. Income that costs your health is not a good trade."),
        p("If you take a break, tell viewers when you will return or leave a short note in your profile. A predictable pause is easier for an audience than silence, and it is easier for you than explaining repeatedly."),
      ],
    },
  ],
  faqs: [
    {
      q: "How do I create a Chamet host account?",
      a: "Open the host invitation link, enter your phone or email, complete the security check and verification code, create a password and finish registration. Download the app, sign in with the same method, complete face verification if asked and fill in My Profile.",
    },
    {
      q: "Do I need an agency to become a Chamet host?",
      a: "Chamet's published host earnings guidance describes agency membership as optional. An agency can provide onboarding and support, but you should compare agencies and understand the referral relationship before registering through one.",
    },
    {
      q: "How much does a Chamet host earn per day?",
      a: "There is no fixed daily amount. Host earnings depend on eligible viewer gifts and the programmes attached to the account. Treat any daily income figure you see online as an example, not a guarantee.",
    },
    {
      q: "What is 10,000 Beans in dollars?",
      a: "Chamet's published host earnings page lists 10,000 Beans as US$1. The final rupee amount depends on the wallet, the payment method, fees and the exchange rate shown at cash out.",
    },
    {
      q: "Why can I not sign in with my phone number after registering with email?",
      a: "Email and phone are different sign-in methods. The app may treat a phone sign-in as a different account. Sign in with the same email method you used during registration, then check whether the app lets you add or change the linked method.",
    },
    {
      q: "Why does Chamet ask for face verification?",
      a: "Face verification confirms that the person using the profile matches the person on camera. It protects hosts and viewers from impersonation. Complete it in good light and follow the prompts; if it fails, improve the lighting and retry on a stable connection.",
    },
    {
      q: "Can I use the same phone number for a host and an agency account?",
      a: "The two account types are separate, and the registration form may reject a number that is already in use. If you need both roles, ask portal support about the supported process rather than creating duplicate or misleading accounts.",
    },
    {
      q: "Is Chamet safe for new hosts in India?",
      a: "The app has blocking and reporting tools, but safety depends on how you use it. Keep personal details private, never share OTPs or passwords, avoid off-platform payments and end a stream if you feel threatened. Local laws and platform rules still apply.",
    },
    {
      q: "Do I need a good camera to start hosting?",
      a: "A modern smartphone camera is enough. Stable lighting, clean audio and a reliable connection matter more than resolution. Test your setup before a public session and fix echo or backlight first.",
    },
    {
      q: "What happens if my Chamet profile photo is rejected?",
      a: "Check the app's current image rules and upload a clear, recent photo of yourself without logos, group members or heavy filters. If a valid photo is still rejected, contact official support with the image and the error message.",
    },
    {
      q: "Can I host part-time while studying or working?",
      a: "Yes, many hosts start part-time. A predictable schedule matters more than total hours. Choose times you can repeat, communicate them in your profile and avoid promising availability you cannot maintain.",
    },
    {
      q: "How do I withdraw host earnings after registration?",
      a: "Open your profile, select My Earning, tap Withdraw and review the listed conditions. If MetWallet is not linked, follow the wallet steps, authorize the correct account, return to Chamet and confirm the linked status before submitting an eligible request.",
    },
  ],
};