# 📰 Nachrichten-Wiki

Dieses Wiki archiviert die täglichen **Tageszusammenfassungen** der News-Übersicht.
Die Zusammenfassungen werden automatisch aus RSS-Feeds österreichischer Tageszeitungen
sowie deutschen und internationalen Tech-Medien erzeugt und von einer KI auf Deutsch
zusammengefasst.

**Website:** https://ubuntu51.github.io/news-wiki/

---

## Quellenangaben

Alle Schlagzeilen stammen aus folgenden RSS-Feeds. Englischsprachige Artikel werden
automatisch ins Deutsche übersetzt.

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
| TT – Wirtschaft | https://www.tt.com/rss/wirtschaft.xml |

### 🤖 KI & LLM

| Quelle | Feed |
|---|---|
| t3n | https://t3n.de/rss.xml |
| Golem.de | https://rss.golem.de/rss.php?feed=RSS1.0 |
| heise online | https://www.heise.de/rss/heise-top-atom.xml |
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

### 🔮 Zukunft

| Quelle | Feed |
|---|---|
| Futurism | https://futurism.com/feed |
| Singularity Hub | https://singularityhub.com/feed/ |
| Next Big Future | https://www.nextbigfuture.com/feed |
| Medium – #future | https://medium.com/feed/tag/future |

### 🍏 Leben

| Quelle | Quelle/Feed |
|---|---|
| foodwatch | https://www.foodwatch.org/de/informieren/aktuelle-nachrichten (Scraper, kein RSS) |

### 🔬 Wissenschaft

| Quelle | Feed |
|---|---|
| wissenschaft.de | https://www.wissenschaft.de/feed/ |
| ScienceDaily (übersetzt) | https://www.sciencedaily.com/rss/all.xml |
| phys.org (übersetzt) | https://phys.org/rss-feed/ |
| NZZ Wissenschaft | https://www.nzz.ch/wissenschaft.rss |

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

Der Ablauf wird zweimal täglich (07:00 und 18:00 Uhr) per systemd-Timer gestartet:

1. **`news_generator.py`** – lädt die RSS-Feeds, klassifiziert Zeitungsartikel nach
   News/Wirtschaft/Politik, filtert KI-Themen und übersetzt englische Artikel
   (DeepL/Google, mit Cache).
2. **`zusammenfassung.py`** – erstellt per KI (Mammouth-API) eine deutsche
   Tageszusammenfassung aus den geladenen Schlagzeilen.
3. **`wiki.py`** – sortiert die Zusammenfassung in `Wiki/<Jahr>/<Monat>/` ein und
   regeneriert die Startseite `index.md`.
4. **`deploy_wiki.sh`** – pusht die Änderungen nach GitHub; GitHub Pages baut die
   Website automatisch neu.

## Rechtlicher Hinweis

Inhalte und Urheberrechte liegen bei den jeweiligen Medien. Dieses Wiki erstellt
lediglich automatische Zusammenfassungen und verlinkt auf die Originalquellen.
