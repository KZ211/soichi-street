---
name: Soichi Street
description: A body-and-paint shop's own neon sign, bent as one continuous tube through the page.
colors:
  wall: "#0b0a0e"
  wall-2: "#15121a"
  wall-3: "#201a26"
  steel: "#4a4252"
  ink: "#f6eef3"
  muted: "#c3b6c0"
  neon: "#ff3fa4"
  neon-hover: "#ff5cb3"
  neon-core: "#ffd1ea"
  neon-deep: "#b8166f"
  electrode: "#ff4b3b"
  glass: "rgb(221 230 242 / 0.22)"
  blackout-paint: "#2a2230"
typography:
  sign:
    fontFamily: "Sacramento, cursive"
    fontSize: "210px"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Tilt Neon, Barlow, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.4vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Tilt Neon, Barlow, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  tube: "999px"
  panel: "22px"
  panel-inset: "16px"
  field: "14px"
  tube-end: "2px"
spacing:
  margin: "clamp(1rem, 5vw, 5rem)"
  section: "clamp(5rem, 10vw, 9rem)"
  gutter: "1rem"
  stack: "2rem"
  container: "1600px"
components:
  button-primary:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.wall}"
    typography: "{typography.body}"
    rounded: "{rounded.tube}"
    padding: "0.9rem 1.9rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.neon-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.tube}"
    padding: "0.9rem 1.9rem"
    height: "3.5rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tube}"
    padding: "0 1.2rem"
    height: "2.75rem"
  chip-selected:
    backgroundColor: "{colors.neon}"
    textColor: "{colors.wall}"
  input:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.8rem 1rem"
    height: "3.25rem"
  panel:
    backgroundColor: "{colors.wall-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 3vw, 3rem)"
  nav-bar:
    backgroundColor: "rgb(11 10 14 / 0.86)"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0.75rem clamp(1rem, 5vw, 5rem)"
---

# Design System: Soichi Street

## Overview

**Creative North Star: "The Shop Sign, Bent as One Tube"**

The whole site is the workshop's own neon sign hung on a room-black wall. One pink gas discharge, held inside pale glass, runs from the script name through the service list, the process stages, the quote builder's car outline and back out as the footer sign. Everything that is not tube is wall: near-black planes in three close tones, cool steel for mounts and unlit glass, and plain light text for reading.

Light is a material here, not decoration. A thing glows because it is a tube, and a tube is lit because it is on: the selected service, the open process stage, the marked car panel, the switch that shows the finished job. Unlit tubes stay steel or clear glass, so the page reads as a circuit that the visitor switches on piece by piece. Density is low and sectional; each band of the page carries one device and one heading.

Photos of real jobs sit as lit panels with the tube's rounded corners, never framed with borders or captions inside the image. The mascot is the mark: a small round face ringed in neon at the top-left and in the quote section, and the full figure beside the footer sign.

**Key Characteristics:**
- Room-black wall, one pink discharge with a pale glass core, electrode red only at tube ends.
- Glow appears on tube elements and nowhere else; lit means on or selected.
- Three faces with three jobs: script for the sign, Tilt Neon for headings, Barlow for reading.
- Pill tubes for every control, 22px rounded panels for media and containers.
- Ignition, not decoration: entrances rise once, the sign bends in and flickers on.

## Colors

A dark, near-monochrome wall lit by a single hot-pink gas, with red only where the electrodes sit.

### Primary
- **Discharge Pink** (`neon`): the gas. Filled primary buttons, selected chips, the service-run tube, lit bullets, the open stage tube, the before/after switch knob, ring outlines. Text on it is always the wall color.
- **Glass Core** (`neon-core`): the pale white-pink centre of a lit tube. Sign lettering fill, lit-tube highlight, accent heading words, footer column heads, link and nav hover, focus outline.
- **Deep Discharge** (`neon-deep`): scrollbar thumb only; a reserve tone, not a surface color.
- **Discharge Hover** (`neon-hover`): the primary button's hover fill.

### Secondary
- **Electrode Red** (`electrode`): the metal caps at the two real ends of a tube. Used on the sign's S and t stroke ends and as the small bars flanking every primary and ghost button. Never a fill, never text.

