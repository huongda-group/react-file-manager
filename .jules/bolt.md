## 2024-05-24 - React Context Re-render Cascades
**Learning:** The architecture heavily relies on React Contexts (e.g., FilesContext, SelectionContext, FileNavigationContext) for state management. Failing to memoize the context values causes widespread rendering cascades across consumer components, significantly impacting performance.
**Action:** When defining React Context Providers, always wrap the provider value in `useMemo` and use `useCallback` for functions passed in the context value to prevent widespread rendering cascades across consumer components.
