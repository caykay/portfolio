import styled from "styled-components";
import { ContactBtn } from "./Contact";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../../context";
import { ACTION_TYPES } from "../../App";

// https://www.framer.com/motion/animation/##propagation
// todo: usePreferedReducedMotion hook from framer-motion
const parentVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
};

const childVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

/* NOTE:
 Casting styled components to motion components is straight-forward
 But for functional components like 'ContactBtn' they have to be passed
 as forwardRefs
*/

const CustomBtn = motion(ContactBtn);

export default function Hero(props) {
  const { animStates, dispatch } = useContext(ContentContext);
  const { navDone } = animStates;

  return (
    <StyledHome
      as={motion.section}
      initial="hidden"
      animate={navDone && "visible"}
      variants={parentVariants}
      onAnimationComplete={(definition) => {
        dispatch({ type: ACTION_TYPES.HERO_DONE });
      }}>
      <motion.div className="welcome" variants={childVariants}>
        Welcome, my name is
      </motion.div>
      <div>
        <StyledTitle as={motion.div} className="name" variants={childVariants}>
          Cassian Kahema.
        </StyledTitle>
        <StyledTitle as={motion.div} className="title" variants={childVariants}>
          A Graduate Software developer.
        </StyledTitle>
      </div>
      <motion.p className="summary" variants={childVariants}>
        I am a software developer with a passion for web development, back-end
        technologies and image processing, specifically OCR tools.
        {/* I am excited to bring my knowledge
        and expertise to any project in the web development field. Thank you for
        visiting. */}
      </motion.p>
      <CustomBtn btnText={"Contact Me"} variants={childVariants} />
    </StyledHome>
  );
}

const StyledHome = styled.section`
  height: 100vh;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  .welcome {
    font-family: "PT Mono", monospace;
  }
  .name {
    color: var(--tertiary-color);
  }
  .title {
    color: var(--secondary-color);
    margin-top: 10px;
  }
  .summary {
    color: var(--secondary-color);
    max-width: 520px;
  }

  @media (max-height: 500px), (max-width: 450px) {
    height: auto;
  }
`;

const StyledTitle = styled.div`
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;

  font-weight: 600;
`;
