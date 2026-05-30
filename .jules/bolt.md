## 2024-05-18 - Missing memoization in React Context Providers
**Learning:** This codebase relies heavily on Context Providers for its core functionality. Passing object literals directly into the `value` prop of Context Providers without `useMemo` leads to severe re-render cascades across consumer components during every single state update.
**Action:** When implementing new Context Providers or making modifications to existing ones, always ensure that functions in the value are wrapped in `useCallback` and the entire value object is wrapped in `useMemo`.
