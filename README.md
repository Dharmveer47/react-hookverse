# react-hookverse

**react-hookverse** is a collection of custom React hooks designed to simplify common tasks and enhance your React development experience.

## Installation

To install this package, use npm or yarn:

```bash
npm install react-hookverse
# or
yarn add react-hookverse
```

```js
import React, { useState } from "react";
import useDebounce from "react-hookverse";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // Debounce with a delay of 500ms

  React.useEffect(() => {
    // This effect will run only when the debouncedQuery value changes
    if (debouncedQuery) {
      // Perform search or API call here
      console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### useTimeout

```js
import { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
```
