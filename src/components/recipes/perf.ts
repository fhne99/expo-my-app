import { useEffect, useState } from "react";

export const counters = { mounted: 0 };
 
export function usePerf(label: string) {
  const [start] = useState(() => performance.now());
  const [mounted, setMounted] = useState(0);
 
  useEffect(() => {
    console.log(`[perf] ${label} : monté en ${Math.round(performance.now() - start)} ms`);
    const id = setInterval(() => setMounted(counters.mounted), 500);
    return () => clearInterval(id);
  }, [label, start]);
 
  return mounted;
}