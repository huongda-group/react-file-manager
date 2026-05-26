## 2025-02-28 - Context Memoization
**Learning:** The architecture heavily relies on React Contexts. Missing memoization in Context Providers leads to widespread rendering cascades across consumer components.
**Action:** When defining React Context Providers, always wrap the provider value in `useMemo` and use `useCallback` for functions passed in the context value to prevent widespread rendering cascades.
