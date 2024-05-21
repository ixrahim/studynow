import React from "react";
import notification_icon from "../../assets/png/notification_icon.png";
import search_icon from "../../assets/png/search_icon.png";
import trophy from "../../assets/png/trophy.png";
import list_icon from "../../assets/png/list_icon.png";
import { FaChevronRight } from "react-icons/fa6";
import { achievements, listItems } from "./helper";
const Section3 = () => {
  return (
    <div className="pt-[78px] pb-[81px] w-[100%] max-w-[500px] flex flex-col px-[32px]">
      <div className="w-full">
        <div className="max-w-[365px]">
          <div className="flex w-full justify-between mb-[41px] pt-[10px]">
            <div className="bg-[#fff] px-[8px] py-[8px] rounded-full flex justify-center items-center">
              <img src={notification_icon} alt="" />
            </div>
            <div className="bg-[#fff] outline-none border-none rounded-[10px] pr-[27px] pl-[8px] flex items-center h-[44px]">
              <img
                src={search_icon}
                alt=""
                className="w-[24px] mr-[8px] object-contain h-[24px]"
              />
              <input
                type="text"
                className="bg-[#fff] outline-none border-none rounded-[10px] text-[14px] h-[17px]"
                placeholder="Search for courses"
              />
            </div>
          </div>
          <p className="font-[700] text-[24px] leading-[30.62px] text-[#454545]">
            Milestones
          </p>
          <div className="mt-[16px] bg-[#fff] rounded-[10px] pt-[17px] pb-[20px] px-[20px] flex justify-start items-center mb-[56px]">
            <img src={trophy} alt="" className="w-[76px] h-[83px] mr-[21px]" />
            <div className="h-[75px] flex flex-col items-end justify-end relative">
              <p className="w-full font-[700] text-[18px] leading-[22.97px] text-[#454545]">
                Goals
              </p>
              <div className="flex items-center gap-x-[12px]">
                <div className="bg-[#51494950] h-[6px] w-[165px] rounded-[10px] before:block before:absolute before:h-[6px] before:w-[140px] before:bg-[#F26D0A] before:rounded-[10px]"></div>
                <p>82%</p>
              </div>
            </div>
          </div>
          <div className="mb-[56px]">
            <p className="font-[700] text-[18px] leading-[22.97px] text-[#454545] mb-[16px]">
              You have successfully completed
            </p>
            <div className="w-full max-h-[235px] overflow-y-auto rounded-[10px] custom-scroll">
              {achievements.map((achievement, idx) => {
                return (
                  <div
                    key={achievement.id}
                    className="flex py-[21px] px-[22px] items-center bg-[#fff] border-b border-solid border-b-[#51494920] w-full justify-between last:border-none cursor-pointer"
                  >
                    <div className="flex items-center  ">
                      <div
                        className={`${achievement.icon_bg} rounded-full py-[7px] px-[7px] mr-[32px] max-w-[39px] max-h-[39px]`}
                      >
                        <img
                          src={achievement.icon}
                          alt=""
                          className="w-[25px] h-[25px] object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div>
                          <p className="text-[#454545] text-[18px] leading-[22.97px] font-[700]">
                            {achievement.count}
                          </p>
                        </div>
                        <div>
                          <p className="opacity-[0.5] text-[12px] font-[400] leading-[15.31px] text-[#514949]">
                            {achievement.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <FaChevronRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-[370px]">
          <p className="font-[700] text-[18px] text-[#454545] leading-[22.97px] mb-[17px]">
            Amazing Performance in
          </p>
          <ul>
            {listItems.map((item, idx) => {
              return (
                <li key={item.id} className="flex items-baseline">
                  <img
                    src={list_icon}
                    alt=""
                    className="w-[10px] object-contain mr-[11px]"
                  />
                  <div>
                    <p className="font-[700] text-[24px] text-[#454545] leading-[30.62px] mb-[8px]">
                      {item.title}
                    </p>
                    <p className="font-[400] text-[#454545] opacity-[0.5] text-[14px] leading-[17.86px] mb-[8px]">
                      {item.content}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;
