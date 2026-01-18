import re

with open('index.html', 'r') as f:
    content = f.read()

# Pattern to match service links that haven't been updated yet
old_pattern = r'service-link flex items-center justify-between px-5 py-4 hover:bg-(orange|green)-50'
new_pattern_template = r'service-link flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-\1-50'

content = re.sub(old_pattern, new_pattern_template, content)

# Update text sizes
content = re.sub(
    r'(hover:bg-(?:orange|green)-50[^>]*text-)sm( font-medium)',
    r'\1xs sm:text-sm\2',
    content
)

# Update gap sizes
content = re.sub(
    r'(flex items-center )gap-3(\s*>\s*<span class="material-symbols-outlined text-)lg',
    r'\1gap-2 sm:gap-3\2base sm:text-lg',
    content
)

# Add flex-shrink-0 to arrow icons that don't have it
content = re.sub(
    r'(hover/link:translate-x-1 transition-transform)">arrow_forward',
    r'\1 flex-shrink-0">arrow_forward',
    content
)

# Add line-clamp-1 spans where missing (except for the URGENT badge line)
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'service-link' in line and 'orange-50' in line or 'green-50' in line:
        if i+2 < len(lines) and '<span class="flex items-center gap' in lines[i+1]:
            # Check if next lines have the service name without span wrapper
            if i+3 < len(lines) and 'line-clamp-1' not in lines[i+3] and 'URGENT' not in lines[i+3]:
                # Find the service name line
                for j in range(i+1, min(i+6, len(lines))):
                    if 'material-symbols-outlined' in lines[j] and '>' in lines[j]:
                        next_line_idx = j + 1
                        if next_line_idx < len(lines):
                            service_line = lines[next_line_idx].strip()
                            if service_line and not service_line.startswith('<') and 'URGENT' not in service_line:
                                lines[next_line_idx] = lines[next_line_idx].replace(
                                    service_line, 
                                    f'<span class="line-clamp-1">{service_line}</span>'
                                )
                        break

content = '\n'.join(lines)

with open('index.html', 'w') as f:
    f.write(content)

print("Updated remaining service links")
