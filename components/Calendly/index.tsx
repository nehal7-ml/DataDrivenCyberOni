'use client'
import React, { useEffect, useState, ReactNode } from "react";
import { PopupButton } from "react-calendly";

interface CalendlyPopupProps {
  CTAText: string;
  className?: string;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({
  CTAText,
  className,
}) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("__next");
    if (element) {
      setRootElement(element);
    }
  }, []);

  const buttonClass =
    className || "rounded-full bg-white p-3 hover:shadow-md dark:bg-black";

  return (
    <div className="App">
      {rootElement && (
        <PopupButton
          url="https://calendly.com/cyberoni/quick-zoom-meeting"
          rootElement={rootElement}
          text={CTAText}
          className={buttonClass}
        />
      )}
    </div>
  );
};

export default CalendlyPopup;
