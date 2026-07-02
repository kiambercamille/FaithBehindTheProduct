# Faith Behind The Product

A lightweight static prototype for an interactive butterfly-shaped book. The wings close and reopen like a flap; when the motion completes, the story advances to the next page.

## Run locally

This project is plain HTML, CSS, and JavaScript, so you only need a small static file server.

### Option 1: Python

On macOS/Linux, or on Windows when the Python launcher is installed, run one of these from the repo root:

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

If Git Bash on Windows says `Python was not found`, install Python from <https://www.python.org/downloads/windows/> and make sure **Add python.exe to PATH** is selected, or use Option 2 below if you already have Node.js.

### Option 2: Node.js

If you have Node.js installed, run this from the repo root:

```bash
npx --yes serve . -l 4173
```

Then open <http://127.0.0.1:4173/> in a browser.

### Option 3: Open the file directly

You can also double-click `index.html` or open it directly in your browser. The local server options above are preferred because they match how static sites are normally previewed.
