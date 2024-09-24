import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countId = setInterval(() => {
      console.log("Interval ran");
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("Cleaned up");
      document.title = "Count unmounted";
      clearInterval(countId);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
        {document.title = `Count ${count}`}
    </div>
  );
}

export const CountApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  if (isVisible) {
    return (
      <div>
        <button onClick={handleClick}>Hide</button>
        <Count />
      </div>
    );
  }

  return null;
};
