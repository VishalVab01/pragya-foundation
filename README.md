# Pragya Foundation

Multi-page React + TypeScript website for Pragya Foundation, built with Vite and inspired by the Altruist nonprofit template. Each original site section has its own route, including About Us, projects, impact, news, gallery, volunteering, donations, and contact.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The site uses foundation-published copy, reported project figures, logo, photos, print coverage, and videos. Volunteer enquiries from both forms are sent to the configured Google Sheet; video clips are streamed from the foundation website.

## Google Sheets volunteer enquiries

1. The client creates or chooses a Google Sheet and opens **Extensions → Apps Script**.
2. Paste the contents of `google-apps-script/Code.gs` into the project and save it. The script creates a `Volunteer enquiries` tab with headers when the first submission arrives.
3. In Apps Script, choose **Deploy → New deployment → Web app**, set **Execute as** to the sheet owner, and set access to **Anyone**. Deploy and authorize the script when prompted.
4. Set `VITE_GOOGLE_SHEETS_WEB_APP_URL` to the deployment's web app URL (`https://script.google.com/macros/s/.../exec`) in the site's hosting environment, then redeploy the site. For local development, put it in `.env.local` (that file should not be committed).

The client should grant the account that owns the Apps Script **Editor** access to the destination spreadsheet. Public visitors do not need Google accounts or access to the sheet. The deployment URL is public-facing; the script only accepts form submissions and writes the defined fields.
