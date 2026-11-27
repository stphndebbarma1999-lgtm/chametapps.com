import { list, note, p, steps, table, type PageContent } from "@/lib/content";

export const downloadContent: PageContent = {
  quickAnswer:
    "Download the Chamet app from the official Chamet website or the app store listing available in your region. This site does not host an APK or a modified app. Install the official package, sign in with the same phone or email used at registration, and remember that the agency dashboard is a separate browser login, not a second app.",
  sections: [
    {
      id: "official-source",
      heading: "Where to download Chamet safely",
      blocks: [
        p("The safest download source is the official Chamet website and the app store listing that the website points to for your region. A search result, a Telegram file or a website that promises extra coins is not an official source, even if the icon looks correct."),
        p("ChametApps.com does not host the Chamet installer. We explain registration and the agency workflow, but the app file itself comes from Chamet or from the store listing Chamet publishes. If a page on this site ever shows a download button, treat it as a link to the official source rather than a hosted file."),
        note("A modified APK can capture your password, read your messages or misuse your account. No extra coins, unlocked gifts or free diamonds are worth that risk."),
        p("If you cannot find the app in your store, the official website is the next place to check. Availability can depend on your country, your device and the store's current listing status. A missing listing is not a reason to install a file from a random site."),
      ],
    },
    {
      id: "three-apps",
      heading: "Chamet app, agency portal and MetWallet: which one do you need?",
      blocks: [
        p("New users often look for an agency app and end up installing a consumer app instead. The three surfaces have different purposes, and only two of them are apps."),
        table(
          ["Surface", "What it is", "Use it for"],
          [
            ["Chamet app", "The consumer app for hosts and viewers", "Profile, live rooms, gifts, My Earning"],
            ["Agency portal", "A browser dashboard at agent.ichamet.com", "Invitations, invitee lists, reports, commission, My Profile"],
            ["MetWallet", "A separate wallet app", "Receiving funds and cashing out"],
          ],
          "Chamet app, agency portal and MetWallet compared",
        ),
        p("Install the Chamet app if you want to host, watch or manage a personal profile. Open the agency portal in a browser if you want to invite members, read agency reports or bind the agency wallet. Install MetWallet when you are ready to receive payouts."),
        p("You do not need a second APK to be an agent. The dashboard is a website and works on a phone browser. A file that calls itself an agency APK should be treated as unverified unless Chamet itself links to it."),
      ],
    },
    {
      id: "before-install",
      heading: "Before you install: device, storage and account details",
      blocks: [
        list([
          "Check that your phone runs a current version of Android or iOS.",
          "Free up storage; live video apps need room for cache and updates.",
          "Use a stable connection for the first sign-in and verification.",
          "Have the phone number or email you used at registration ready.",
          "Decide whether you will use a personal number or a separate business number.",
          "Review the app's permissions after installation and grant only what you need.",
        ]),
        p("If you are registering as a host through an invitation, complete the registration flow before installing, or follow the order shown in the invitation. The account must exist before the app can sign in to it. Installing first and registering later is fine, but do not create two accounts because you forgot which step came first."),
        p("A business number is worth considering if you plan to host or manage an agency. It keeps work messages separate from family calls, and it makes it easier to hand over support tasks later. If you use a business number, keep it active; losing it can complicate verification and recovery."),
      ],
    },
    {
      id: "install-android",
      heading: "How to install Chamet on Android",
      blocks: [
        steps([
          "Open the official Chamet website or your region's app store listing.",
          "Choose the Android download option offered there.",
          "If your browser warns about downloading a file, confirm the source is the official site before continuing.",
          "Open the downloaded file and allow installation from that source only if your phone requires it.",
          "Wait for the installation to finish, then open the app.",
          "Sign in or register with the phone number or email you intend to keep.",
          "Grant camera and microphone access when you are ready to host or join a live room.",
          "Update the app when the store or the app prompts you.",
        ]),
        p("Android phones often ask for permission to install from an unknown source when you download outside the Play Store. That setting is a security control. Enable it only for the browser or file manager you are using, install the official package, then turn the permission off again."),
        p("Do not disable Play Protect permanently to force an installation. If Play Protect flags a file, stop and verify the source. A legitimate update should not require you to weaken your phone's protection."),
      ],
    },
    {
      id: "install-ios",
      heading: "How to install Chamet on iPhone or iPad",
      blocks: [
        p("On iOS, use the App Store listing linked from the official Chamet website. If the app does not appear in your region's store, the listing may not be available for that account or country. Changing your Apple account region to force an install can affect subscriptions, payments and other apps, so do not do it casually."),
        steps([
          "Open the official Chamet website on your iPhone or iPad.",
          "Follow the App Store link provided for your region.",
          "Confirm the developer and the app name before tapping Get.",
          "Authenticate with Face ID, Touch ID or your Apple account password.",
          "Wait for the install to finish and open the app.",
          "Sign in with the same method you used at registration.",
          "Grant camera and microphone access when you start hosting or watching.",
        ]),
        p("If the App Store shows a different app with a similar name, check the developer details and the screenshots. Imitation apps rely on confusing names and icons. The official website's link is a safer starting point than a search result."),
      ],
    },
    {
      id: "apk-safety",
      heading: "Why modified APKs and mod versions are a bad trade",
      blocks: [
        p("A modified APK is an app file that someone has changed. It may promise free coins, unlocked gifts, unlimited diamonds or an ad-free experience. To deliver that, it often asks for permissions it does not need, or it routes your login through someone else's server."),
        list([
          "Your password and verification codes can be captured.",
          "Your account can be used for activity you did not authorize.",
          "Your contacts, photos or messages can be exposed.",
          "The app can stop working after an update, taking your local data with it.",
          "You may violate the platform's rules and lose access to your account.",
        ]),
        p("The same warning applies to “agency panel” files, “unlimited beans” tools and browser extensions that claim to modify Chamet. If a tool needs your password to give you free currency, the business model is your account, not the currency."),
        p("If you already installed a modified app, uninstall it, change your Chamet password, check your linked wallet and review recent account activity. Then install the official app from a trusted source."),
      ],
    },
    {
      id: "sign-in",
      heading: "Sign in after installing: use the same account method",
      blocks: [
        p("The app sign-in must match the account you created. If you registered with a phone number, use that number. If you registered with email, use the same email. Choosing a different method can create a new empty account, which looks like lost data but is really a second account."),
        p("Host accounts created through an invitation should sign in with the details entered during that registration. If the invitation flow created a password, keep it safe. If it used a code, make sure the phone number receiving the code is the one attached to the account."),
        p("If the app says the account does not exist, check the country code on the phone number and the spelling of the email. Then try the other sign-in method you may have used. If neither works, use the app's recovery or support route rather than creating another account."),
        p("Agency credentials do not sign in to the app as a host, and app credentials do not open the agency dashboard. Keep the two sets of details in separate notes so you do not mix them up."),
      ],
    },
    {
      id: "permissions",
      heading: "Permissions, privacy and the settings worth reviewing",
      blocks: [
        p("A live video app needs a camera and microphone to host or join a room. It may also ask for storage, notifications and phone state. Grant the permissions that match what you are doing, and review them periodically in your phone settings."),
        table(
          ["Permission", "Why it may be requested", "What to consider"],
          [
            ["Camera", "Live video and face verification", "Grant when hosting; revoke when you stop"],
            ["Microphone", "Voice in live rooms and calls", "Grant only if you use voice features"],
            ["Storage or photos", "Saving images or uploading a profile picture", "Limit access to selected files where the system allows"],
            ["Notifications", "Messages, gifts and account alerts", "Useful for hosts; can be turned off later"],
            ["Phone state", "Device and account integrity checks", "Review the app's explanation before granting"],
          ],
          "Chamet app permissions and privacy",
        ),
        p("Use the app's privacy settings to control who can message you and what appears on your profile. A public profile with a personal phone number invites unwanted contact. If you host, consider what you share about your location, workplace and daily routine."),
        p("Keep the operating system and the app updated. Updates often include security fixes, and an old version may stop working with the current service. Update from the same official source you used to install."),
      ],
    },
    {
      id: "troubleshooting",
      heading: "Chamet download and install problems",
      blocks: [
        table(
          ["Problem", "Likely cause", "Fix"],
          [
            ["Download does not start", "Connection, storage or browser block", "Check space, try another network and allow the official download"],
            ["Install blocked", "Unknown-source permission or Play Protect", "Allow the source temporarily, install, then turn it off; do not disable protection permanently"],
            ["App installs but will not open", "Outdated system or corrupted download", "Restart, reinstall from the official source and update the system"],
            ["Login says account not found", "Wrong sign-in method or country code", "Use the original method, check the number and try the other registered method"],
            ["Verification code missing", "SMS delay, spam filter or wrong number", "Wait for the cooldown, check spam and confirm the number on the account"],
            ["App crashes in a live room", "Memory, heat or a version issue", "Close background apps, update the app and restart the phone"],
            ["Store says not available", "Regional listing or device compatibility", "Check the official website for the supported option; do not sideload a random file"],
          ],
          "Chamet download and login troubleshooting",
        ),
        p("Change one variable at a time. If you reinstall, change networks and create a new account in the same hour, you will not know which action helped and you may lose access to the original account."),
      ],
    },
    {
      id: "after-install",
      heading: "After installation: profile, verification and first steps",
      blocks: [
        p("A new install is a blank profile. Add a clear photo, a short bio and the languages you speak. If you registered as a host, complete the verification prompts and read the host guidelines before going live. If you are an agent, your main work happens in the browser portal, not in the app."),
        steps([
          "Sign in and confirm the account name and ID are the ones you expect.",
          "Add a profile photo that follows the platform's rules.",
          "Complete phone or face verification if the account asks for it.",
          "Review privacy and notification settings.",
          "Explore the app for a few minutes before hosting or inviting anyone.",
          "Read the host or agency guidelines that apply to your account.",
        ]),
        p("Hosts who want a structured start can follow the [host registration guide](/chamet-host-registration/) and the [host profile tips](/blog/chamet-host-profile-tips/). Agents can open the [agency registration guide](/chamet-agency-registration/) and the [dashboard walkthrough](/chamet-agency-login/)."),
      ],
    },
    {
      id: "device-requirements",
      heading: "Device requirements and performance before a live session",
      blocks: [
        p("Live video is heavier than scrolling a feed. A phone that handles chat comfortably can still struggle with a hour-long stream, especially if it is warm or low on storage. Check the basics before you plan a session rather than discovering them when viewers arrive."),
        table(
          ["Requirement", "Why it matters", "Practical check"],
          [
            ["Current Android or iOS", "Security updates and app compatibility", "Check the system update screen"],
            ["Free storage", "Cache, video buffers and updates", "Keep several gigabytes free"],
            ["Stable upload speed", "Clear video and audio for viewers", "Test a short live or video call on the same network"],
            ["Working camera and microphone", "The core of a live room", "Record a short clip and listen back"],
            ["Battery or charger", "Long sessions drain quickly", "Charge before going live or keep a charger connected"],
            ["Reasonable device temperature", "Heat throttles performance", "Remove a thick case and avoid direct sun"],
          ],
          "Chamet device readiness checklist",
        ),
        p("A tablet can work, but the camera position and the layout may not suit a live room. A recent mid-range phone with a stable connection is usually more reliable than an older flagship that overheats. Do not buy equipment on the promise of guaranteed viewers; a better microphone helps only after the basics are stable."),
        p("If the app lags during a session, lower the demands rather than blaming the platform. Close background apps, stop other downloads, move closer to the router and reduce the session length. A short, clear session is better than a long, broken one."),
      ],
    },
    {
      id: "updates",
      heading: "Updating the app without losing access",
      blocks: [
        p("Updates fix login problems and security issues, but they can also change screens and labels. Update from the same official source you used to install. An update from a random mirror is a new install from an untrusted publisher, even if the version number looks newer."),
        steps([
          "Note the account method you use: phone, email or a linked social login.",
          "Update through the official store or the official website link.",
          "Open the app and confirm you are still signed in.",
          "Check that your profile and balance are visible.",
          "If a screen has moved, use search or the settings menu rather than reinstalling.",
          "Report a broken flow through the app's support route.",
        ]),
        p("If an update fails, do not uninstall the app until you know your login details. Uninstalling can remove local data and saved sessions, and if the account is tied to a phone number you no longer control, recovery becomes much harder. Note the account details first, then troubleshoot."),
        p("Rolling back to an older version is not a safe fix. Older builds may be unsupported, may fail at login and may not work with current payment or verification services. If the latest version is broken for your device, use support rather than a modified older APK."),
      ],
    },
    {
      id: "shared-device",
      heading: "Shared devices, family phones and account safety",
      blocks: [
        p("Many people install the app on a family phone. That is workable, but it needs boundaries. Anyone who can open the app can see notifications, messages and possibly the profile. A shared device with a saved password is a shared account, even if only one person hosts."),
        list([
          "Use a device lock that other users do not know.",
          "Do not save the password in a shared browser or notes app.",
          "Turn off message previews on the lock screen if the phone is shared.",
          "Sign out before handing the phone to someone else for a long period.",
          "Keep the registered phone number under your control.",
          "Review active sessions and linked accounts periodically.",
        ]),
        p("If you host on a shared phone, explain the boundary before a session. A viewer who asks for a private call or personal number should be redirected. The same applies to a family member who wants to use the account for a different purpose; separate accounts are safer than one account with several identities."),
        note("Never let a stranger install an app, change a setting or “verify” the account on your phone. If they need the device, the request is not support."),
      ],
    },
    {
      id: "wrong-app",
      heading: "What to do if you installed the wrong app",
      blocks: [
        p("Icon imitation is common. If you installed an app that is not Chamet, or a modified version that looked official, act before you enter more information. The priority is to protect the account, the wallet and the phone, not to argue with the website that supplied the file."),
        steps([
          "Stop using the app and do not enter any further codes or passwords.",
          "Uninstall it from the phone's app settings.",
          "Change the password of any account you entered, from a different device.",
          "Check your linked wallet and recent payment activity.",
          "Review the phone's installed apps and remove anything unfamiliar.",
          "If payment details were entered, contact the wallet or bank immediately.",
        ]),
        p("Then install the official app from the official website or store and sign in with the correct method. If the account shows activity you did not authorize, use the platform's support and security route. Keep the messages and screenshots; they help explain what happened."),
        p("A modified app can remain dangerous even after uninstalling if it installed additional components or if you granted device-administrator access. Check the phone's device-administrator and accessibility settings, and remove anything you do not recognize."),
      ],
    },
    {
      id: "data-usage",
      heading: "Data usage and storage: what to expect",
      blocks: [
        p("Live video uses more data than browsing or messaging. The exact amount depends on resolution, network and session length, so no single figure fits every phone. A practical approach is to measure one short session with your phone's data counter, then plan around that number."),
        table(
          ["Activity", "Data pressure", "Tip"],
          [
            ["Watching a live room", "Continuous download", "Use Wi-Fi when available"],
            ["Hosting a live room", "Upload and download", "Prefer a stable connection over a fast one"],
            ["Browsing profiles", "Moderate, image-heavy", "Avoid long sessions on mobile data"],
            ["App updates", "Large one-off download", "Update over Wi-Fi"],
            ["Cache and video buffers", "Storage growth over time", "Clear cache if storage is low"],
          ],
          "Chamet data and storage expectations",
        ),
        p("If your plan throttles after a daily limit, hosting in the evening can be expensive. Check the plan's fair-usage terms and keep a backup pack for sessions. A dropped connection mid-session is more damaging than hosting less often."),
        p("Clear the app cache if storage fills, but avoid clearing app data unless you are prepared to sign in again. Clearing data can remove local preferences and saved sessions, and on a phone you no longer control it can make account recovery harder."),
      ],
    },
    {
      id: "after-install",
      heading: "First sign-in checks after installation",
      blocks: [
        p("A successful install is only half the setup. The first sign-in confirms that the account exists, that the login method works and that verification can be completed on this device. Do these checks while you still have time, not on the day you plan to host."),
        steps([
          "Open the app and choose the same sign-in method used at registration.",
          "Confirm the profile details are yours.",
          "Complete any verification prompt.",
          "Check that notifications and permissions work as expected.",
          "Open the earning or withdrawal area once to confirm it is visible.",
          "Note the app version and the device you used.",
        ]),
        p("If the app opens but the account looks empty, you may be signed in to a different account. Sign out and check the identifier. A second account created by mistake is a common reason for missing history, and it is easier to fix before you host or invite anyone."),
        p("If verification fails, do not reinstall repeatedly. Repeated attempts can trigger a cooldown. Read the message, check the lighting and the document edges for a face or document check, and use the official support route if it still fails."),
      ],
    },
    {
      id: "version-checks",
      heading: "Checking which version you are running",
      blocks: [
        p("Before reporting a bug, confirm the version. A flow that changed last month may still be described in an older guide, and a support team will ask for the version before investigating. The app usually shows it in the settings or about screen."),
        p("If an update is available, install it from the official source and retry once. If the problem persists on the latest version, report it with the version, device model and a screenshot. That combination is specific enough to reproduce."),
        p("Treat the install as the first step of a longer setup, not the finish line. An app that opens is not an account that is ready. Verification, profile details and a working sign-in method all matter before a session or a payout, and checking them early is far easier than fixing them under pressure on a busy day."),
      ],
    },
  ],
  faqs: [
    { q: "Where can I download the Chamet app?", a: "Use the official Chamet website or the app store listing it points to for your region. This site does not host the installer. Confirm the developer and app name before installing." },
    { q: "Is there a separate Chamet agency app?", a: "The agency workflow described here uses a browser dashboard at agent.ichamet.com. You do not need a separate agency APK to invite members, read reports or bind MetWallet." },
    { q: "Does ChametApps.com provide a mod APK?", a: "No. We do not host or recommend modified apps. Mod versions can steal credentials, break after updates and put your account at risk." },
    { q: "Why is Chamet not available in my app store?", a: "Availability depends on your country, device and the store's current listing. Check the official website for the supported option. Do not install an unverified file from a third-party site." },
    { q: "How do I install Chamet on Android?", a: "Download from the official source, allow installation from that source only if your phone requires it, install the package, then turn the permission off again. Keep Play Protect enabled." },
    { q: "How do I install Chamet on iPhone?", a: "Open the official website, follow the App Store link for your region, confirm the developer, then tap Get and authenticate with your Apple account." },
    { q: "Can I sign in with my agency username in the app?", a: "No. The app uses a host or viewer account. Agency credentials belong to the browser dashboard. Use the same phone or email method you used for the app account." },
    { q: "Why does the app say my account does not exist?", a: "Check the country code, the email spelling and whether you registered with phone or email. Try the other method you may have used. If neither works, use the app's recovery route instead of creating a second account." },
    { q: "What permissions does Chamet need?", a: "Camera and microphone are used for live video and voice. Storage, notifications and phone-state permissions may also be requested. Grant only what you use and review permissions in your phone settings." },
    { q: "Is it safe to use a modified Chamet APK?", a: "No. Modified apps can capture passwords and codes, expose personal data and violate platform rules. Use the official app and keep your device protections enabled." },
    { q: "Why does the app crash during a live room?", a: "Memory pressure, overheating, an outdated version or a weak connection can cause crashes. Close background apps, update the app, restart the phone and try a stable network." },
    { q: "Do I need MetWallet before installing Chamet?", a: "You can install and use the app first. You need a linked MetWallet when you are ready to withdraw an eligible host balance or receive agency payments." },
  ],
};