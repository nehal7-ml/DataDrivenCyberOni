'use client'
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const CalendlyPopup = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("__next");
    if (element) {
      setRootElement(element);
    }
  }, []);

  return (
    <div className="App">
      {rootElement && (
        <PopupButton
          url="https://calendly.com/theapartmentguru/30min"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={rootElement}
          text="Click here to schedule!"
          className="w-fit rounded-md bg-guru-blue p-5 px-7 text-white hover:shadow-md"
        />
      )}
    </div>
  );
};

export default CalendlyPopup;
