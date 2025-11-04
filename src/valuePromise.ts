import { useState } from "react";

const p = new Promise(((resolve) => setTimeout(() => resolve({name: "async n"}), 500))) as Promise<{name: string}>;

export const useValue = () => {
  const [value, setValue] = useState<{name: string} | undefined>(undefined);
  p.then(value => setValue(value));
  return value;
}