import { useCallback, useState } from "react";
import PropTypes from "prop-types";

import "./Accordion.less";

const Accordion = ({ id, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <div className="Accordion">
      <button
        className="Accordion__button"
        aria-controls={id}
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        {label}
        <span role="presentation">{isOpen ? "-" : "+"}</span>
      </button>
      <div id={id} className="Accordion__content" aria-hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
};

export default Accordion;
