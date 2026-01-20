## Environment variables

This project reads public contact links from your local env file.

### Setup

Create a file named `.env.local` in the project root and add:

```bash
# Facebook page / share link
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/share/1Fs7Ko5xPX/

# WhatsApp numbers (digits only, include country code; no "+" or spaces)
NEXT_PUBLIC_WHATSAPP_NZ_NUMBER=64XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_AU_NUMBER=61XXXXXXXXX

# Optional: if you host prater-sans-web as a CSS stylesheet URL
# PRATER_SANS_CSS_URL=https://example.com/path/to/prater-sans-web.css

# Google tag (for Google Ads or GA4). For Google Ads this starts with AW-...
# Examples: AW-123456789 or G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_ID=AW-123456789
```

### Notes

- Only variables prefixed with `NEXT_PUBLIC_` are available to the browser.
- If a value is missing, the footer will hide that link automatically.

## prater-sans-web font setup

### Option A (recommended): self-host font files

Put your font files in `public/fonts/` with these names:

- `public/fonts/prater-sans-web-regular.woff2`
- `public/fonts/prater-sans-web-bold.woff2`

The site will load them via `@font-face` from `app/globals.css`.

### Option B: load via hosted CSS URL

If you already have a hosted stylesheet that defines `@font-face` for `prater-sans-web`,
set `PRATER_SANS_CSS_URL` in `.env.local` and we’ll load it in `app/layout.tsx`.


