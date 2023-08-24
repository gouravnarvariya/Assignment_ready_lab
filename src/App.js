import React from "react";
import "./App.css";
import groupImage from "./utils/Group8738.png";


const App = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full h-screen tablet:w-[1440px] tablet:h-[1024px] bg-black">
      <div className="w-full h-screen tablet:w-[525px] tablet:h-[1024px] bg-gradient-to-l from-[rgba(38,209,212,0.3)] to-[rgb(2, 3, 12)]">
        <img
          className="w-full lg:w-448 h-197.20375 lg:h-[197.20375px] lg:top-[414px] lg:left-39 relative border-2 border-blue-400"
          src={groupImage}
          alt="groupimage"
        ></img>
      </div>

      <div className="w-full h-screen tablet:w-[744px] tablet:h-[872px] relative  tablet:top-[76px]  tablet:p-[40px]  tablet:my-[10px]">
        <div className="w-full tablet:w-[664px] tablet:h-[706px]  tablet:my-[72px]">
          <div className="w-full tablet:w-[664px] tablet:h-[250px]  tablet:my-7">
            <div className="w-full tablet:w-[664px] tablet:h-[71px]  tablet:my-6">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium leading-8 md:leading-9 text-left text-white">
                Question1/6
              </h1>
              <div className="flex w-full tablet:w-[664px] h-6 tablet:h-[6px]  tablet:my-6 justify-between">
                <div className="w-16 h-1 bg-cyan-300 bg-opacity-25 mr-6 md:mr-3  rounded-lg md:w-32 md:h-2 md:rounded-full"></div>
                <div className="w-16 h-1 bg-cyan-300 bg-opacity-25 mr-6  md:mr-3 rounded-lg md:w-32 md:h-2 md:rounded-full"></div>
                <div className="w-16 h-1 bg-white bg-opacity-25 rounded-lg mr-6 md:mr-3  md:w-32 md:h-2 md:rounded-full"></div>
                <div className="w-16 h-1 bg-white bg-opacity-25 rounded-lg mr-6 md:mr-3 md:w-32 md:h-2 md:rounded-full"></div>

                <div className="w-16 h-1 bg-white bg-opacity-25 rounded-lg mr-6 md:mr-3 md:w-32 md:h-2 md:rounded-full"></div>

                <div className="w-16 h-1 bg-white bg-opacity-25 rounded-lg mr-6 md:mr-3 md:w-32 md:h-2 md:rounded-full"></div>
              </div>
            </div>
            <div className="w-[652px] h-[188px] tablet:w-[652px] tablet:h-[119px]">
              <p className="font-normal text-base md:text-lg lg:text-xl leading-7 md:leading-8 text-left text-white w-full tablet:w-[652px] h-[119px] tablet:w-full tablet:h-auto">
                Lorem ipsum dolor sit amet consectetur. Turpis ut lectus
                pulvinar adipiscing cras lacus enim in libero. Rhoncus lobortis
                tellus cursus turpis. Amet lorem nibh risus viverra id.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full tablet:w-[438px] tablet:h-[248px] md:m-7">
            <div className="w-full tablet:w-[438px] h-16 tablet:h-[64px] rounded-lg border-[0.8px] border-[#334259] bg-slate-850 relative tablet:mb-6 mb-8">
              <div className=" font-medium text-base md:text-xl lg:text-2xl leading-6 md:leading-[56px] text-center text-white pt-2 md:pt-3 lg:pt-4">
                Lorem ipsum
              </div>
            </div>
            <div className="w-full tablet:w-[438px] h-16 tablet:h-[64px] rounded-lg border-[0.8px] border-[#334259] bg-white relative tablet:mb-6 mb-8 font-medium text-base md:text-xl lg:text-2xl leading-6 md:leading-8 text-center text-white">
              <div className="font-medium text-base md:text-xl lg:text-2xl leading-6 md:leading-[56px] text-center text-black pt-2 md:pt-3 lg:pt-4">
                Lorem ipsum
              </div>
            </div>
            <div className="w-full tablet:w-[438px] h-16 tablet:h-[64px] rounded-lg border-[0.8px] border-[#334259] bg-slate-850 relative tablet:mb-6 mb-8">
              <div className=" font-medium text-base md:text-xl lg:text-2xl leading-6 md:leading-[56px] text-center text-white pt-2 md:pt-3 lg:pt-4">
                Lorem ipsum
              </div>
            </div>
          </div>
          <div className="tablet:m-7">
            <div className="w-full tablet:w-[438px] h-16 bg-cyan-500 rounded-lg">
              <div className="font-medium text-base md:text-xl lg:text-2xl leading-6 md:leading-[56px] text-center text-black pt-2 md:pt-3 mb-8 lg:pt-4">
                Lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
