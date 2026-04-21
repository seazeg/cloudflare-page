import re

with open('/Users/geng/Project/work/tools/surmox.net/public/css/style.css', 'r') as f:
    content = f.read()

def replace_font_size(match):
    size = int(match.group(1))
    new_size = max(size - 2, 10)  # 最小10px
    return f'font-size: {new_size}px'

content = re.sub(r'font-size: (\d+)px', replace_font_size, content)

with open('/Users/geng/Project/work/tools/surmox.net/public/css/style.css', 'w') as f:
    f.write(content)

print("Font sizes reduced by 2px")
