import React, { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const timer = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, timer);

    return () => clearInterval(interval);
  }, []);

  return <h1>Count: {count}</h1>;
}
