import React from "react";

interface Props {
  img: string;
  heading: string;
}

const Item = (props: Props) => {
  return (
    <div className="text-center">
      <img className="w-20 h-20" src={props.img} alt="img" />
      <p className="text-red-500 font-bold">{props.heading}</p>
      <p className="text-red-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ab
        cupiditate, dolor vel sint eligendi.
      </p>
    </div>
  );
};

export default Item;
