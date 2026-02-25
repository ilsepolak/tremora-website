# Tremora — Website Specificatie

> Dit document bevat de volledige specificatie voor de Tremora website.
> Gebruik dit als referentie bij het bouwen in Cursor.
> Techniek: Plain HTML / CSS / JS — statische site, 5 pagina's.

---

## Globale specificaties

### Huisstijl

**Kleuren:**
```css
/* Primary — Blush */
--blush: #D09080;
--blush-deep: #BE7E68;
--blush-soft: #E4C4B8;
--blush-light: #F0DED6;
--blush-whisper: #F8F0EC;

/* Secondary — Taupe */
--taupe: #B8A99A;
--taupe-dark: #8C7B6B;
--taupe-deep: #6B5D55;

/* Neutrals */
--cream: #F7F3EF;
--warm-white: #FDFBF9;
--text-dark: #3D2E27;
--text-medium: #6B5D55;
--text-light: #9B8E86;
--border-light: #E8E0D8;
--brand-dark: #3D3029;
```

**Typografie:**
- Koppen: `Cormorant Garamond` (Google Fonts) — weight 300, 400, 500
- Body: `Outfit` (Google Fonts) — weight 300, 400, 500
- Koppen altijd in `--text-dark`, body in `--text-medium`

**Knoppen:**
- Primair: `--blush` achtergrond, wit tekst, border-radius: 100px, hover: `--blush-deep`
- Secondair: transparant, `--taupe-dark` tekst, 1.5px border `--taupe`, hover: `--cream` achtergrond

**Algemene stijl:**
- Ronde, zachte vormen (border-radius: 12-16px op kaarten)
- Veel witruimte
- Subtiele box-shadows: `0 2px 16px rgba(61, 46, 39, 0.05)`
- Achtergrond: `--warm-white` of `--cream`
- Secties afwisselen tussen `--warm-white` en `--blush-whisper` achtergrond
- Geen harde lijnen, gebruik kleurverschil en witruimte als scheiding
- Afbeeldingen: warme tinten, natuurlijke belichting, zachte sfeer

**Tagline (terugkerend):**
*Je lichaam kent de weg van spanning naar ontspanning*

### Navigatie (alle pagina's)

```
[Logo: beeldmerk + "Tremora"]     Home | Wat is TRE | Over Els | Aanbod | Contact     [CTA: Maak een afspraak]
```

- Sticky header met lichte achtergrond (`--warm-white` met subtiele schaduw bij scroll)
- Logo links: beeldmerk (SVG) + "Tremora" in Cormorant Garamond
- Navigatie rechts
- CTA-knop "Maak een afspraak" in blush (linkt naar contactpagina)
- Mobiel: hamburger menu

### Footer (alle pagina's)

```
[Beeldmerk]
Tremora
Praktijk voor TRE & Coaching

Je lichaam kent de weg van spanning naar ontspanning

Havelte & Ruinerwold, Drenthe
[e-mailadres]  |  [telefoonnummer]

© 2026 Tremora
```

- Achtergrond: `--brand-dark`
- Tekst in `--cream` en `--blush-soft`
- Tagline in `--blush` italic

---

## Pagina 1: Home

### Doel
Eerste indruk. Direct duidelijk maken wat Tremora is, vertrouwen wekken, en bezoekers verder de site in leiden of direct contact laten opnemen.

### Structuur & Content

#### Sectie 1: Hero
**Achtergrond:** Groot sfeerbeeld (volle breedte) met warme overlay, of `--blush-light` gradient
**Layout:** Gecentreerd

```
[Beeldmerk — groot]

Tremora
Praktijk voor TRE & Coaching

Je lichaam kent de weg van spanning naar ontspanning

[Knop: Ontdek TRE]  [Knop: Maak een afspraak]
```

**Tekst:**
- Titel: "Tremora" in Cormorant Garamond, groot (4-5rem)
- Ondertitel: "Praktijk voor TRE & Coaching" in Outfit, licht
- Tagline in italic Cormorant Garamond
- Twee knoppen: "Ontdek TRE" (secondair → linkt naar Wat is TRE) en "Maak een afspraak" (primair → linkt naar Contact)

**Design-notes:**
- Hero neemt minimaal 80vh in beslag
- Subtiele fade-in animatie op de elementen
- Eventueel een zachte parallax op het sfeerbeeld

