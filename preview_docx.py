from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET
import html

src = Path('frontpage Manga.docx')
out = Path('frontpage_manga_preview.html')
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

with zipfile.ZipFile(src) as z:
    root = ET.fromstring(z.read('word/document.xml'))

paragraphs = []
for p in root.findall('.//w:p', ns):
    texts = []
    for t in p.findall('.//w:t', ns):
        if t.text:
            texts.append(t.text)
    if texts:
        paragraphs.append(''.join(texts))

html_text = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>Frontpage Manga Preview</title><style>body{font-family:Georgia,serif;line-height:1.5;padding:24px;max-width:900px;margin:0 auto;}p{margin:0 0 12px;}</style></head><body>'
for para in paragraphs:
    html_text += f'<p>{html.escape(para)}</p>'
html_text += '</body></html>'

out.write_text(html_text, encoding='utf-8')
print(out)
