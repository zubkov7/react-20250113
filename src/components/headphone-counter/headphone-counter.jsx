import { useEffect } from "react";
import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = () => {
  const { value, increment, decrement } = useCount();

  useEffect(() => {
    increment();
  }, [increment]);

  useEffect(() => {
    // effect
    console.log("mount");

    // cleanup function
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log(`effect - ${value}`);

    return () => {
      console.log(`cleanup - ${value}`);
    };
  }, [value]);

  useEffect(() => {
    const callback = () => console.log("scroll");
    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