---

#### Sectie 2: Introductie — Wat is TRE?
**Achtergrond:** `--warm-white`
**Layout:** Tekst links, afbeelding rechts (2 kolommen op desktop, gestapeld op mobiel)

**Kop:** Leer je lichaam weer vertrouwen

**Tekst:**
> Draag je spanning met je mee die je maar niet kwijtraakt? Slaap je slecht, ben je vaak moe, of merk je dat stress zich vastzet in je lijf?
>
> TRE (Tension & Trauma Releasing Exercises) is een eenvoudige, lichaamsgereichte methode die je helpt om diepe spanning los te laten. Door middel van zachte oefeningen activeer je het natuurlijke trilmechanisme van je lichaam — een proces dat zorgt voor ontspanning en herstel.
>
> Het mooie aan TRE? Als je het eenmaal geleerd hebt, kun je het de rest van je leven zelfstandig toepassen. Je krijgt een tool in handen waarmee je zelf invloed hebt op hoe je met stress en spanning omgaat.

**Knop:** Meer over TRE →

**Afbeelding:** Rustig, warm sfeerbeeld. Denk aan iemand in een ontspannen houding, natuur, of een rustige ruimte.

---

#### Sectie 3: Voor wie?
**Achtergrond:** `--blush-whisper`
**Layout:** 3 kaarten naast elkaar

**Kop:** Voor wie is TRE?

**Kaart 1:**
**Titel:** Stress & spanning
**Tekst:** Je merkt dat dagelijkse stress zich ophoopt in je lichaam. Je nek, schouders of rug zijn vaak gespannen en je komt maar moeilijk tot rust.

**Kaart 2:**
**Titel:** Onrust & slaapproblemen
**Tekst:** Je hoofd staat niet stil en je lichaam komt 's nachts niet tot rust. Je zou willen dat je een manier had om echt te ontspannen.

**Kaart 3:**
**Titel:** Veerkracht versterken
**Tekst:** Je functioneert prima, maar wilt beter voor jezelf zorgen. Je zoekt een manier om bewuster om te gaan met spanning en je veerkracht te vergroten.

**Design-notes:**
- Kaarten met witte achtergrond, subtiele schaduw, border-radius 16px
- Eventueel een subtiel icoon of illustratie boven elke kaart (in blush tint)
- Onder de kaarten een gecentreerde knop: "Bekijk het aanbod →"

---

#### Sectie 4: Over Els (korte introductie)
**Achtergrond:** `--warm-white`
**Layout:** Afbeelding links (rond of zacht afgerond), tekst rechts

**Kop:** Maak kennis met Els

**Tekst:**
> Ik ben Els Wierink, TRE-provider in Drenthe. Na een loopbaan in de zorg en jarenlange ervaring als begeleider, heb ik in TRE een krachtige methode gevonden die ik graag met je deel.
>
> Mijn drijfveer? Mensen een tool in handen geven waarmee ze zelf invloed hebben op hun welzijn. Zodat je niet afhankelijk bent van anderen, maar bewust en zelfstandig keuzes kunt maken voor je eigen gezondheid.

**Knop:** Meer over mij →

**Afbeelding:** Portretfoto van Els — warm, natuurlijk, toegankelijk

---

#### Sectie 5: CTA / Afsluitend blok
**Achtergrond:** `--blush-light` gradient
**Layout:** Gecentreerd

**Kop:** Benieuwd wat TRE voor jou kan betekenen?

**Tekst:**
> Neem gerust contact op voor een vrijblijvend gesprek of kijk bij het aanbod welke sessievorm bij je past.

**Knoppen:** "Neem contact op" (primair) en "Bekijk het aanbod" (secondair)

---

## Pagina 2: Wat is TRE

### Doel
Uitleggen wat TRE is op een heldere, toegankelijke manier. Wegnemen van drempels en vragen. Belangrijkste SEO-pagina (zoektermen: "TRE", "TRE oefeningen", "spanning loslaten lichaam", "TRE Drenthe").

### Structuur & Content

#### Sectie 1: Page Header
**Achtergrond:** `--blush-whisper`

**Kop:** Wat is TRE?
**Subtitel:** Tension & Trauma Releasing Exercises

