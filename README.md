# 📰 Nachrichten-Wiki

Dieses Wiki archiviert die täglichen **Tageszusammenfassungen** der News-Übersicht.

- **Website:** https://ubuntu51.github.io/news-wiki/
- **Quellenangaben (alle RSS-Feeds & Kategorien):** [quellen.md](quellen.md)
- **Generator-Projekt:** [Ubuntu51/news-generator](https://github.com/Ubuntu51/news-generator)

Die Zusammenfassungen werden automatisch aus RSS-Feeds österreichischer
Tageszeitungen sowie deutschen und internationalen Tech-, Wissenschafts-,
Sicherheits- und Sport-Medien erzeugt und von einer KI auf Deutsch
zusammengefasst. Die vollständige Quellenliste wird zentral in
`quellen.md` gepflegt.

## Was dieses Projekt besonders macht

Die Kombination dieser Funktionen findet man sonst kaum in einem Projekt:

- **KI-Zusammenfassungen auf vier Ebenen** – Tages-, Wochen-, Monats- und
  Jahresperspektive, jeweils aus den darunterliegenden Zusammenfassungen
  abgeleitet.
- **Medienpräsenz-Analyse** – wie viele Medien melden dieselbe Schlagzeile?
  Daraus entsteht eine gewichtete Rangliste der wichtigsten Themen des Tages.
- **Themenvergleich Mainstream vs. Alternativ** – dasselbe Grundthema in
  beiden Medienwelten, inkl. Tonalitäts-Hinweis (kritisch/positiv/neutral).
- **Dauerbrenner-Erkennung** – Themen, die über mehrere Tage präsent sind,
  werden automatisch hervorgehoben (Trigramm-Abgleich mit früheren Läufen).
- **Nachrichten-Wiki als Archiv** – vollständige Historie mit Volltextsuche,
  Monats-, Wochen- und Jahresseiten sowie Sitemap.
- **Podcast** – die Tageszusammenfassung wird lokal (Piper, 100 % offline)
  oder per Google-TTS als MP3 vertont und ins Wiki gestellt.
- **Push aufs Handy** – Telegram-Benachrichtigung und optionaler Newsletter.
- **Alles ohne Server und ohne externe Pakete** – statische Seiten, die
  GitHub Actions zweimal täglich baut; nur die Python-Standardbibliothek.