### Neutral
- **Room Wall** (`wall`): page background; text color on pink fills; input background.
- **Wall Shade** (`wall-2`): alternate section band (the quote section), media placeholders, closed process stages.
- **Wall Recess** (`wall-3`): raised panels (quote ticket and form), every other process stage.
- **Bracket Steel** (`steel`): unlit tube state, hairline mounts under the service run, chip and input rings at rest, glass car outline.
- **Lamp Ink** (`ink`): primary text.
- **Dim Ink** (`muted`): secondary text, nav links at rest, unselected service names, captions' detail line.
- **Clear Glass** (`glass`): the unlit tube body behind the sign lettering; the same cool rgb(221 230 242) at 0.04-0.6 alpha marks unlit car panels and stage tubes.
- **Blackout Paint** (`blackout-paint`): the painted-over tube run that joins the two words of the sign.

### Named Rules
**The Lit Means On Rule.** Glow (neon fill plus halo) marks an element that is a tube and is switched on: selected, open, marked, or the sign itself. A tube at rest is steel or clear glass. Never glow a card, heading or photo.

**The Electrode Rule.** Electrode red appears only as small caps at the two ends of a tube run. If there is no tube end, there is no red.

## Typography

**Sign Font:** Sacramento (cursive fallback)
**Headline Font:** Tilt Neon (Barlow, sans-serif fallback)
**Body Font:** Barlow, weights 400/600/700 (system-ui fallback)

**Character:** The script is the bent glass of the sign; Tilt Neon is the shop's single-stroke lettering for headings; Barlow is the workmanlike reading voice.

### Hierarchy
- **Sign** (Sacramento 400, rendered in SVG and scaled to the container, about 11vw wide on desktop): the business name only, in the hero, nav mark (2rem) and footer sign. Never used for any other word.
- **Headline** (Tilt Neon 400, `--step-h2`, line-height 1, -0.01em, balanced): one per section, short, often split so the second line carries the accent in glass core or the first in dim ink.
- **Title** (Tilt Neon 400, `--step-h3`): the hero tagline, the service list items, the open stage name, the ticket heading.
- **Body** (Barlow 400, 1.125rem, 1.55): reading copy, capped at 36-52ch.
- **Label** (Barlow 600, 0.9375rem): nav links, chips, captions, field labels, the switch state. Sentence case, no tracking.

### Named Rules
**The One Name Rule.** The script face writes "Soichi Street" and nothing else.

**The Sentence Case Rule.** No uppercase, no letter-spacing on labels; hierarchy comes from face and size.

## Layout

Full-bleed bands on the wall, content held in a centred container (max 1600px) with fluid side margins (`spacing.margin`) and fluid vertical section padding (`spacing.section`). The hero is a centred column filling the first viewport; later sections use asymmetric two-column splits (list beside ring, heading beside intro on a 12-column grid) and a 4-column mosaic of job photos with mixed 4:5 and 3:2 tiles and the heading occupying a cell. Gutters run 1rem in grids, 2rem between stacked blocks; headings sit 1.5-4rem above their devices.

The nav is a fixed bar; section anchors use a 5rem scroll padding. Breakpoints are component-local: 900px (services, jobs and process collapse to one column; process turns into a vertical accordion), 860px (nav links hide, only the mark and WhatsApp pill remain; quote ticket stacks), 640px (sign switches to the two-line layout; hero actions stack full-width), 420px (WhatsApp pill becomes icon-only).

## Elevation & Depth

Flat wall, lit tubes. There are no drop shadows for lift. Depth is tonal (wall, wall shade, wall recess) and luminous: the only box-shadows in the system are neon halos and inset rings that draw a tube's edge.

### Shadow Vocabulary
- **Glow** (`0 0 2px neon-core, 0 0 10px neon, 0 0 28px rgb(255 63 164 / 0.55)`): a fully lit tube.
- **Soft glow** (`0 0 8px rgb(255 63 164 / 0.45)`): a short lit tube: service run, active bullet, switch knob, focused input, nav face ring.
- **Discharge filter** (`drop-shadow(0 0 2px neon) drop-shadow(0 0 12px rgb(255 63 164 / 0.75))`): SVG tube lettering and marked car panels.
- **Tube ring** (`0 0 0 2px <color> inset`): the drawn edge of chips and fields; steel at rest, neon on hover/focus, glass core when selected.

