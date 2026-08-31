# 📰 Nachrichten-Wiki

Dieses Wiki archiviert die täglichen **Tageszusammenfassungen** der News-Übersicht.
Die Zusammenfassungen werden automatisch aus RSS-Feeds österreichischer Tageszeitungen
sowie deutschen und internationalen Tech-, Sicherheits- und
alternativen Medien erzeugt und von einer KI auf Deutsch zusammengefasst.

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
| profil | https://www.profil.at/rss.xml |
| Salzburger Nachrichten | https://www.sn.at/xml/rss |
| OÖ Nachrichten | https://www.nachrichten.at/storage/rss/rss/nachrichten.xml |
| APA-OTS | https://www.ots.at/rss/index |
| Falter | https://www.falter.at/rss |
| Wiener Zeitung | https://www.wienerzeitung.at/rss.xml |

### 📰 Zeitungs-Sektionen

| Quelle | Feed |
|---|---|
| OÖ Nachrichten – Wirtschaft | https://www.nachrichten.at/storage/rss/rss/wirtschaft.xml |
| OÖ Nachrichten – Politik | https://www.nachrichten.at/storage/rss/rss/politik.xml |
| OÖ Nachrichten – Oberösterreich | https://www.nachrichten.at/storage/rss/rss/oberoesterreich.xml |
| APA-OTS – Politik | https://www.ots.at/rss/politik |
| APA-OTS – Wirtschaft | https://www.ots.at/rss/wirtschaft |
| APA-OTS – Finanzen | https://www.ots.at/rss/finanzen |
| APA-OTS – Chronik | https://www.ots.at/rss/chronik |
| APA-OTS – Kultur | https://www.ots.at/rss/kultur |

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
| VentureBeat (übersetzt) | https://venturebeat.com/category/ai/feed/ |

### 🐧 Linux

| Quelle | Feed |
|---|---|
| GNU/Linux.ch | https://gnulinux.ch/rss.xml |
| Linux-Magazin | https://www.linux-magazin.de/feed/ |
| LinuxCommunity | https://www.linux-community.de/feed/ |
| adminForge | https://adminforge.de/feed/ |

### 🔮 Zukunft

| Quelle | Feed |
|---|---|
| scinexx | https://www.scinexx.de/feed/ |
| Ingenieur.de | https://www.ingenieur.de/feed/ |
| SZ Wissen | https://rss.sueddeutsche.de/rss/Wissen |
| FAZ Wissen | https://www.faz.net/rss/aktuell/wissen/ |
| Der Standard – Wissenschaft | https://www.derstandard.at/rss/wissenschaft |

### 🛡️ Sicherheit

| Quelle | Feed |
|---|---|
| heise Security | https://www.heise.de/security/rss/news.rss |
| Golem Security | https://www.golem.de/rss.php?feed=RSS2.0&cat=16 |
| Kuketz IT-Security | https://www.kuketz-blog.de/feed/ |
| Tarnkappe.info | https://tarnkappe.info/feed |

### 🚗 Mobilität

| Quelle | Feed |
|---|---|
| electrive.net | https://www.electrive.net/feed/ |
| ecomento.de | https://ecomento.de/feed/ |
| GoingElectric | https://www.goingelectric.de/feed/ |
| heise Autos | https://www.heise.de/autos/rss/news.rss |
| elektroauto-news.net | https://www.elektroauto-news.net/feed/ |

### ₿ Bitcoin

| Quelle | Feed |
|---|---|
| blocktrainer.de | https://www.blocktrainer.de/feed.xml |
| BTC-Echo | https://www.btc-echo.de/feed/ |
| Bitcoin Blog | https://bitcoinblog.de/feed/ |
| Kryptoszene | https://kryptoszene.de/feed/ |
| CoinDesk (übersetzt) | https://www.coindesk.com/arc/outboundfeeds/rss/?outputType=xml |
| Cointelegraph (übersetzt) | https://cointelegraph.com/rss |

### 💻 Computer

| Quelle | Feed |
|---|---|
| ComputerBase | https://www.computerbase.de/rss/news.xml |
| PC-WELT | https://www.pcwelt.de/feed |
| CHIP | https://www.chip.de/rss/feed_news.xml |
| inside digital | https://www.inside-digital.de/feed/ |
| MobileGeeks | https://www.mobilegeeks.de/feed/ |
| WindowsUnited | https://www.windowsunited.de/feed/ |

### 🌐 Alternativ Medien

| Quelle | Feed |
|---|---|
| NachDenkSeiten | https://www.nachdenkseiten.de/?feed=rss2 |
| Kontext TV | https://www.kontext-tv.de/rss.xml |
| German Foreign Policy | https://www.german-foreign-policy.com/feed.xml |
| junge Welt | https://www.jungewelt.de/feeds/newsticker.rss |
| RT Deutsch | https://de.rt.com/rss/ |
| Weltnetz.tv | https://weltnetz.tv/feed |
| Free21 | https://free21.org/feed |
| Hintergrund | https://www.hintergrund.de/feed |
| Deutsche Wirtschaftsnachrichten | https://deutsche-wirtschafts-nachrichten.de/feed |
| Telepolis | https://www.telepolis.de/feed.xml |
| Compact | https://www.compact-online.de/feed/ |
| Epoch Times DE | https://www.epochtimes.de/feed |
| Der Freitag | https://www.freitag.de/feed/ |
| Journalistenwatch | https://www.journalistenwatch.com/feed/ |
| Junge Freiheit | https://jungefreiheit.de/feed/ |
| Tichys Einblick | https://www.tichyseinblick.de/feed/ |
| Unzensuriert | https://unzensuriert.at/feed/ |
| Wochenblick | https://www.wochenblick.at/feed/ |
| Zeitgeschehen im Fokus | https://zeitgeschehen-im-fokus.ch/feed/ |

---

## So funktioniert es

Die Pipeline läuft zweimal täglich (08:00 und 18:00 Uhr Wiener Zeit)
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

- **Medienpräsenz** wird nur im 08:00-Uhr-Lauf geprüft, um die Anzahl der
  Google-News-Anfragen zu begrenzen; der 18:00-Uhr-Lauf nutzt `SKIP_PRESENCE`.
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
