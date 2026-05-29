## 2024-05-29 - React Context Re-render Cascades
**Learning:** The architecture heavily relies on React Contexts (`FilesContext`, `SelectionContext`, `FileNavigationContext`) for state management. Previously, context provider values were passed as new object references on every render, causing extensive re-render cascades across consumer components whenever the provider re-rendered.
**Action:** Always wrap Context Provider values in `useMemo` and use `useCallback` for functions passed in the context value to prevent widespread rendering cascades across consumer components.
