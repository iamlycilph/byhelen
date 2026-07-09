# -*- coding: utf-8 -*-
"""
convert.py — конвейер обновления словаря.

    python3 convert.py Andy.docx     (или .txt)
→   data.js    — данные для приложения
→   report.md  — авто-переводы, пропуски, исключения

overrides.json:  "английский ключ": "перевод"
                 "": ""        — исключить карточку
                 {"ru":..,"en":..} — исправить и заголовок
Применяется при каждом запуске: новый docx правки не затирает.
"""
import sys, re, json, hashlib, subprocess, unicodedata
from pathlib import Path

CYR = re.compile(r"[А-Яа-яЁё]")
DATE = re.compile(r"^([A-Z][a-z]+),?\s+(\d{1,2})$")
DASHES = "–—-="

GRAMMAR = re.compile(r"(?i)\b(tense|conditional|passive voice|modal verbs?|"
                     r"complex object|irregular verbs?|comparative|superlative|"
                     r"(past|present|future) (simple|perfect|continuous))\b")
COMP_DRILL = re.compile(r"[–—-]\s*(more\b|the\b|better|worse|less|further|farther|[a-z]+er$)")

def norm(s):
    s = unicodedata.normalize("NFC", s)
    s = s.replace("`", "'").replace("’", "'")
    return re.sub(r"\s+", " ", s).strip()

def key_of(en):
    base = re.sub(r"[^a-z0-9 ]", "", en.lower())
    return re.sub(r"\s+", " ", base).strip()

def make_id(en, seen):
    h = hashlib.md5(key_of(en).encode()).hexdigest()[:8]
    n = seen.get(h, 0); seen[h] = n + 1
    return h if n == 0 else f"{h}-{n}"

def split_entry(line):
    for i, ch in enumerate(line):
        if ch in DASHES:
            right = line[i+1:].lstrip(" «\"'(„“")
            if right and CYR.match(right[0]):
                return line[:i].rstrip(" -–—="), line[i+1:].strip()
    return None

def pull_examples(ru):
    ex = []
    def repl(m):
        inner = m.group(1).strip()
        if inner and not CYR.search(inner):
            ex.append(inner); return ""
        return m.group(0)
    ru = re.sub(r"\(([^()]*)\)", repl, ru)
    return re.sub(r"\s+", " ", ru).strip(" ,;"), ex

def looks_like_sentence(s):
    if re.search(r"[?!.]$", s): return True
    if "=" in s: return False  # синонимический ряд
    if re.match(r"(?i)^(i|you|we|they|he|she|it|there|this|that|these|those|my|your|his|her|our|their|if|when|what|where|why|how|is|are|was|were|do|does|did|can|could|will|would|have|has|had|let|no|don't|dont)\b", s):
        return True
    return bool(re.search(r"\b(am|is|are|was|were|will|shall|don't|doesn't|didn't)\b", s))

def is_junk(s):
    if re.match(r"^[\d\-•]", s) or "___" in s or "---" in s: return True
    if GRAMMAR.search(s): return True
    if re.search(r"\+\s*V\d", s) or re.search(r"\+\s*V$", s): return True
    if "=" not in s and COMP_DRILL.search(s): return True
    if re.match(r"(?i)^the (most \w+|\w+est)$", s): return True
    return False

def parse(lines):
    lessons, cards, skipped = [], [], []
    seen, cur = {}, None
    for raw in lines:
        line = norm(raw)
        if not line or line in {"?", "-", "quizlet"}: continue
        m = DATE.match(line)
        if m:
            cur = {"n": len(lessons)+1, "date": f"{m.group(1)}, {m.group(2).zfill(2)}"}
            lessons.append(cur); continue
        if cur is None:
            skipped.append(("до первого урока", line)); continue
        sp = split_entry(line)
        if sp:
            en, ru = norm(sp[0]), sp[1]
            if not en or CYR.search(en) or is_junk(en):
                skipped.append((cur["date"], line)); continue
            ru, ex = pull_examples(norm(ru))
            cards.append({"id": make_id(en, seen), "k": key_of(en), "lesson": cur["n"],
                          "en": en, "ru": ru, "ex": ex, "auto": False}); continue
        if line.startswith("(") and cards and not CYR.search(line):
            cards[-1]["ex"].append(line.strip("() ")); continue
        if not CYR.search(line) and not is_junk(line):
            words = [w for w in (t.strip("=") for t in line.split()) if w]
            if 2 <= len(words) <= 12 and not looks_like_sentence(line):
                en = norm(line.rstrip(" -–—="))
                cards.append({"id": make_id(en, seen), "k": key_of(en), "lesson": cur["n"],
                              "en": en, "ru": "", "ex": [], "auto": True}); continue
        skipped.append((cur["date"], line))
    return lessons, cards, skipped

def main():
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("andy_plain.txt")
    if src.suffix == ".docx":
        txt = subprocess.run(["pandoc", str(src), "-t", "plain", "--wrap=none"],
                             capture_output=True, text=True, check=True).stdout
    else:
        txt = src.read_text(encoding="utf-8")
    lessons, cards, skipped = parse(txt.splitlines())

    overrides = {}
    if Path("overrides.json").exists():
        overrides = json.loads(Path("overrides.json").read_text(encoding="utf-8"))
    ov = {key_of(k): v for k, v in overrides.items()}

    kept, dropped, unresolved = [], [], []
    for c in cards:
        v = ov.get(c["k"])
        if isinstance(v, str) and v == "" and not c["ru"]:
            dropped.append(c["en"]); continue
        if not c["ru"]:
            if isinstance(v, str) and v: c["ru"] = v
            elif isinstance(v, dict):
                c["ru"] = v.get("ru", ""); c["en"] = v.get("en", c["en"])
            if not c["ru"]: unresolved.append(c["en"])
        kept.append(c)

    Path("data.js").write_text("window.VOCAB = " +
        json.dumps({"lessons": lessons, "cards": kept}, ensure_ascii=False, indent=1) +
        ";\n", encoding="utf-8")

    auto_n = sum(1 for c in kept if c["auto"] and c["ru"])
    rep = ["# Отчёт конвертера", "",
           f"- Уроков: {len(lessons)}", f"- Карточек: {len(kept)}",
           f"- Переводов добавлено автоматически (проверить с Еленой): {auto_n}",
           f"- Осталось без перевода: {len(unresolved)}",
           f"- Исключено вручную (overrides): {len(dropped)}",
           f"- Строк пропущено парсером (грамматика/примеры): {len(skipped)}", ""]
    if unresolved: rep += ["## Без перевода", ""] + [f"- {u}" for u in unresolved] + [""]
    rep += ["## Авто-переводы", ""] + [f"- {c['en']} → {c['ru']}" for c in kept if c["auto"] and c["ru"]]
    rep += ["", "## Исключено вручную", ""] + [f"- {d}" for d in dropped]
    rep += ["", "## Пропущенные строки", ""] + [f"- [{d}] {l}" for d, l in skipped]
    Path("report.md").write_text("\n".join(rep), encoding="utf-8")
    print(f"lessons={len(lessons)} cards={len(kept)} auto={auto_n} "
          f"unresolved={len(unresolved)} dropped={len(dropped)} skipped={len(skipped)}")

if __name__ == "__main__":
    main()
