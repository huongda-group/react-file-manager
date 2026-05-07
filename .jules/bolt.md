## 2026-05-07 - [Memoize useFileIcons dictionary]
**Learning:** Returning unmemoized dictionaries from hooks like `useFileIcons` inside frequently rendered components (`FileItem`) causes unnecessary creation of React elements (e.g., 6800 elements for 100 items).
**Action:** Use `useMemo` inside hooks returning non-primitive static maps or dictionaries where possible, adding relevant dependencies to prevent unnecessary recalculations.
