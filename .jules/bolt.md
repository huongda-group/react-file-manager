## 2024-05-03 - React Elements Recreated in Custom Hooks
**Learning:** Custom hooks that return static objects containing React elements (e.g., `<Icon size={size} />`) will recreate those elements on every render if not memoized, leading to hundreds or thousands of redundant memory allocations in mapping components like `FileItem` where the hook is called per item.
**Action:** Always wrap objects of React elements in `useMemo` when returned from hooks, especially when the hook receives arguments that change infrequently (like `size`), to ensure the elements are reused.
