## 2024-05-24 - [Memoizing Static Object References in Hooks]
**Learning:** In React, hooks like `useFileIcons` that return a dictionary of `ReactElement`s can cause huge performance bottlenecks when called within large lists (like mapping over 100s of files). If `useMemo` isn't used, every render recreates 34 element allocations for *each* use of the hook.
**Action:** Use `useMemo` based on dynamic parameters (`size` in this case) to memoize object dictionaries containing `ReactElement` references when they are used in list iterations.
