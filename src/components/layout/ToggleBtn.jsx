import { motion } from "framer-motion";
import styled from "styled-components";

const StyledToggle = styled.div`
  display: inline-block;
  cursor: pointer;
  .toggle--outer {
    width: 40px;
    aspect-ratio: 2;
    border: 1px solid #ccc;
    border-radius: 50px;
    position: relative;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: center; */
    padding: 0 5%;
  }

  .toggle--inner {
    height: 85%;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(${({ isActive }) => (isActive ? "120%" : "0")});
    transition: transform 0.1s ease-in;
  }
`;

const variants = {
  left: { x: "120%" },
  right: { x: 0 },
};

function Toggle({ isActive, handleClick }) {
  return (
    <StyledToggle className="toggle" onClick={handleClick} isActive={isActive}>
      <div className="toggle--outer">
        <div className="toggle--inner"></div>
      </div>
    </StyledToggle>
  );
}

function ToggleBtn({ text, active, handleClick }) {
  return (
    <div
      className="btn-wrapper"
      style={{ display: "flex", alignItems: "center", gap: "5px" }}
    >
      <Toggle isActive={active} handleClick={handleClick} />
      <span style={{ display: "inline-block", width: "43px" }}>
        {" " + text}
      </span>
    </div>
  );
}

export default ToggleBtn;
