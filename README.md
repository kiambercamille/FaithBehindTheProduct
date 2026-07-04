# Faith Behind The Product

This repository contains a copy-paste Shopify **Custom liquid** section for an interactive Blessed Billionairess butterfly story block.

## Shopify usage

1. In Shopify Admin, go to **Online Store → Themes → Customize**.
2. Add a **Custom liquid** section where you want the butterfly story block to appear.
3. Copy the full contents of `custom-liquid-section.html` into that Custom liquid field.
4. Save and preview the theme.

The snippet is self-contained: it includes the markup, styles, and scoped JavaScript in one file.

## Product metafield content

The section reads story copy from the product metafield `custom.faith_story`.

- On a product page, the current product is shown first when `product.metafields.custom.faith_story` has content.
- On a collection page, up to four products with populated `custom.faith_story` metafields are used as the story cards.
- If no Shopify product/metafield context is available, the snippet falls back to the demo stories so the local preview still works.

## Local preview

`index.html` is a local demo that uses the same CSS and JavaScript with fallback story buttons. Shopify Liquid/metafield population happens in `custom-liquid-section.html`.

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
