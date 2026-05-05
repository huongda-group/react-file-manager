## 2024-05-19 - FileItem cascading renders
**Learning:** Derived state in React is extremely powerful. Instead of syncing state with `useState` and `useEffect` and causing a duplicate render, directly deriving state from props (e.g., `const fileSelected = selectedFileIndexes.includes(index);`) saves entire render cycles.
**Action:** Next time I optimize React rendering, I will look closely at components trying to sync prop data via `useEffect` hooks and refactor them to derived state variables directly during the render function execution.
