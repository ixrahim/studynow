import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { links } from "./helper";

const Section2 = () => {
  return (
    <div className="bg-[#fff] pt-[78px] pl-[61px] pr-[63px] pb-[81px] w-[100%] max-w-[589px] h-full">
      <div className="mb-[46px]">
        <p className="text-[42px] leading-[53.59px] text-[#454545] font-[700]">
          My Courses
        </p>
      </div>

      <p className="text-[#514949] text-[18px] font-[400] leading-[18.97px] opacity-[0.8]">
        Welcome back Unique, take your next class
      </p>

      <div className="flex flex-row mt-[36px] mb-[55px]">
        {links.map((link, idx) => {
          return (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-b-[3px] border-solid border-[#F26D0A] text-[#454545] font-[700] mr-[30px] text-[16px] leading-[20.42px]"
                  : "text-[#514949] font-[400] opacity-[0.5] mr-[30px] text-[16px] leading-[20.42px]"
              }
              end
            >
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Section2;
