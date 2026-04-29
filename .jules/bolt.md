## 2024-05-18 - Optimize useFileIcons hook
**Learning:** Returning a large object containing many React elements from a custom hook without memoization will cause those elements to be re-created on every single render of components using that hook. Since `useFileIcons` is called inside `FileItem` (which renders for every file in the list), this causes unnecessary allocations and potentially triggers React updates.
**Action:** Always wrap objects or configurations of React elements returned by custom hooks in `useMemo` if they don't need to change between renders.
