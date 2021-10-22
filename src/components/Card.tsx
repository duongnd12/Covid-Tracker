import React from "react";
import "../index.css";

interface Props {
  tieude: string;
  soCaNhiem: number;
  ngay: string;
  footer: string;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <div>{props.tieude}</div>
      <div>{props.soCaNhiem}</div>
      <div>{props.ngay}</div>
      <div>{props.footer}</div>
    </div>
  );
};

export default Card;
