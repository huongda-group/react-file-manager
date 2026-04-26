## 2024-05-18 - [Memoizing large maps of React Elements]
**Learning:** Generating large maps of React Elements directly inside unmemoized custom hooks (like `useFileIcons`) causes significant memory allocation per render, especially when the hook is called per item in a large list (like `FileItem` in `FileList`).
**Action:** Always wrap mapping objects containing React components or instances in `useMemo` when returning them from custom hooks, depending on relevant props (e.g. `size`), to reduce garbage collection and component re-render overhead.
