import sys, re

sys.stdout.reconfigure(encoding='utf-8')
with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("=================== 7-DAY ITINERARY VOICE AUDIT (39 SPOTS) ===================")
itinerary_match = re.search(r'const ITINERARY_DATA = \[(.*?)\];\s*// ====', text, re.DOTALL)
if itinerary_match:
    itin_block = itinerary_match.group(1)
    cards = itin_block.split('{\n    day:')
    for idx, card in enumerate(cards[1:], 1):
        day = re.search(r'^\s*(\d+)', card)
        time = re.search(r'time:\s*"(.*?)"', card)
        zh = re.search(r'nameZh:\s*"(.*?)"', card)
        voice = re.search(r'taxiVoice:\s*"(.*?)"', card)
        
        d_val = day.group(1) if day else "?"
        t_val = time.group(1) if time else "?"
        zh_val = zh.group(1) if zh else "?"
        v_val = voice.group(1) if voice else "?"
        
        print(f"[{idx:02d}] D{d_val} ({t_val}) | {zh_val[:22]:<22} ➔ 🇻🇳 {v_val}")

print("\n=================== BACKUP PLACES VOICE AUDIT (25 PLACES) ===================")
backup_match = re.search(r'const BACKUP_PLACES_DATA = \[(.*?)\];\s*// ====', text, re.DOTALL)
if backup_match:
    bk_block = backup_match.group(1)
    cards = bk_block.split('{\n    id:')
    for idx, card in enumerate(cards[1:], 1):
        zh = re.search(r'nameZh:\s*"(.*?)"', card)
        voice = re.search(r'taxiVoice:\s*"(.*?)"', card)
        
        zh_val = zh.group(1) if zh else "?"
        v_val = voice.group(1) if voice else "?"
        
        print(f"[{idx:02d}] {zh_val[:25]:<25} ➔ 🇻🇳 {v_val}")

print("\n=================== SURVIVAL PHRASES AUDIT ===================")
phrases_match = re.search(r'const PHRASES_DATA = \[(.*?)\];\s*// ====', text, re.DOTALL)
if phrases_match:
    ph_block = phrases_match.group(1)
    cards = re.split(r'\{\s*category:', ph_block)
    for idx, card in enumerate(cards[1:], 1):
        vn = re.search(r'vn:\s*"(.*?)"', card)
        py = re.search(r'pinyin:\s*"(.*?)"', card)
        zh = re.search(r'zh:\s*"(.*?)"', card)
        
        vn_val = vn.group(1) if vn else "?"
        py_val = py.group(1) if py else "?"
        zh_val = zh.group(1) if zh else "?"
        
        print(f"[{idx:02d}] {zh_val:<32} | {py_val:<15} ➔ 🇻🇳 {vn_val}")
