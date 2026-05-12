## 2024-05-12 - Missing Context Memoization
**Learning:** React Contexts in this application (FilesContext, SelectionContext, FileNavigationContext, etc.) were passing unmemoized objects as provider values. Because the root component or the providers themselves can re-render, this caused an anti-pattern where every consumer re-rendered purely due to referential inequality of the context value, triggering widespread rendering cascades.
**Action:** Always wrap context provider values in `useMemo` with appropriate dependency arrays.