### Named Rules
**The No Lift Rule.** Nothing floats. A surface separates by tone; a tube separates by light.

## Shapes

Two corner languages. Controls are tubes: fully rounded pills (`rounded.tube`) for buttons, chips, the nav WhatsApp pill and the before/after switch. Containers and media are lit panels at 22px (`rounded.panel`), with media nested inside a panel stepping down to 16px; form fields use 14px. Short tube segments (bullets, the service run, stage tubes) are 3-4px bars with 2px ends. Portraits and the services ring are circles. No hard borders: edges are drawn as inset rings or by tone.

## Components

### Buttons
Short lit tubes with their electrodes.
- **Shape:** full pill (999px), min-height 3.5rem.
- **Primary:** discharge pink fill, wall-colored Barlow 700 text, leading icon, a 10x6px electrode-red cap on each end (pseudo-elements set 8px outside the pill).
- **Hover / Focus / Active:** hover lightens to `neon-hover`; press scales to 0.97 (140ms); focus is a 2px glass-core outline offset 3px.
- **Ghost:** transparent with a 2px pink inset outline and ink text, same electrodes; hover tints pink at 14%.
- **Nav pill:** compact variant (2.75rem, label size, no electrodes).

### Chips
- **Style:** pill, 2.75rem tall, label type, steel inset ring at rest, pink ring on hover.
- **State:** selected fills pink with wall text and a glass-core inset ring; native input visually hidden, focus ring drawn on the label.

### Cards / Containers
- **Corner Style:** 22px.
- **Background:** wall recess on a wall-shade band.
- **Shadow Strategy:** none (see No Lift).
- **Internal Padding:** clamp(1.5rem, 3vw, 3rem).

### Inputs / Fields
- **Style:** wall background, 14px corners, steel 2px inset ring, Barlow 1rem, pink caret, label above in Barlow 600.
- **Focus:** ring turns pink and adds soft glow; no outline.

### Navigation
Fixed bar on 86% wall with a 10px backdrop blur. Left: neon-ringed mascot face plus the script name in glass core. Right: label-size links in dim ink, glass core on hover, then the WhatsApp pill. Links hide under 860px.

### Neon Sign (signature)
The business name as an SVG tube: clear-glass lettering behind lit glass-core lettering with the discharge filter, a blackout-painted run joining the words, electrode caps measured onto the first and last stroke ends. In the hero it ignites: glass bends in left to right (1.2s), electrodes switch on, then the gas flickers on in steps. Two layouts: one line, and two stacked lines under 640px. The footer reuses it already lit, without the ignition sequence.

### Tube Selectors (signature)
Lists and toggles whose state is a tube switching on: the service list (steel bar bullet grows and lights when selected, photo swaps inside a glowing ring), the process strip (stages share one panel; the open stage's top tube lights and expands with a 450ms in-out ease), the before/after switch (pink knob goes steel when showing "before"), and the neon car (unlit glass panels fill and glow when marked).

### Motion
Entrances rise 24px and fade over 800ms on an expo-out curve, staggered 80ms, only after JS and only without reduced-motion; content is visible without JS. Hover 180ms, UI 240ms, press 140ms.

## Do's and Don'ts

### Do:
- **Do** treat every new interactive state as a tube switching on: steel or clear glass at rest, pink plus soft glow when active.
- **Do** cap tube runs with electrode red at their real ends only.
- **Do** use pills for controls and 22px panels for media and containers.
- **Do** put text on pink fills in the wall color, and keep reading text in Barlow at 1.125rem.
- **Do** separate surfaces by wall tone (wall, wall shade, wall recess).
- **Do** keep every reveal and the ignition behind `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** glow anything that is not a tube: no halos on photos, panels, headings or body text.
- **Don't** add a second accent hue; the only other color is electrode red, and only at tube ends.
- **Don't** use drop shadows for elevation.
- **Don't** set any word other than the business name in the script face.
- **Don't** use uppercase labels, tracked labels, or small labels above headings.