---

#### Sectie 2: Uitleg TRE
**Achtergrond:** `--warm-white`
**Layout:** Tekst met eventueel een sfeerbeeld

**Kop:** Je lichaam weet hoe het moet

**Tekst:**
> TRE staat voor Tension & Trauma Releasing Exercises en is ontwikkeld door Dr. David Berceli. Het is een eenvoudige, lichaamsgereichte methode die gebruikmaakt van het natuurlijke trilmechanisme van je lichaam.
>
> Iedereen kent het wel: trillen van de kou, bibberen voor een presentatie, of schudden na een schrik. Dit trillen is geen zwakte — het is de manier waarop je lichaam spanning loslaat en terugkeert naar een ontspannen staat.
>
> Bij TRE leer je dit mechanisme bewust op te roepen door middel van een reeks zachte oefeningen. Deze oefeningen activeren een natuurlijke trilling in je lichaam die helpt om opgeslagen spanning en stress los te laten — van dagelijkse stress tot diepe, langdurige spanning.

---

#### Sectie 3: Hoe werkt het?
**Achtergrond:** `--blush-whisper`
**Layout:** Stappen (genummerd, verticaal)

**Kop:** Hoe werkt een TRE-sessie?

**Stap 1: Zachte oefeningen**
Je begint met een reeks eenvoudige oefeningen die specifieke spiergroepen verwarmen en licht vermoeien. De oefeningen zijn voor iedereen te doen, ongeacht leeftijd of conditie.

**Stap 2: Het trillen begint**
Vanuit een rustpositie op de grond laat je het natuurlijke trilmechanisme van je lichaam op gang komen. Dit trillen ontstaat vanzelf — je hoeft er niets voor te doen.

**Stap 3: Ontspanning en rust**
De trillingen helpen je lichaam om spanning los te laten. Na afloop voel je je vaak diep ontspannen, lichter en rustiger. Je sluit de sessie af in stilte.

**Stap 4: Zelfstandig verder**
Na een paar begeleide sessies kun je TRE zelfstandig thuis beoefenen. Je hebt dan een tool in handen die je de rest van je leven kunt gebruiken.

**Design-notes:**
- Nummers groot in `--blush` (Cormorant Garamond, groot)
- Elke stap als een kaart of blok met subtiele lijn links (border-left in blush)

---

#### Sectie 4: Wat levert het op?
**Achtergrond:** `--warm-white`
**Layout:** Twee kolommen of grid

**Kop:** Wat kan TRE je bieden?

- Vermindering van stress en spanning in je lichaam
- Betere slaap en meer ontspanning
- Meer bewustzijn van je lichaam en signalen
- Versterking van je veerkracht
- Een tool die je zelfstandig kunt blijven gebruiken
- Meer rust in je hoofd

**Design-notes:**
- Geen bullet points, maar blokken met een subtiel blush check-icoon ervoor
- Zachte, uitnodigende uitstraling

---

#### Sectie 5: Veelgestelde vragen
**Achtergrond:** `--blush-whisper`
**Layout:** Accordion / uitklapbare vragen

**Kop:** Veelgestelde vragen

**Vraag: Is TRE geschikt voor iedereen?**
TRE is geschikt voor de meeste mensen, ongeacht leeftijd of fysieke conditie. De oefeningen zijn eenvoudig en kunnen worden aangepast aan jouw mogelijkheden. Bij specifieke medische of psychische klachten is het verstandig om dit vooraf te bespreken.

**Vraag: Hoe snel merk ik resultaat?**
Veel mensen ervaren al na de eerste sessie een gevoel van ontspanning. Het effect bouwt op naarmate je het vaker doet. Na een paar begeleide sessies heb je voldoende ervaring om zelfstandig verder te gaan.

**Vraag: Moet ik sportief zijn?**
Nee, de oefeningen zijn laagdrempelig en voor iedereen te doen. Je hebt geen speciale conditie of ervaring nodig.

**Vraag: Wat moet ik meenemen naar een sessie?**
Draag comfortabele kleding en neem eventueel een matje mee. Verder heb je niets nodig.

**Vraag: Hoeveel sessies heb ik nodig?**
De meeste mensen hebben [X] begeleide sessies nodig om TRE zelfstandig te kunnen toepassen. Dit verschilt per persoon.

