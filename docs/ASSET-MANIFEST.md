# Asset manifest

Originals are preserved unchanged in `design-source/assets/`. Delivery copies (same bytes, semantic filenames) live in `public/images/` and are produced by `python3 -I scripts/prepare-assets.py`. `next/image` serves responsive AVIF/WebP sizes with explicit dimensions. Open Graph JPEGs (1200×800, uncropped) are in `public/og/`.

## Brand

| File | Source / notes |
|---|---|
| `public/images/brand/chamet-app-icon.svg` | Header logo. Purple rounded tile + white emblem. Emblem traced (potrace) from the Chamet app icon visible in the supplied screenshot `design-source/assets/tutorials/06-Dashboard-Guide/01.webp` (pixel region 429,251–595,415); tile gradient sampled from the same pixels (#CD6DFB → #8E29FD). |
| `public/images/brand/chamet-emblem-white.svg` | Same traced emblem, white on transparent. Used for low-opacity decorative logos (empty alt, aria-hidden). |
| `src/app/favicon.ico` (16/32/48), `src/app/icon.svg`, `src/app/apple-icon.png` (180), `public/images/brand/icon-192.png`, `icon-512.png` | Rendered from `chamet-app-icon.svg`. |
| `design-source/logo-derivation-emblem-source.png` | The extracted raster emblem the trace was made from (88×106 px). |

Why not the reference site's logo file: https://www.chametagency.org/ does not resolve from the build environment (network policy), so its asset files could not be downloaded. The emblem was therefore derived from the actual Chamet app icon inside the supplied tutorial screenshot, preserving its shape. **Recommended before launch:** if you have the original Chamet emblem file from chametagency.org, replace the two SVGs and regenerate the icons.

## Page heroes and banners (13)

| Delivery file | Original | Size | Used on | Alt text |
|---|---|---|---|---|
| `public/images/heroes/chamet-agency-host-registration-hero.webp` | `assets/heroes/01-home-hero.webp` | 1536×1024 | / | Two adult livestream creators beside the Chamet logo on a colourful purple background |
| `public/images/heroes/chamet-agency-registration-hero.webp` | `assets/heroes/02-agency-hero.webp` | 1536×1024 | /agency.html | Adult creators in colourful livestream panels beside the Chamet logo and a team symbol |
| `public/images/heroes/chamet-host-registration-hero.webp` | `assets/heroes/03-host-hero.webp` | 1536×1024 | /host.html | Adult creator at a streaming desk beside the Chamet logo |
| `public/images/heroes/chamet-agency-dashboard-hero.webp` | `assets/heroes/04-dashboard-hero.webp` | 1536×1024 | /chamet-agency-login/ | Woman using a laptop beside Chamet branding and livestream portrait tiles |
| `public/images/heroes/chamet-withdrawal-guide-hero.webp` | `assets/heroes/05-withdrawals-hero.webp` | 1536×1024 | /chamet-withdrawal/ | Two creators with a wallet symbol and Chamet branding |
| `public/images/heroes/chamet-host-withdrawal-hero.webp` | `assets/heroes/06-host-withdrawal-hero.webp` | 1536×1024 | /chamet-host-withdrawal/ | Host checking a smartphone beside Chamet and wallet symbols |
| `public/images/heroes/chamet-agency-withdrawal-hero.webp` | `assets/heroes/07-agency-withdrawal-hero.webp` | 1536×1024 | /chamet-agency-withdrawal/ | Woman at a laptop with Chamet, team and wallet symbols |
| `public/images/heroes/metwallet-cash-out-hero.webp` | `assets/heroes/08-metwallet-hero.webp` | 1536×1024 | /metwallet-withdrawal/ | Creator checking a phone beside Chamet, wallet and lock symbols |
| `public/images/heroes/chamet-app-download-hero.webp` | `assets/heroes/09-download-hero.webp` | 1536×1024 | /chamet-app-download/ | Adult woman holding a phone beside the Chamet logo and download arrow |
| `public/images/heroes/chamet-help-hero.webp` | `assets/heroes/10-help-hero.webp` | 1536×1024 | /chamet-help/ | Woman wearing a headset beside Chamet branding and chat symbols |
| `public/images/heroes/chametapps-about-contact-hero.webp` | `assets/heroes/11-about-contact-hero.webp` | 1536×1024 | /about/, /contact/, legal pages (OG image only) | Two women collaborating at a creator desk beside Chamet branding |
| `public/images/heroes/chamet-recruitment-banner.webp` | `assets/heroes/12-recruitment-banner.webp` | 2172×724 | / (before final CTA) | Adult livestream creators in colourful video tiles beside the Chamet logo |
| `public/images/heroes/chamet-support-banner.webp` | `assets/heroes/13-support-banner.webp` | 2172×724 | /chamet-withdrawal/, /chamet-host-withdrawal/, /chamet-agency-withdrawal/, /metwallet-withdrawal/, /chamet-help/ (near help CTA) | Creator checking a phone beside Chamet branding and chat and wallet symbols |

## Tutorial screenshots (51 instances)

Wallet screens intentionally recur between the agency withdrawal, host withdrawal and cash-out guides (as supplied). No archive images are used.

### 01-Create-Agency → `/agency.html` (6)

| # | Delivery file | Size | Alt text |
|---|---|---|---|
| 01 | `public/images/guides/create-agency/01-enter-phone-number.webp` | 901×1745 | Agency registration screen with country code and phone number field highlighted and the Send code button |
| 02 | `public/images/guides/create-agency/02-security-check.webp` | 901×1746 | On-screen security check completed with a Succeeded message above the Register button |
| 03 | `public/images/guides/create-agency/03-code-and-password.webp` | 901×1746 | Verification code, password and re-entered password fields with the Register button highlighted |
| 04 | `public/images/guides/create-agency/04-login-successful.webp` | 901×1746 | Login successful message at the top of the newly opened agency dashboard |
| 05 | `public/images/guides/create-agency/05-contact-details.webp` | 901×1746 | Contact details form with phone, WhatsApp, Telegram and Facebook fields and a Confirm button |
| 06 | `public/images/guides/create-agency/06-invitation-links.webp` | 901×1745 | Dashboard showing separate New Hosts and New Agents invitation cards with Share buttons and the commission ratio |

### 02-Create-Host-Account → `/host.html` (14)

| # | Delivery file | Size | Alt text |
|---|---|---|---|
| 01 | `public/images/guides/create-host/01-register-email.webp` | 1199×1312 | Host registration form with Gmail address, image code, email code and Register button |
| 02 | `public/images/guides/create-host/02-download-chamet.webp` | 1024×1536 | Pre-registration successful screen with a Download button for the Chamet app |
| 03 | `public/images/guides/create-host/03-log-in-with-email.webp` | 1024×1536 | Chamet app Hello screen with the Gmail field used for registration and a Next button |
| 04 | `public/images/guides/create-host/04-verify-email.webp` | 1024×1536 | Six-digit email verification code boxes with a Next button |
| 05 | `public/images/guides/create-host/05-choose-language.webp` | 1024×1536 | My Language list with English, Bengali, Hindi, Urdu and Arabic options and a Confirm button |
| 06 | `public/images/guides/create-host/06-open-face-verification.webp` | 1024×1536 | My Greeting Words screen with a link to pass face verification first |
| 07 | `public/images/guides/create-host/07-face-verification.webp` | 1024×1536 | Face verification screen asking you to position your face inside the circular frame |
| 08 | `public/images/guides/create-host/08-open-my-profile.webp` | 1033×1522 | Chamet profile tab with the My Profile menu item highlighted |
| 09 | `public/images/guides/create-host/09-profile-photo.webp` | 1024×1536 | My Profile settings list with My Avatar highlighted to add a profile photo |
| 10 | `public/images/guides/create-host/10-set-nickname.webp` | 1167×1347 | Nickname editor with an example name and the checkmark to save |
| 11 | `public/images/guides/create-host/11-second-language.webp` | 1024×1536 | Second Language list with None and other language options |
| 12 | `public/images/guides/create-host/12-select-tags.webp` | 1024×1536 | Tags screen with preference, personality and profession options to select |
| 13 | `public/images/guides/create-host/13-self-introduction.webp` | 1138×1382 | Self-introduction text box with the checkmark to save |
| 14 | `public/images/guides/create-host/14-open-live.webp` | 1024×1536 | Bottom menu opened with the plus button showing the Live option |

### 03-Agency-Withdrawal-and-MetWallet → `/chamet-agency-withdrawal/` (10)

| # | Delivery file | Size | Alt text |
|---|---|---|---|
| 01 | `public/images/guides/agency-withdrawal/01-open-my-profile.webp` | 1024×1536 | Agency dashboard menu open with My Profile highlighted |
| 02 | `public/images/guides/agency-withdrawal/02-bind-wallet.webp` | 1024×1536 | My Profile page scrolled to the MetWallet Account section with the Bind Wallet button |
| 03 | `public/images/guides/agency-withdrawal/03-go-to-metwallet.webp` | 1086×1448 | Authorization notice with a Go to MetWallet button |
| 04 | `public/images/guides/agency-withdrawal/04-choose-phone.webp` | 901×1746 | Welcome to MetWallet screen with Email and Phone sign-in options and the agreement checkbox |
| 05 | `public/images/guides/agency-withdrawal/05-enter-phone-number.webp` | 973×1616 | MetWallet phone screen with India selected, phone number field and Next button |
| 06 | `public/images/guides/agency-withdrawal/06-verification-code.webp` | 1173×1341 | MetWallet verification code field with a countdown and Next button |
| 07 | `public/images/guides/agency-withdrawal/07-authorize-chamet.webp` | 901×1746 | Chamet access request in MetWallet with Authorize and Switch Account buttons |
| 08 | `public/images/guides/agency-withdrawal/08-open-basic-level.webp` | 901×1746 | MetWallet home with a zero balance and the Basic Level option highlighted |
| 09 | `public/images/guides/agency-withdrawal/09-basic-details.webp` | 901×1746 | Basic Level form with name, gender, birthday, email verification and address fields |
| 10 | `public/images/guides/agency-withdrawal/10-metwallet-linked.webp` | 1024×1536 | Agency profile showing masked MetWallet phone and email with a Withdraw From Wallet button |

### 04-Host-Withdrawal-and-MetWallet → `/chamet-host-withdrawal/` (10)

| # | Delivery file | Size | Alt text |
|---|---|---|---|
| 01 | `public/images/guides/host-withdrawal/01-open-profile-icon.webp` | 1024×1536 | Chamet app home feed with the bottom-right profile icon highlighted |
| 02 | `public/images/guides/host-withdrawal/02-my-earning.webp` | 1024×1536 | Profile menu with My Earning highlighted next to the Withdraw label |
| 03 | `public/images/guides/host-withdrawal/03-tap-withdraw.webp` | 1024×1536 | My Earnings screen with the Withdraw button beside the withdrawable money |
| 04 | `public/images/guides/host-withdrawal/04-metwallet-condition.webp` | 1024×1536 | Withdraw screen listing conditions with Metwallet still marked incomplete |
| 05 | `public/images/guides/host-withdrawal/05-go-to-metwallet.webp` | 901×1746 | Authorization notice with a Go to MetWallet button |
| 06 | `public/images/guides/host-withdrawal/06-choose-phone.webp` | 901×1746 | Welcome to MetWallet screen with Email and Phone options and the agreement checkbox |
| 07 | `public/images/guides/host-withdrawal/07-enter-phone-number.webp` | 901×1746 | MetWallet phone screen with India selected, phone number field and Next button |
| 08 | `public/images/guides/host-withdrawal/08-verification-code.webp` | 1173×1341 | MetWallet verification code field with a countdown and Next button |
| 09 | `public/images/guides/host-withdrawal/09-authorize-chamet.webp` | 901×1746 | Chamet access request in MetWallet with Authorize and Switch Account buttons |
| 10 | `public/images/guides/host-withdrawal/10-metwallet-linked.webp` | 1024×1536 | Withdraw screen with all conditions checked, Metwallet linked and the Withdraw button |

### 05-MetWallet-Cash-Out → `/metwallet-withdrawal/` (8)

| # | Delivery file | Size | Alt text |
|---|---|---|---|
| 01 | `public/images/guides/metwallet-cash-out/01-open-metwallet.webp` | 1024×1536 | MetWallet balance screen with the Basic Level option highlighted |
| 02 | `public/images/guides/metwallet-cash-out/02-basic-details.webp` | 1024×1536 | Basic Level form with name, gender, birthday, email and address fields and Submit information |
| 03 | `public/images/guides/metwallet-cash-out/03-tap-cash-out.webp` | 1024×1536 | MetWallet home with the Cash Out button highlighted |
| 04 | `public/images/guides/metwallet-cash-out/04-bind-method.webp` | 1024×1536 | Linked Withdrawal Account list with Bind buttons for Bank Card, PayPal, EPay and USDT |
| 05 | `public/images/guides/metwallet-cash-out/05-payment-password.webp` | 1024×1536 | Cash Out screen with a six-digit payment password keypad |
| 06 | `public/images/guides/metwallet-cash-out/06-amount-and-fee.webp` | 1024×1536 | Cash Out form with linked EPay account, a $10 example amount, the fee and Submit button |
| 07 | `public/images/guides/metwallet-cash-out/07-confirm-password.webp` | 1024×1536 | Payment password prompt shown before the cash-out request is sent |
| 08 | `public/images/guides/metwallet-cash-out/08-request-completed.webp` | 1024×1536 | Completed confirmation with an example estimated arrival time and a Back button |

### 06-Dashboard-Guide → `/chamet-agency-login/` (3)

| # | Delivery file | Size | Alt text |
|---|---|---|---|
| 01 | `public/images/guides/dashboard/01-agency-login.webp` | 1024×1536 | Chamet Agent login screen with username, password, Forget My Password and Login via Phone Number |
| 02 | `public/images/guides/dashboard/02-dashboard-homepage.webp` | 1024×1536 | Agency dashboard homepage with New Hosts and New Agents invitation links and commission ratio |
| 03 | `public/images/guides/dashboard/03-dashboard-menu.webp` | 1024×1536 | Agency dashboard menu with Home, My Profile, My Invitation, reports, Diamonds Seller, Notification, Report and Help Center |

## Fonts

`src/app/fonts/InterVariable-latin.woff2` — Inter variable (latin subset) from `@fontsource-variable/inter@5.3.0`, self-hosted via `next/font/local`. Licence: SIL OFL 1.1 (`src/app/fonts/Inter-OFL-LICENSE.txt`).
