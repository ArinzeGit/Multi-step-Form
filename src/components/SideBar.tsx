import { useContext } from "react";
import Number from "./Number";
import { formDataContext } from "../App";

const SideBar = () => {
  const { currentStepIndex } = useContext(formDataContext);
  return (
    <div
      data-testid="sideBarComponent"
      className="bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] desktop:bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] min-h-[172px] desktop:min-h-[568px] desktop:w-[274px] bg-cover bg-no-repeat bg-center pt-8 flex justify-center gap-4 desktop:block desktop:px-[32px] desktop:py-[40px] desktop:rounded-[10px]"
    >
      <div className="desktop:mb-[32px] desktop:flex desktop:gap-[16px] desktop:items-center">
        <Number number="1" highlighted={currentStepIndex === 0} />
        <div className="hidden desktop:block">
          <p className="text-[#ABBCFF] text-[12px] font-['Ubuntu-Regular'] mb-[4px]">
            STEP 1
          </p>
          <h1 className="text-[white] text-[14px] font-['Ubuntu-Bold'] leading-[1.14]">
            YOUR INFO
          </h1>
        </div>
      </div>
      <div className="desktop:mb-[32px] desktop:flex desktop:gap-[16px] desktop:items-center">
        <Number number="2" highlighted={currentStepIndex === 1} />
        <div className="hidden desktop:block">
          <p className="text-[#ABBCFF] text-[12px] font-['Ubuntu-Regular'] mb-[4px]">
            STEP 2
          </p>
          <p className="text-[white] text-[14px] font-['Ubuntu-Bold'] leading-[1.14]">
            SELECT PLAN
          </p>
        </div>
      </div>
      <div className="desktop:mb-[32px] desktop:flex desktop:gap-[16px] desktop:items-center">
        <Number number="3" highlighted={currentStepIndex === 2} />
        <div className="hidden desktop:block">
          <p className="text-[#ABBCFF] text-[12px] font-['Ubuntu-Regular'] mb-[4px]">
            STEP 3
          </p>
          <p className="text-[white] text-[14px] font-['Ubuntu-Bold'] leading-[1.14]">
            ADD-ONS
          </p>
        </div>
      </div>
      <div className="desktop:flex desktop:gap-[16px] desktop:items-center">
        <Number number="4" highlighted={currentStepIndex >= 3} />
        <div className="hidden desktop:block">
          <p className="text-[#ABBCFF] text-[12px] font-['Ubuntu-Regular'] mb-[4px]">
            STEP 4
          </p>
          <p className="text-[white] text-[14px] font-['Ubuntu-Bold'] leading-[1.14]">
            SUMMARY
          </p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
