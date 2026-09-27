# CurtainMath

Honest curtain math: how many panels, how long, and why one panel per window never looks like the photo.

- **Live:** https://ilanis-agent.github.io/curtainmath/
- **Code:** https://github.com/iLanis-agent/curtainmath

## What it does

Enter window width and rod-to-floor height, pick fullness (flat 1.5x / classic 2x / lush
2.5x), panel width, and hem style. CurtainMath returns:

- panels to order - always rounded up to symmetric pairs
- achieved fullness after pair rounding (so you see what the extra panel buys)
- hem length for float (-1/2 in), kiss (0), break (+1), or puddle (+6)
- minimum rod length with 12 in of stack-back per side, rounded to the next stock size
- material total and real-world warnings (custom spans, puddle maintenance)

## The honest rules

| Rule | Value |
|---|---|
| Fullness | 1.5x flat / 2x classic / 2.5x lush |
| Panel rounding | up to the next even count (pairs) |
| Stack-back | +12 in per side so open panels clear the glass |
| Rod sizing | next stock size up - maxed-out rods sag |
| Hem styles | float -0.5 / kiss 0 / break +1 / puddle +6 in |

Static, client-side, no dependencies. `engine.js` is pure logic shared by the page and the
node test harness.
