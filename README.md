# Data Detective
Static interactive lesson for approximately age 15 about graph framing, sampling bias, correlation and cautious conclusions.

## Run
```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```
No install/build step or third-party runtime dependency is required. Tests: `node tests/logic.test.mjs`.

## Architecture
- `data.mjs`: bundled original synthetic datasets and population constructor.
- `logic.mjs`: pure statistics, documented sampling procedures, correlation and axis-position logic.
- `app.mjs`: interaction state, charts/tables, feedback and reset.
- `index.html` / `styles.css`: semantic controls and responsive presentation.

Target: current Chrome/Chromium, Firefox and Safari-class browsers with ES modules. No learner data is persisted. Reload starts fresh. No accounts, analytics, network APIs, uploads or remote scoring are used.
