"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";

interface FAQ {
  title: string;
  description: string;
}

const FAQs: React.FC<FAQ> = ({ title, description }) => {
  return <section>
    
  </section>;
};

function Accordion() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Click to toggle 1</button>
      <Collapse isOpened={open}>
        <div>
          <p>
            This is the content that will collapse and expand when you click the
            button.
          </p>
        </div>
      </Collapse>
    </div>
  );
}

export default Accordion;
