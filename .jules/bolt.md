## 2025-05-13 - Memoizing Context Values
**Learning:** Context Providers in this codebase were creating new object identities for their values on every render (e.g., `value={{ a, b }}`). This causes unnecessary re-renders of all context consumers even when the underlying data hasn't changed, which is a significant performance bottleneck due to the heavy reliance on Contexts for state management.
**Action:** Always wrap Context Provider values in `useMemo` and use `useCallback` for functions passed in the context value to prevent widespread rendering cascades.
