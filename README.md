# Tremora Website

Website voor Tremora - Praktijk voor TRE & Coaching in Drenthe.

## 🌐 Website live zetten

### Huidige status
De site staat **al live** op GitHub Pages:
- **URL:** [https://ilsepolak.github.io/tremora-website/](https://ilsepolak.github.io/tremora-website/index.html)  
- Bij elke push naar de branch `main` wordt de site automatisch opnieuw gedeployed.

---

### Stappen om de site op www.tremora.nl te zetten

#### Stap 1: Custom domain in GitHub instellen
1. Ga naar je GitHub repository: https://github.com/ilsepolak/tremora-website
2. Klik op **Settings** → in het linkermenu op **Pages**
3. Bij **Custom domain** vul je in: **`www.tremora.nl`**
4. Klik op **Save**

#### Stap 2: DNS instellen bij je domeinregistrar
1. Log in bij de partij waar je **tremora.nl** hebt geregistreerd (bijv. TransIP, Hostnet, One.com)
2. Ga naar de **DNS-instellingen** voor het domein tremora.nl
3. Voeg een **CNAME-record** toe:
   - **Naam/Host:** `www`
   - **Waarde:** `ilsepolak.github.io`

#### Stap 3: Wachten en HTTPS aanzetten
- DNS kan 5 minuten tot 48 uur duren (vaak binnen een half uur actief)
- In GitHub bij **Pages** zie je of het domein nog gecontroleerd wordt; als het groen is, is het goed
- Zet daarna **Enforce HTTPS** aan (zelfde pagina) — GitHub regelt dan het SSL-certificaat voor www.tremora.nl

---

### GitHub Pages opnieuw inschakelen (als dat ooit nodig is)
1. **Settings** → **Pages**
2. Bij **Source**: **Branch** `main`, **Folder** `/ (root)` → **Save**
3. De workflow deployt automatisch bij elke push naar `main`

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