**Design-notes:**
- Vragen in Cormorant Garamond (medium)
- Antwoorden in Outfit (light)
- Subtiele open/dicht animatie
- Plus/min icoon in blush

---

#### Sectie 6: CTA
**Achtergrond:** `--blush-light` gradient

**Kop:** Wil je TRE ervaren?

**Tekst:** Neem contact op om te bespreken welke sessievorm het beste bij je past.

**Knop:** "Neem contact op" (primair)

---

## Pagina 3: Over Els

### Doel
Vertrouwen opbouwen. Laten zien wie er achter Tremora zit. Persoonlijk, warm, authentiek.

### Structuur & Content

#### Sectie 1: Page Header
**Achtergrond:** `--blush-whisper`

**Kop:** Over Els
**Subtitel:** De mens achter Tremora

---

#### Sectie 2: Persoonlijk verhaal
**Achtergrond:** `--warm-white`
**Layout:** Grote foto links (of boven op mobiel), tekst rechts

**Kop:** Mijn weg naar TRE

**Tekst:**
> Ik ben Els Wierink, en ik geloof dat ieder mens de kracht in zich heeft om goed voor zichzelf te zorgen — soms heb je alleen de juiste tools nodig.
>
> Mijn achtergrond ligt in de zorg, waar ik jarenlang met mensen heb gewerkt. Als begeleider van naasten bij verslaving heb ik van dichtbij gezien hoeveel impact spanning en stress kunnen hebben op lichaam en geest. Hoe het je vastzet, hoe moeilijk het kan zijn om daar weer uit te komen — maar ook hoe krachtig het is wanneer mensen ontdekken dat ze daar zelf invloed op hebben.
>
> Die ervaring dreef me naar TRE. Toen ik de methode voor het eerst aan den lijve ervoer, wist ik: dit wil ik delen. Het is zo eenvoudig en tegelijk zo krachtig. Je lichaam kent de weg — je hoeft het alleen de ruimte te geven.
>
> In 2024 heb ik mijn opleiding tot TRE-provider afgerond, en met Tremora help ik nu mensen in Drenthe om op een natuurlijke manier spanning los te laten en hun veerkracht te versterken.

---

#### Sectie 3: Mijn aanpak
**Achtergrond:** `--blush-whisper`
**Layout:** 3 blokken naast elkaar

**Kop:** Mijn aanpak

**Blok 1:**
**Titel:** Persoonlijk & op jouw tempo
**Tekst:** Iedereen is anders. Ik stem de begeleiding af op wat jij nodig hebt en respecteer altijd jouw tempo en grenzen.

**Blok 2:**
**Titel:** Zelfstandigheid als doel
**Tekst:** Mijn doel is niet dat je bij mij blijft komen, maar dat je TRE zelfstandig leert toepassen. Je krijgt een vaardigheid voor het leven.

**Blok 3:**
**Titel:** Warm & professioneel
**Tekst:** Ik bied een veilige, ontspannen omgeving waarin je op je gemak kunt oefenen en vragen kunt stellen. Geen druk, geen oordeel.

**Design-notes:**
- Kaarten met blush border-top (3px)
- Witte achtergrond, zachte schaduw

---

#### Sectie 4: Kwalificaties
**Achtergrond:** `--warm-white`
**Layout:** Eenvoudige lijst of tijdlijn

**Kop:** Achtergrond & opleiding

- Gecertificeerd TRE-provider (2024)
- Ervaring als begeleider van naasten bij verslaving
- Achtergrond in de zorg
- [Eventuele aanvullende opleidingen of certificeringen]

**Design-notes:**
- Strakke, minimale tijdlijn of lijst
- Subtiel blush accent bij de markers

---

#### Sectie 5: CTA
**Achtergrond:** `--blush-light` gradient

**Kop:** Zullen we kennismaken?
**Tekst:** Ik vertel je graag meer over wat TRE voor jou kan betekenen.
**Knop:** "Neem contact op" (primair)

---

## Pagina 4: Aanbod / Sessies

### Doel
Helder overzicht van wat Els biedt. Praktische informatie: wat, waar, hoe lang, wat kost het.

### Structuur & Content

#### Sectie 1: Page Header
**Achtergrond:** `--blush-whisper`

