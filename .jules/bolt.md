## 2024-05-27 - Context Memoization

**Learning:** In a highly contextual React architecture (like this file manager leveraging multiple Contexts for global state), failing to wrap Context Provider `value` props in `useMemo` and provided functions in `useCallback` is a critical performance bottleneck. It causes massive unnecessary render cascades down the component tree whenever any parent state updates, overriding other optimizations like `React.memo`.
**Action:** Always wrap Context Provider `value` props in `useMemo` and provided functions in `useCallback` when building React applications with heavy Context dependency, particularly when components manage significant state like file trees or selections.
