# Faith Behind The Product

This repository contains a copy-paste Shopify **Custom liquid** section for an interactive Blessed Billionairess butterfly-book story block.

## Shopify usage

1. In Shopify Admin, go to **Online Store → Themes → Customize**.
2. Add a **Custom liquid** section where you want the butterfly-book story block to appear.
3. Copy the full contents of `custom-liquid-section.html` into that Custom liquid field.
4. Save and preview the theme.

The snippet is self-contained: it includes the markup, styles, and scoped JavaScript in one file.

## Local preview

You can preview the same snippet locally because `index.html` contains the Custom liquid-compatible section.

### Python

Run one of these from the repo root:

```bash
python -m http.server 4173
```

```bash
py -m http.server 4173
```

```bash
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/> in a browser.

If Git Bash on Windows says `Python was not found`, install Python from <https://www.python.org/downloads/windows/> and make sure **Add python.exe to PATH** is selected, or use the Node.js option below if you already have Node.js.

### Node.js

```bash
npx --yes serve . -l 4173
```

Then open <http://127.0.0.1:4173/> in a browser.

### Direct browser preview

You can also double-click `index.html` or open it directly in your browser.
