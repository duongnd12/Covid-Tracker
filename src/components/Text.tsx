import React from "react";

interface Props {
  text: string;
  style: string;
}

const Text = (props: Props) => {
  return (
    <div>
      <p className={props.style}>{props.text}</p>
    </div>
  );
};

export default Text;
