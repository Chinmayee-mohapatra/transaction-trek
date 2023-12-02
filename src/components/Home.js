import React from "react";
import HOME_PAGE from "../assests/online-payment.jpg";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center max-h-max md:h-[90vh] mt-24 md:my-0">
      <div className=" w-[90%] md:w-[50%] my-auto flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-medium tracking-tight text-teal-950 mb-2 md:mb-10">
          TransactionTrek
        </h1>
        <p className="w-[90%] text-base sm:text-xl font-light text-justify">
          <span className="text-teal-800 font-medium italic">Welcome</span> to
          our transaction tracking app! We're here to simplify your financial
          record-keeping by meticulously capturing wallet addresses and
          transaction amounts. We offer a unique Data page, exclusively
          showcasing posts, offering a{" "}
          <span className="text-teal-950 italic">tailored</span> experience.
          Dive into a comprehensive view of this user's activity, complemented
          by a dynamic pie chart illustration. Stay informed and in control with
          our comprehensive insights and user-focused features.
        </p>
      </div>
      <img src={HOME_PAGE} alt="home-page" className="w-[70%] md:w-[40%]" />
    </div>
  );
};

export default Home;
