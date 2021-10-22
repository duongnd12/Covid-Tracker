import React from "react";
import { Images } from "../constants/images";
export default function logo() {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      <img className="w-3/6 h-52" src={Images.Logo} alt="Logo" />
    </div>
  );
}
