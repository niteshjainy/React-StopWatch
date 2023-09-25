import { useEffect, useState } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [intId, setIntId] = useState(null);

  useEffect(() => {
    if (intId) {
      clearInterval(intId);
      setIntId(null);
    }
    if (start) {
      handleCount();
    }
  }, [start]);

  const handleCount = () => {
    if (start) {
      const intId = setInterval(() => {
        setCount((e) => e + 1);
      }, 500);
      setIntId(intId);
    }
  };
  return (
    <>
      <h1>My Stopwatch </h1>
      <button
        onClick={() => {
          setCount(0);
          setStart(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setCount(0);
          setStart((e) => !e);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          if (count) setStart((e) => !e);
        }}
      >
        Pause/Resume
      </button>
      <h1>{count}</h1>
    </>
  );
};

export default Clock;
