## 2024-05-24 - Context Value Memoization

**Learning:** Unmemoized values in React Context providers (like those passing dynamic arrays or newly created function references) cause immediate re-rendering of all consumers, bypassing standard optimization strategies. This architecture heavily utilizes contexts for core feature components (FilesContext, ClipboardContext, SelectionContext).

**Action:** Always wrap context provider value objects in `useMemo` and standard exposed utility functions in `useCallback` when introducing context state optimizations to avoid widespread rendering cascades.
