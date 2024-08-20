// https://buildui.com/recipes/animated-counter
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const fontSize = 25;
const padding = 15;
const height = fontSize + padding;

function Counter({ value }: { value: number }) {
  return (
    <div
      style={{ fontSize }}
      className="flex w-[9rem] justify-evenly gap-3 overflow-hidden rounded bg-neutral-950 px-2"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
      <p>.</p>
      <Digit place={0.1} value={value} />
      <Digit place={0.01} value={value} />
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);

  const springConfig = {
    stiffness: 300,
    damping: 15,
    mass: 0.5,
  };

  let animatedValue = useSpring(valueRoundedToPlace, springConfig);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[0.4ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

export default Counter;
