## 2024-05-23 - Context Memoization
**Learning:** This architecture heavily relies on React Contexts for state management. Failing to properly memoize the values passed to Context Providers leads to widespread, unnecessary re-render cascades across all components consuming the context.
**Action:** Always wrap Context Provider values in `useMemo` and use `useCallback` for functions passed within those values to ensure stability and prevent performance degradation.