**Kop:** Aanbod
**Subtitel:** Ontdek welke sessievorm bij je past

---

#### Sectie 2: Sessie-overzicht
**Achtergrond:** `--warm-white`
**Layout:** 2 kaarten naast elkaar (gestapeld op mobiel)

**Kaart 1: Individuele sessie**

```
Individuele sessie

Persoonlijke begeleiding op jouw tempo

In een individuele sessie werk je één-op-één met Els. De sessie wordt
volledig afgestemd op jouw situatie en behoeften. Dit is ideaal als je
TRE voor het eerst wilt leren, als je persoonlijke aandacht prefereert,
of als je specifieke vragen hebt.

Wat je kunt verwachten:
• Persoonlijke intake en afstemming
• Begeleide TRE-oefeningen
• Ruimte voor vragen en nabespreking
• Tips om thuis verder te oefenen

Duur: [X] minuten
Prijs: € [XX]
Locatie: Havelte, Drenthe

[Knop: Maak een afspraak]
```

**Kaart 2: Groepssessie**

```
Groepssessie

Samen oefenen in een ontspannen setting

In een groepssessie oefen je TRE samen met anderen, onder begeleiding
van Els. De groepsenergie kan het proces versterken en het is een
laagdrempelige manier om kennis te maken met TRE.

Wat je kunt verwachten:
• Begeleide TRE-oefeningen in kleine groep
• Rustige, veilige sfeer
• Ruimte voor vragen
• Geschikte voor zowel beginners als gevorderden

Duur: [X] minuten
Prijs: € [XX] per persoon
Locatie: Ruinerwold, Drenthe

[Knop: Meld je aan]
```

**Design-notes:**
- Grote kaarten, veel ruimte
- Blush accent lijn aan bovenkant van de kaart
- Prijs visueel onderscheiden (groter, in blush-deep)
- Check-marks in blush bij de "wat je kunt verwachten" items
- Beide knoppen linken naar contactpagina

---

#### Sectie 3: Praktische info
**Achtergrond:** `--blush-whisper`
**Layout:** 2-3 kolommen met iconen

**Kop:** Praktische informatie

**Blok 1: Locatie**
Individuele sessies vinden plaats in Havelte. Groepssessies worden gegeven in Ruinerwold. Beide locaties zijn makkelijk bereikbaar in de regio Drenthe.

**Blok 2: Wat meenemen?**
Draag comfortabele kleding waarin je vrij kunt bewegen. Een yogamat is aanwezig, maar je mag ook je eigen matje meenemen.

**Blok 3: Na de sessie**
Na een TRE-sessie is het fijn om het rustig aan te doen. Drink voldoende water en gun jezelf de ruimte om de ontspanning te laten landen.

---

#### Sectie 4: CTA
**Achtergrond:** `--blush-light` gradient

**Kop:** Vragen of wil je een afspraak maken?
**Tekst:** Neem gerust contact op. Ik help je graag verder.
**Knop:** "Neem contact op" (primair)

---

## Pagina 5: Contact

### Doel
Laagdrempelig contact mogelijk maken. Geen drempel, geen formulier met 10 velden. Warm en uitnodigend.

### Structuur & Content

#### Sectie 1: Page Header
**Achtergrond:** `--blush-whisper`

**Kop:** Contact
**Subtitel:** Ik hoor graag van je

---

#### Sectie 2: Contactinformatie
**Achtergrond:** `--warm-white`
**Layout:** Twee kolommen — links tekst, rechts contactgegevens

**Tekst links:**

**Kop:** Neem gerust contact op

> Heb je vragen over TRE, wil je meer weten over de sessies, of wil je direct een afspraak maken? Neem gerust contact op via e-mail of telefoon. Ik reageer meestal binnen een werkdag.
>
> Je kunt me ook bellen voor een kort, vrijblijvend telefoongesprek. Dan kunnen we samen kijken wat het beste bij je past.

**Contactgegevens rechts:**

```
Els Wierink

✉  [e-mailadres]
✆  [telefoonnummer]

Individuele sessies: Havelte, Drenthe
Groepssessies: Ruinerwold, Drenthe
```

**Design-notes:**
- E-mailadres als mailto-link, telefoonnummer als tel-link
- Contactgegevens in een kaart met blush-whisper achtergrond
- Eventueel een kaartje van Google Maps (optioneel)

