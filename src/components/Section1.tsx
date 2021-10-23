import React from "react";
import Text from "./Text";
import Heading from "./Heading";
import { Images } from "../constants/images";

interface Props {
  style: string;
  heading: string;
  text: string;
}

const Section1 = (props: Props) => {
  return (
    <div id="aboutcovid" className={props.style}>
      <div className="w-5/12">
        <img src={Images.Stayhome} alt="Stayhome" className="w-full p-5" />
      </div>
      <div className="w-6/12 flex justify-center items-center">
        <div className="text-left">
          <Heading style={props.style} heading={props.heading} />
          <Text style={props.style} text={props.text} />
          <a href="#" className="bg-red-300 text-white p-3 border rounded-3xl">
            Về Covid-19
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
