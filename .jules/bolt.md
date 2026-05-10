## 2024-05-10 - Context Value Memoization
**Learning:** Context provider values missing `useMemo` cause massive re-render cascades across the entire app whenever the parent component re-renders. This is especially problematic for `FilesContext`, `SelectionContext`, `FileNavigationContext`, and `ClipBoardContext` because they have many consumers (e.g. hundreds of `FileItem`s).
**Action:** Always wrap context values in `useMemo` and functions in `useCallback` when creating a new context provider.
