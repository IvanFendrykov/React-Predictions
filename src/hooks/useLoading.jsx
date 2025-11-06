import { useEffect, useRef, useState } from "react";

export default function useLoadingSteps(
  steps,
  { duration = 5000, stepInterval = 1670 } = {}
) {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(steps?.[0] ?? "");
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    timeoutRef.current = null;
  };

  useEffect(() => clearTimers, []);

  const start = () => {
    if (!steps?.length) return;
    clearTimers();
    setLoading(true);
    setText(steps[0]);

    let i = 0;
    intervalRef.current = setInterval(() => {
      i = (i + 1) % steps.length;
      setText(steps[i]);
    }, stepInterval);

    timeoutRef.current = setTimeout(() => {
      clearTimers();
      setLoading(false);
    }, duration);
  };

  const stop = () => {
    clearTimers();
    setLoading(false);
  };

  return { loading, text, start, stop };
}
