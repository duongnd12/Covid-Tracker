import React from "react";

interface Props {
  heading: string;
  style: string;
}

const Heading = (props: Props) => {
  return <p className={props.style}>{props.heading}</p>;
};

export default Heading;
