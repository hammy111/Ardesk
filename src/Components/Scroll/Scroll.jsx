import "./Scroll.css";

export const Scroll = ({nextSectionName}) => {

  const scrollToNextSection = () => {
    const nextSection = document.querySelector(nextSectionName);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll_elem"  onClick={scrollToNextSection}>
      <span className="scroll_span">Scroll down</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="40"
        viewBox="0 0 20 40"
        fill="none"
      >
        <rect
          x="1.5"
          y="1.5"
          width="17"
          height="37"
          rx="8.5"
          stroke="white"
          strokeWidth="3"
        ></rect>
        <circle cx="10" cy="27" r="3" fill="white">
          <animate
            attributeName="cy"
            values="1;9;40"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};
