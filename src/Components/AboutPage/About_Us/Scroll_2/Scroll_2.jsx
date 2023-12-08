import "./Scroll_2.css"


export const Scroll2 = ({nextSectionName}) => {

    const scrollToNextSection = () => {
        const nextSection = document.querySelector(nextSectionName);

        if (nextSection) {
            nextSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="scroll_elem_about" onClick={scrollToNextSection}>
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
                    stroke="black"
                    strokeWidth="3"
                ></rect>
                <circle cx="10" cy="27" r="3" fill="black">
                    <animate
                        attributeName="cy"
                        values="27;13;27"
                        dur="1s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
            </svg>
            <span>Scroll down</span>
        </div>
    );
};
  