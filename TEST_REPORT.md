# Test report

## Acceptance mapping
| Example | Evidence |
|---|---|
| Axis changes rendering, not values/statistics | Both charts read `GRAPH_DATA`; domain tests assert statistics and axis transformation separately. Browser walkthrough changes the axis and verifies the table/stat text remain identical. |
| Charts have labels/units/table/reset | Graph/scatter labels and tables are visible; header reset restores activity defaults. |
| Biased/less-biased methods match definitions | `biasedSample` filters North only; `stratifiedSample` spans the alternating full population. Tests verify compositions. |
| Repeated sampling reproducible | Systematic method is deterministic for fixed population/offset; test compares repeated output exactly. |
| Association does not establish causation | Correlation feedback states this explicitly and supplies temperature as a third-variable explanation. |
| Final asks claim + observation + limitation | Three labelled selectors plus review feedback are implemented. |
| Responsive/accessibility | Native controls, keyboard focus, CSS charts plus equivalent tables; evidence at 360/768/1280 CSS px. |

Automated test command: `node tests/logic.test.mjs`. Actual Chromium/Playwright results are recorded in `evidence/browser-check.txt`: the 360px journey verified unchanged graph data/statistics under axis changes, n=20 versus n=80 North-only bias, a balanced n=40 stratified sample, correlation stratification, causal/cautious feedback, the final claim-observation-limitation check, and completion. Screenshots were captured at 360/768/1280 CSS px with no horizontal overflow; final console check had 0 errors and 0 warnings. No testing with children was conducted. Reduced-motion CSS is present; OS-level emulation was not run.
