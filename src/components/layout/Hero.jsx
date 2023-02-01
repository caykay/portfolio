import styled from "styled-components";
import { ContactBtn } from "./Contact";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { ContentContext, ThemeContext } from "../../context";
import { ACTION_TYPES } from "../../App";

// https://www.framer.com/motion/animation/##propagation
// todo: usePreferedReducedMotion hook from framer-motion
const parentVariants = {
  visible: {
    opacity: 1,
    transition: {
      // when: "beforeChildren",
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

const childVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "anticipate", duration: 1 },
  },
  hidden: { opacity: 0, x: -100 },
};

/* NOTE:
 Casting styled components to motion components is straight-forward
 But for functional components like 'ContactBtn' they have to be passed
 as forwardRefs
*/

// custom btn with fade in animation along side the hero components
const CustomBtn = motion(ContactBtn);

export default function Hero(props) {
  const { animStates, dispatch } = useContext(ContentContext);
  const { navDone } = animStates;
  const { reducedMotion } = useContext(ThemeContext);

  return (
    <StyledHero
      as={motion.section}
      initial={reducedMotion ? false : "hidden"}
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
    </StyledHero>
  );
}

const StyledHero = styled.section`
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    min-height: auto;
    height: auto;
    padding-top: var(--header-height);
  }
`;

const StyledTitle = styled.div`
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;

  font-weight: 600;
`;
