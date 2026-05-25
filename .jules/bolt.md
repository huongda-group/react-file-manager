## 2026-05-25 - Prevent render cascades via Context Memoization
**Learning:** In heavily Context-driven architectures like this one, failing to wrap Context Provider `value` objects in `useMemo` and functions in `useCallback` causes every consumer component to re-render whenever the provider's parent re-renders, creating massive performance bottlenecks.
**Action:** Always wrap the `value` object in `useMemo` and functions passed to the context value in `useCallback` when defining React Context Providers.
