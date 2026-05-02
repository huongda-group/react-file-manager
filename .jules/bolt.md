## 2024-05-02 - Memoize useFileIcons for file list rendering performance
**Learning:** Returning a new object from a hook on every render causes all consuming components to re-render or perform unnecessary garbage collection, especially detrimental in list items like FileItem.
**Action:** Always wrap static dictionary objects in useMemo when returned from hooks.
