import React from "react";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-white font-light flex flex-col items-center pt-10 pb-4">
      <div className="w-full flex flex-col-reverse sm:flex-row gap-4 justify-evenly items-start pl-10 sm:pl-0 sm:items-center mb-10 ">
        <div>
          <ul>
            <li className="mt-2 text-xl font-normal">Contact</li>
            <li className="mt-2 flex items-center gap-2">
              <FaPhone />
              <span>+919870654321</span>
            </li>
            <li className="mt-2 flex items-center gap-2">
              <TfiEmail />
              <span>transactiontrek@gmail.com</span>
            </li>
            <li className="mt-2 flex items-center gap-2">
              <MdLocationOn />
              <span>Hyderabad, Telangana, India</span>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mt-2">About</li>
            <li className="mt-2">Transaction</li>
            <li className="mt-2">Data</li>
            <li className="mt-2">Services</li>
          </ul>
        </div>
      </div>

      <div className="tracking-wider bg-purple-950 w-full flex justify-center gap-1 py-2">
        Created by <span className="text-blue-200"> Chinmayee, 2023 </span>
      </div>
    </div>
  );
};

export default Footer;
