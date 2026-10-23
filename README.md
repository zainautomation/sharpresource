# Sharp Resources

Website for Sharp Resources, a recruitment to recruitment search firm, and its division Sharp Strategy People.

Built with Next.js 16 (App Router), Tailwind CSS v4 and Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` home: hero, story, approach, focus, referral scheme, founders, contact and map
- `/sharp-strategy-people` strategy and management consulting division

## Editing content

Contact details, search steps, markets, candidate focus and referral tiers live in `src/lib/content.ts`. Each home page section is its own component in `src/components/`. Images are in `src/assets/`.

## Enquiry forms

The contact and referral forms post to `/api/enquiry`. Without configuration, submissions are logged on the server. To deliver them by email through [Resend](https://resend.com), set:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (required to send) |
| `ENQUIRY_TO` | Recipient, defaults to gareth.sharp@sharpresources.co.uk |
| `ENQUIRY_FROM` | Sender, must be on a domain verified in Resend |
