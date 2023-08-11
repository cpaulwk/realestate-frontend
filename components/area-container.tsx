import type { NextPage } from "next";
import AreaCard from "./area-card";

const AreaContainer: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-left text-5xl text-gray-white font-body-regular-600">
      <textarea className="[border:none] bg-[transparent] font-semibold font-body-regular-600 text-21xl self-stretch flex flex-col py-0 px-[30px] items-center justify-start md:self-stretch md:w-auto" />
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px]">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <AreaCard cityName="Centerville" />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-2@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-3@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Arlington"
              propBackgroundImage={`url("/card-4@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-5@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
