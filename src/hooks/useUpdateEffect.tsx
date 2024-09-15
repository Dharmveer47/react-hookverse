import { DependencyList, useEffect, useRef } from "react";

export function useUpdateEffect<T extends () => void>(
  callback: T,
  dependencies: DependencyList
): void {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
