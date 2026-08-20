# 📰 Nachrichten-Wiki

Dieses Wiki archiviert die täglichen **Tageszusammenfassungen** der News-Übersicht.
Die Zusammenfassungen werden automatisch aus RSS-Feeds österreichischer Tageszeitungen
sowie deutschen und internationalen Tech-, Wissenschafts-, Sicherheits- und
Sport-Medien erzeugt und von einer KI auf Deutsch zusammengefasst.

**Website:** https://ubuntu51.github.io/news-wiki/

---

## Quellenangaben

Alle Schlagzeilen stammen aus folgenden RSS-Feeds. Englischsprachige Artikel werden
automatisch ins Deutsche übersetzt. Alle Quellen, Kategorien und KI-Schlüsselwörter
sind zentral in `config.json` konfigurierbar – neue Quellen lassen sich dort ergänzen,
ohne Code zu ändern.

### 📰 Zeitungen (Österreich)

| Quelle | Feed |
|---|---|
| ORF | https://rss.orf.at/news.xml |
| Kronen Zeitung | https://api.krone.at/v1/rss/rssfeed-google.xml?id=2311992 |
| Der Standard | https://www.derstandard.at/rss |
| Die Presse | https://diepresse.com/rss |
| Kurier | https://kurier.at/xml/rss |
| Tiroler Tageszeitung | https://www.tt.com/rss/news.xml |
| Der Standard – Wirtschaft | https://www.derstandard.at/rss/wirtschaft |
| Die Presse – Wirtschaft | https://diepresse.com/rss/wirtschaft |
| Die Presse – Politik | https://diepresse.com/rss/politik |
| TT – Standort Tirol (Wirtschaft) | https://www.tt.com/rss/standorttirol.xml |
| netzpolitik.org | https://netzpolitik.org/feed/ |

### 🤖 KI & LLM

| Quelle | Feed |
|---|---|
| t3n | https://t3n.de/rss.xml |
| Golem.de | https://rss.golem.de/rss.php?feed=RSS1.0 |
| heise online | https://www.heise.de/rss/heise-top-atom.xml |
| winfuture.de | https://winfuture.de/rss.xml |
| ComputerBase | https://www.computerbase.de/rss/news.xml |
| Caschys Blog | https://stadt-bremerhaven.de/feed/ |
| der brutkasten | https://www.brutkasten.com/feed/ |
| TechCrunch (übersetzt) | https://techcrunch.com/category/artificial-intelligence/feed/ |
| The Verge (übersetzt) | https://www.theverge.com/rss/ai-artificial-intelligence/index.xml |
| VentureBeat (übersetzt) | https://venturebeat.com/category/ai/feed/ |

### 🐧 Linux

| Quelle | Feed |
|---|---|
| Arch Linux | https://archlinux.org/feeds/news/ |
| CachyOS | https://cachyos.org/rss.xml |
| Phoronix | https://www.phoronix.com/rss.php |
| It's FOSS | https://itsfoss.com/feed/ |
| omg!Ubuntu | https://www.omgubuntu.co.uk/feed |
| DistroWatch | https://distrowatch.com/news/dwd.xml |
| LWN.net | https://lwn.net/headlines/rss |

### 🔮 Zukunft

| Quelle | Feed |
|---|---|
| Futurism | https://futurism.com/feed |
| Singularity Hub | https://singularityhub.com/feed/ |
| Next Big Future | https://www.nextbigfuture.com/feed |
| Medium – #future | https://medium.com/feed/tag/future |
| MIT Technology Review | https://www.technologyreview.com/feed/ |

### 🍏 Leben

| Quelle | Quelle/Feed |
|---|---|
| foodwatch | https://www.foodwatch.org/de/informieren/aktuelle-nachrichten (Scraper, kein RSS) |
| Stiftung Warentest (Essen & Trinken) | https://www.test.de/rss/essen-trinken/ |

### 🔬 Wissenschaft

| Quelle | Feed |
|---|---|
| wissenschaft.de | https://www.wissenschaft.de/feed/ |
| ScienceDaily (übersetzt) | https://www.sciencedaily.com/rss/all.xml |
| phys.org (übersetzt) | https://phys.org/rss-feed/ |
| NZZ Wissenschaft | https://www.nzz.ch/wissenschaft.rss |
| Quanta Magazine | https://www.quantamagazine.org/feed/ |

### 🛡️ Sicherheit

| Quelle | Feed |
|---|---|
| heise Security | https://www.heise.de/security/rss/news.rss |
| Golem Security | https://www.golem.de/rss.php?feed=RSS2.0&cat=16 |

