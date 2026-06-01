# portfolio

My first website - basically a CV page, but nicer than a Word doc. I built it while learning frontend (HTML, CSS, a bit of JS).

**Live:** https://rudeknadja.github.io/portfolio/

## What's on here

- **Home** (`index.html`) - short intro, contact buttons, image carousel
- **Novi Sad** (`html/myCity.html`) - the city I live in
- **Party design** (`html/partyDesign.html`) - one of my projects (design for a celebration)
- **Contact** (`html/contact.html`) - a form (doesn't actually send email yet, it's just the layout)

The carousel on the home page reacts to your mouse - it scrolls left or right depending where you hover. That logic lives in `java/main.js` (yeah, the folder is called `java`. I know.)

## Folder layout

```
portfolio/
├── index.html          ← home page (GitHub Pages needs it here)
├── css/
├── html/               ← other pages
├── images/
├── java/
└── icon.ico            ← tab icon
```

## Run it locally

No `npm install`, no build step. Open `index.html` in your browser, or use Live Server in VS Code if that's easier.
