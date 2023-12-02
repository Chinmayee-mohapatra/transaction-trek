import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assests/logo.png";
const Header = () => {
  return (
    <div className="bg-slate-900 text-slate-200 flex justify-between items-center px-10 py-2">
      <div>
        <img src={LOGO} alt="logo" height={60} width={60} />
      </div>
      <div className="flex flex-row gap-4 md:gap-10 text-lg font-semibold ">
        <Link
          to={`/`}
          className="hover:cursor-pointer hover:scale-110 hover:text-blue-500 duration-100"
        >
          Home
        </Link>
        <Link
          to={`/transaction`}
          className="hover:cursor-pointer hover:scale-110 hover:text-blue-500 duration-100"
        >
          Transaction
        </Link>
        <Link
          to={`/data`}
          className="hover:cursor-pointer hover:scale-110 hover:text-blue-500 duration-100"
        >
          Data
        </Link>
      </div>
    </div>
  );
};

export default Header;
