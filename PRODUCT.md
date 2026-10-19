# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + React islands, pnpm, Node via `mise.toml`, `@astrojs/sitemap`, deploy on Vercel. Same setup as `carniceria-claudio-front`, chosen by the user.

## Users

Car and motorbike owners in Presidente Derqui, Pilar and nearby (zona norte del conurbano), who arrive from Instagram, a shared WhatsApp link or a Google search on a phone. Two situations:

- Someone with a dent, scratch or crash who wants to know whether it can be fixed and roughly what it costs.
- Someone into tuning and JDM cars (Honda Civic, VW Gol, Megane Coupé) who wants a colour change, a painted part (valve cover, wheels, fairings) or a deep polish.

Their job: see that the work is good, then send a photo of their car by WhatsApp to get a quote.

## Product Purpose

Landing page for Soichi Street, a one-person body-and-paint shop (chapa y pintura). It turns a visit into a WhatsApp message asking for a quote. Success: the visitor understands what the shop does in one screen, sees real before/after work, and taps WhatsApp with the service already named.

The page is built by Alexis Jares as a demo to offer to the shop owner; nothing is published until he approves it and the content.

## Positioning

- A painter who documents every job on reels: the evidence is the process, from crash to mirror finish, on real cars with visible plates.
- At home with the tuning scene: Civic EJ1/coupé, Granada Black Pearl, Milano Red, colour changes, painted engine parts with brand decals (Collino), not only insurance-style repairs.
- Named materials: Glasurit clearcoat, Pinturería Iberoamericana colours, BASF/Wanda/Sagola equipment.
- A recognisable identity no other shop in the area has: the Soichi Street mascot.

## Operating Context

- Contact and quotes happen on WhatsApp (11 3140-8890). The visitor usually sends photos of the damage.
- Work is shown on Instagram @soichi_street, almost all as reels. Story highlights group it as: piezas, Tuning, civic, Llantas, Herramientas, Terminados, Scania, Capot.
- Located in Presidente Derqui, Pilar. No street address is published.

## Capabilities and Constraints

- Services (from his bio): chapa y pintura; pulido y tratamientos; reparación de carrocería; soldadura en general. Also seen in posts: colour changes, painted parts (tapas de válvulas, llantas, carenados, paragolpes), pulido de ópticas, motos and jet skis.
- No backend: the quote flow composes a WhatsApp message (`wa.me`) and opens it.
- Undecided, must be confirmed with the owner before launch: opening hours, price ranges, payment methods, invoicing, exact address, domain.
- Do not show the owner's real name.

## Brand Commitments

- Name: Soichi Street. Tagline used on his own graphics: "chapa & pintura".
- The mascot (anime girl, pink hair with cat ears, black sunglasses on her head, choker) is the brand's face and must stay central. Source: `public/img/mascota.jpg` (from his posts).
- Voice: close and informal Rioplatense ("Te pasaste…", "Zarpado!!!", "Pinturita para el Yeyo"). Plain, proud of the finish, no corporate tone.

## Evidence on Hand

- Frames and covers from his Instagram posts, at 720×1280, in `../_instagram/frames/` (164 images, captions in `../_instagram/posts.json`). Selected ones are copied to `public/img/`.
- Real before/after pairs: VW Gol Trend plate OPK-897 crashed → repaired; Renault in primer → red; bumper in first coat → gloss; moto tank prepped → blue.
- Absent, must not be fabricated: customer reviews or testimonials, prices, years in business, number of cars done, guarantees, certifications.
- Image rights: the photos are his; the demo uses them for the pitch only. Publishing needs his permission.

## Product Principles

1. **The finish is the proof.** Every claim is shown on a real car he painted; no stock photos of cars.
2. **One tap to a quote.** WhatsApp is reachable from every screen, with the service pre-filled.
3. **His world, not a generic garage.** The mascot, the neon-and-black graphics and his own words carry the identity.
4. **Phone first.** Visitors come from Instagram on a phone; everything works with a thumb.
5. **Nothing invented.** Unknown facts stay marked "a confirmar" until the owner gives them.
