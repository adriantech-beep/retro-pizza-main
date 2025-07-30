import { AnimatePresence, motion as Motion, wrap } from "motion/react";
import { useEffect, useState } from "react";
import PizzaOne from "../assets/pizza-images/pngwing.com (1).png";
import PizzaTwo from "../assets/pizza-images/pngwing.com (2).png";
import PizzaThree from "../assets/pizza-images/pngwing.com (3).png";
import PizzaFour from "../assets/pizza-images/pngwing.com (13).png";

export default function UsePresenceData() {
  const items = [PizzaOne, PizzaTwo, PizzaThree, PizzaFour];
  const [direction, setDirection] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function setSlide(newDirection) {
      const nextIndex = wrap(0, items.length, selectedIndex + newDirection);
      setSelectedIndex(nextIndex);
      setDirection(newDirection);
    }

    const timer = setTimeout(() => {
      setSlide(1);
    }, 4000);

    return () => clearTimeout(timer);
  }, [selectedIndex, items.length]);

  const currentImage = items[selectedIndex];

  return (
    <div className="w-full h-[350px] flex justify-center items-center relative">
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <Slide
            key={selectedIndex}
            image={currentImage}
            direction={direction}
          />
        </AnimatePresence>
      </AnimatePresence>
    </div>
  );
}

function Slide({ image, direction }) {
  return (
    <Motion.div
      initial={{ opacity: 0, x: direction * 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.05,
          type: "spring",
          duration: 0.5, // ✅ fixed
          bounce: 0.1,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      className="w-58 sm:w-48 md:w-60 lg:w-72 xl:w-80 mt-2 h-[300px]"
    >
      <img src={image} alt="pizza" className="w-full h-full object-contain" />
    </Motion.div>
  );
}
