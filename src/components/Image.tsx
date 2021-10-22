import React from "react";
import { Images } from "../constants/images";

interface Props {
  img: string;
}

const Image = (props: Props) => {
  return (
    <div className="w-5/12">
      <img src={props.img} className="w-full p-5" />
    </div>
  );
};

export default Image;