---

#### Sectie 3: Verwachting na contact
**Achtergrond:** `--blush-whisper`
**Layout:** 3 stappen horizontaal

**Kop:** Wat kun je verwachten?

**Stap 1:** Je neemt contact op via e-mail of telefoon
**Stap 2:** We bespreken kort je situatie en wensen
**Stap 3:** We plannen samen een sessie die bij je past

**Design-notes:**
- Genummerde stappen met blush nummers (groot, Cormorant Garamond)
- Verbindingslijn (gestippeld, taupe) tussen de stappen

---

#### Sectie 4: Afsluitend
**Achtergrond:** `--warm-white`

**Kop (gecentreerd, italic):**
*Je lichaam kent de weg van spanning naar ontspanning*

---

## SEO & Technische notities

### Meta-tags per pagina

**Home:**
- Title: "Tremora — Praktijk voor TRE & Coaching in Drenthe"
- Description: "Tremora helpt je om spanning los te laten met TRE (Tension & Trauma Releasing Exercises). Individuele en groepssessies in Havelte en Ruinerwold, Drenthe."

**Wat is TRE:**
- Title: "Wat is TRE? — Spanning loslaten met je lichaam | Tremora"
- Description: "TRE (Tension & Trauma Releasing Exercises) is een eenvoudige methode om spanning en stress los te laten via het natuurlijke trilmechanisme van je lichaam."

**Over Els:**
- Title: "Over Els Wierink — TRE-provider in Drenthe | Tremora"
- Description: "Maak kennis met Els Wierink, gecertificeerd TRE-provider in Drenthe. Met haar achtergrond in de zorg helpt ze mensen om hun veerkracht te versterken."

**Aanbod:**
- Title: "Aanbod — Individuele & groepssessies TRE in Drenthe | Tremora"
- Description: "Bekijk het aanbod van Tremora: individuele TRE-sessies in Havelte en groepssessies in Ruinerwold. Ontdek welke sessievorm bij je past."

**Contact:**
- Title: "Contact — Tremora TRE & Coaching Drenthe"
- Description: "Neem contact op met Tremora voor vragen over TRE of om een afspraak te maken. Sessies in Havelte en Ruinerwold, Drenthe."

### Performance & techniek
- Afbeeldingen: WebP formaat, lazy loading
- Fonts: Google Fonts — preconnect en font-display: swap
- Mobiel-eerst responsive design
- Smooth scroll naar ankers
- Minimaal JavaScript — alleen voor hamburger menu en FAQ accordion
- Schema.org markup voor lokale business (LocalBusiness)

### Mapstructuur suggestie
```
tremora/
├── index.html          (Home)
├── wat-is-tre.html     (Wat is TRE)
├── over-els.html       (Over Els)
├── aanbod.html         (Aanbod)
├── contact.html        (Contact)
├── css/
│   └── style.css       (Alle stijlen)
├── js/
│   └── main.js         (Menu, accordion, scroll)
├── images/
│   ├── logo.svg
│   ├── beeldmerk.svg
│   └── ...
└── fonts/              (optioneel, als je lokaal wilt hosten)
```

---

## Cursor Workflow Tips

1. **Begin met de globale structuur:** Maak eerst `style.css` met alle variabelen, typografie, knoppen en kaart-stijlen. Maak een `header` en `footer` component die je op elke pagina hergebruikt.

2. **Bouw pagina voor pagina:** Start met de Home-pagina, die bevat de meeste componenten die je op andere pagina's hergebruikt (hero, kaarten, CTA-blok, tekst+afbeelding layout).

3. **Gebruik dit document als prompt:** Je kunt per pagina de betreffende sectie kopiëren en aan Cursor geven met de instructie "Bouw deze pagina volgens deze specificatie."

4. **Huisstijl als referentie:** Zet het huisstijl HTML-bestand in je project zodat Cursor het kan raadplegen voor exacte kleuren en stijlen.

5. **Placeholder content:** Waar [X] of [XX] staat, vul je later de definitieve prijzen en tijden in. Gebruik voorlopig realistische placeholders (bijv. "60 minuten", "€ 65").

---

*Dit document is een levend document. Pas teksten en structuur aan waar nodig naarmate de site vordert.*
