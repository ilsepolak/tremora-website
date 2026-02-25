# Tremora Website

Website voor Tremora - Praktijk voor TRE & Coaching in Drenthe.

## 🌐 Website live zetten met GitHub Pages

### Stap 1: Ga naar Settings
1. Ga naar je GitHub repository: https://github.com/ilsepolak/tremora-website
2. Klik op **Settings** (rechtsboven in het menu)

### Stap 2: Activeer GitHub Pages
1. Scroll naar beneden in het linkermenu en klik op **Pages**
2. Bij **Source** kies:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Klik op **Save**

### Stap 3: Wacht even
- GitHub heeft een paar minuten nodig om je website te bouwen
- Je krijgt een melding met de URL: `https://ilsepolak.github.io/tremora-website/`

## 📁 Projectstructuur

```
tremora-website/
├── index.html          # Homepagina
├── wat-is-tre.html    # Wat is TRE pagina
├── over-els.html      # Over Els pagina
├── aanbod.html        # Aanbod pagina
├── contact.html       # Contact pagina
├── css/
│   └── style.css      # Alle stijlen
├── js/
│   └── main.js        # JavaScript (menu, FAQ)
└── images/
    └── logo.svg       # Logo
```

## 🎨 Huisstijl

- **Primaire kleur**: Blush (#D09080)
- **Secundaire kleur**: Taupe (#B8A99A)
- **Fonts**: Cormorant Garamond (koppen) & Outfit (body)

## 📝 Nog te doen

- [ ] Contactgegevens invullen (e-mail en telefoonnummer)
- [ ] Echte afbeeldingen toevoegen (vervang placeholders)
- [ ] Prijzen/tijden controleren en aanpassen indien nodig

## 🚀 Lokaal testen

```bash
# Start een lokale server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 📄 Licentie

© 2026 Tremora
