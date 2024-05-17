import React from "react";
import logo from "../../assets/png/logo.png";
import pfp from "../../assets/png/pfp.png";
import ad from "../../assets/png/left_menu_img.png";
import { NavLink } from "react-router-dom";
import { links2 } from "./helper";

const Section1 = () => {
  return (
    <div className="bg-[#fcfbf7] pl-[100px] w-[100%] pt-[78px] pb-[81px] max-w-[351px] flex  flex-col h-full">
      <div className="pb-[70px]">
        <img src={logo} alt="" className="w-[124px]" />
      </div>
      <div className="flex py-[12px]">
        <div className="mr-[16px]">
          <img src={pfp} alt="" className="w-[39px]" />
        </div>
        <div>
          <div>
            <p className="text-[16px] font-[600] leading-[19.2px] mb-[4px]">
              Uniqueideas
            </p>
          </div>
          <div>
            <p className="text-[#514949] text-[12px] leading-[15.31px] font-[400] opacity-[0.5]">
              Creative Designer
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[45px]">
        {links2.map((link, idx) => {
          return (
            <div
              key={link.id}
              className={
                idx === links2.length - 1
                  ? "flex flex-row "
                  : "flex flex-row mb-[29px]"
              }
            >
              <img src={link.icon} alt="" className="w-[24px] object-contain" />
              <NavLink
                href={link.path}
                className={
                  idx === 1
                    ? "pt-[2px] pb-[3px] pl-[8px] text-[#454545]"
                    : "pt-[2px] pb-[3px] pl-[8px] text-[#514949] opacity-[0.5]"
                }
                // className={({ isActive, isPending }) =>
                //   isPending
                //     ? "pending"
                //     : isActive
                //     ? "active"
                //     : "pt-[2px] pb-[3px] pl-[8px]"
                // }
                end
              >
                <span className="pointer-events-none">{link.name}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="mt-[50px] max-w-[248px] mb-[21px]">
        <img src={ad} alt="" className="w-[]" />
      </div>
      <div className="mr-[7px]">
        <p className="text-center text-[18px] leading-[22.97px] font-[700] mb-[8px] text-black">
          Invite Friends
        </p>
        <p className="text-center text-[14px] leading-[17.86px] font-[400 text-black">
          Get free month of premium content
        </p>
      </div>
      <div className="flex justify-center mt-[32px]">
        <button className="bg-[#F26D0A] pt-[14px] pb-[15px] px-[44px] text-[16px] leading-[20.42px] text-[#fff] rounded-[10px]">
          Get the Link
        </button>
      </div>
    </div>
  );
};

export default Section1;
