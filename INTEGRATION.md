# INTEGRATION.md

Cél
---
E dokumentum leírja a Lovable projekt elemeinek integrációját a trixelektro-cyber/TRIX-AI-ASSISTANT kódbázisába. A cél egy egységes, modularizált TRIX AI Assistant alkalmazás létrehozása, amely ötvözi a Lovable által készített UI/UX-et és a GitHub-on felépített stabil, TypeScript alapú architektúrát.

Scope
---
- Lovable: UI/UX, komponensek, animációk, felhasználói folyamatok, tudásbázis tartalmak
- TRIX repo: architektúra, navigation, services, AIProvider, CI

Áttekintés (lépések)
---
1. Audit (Lovable kód/források)
   - Szerezzük be a Lovable forrásait (repo URL vagy zip).
   - Azonosítsuk a képernyőket, komponenseket, ikonokat, theme-t és asseteket.
2. Mapping
   - Térképezzük a Lovable komponenseit a TRIX mappastruktúrájára:
     - screens -> src/screens/
     - shared components -> src/components/
     - assets -> assets/
     - i18n -> src/i18n/
3. Branching
   - Hozzunk létre backup branchet: backup/pre-lovable-integration-YYYYMMDD
   - Fő branch: feature/lovable-integration
4. Implementáció (iteratív)
   - Importáljuk a komponenseket és illesszük be a TRIX layoutba.
   - Konvertáljuk JS/TS eltéréseket (ha Lovable JS-ben van, írjuk át TypeScript-re, vagy adjunk types fájlokat).
   - Integráljuk a design tokens-t (colors, spacing, typography) a src/theme-be.
   - i18n összeolvasztás (HU): merge hu.json fájlok, deduplikálás és kulcsorientált map.
5. AI integráció
   - Hozzuk be az AIProvider interfészt és adapter sablonokat (OpenAI alapértelmezés szerint).
   - Azonnali működés: mock adapter; később éles kulcsokat a GitHub Secrets-ben tároljuk.
6. Tudásbázis migráció
   - Exportáljuk a Lovable tudásbázis tartalmát (REST API, CSV vagy JSON formátum).
   - Import script a TRIX repo-ba: scripts/migrate_knowledge.js
   - Indexálás: egyszerű full-text search vagy később vector DB integráció (Pinecone, Weaviate stb.).
7. QA és tesztelés
   - Manuális flow tesztek (onboarding, chat, knowledge lookup)
   - Accessibility audit
   - Egységtesztek a kritikus komponensekhez
8. PR és review
   - Nyiss PR-t feature/lovable-integration → feature/scaffold
   - Jelöld meg a kulcsreviewereket és add meg a QA checklistet

Kockázatok és rollback
---
- Kódkonfliktusok: backup branch kötelező
- I18n kulcsütközés: deduplikálás és review
- Design eltérések: Storybook vagy UI showcase javasolt a review-hoz

Időbecslés (0. kezdeti fázis)
---
- Audit + mapping: 1 munkanap
- Első integráció (komponensek + adapter sablon + PR): 0.5 munkanap
- Teljes UI átültetés: komponensenként 0.5–2 nap
- Tudásbázis migráció: 1–3 nap (adat mennyiségétől függ)

Kapcsolattartás
---
- Kérlek add meg a Lovable repo URL-t vagy tölts fel ZIP-et a kódhoz.
- Jelöld meg a reviewer(ke)t (GitHub user), vagy hagyd rám a PR előkészítését és a te végső merge-edet.

---

