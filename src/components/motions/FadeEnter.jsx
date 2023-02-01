import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
};

// TWO ways to make a component animatable
// 1: (use a higher order component - require to forward ref if functional component)
// 2: (use motion props - requires to import motion module/recommended for styled-components)

/* props for motion animation
The component using the props has to be a motion component */
const fadeEnterProps = {
  initial: (reducedMotion = false) => (reducedMotion ? false : "hidden"),
  whileInView: "visible",
  viewport: { once: true, amount: 0.3, margin: "100px" },
  variants: { ...variants },
};

/* HOC: takes in a component and returns a motion component
 for functional components they have to be passed in as forwardrefs
*/
const makeFadeEnter = (Component) => {
  const CustomComponent = motion(Component);

  return (props) => {
    const reducedMotion = useReducedMotion();
    return (
      <CustomComponent custom={reducedMotion} {...fadeEnterProps} {...props} />
    );
  };
};

export { makeFadeEnter as default, fadeEnterProps };
