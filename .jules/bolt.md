## 2024-05-06 - [Global Icon Cache]
**Learning:** `useFileIcons` hook creates an object with ~34 React elements (AnimatedIcon wrapping Lucide icons) every time it is called. Since it's used inside `FileItem`, rendering a large list of files causes massive React element creation and memory allocation on every render, severely impacting frontend performance.
**Action:** Use a global cache or React `useMemo` in `useFileIcons` to ensure the 34 React elements are only created once per unique icon size, rather than per `FileItem` render.
