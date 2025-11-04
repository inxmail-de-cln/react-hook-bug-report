import { useEffect, useState } from "react";

export const useValue = () => {
  const [value, setValue] = useState<{name: string} | undefined>(undefined);
  useEffect(() => {
    const timeout = setTimeout(() => setValue({ name: "async name" }), 500);
    return () => clearTimeout(timeout);
  }, []);
  return value;
}