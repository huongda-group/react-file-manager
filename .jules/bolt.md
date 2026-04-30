## 2024-05-24 - [Avoid Unmemoized Element Dictionaries in Hooks]
**Learning:** Returning a large dictionary of React elements directly from a hook (`useFileIcons`) causes all those elements to be created on every render. If called multiple times per item (e.g., `FileItem` calls it twice), it becomes a significant bottleneck during list rendering.
**Action:** Always wrap expensive object/element creation in `useMemo` when returning static dictionaries or large lists from hooks.
