import React from "react";
import { Images } from "../constants/images";

export default function Header() {
  return (
    <div className="w-full bg-white flex justify-between shadow-md">
      <div className="logo w-3/12">
        <img className="px-5" src={Images.Logo} alt="Logo" />
      </div>

      <div className="nav w-8/12 flex justify-around items-center">
        <ul className="w-full flex justify-around items-center p-5 font-bold text-gray-600">
          <li>
            <a href="#" className="hover:text-red-400">
              Trang Chủ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Về Covid-19
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Các Triệu Chứng
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Bảo Vệ Bản Thân
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Bảo Vệ Cộng Đồng
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Thông Tin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
