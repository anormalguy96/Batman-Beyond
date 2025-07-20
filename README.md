## Batman Beyond

A lightweight, multi‑season HTML/JS/CSS project inspired by Batman Beyond, featuring an interactive rooftop‑jumping canvas, episode search, OST playback and unified text display.

[Description](#Description)  
[Features](#Features)  
[File Structure](#File-Structure)  
[Contributing](#Contributing)  
[License](#License)  

---

## Description

This repository, **Batman‑Beyond**, organises all three seasons of Batman Beyond into plain HTML, JavaScript and CSS files. The homepage (`index.html`) employs an HTML5 `<canvas>` element to render our hero jumping from rooftop to rooftop. Each refresh randomises the starting rooftop, so every visit feels new.

In order to visualise the website directly from your browser, you can click the [link](https://batmanbeyond.netlify.app) and open the webpage.


## Features
**Seasonal Content**  
- Season 1, Season 2, Season 3: each with its own set of HTML files  

**Canvas Animation**  
- Batman Beyond jumps between randomly placed rooftops on page load  

**Episode Search**  
- Instant‑search bar to filter episodes by title or number  

**OST Playback**  
- Click the Batman logo to play the original soundtrack (OST)  

**Episode Navigation**  
- Each episode entry links to its individual HTML page  

**Unified Textbox**  
- All descriptive and dynamic text appears within a single textbox component  

---

## File Structure

```
batman-beyond/
├── index.html           # Main homepage with canvas and unified textbox
├── season-1/            # HTML files for Season 1 episodes
│   ├── ep1.html
│   └── …
├── season-2/
│   ├── ep1.html
│   └── …
├── season-3/
│   ├── ep1.html
│   └── …
├── js/
│   ├── canvas.js        # Rooftop jump logic
│   ├── search.js        # Episode search logic
│   └── player.js        # OST playback controls
├── css/
│   ├── styles.css       # Global styles
│   └── canvas.css       # Canvas‑specific styles
├── assets/
│   ├── audio/           # OST files
│   └── images/          # Logos, backgrounds
├── .gitignore
└── LICENSE
```

---

## Contributing

1. Fork this repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m "Add YourFeature"`).
4. Push to your branch (`git push origin feature/YourFeature`).
5. Open a Pull Request for review.

Please ensure all new code utilises clear naming conventions and is well‑commented.

---

## License

This project is licensed under the [MIT License](LICENSE).
