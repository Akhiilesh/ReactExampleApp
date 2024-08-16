import { useEffect } from "react";

export default function Count({ number }) {
  // const value = 5;
  const text = `This is your value ${number}`;

  useEffect(() => {
    document.title = `Your Number is ${number} Times`;
    return () => {
      document.title = "Counter App";
    };
  }, [number]);

  return <span className="count">{text}</span>;
}
