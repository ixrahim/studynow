import React from "react";
import { courses } from "../helper";

const Section4 = () => {
  return (
    <div className="">
      {courses.map((course, idx) => {
        return (
          <div
            key={course.id}
            className={`${course.secondary_color} pt-[15px] pb-[16px] px-[18px] mb-[35px] flex flex-row rounded-[10px] cursor-pointer`}
          >
            <div className="w-[126px]  bg-[#fff] mr-[20px]"></div>
            <div className="mb-[1px]">
              <div className="bg-[#fff] rounded-[10px] py-[6px] px-[15px] mb-[24px] w-fit">
                <p className="text-[#F26D0A] text-[12px] leading-[15.31px] font-[400]">
                  {course.tag}
                </p>
              </div>
              <div className="mb-[32px]">
                <p
                  className={`${course.primary_color} text-[18px] leading-[22.97px] font-[700]`}
                >
                  {course.title}
                </p>
              </div>
              <div className="flex flex-row items-center">
                <div className="bg-[#fff] px-[4px] py-[4px] rounded-full mr-[8px]">
                  <img
                    src={course.icon1}
                    alt=""
                    className="object-contain w-[18px]"
                  />
                </div>
                <div className="mr-[18px]">
                  <p
                    className={`${course.primary_color} text-[12px] leading-[15.31px] font-[400]`}
                  >
                    {course.school}
                  </p>
                </div>
                <div className="bg-[#fff] px-[4px] py-[4px] rounded-full">
                  <img
                    src={course.icon2}
                    alt=""
                    className="object-contain w-[15px]"
                  />
                </div>
                <p
                  className={`${course.primary_color} text-[12px] leading-[15.31px] font-[400]`}
                >
                  {course.duration}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section4;