### ⚽ Sport

| Quelle | Feed |
|---|---|
| ORF Sport | https://rss.orf.at/sport.xml |
| Der Standard Sport | https://www.derstandard.at/rss/sport |

### 🚗 Mobilität

| Quelle | Feed |
|---|---|
| electrive.net | https://www.electrive.net/feed/ |

---

## So funktioniert es

Die Pipeline läuft dreimal täglich (07:00, 12:00 und 18:00 Uhr Wiener Zeit)
automatisch in **GitHub Actions** (`.github/workflows/daily.yml`):

1. **`smoke_test.py`** – prüft offline die Kernfunktionen (Feed-Parsing,
   KI-Filter, Kategorisierung), bevor die echte Pipeline startet.
2. **`news_generator.py`** – lädt die RSS-Feeds, klassifiziert Zeitungsartikel
   nach News/Wirtschaft/Politik, filtert KI-Themen und übersetzt englische
   Artikel (DeepL/Google abwechselnd pro Tag, mit Cache). Erzeugt `news.html`
   (elf Tabs) und exportiert die Artikel als `news_data.json`.
3. **`zusammenfassung.py`** – prüft die **Medienpräsenz** jeder Schlagzeile
   über Google News (wie viele andere Medien sie melden) und gewichtet so die
   wichtigsten Themen. Erstellt danach per KI (Mammouth-API, Modell
   `deepseek-v3.2`) eine deutsche Tageszusammenfassung; ohne Key oder Netz gibt
   es einen automatischen Schlagzeilen-Fallback.
4. **`wiki.py`** – sortiert die Zusammenfassung in `Wiki/<Jahr>/<Monat>/` ein,
   regeneriert die Startseite `index.md` (mit Jekyll-Front-Matter für GitHub
   Pages) und entfernt verwaiste Archiveinträge.
5. **`ci_run.sh` / `deploy_wiki.sh`** – pusht die Änderungen nach GitHub
   (`Ubuntu51/news-wiki`); GitHub Pages baut die Website automatisch neu.
   Die Sitemap wird anschließend bei Google und Bing angemeldet.

### Weitere Details

- **Medienpräsenz** wird nur im 07:00-Uhr-Lauf geprüft, um die Anzahl der
  Google-News-Anfragen zu begrenzen; die 12/18-Uhr-Läufe nutzen `SKIP_PRESENCE`.
- **Übersetzung:** Gerade Kalendertage nutzen DeepL, ungerade Google – so bleibt
  das DeepL-Monatslimit erhalten. Der Cache (`translation_cache.json`) wird in
  GitHub Actions zwischen den Läufen wiederverwendet. Einrichtung und Modi:
  siehe `DEEPL_EINRICHTUNG.md`.
- **Wartung:** Der `NEWS_WIKI_TOKEN` läuft nach 90 Tagen ab. Die Pipeline erkennt
  das rechtzeitig und legt automatisch ein GitHub-Issue als Erinnerung an. Auch
  bei Pipeline-Fehlern wird automatisch ein Issue erstellt.
- **Konfiguration:** Quellen, Kategorien und KI-Schlüsselwörter stehen zentral
  in `config.json`; `news_common.py` bündelt gemeinsame Helfer (Fetch mit Retry,
  RSS/Atom-Parsing, Datums- und Sortierfunktionen).

## Rechtlicher Hinweis

Inhalte und Urheberrechte liegen bei den jeweiligen Medien. Dieses Wiki erstellt
lediglich automatische, in eigenen Worten verfasste Zusammenfassungen und verlinkt
auf die Originalquellen. Es wird kein Geld mit den Inhalten verdient.

Nach österreichischem Urheberrechtsgesetz (UrhG) ist dieses Vorgehen abgedeckt:

- **§ 44 Abs. 3 UrhG** – Einfache Presseberichte (Tagesnachrichten, vermischte
  Nachrichten) genießen keinen urheberrechtlichen Schutz.
- **§ 76f Abs. 5 UrhG** – Das Leistungsschutzrecht der Presseverleger gilt nicht für
  private oder nicht-kommerzielle Nutzung, nicht für Hyperlinks und nicht für die
  Nutzung einzelner Wörter oder sehr kurzer Auszüge (z. B. Schlagzeilen).
- **§ 76f Abs. 3 UrhG** – Der Verlegerschutz erlischt zwei Jahre nach Veröffentlichung.

Quelle: RIS – Urheberrechtsgesetz (BGBl. Nr. 111/1936 idgF),
<https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001848>

*Hinweis: Diese Angaben ersetzen keine Rechtsberatung.*
