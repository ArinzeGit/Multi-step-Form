import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useContext } from "react";
import { formDataContext } from "../App";

const PlanSelectForm = () => {
  const { plan, setPlan, setIsPlanSelected, planError, billing, setBilling } =
    useContext(formDataContext);

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(event.target.value);
    setIsPlanSelected(true);
  };

  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBilling(event.target.value);
  };

  const toggleBiling = () => {
    billing === "Monthly" ? setBilling("Yearly") : setBilling("Monthly");
  };

  return (
    <div
      data-testid="planSelectFormComponent"
      className=" w-[min(91.5%,400px)] desktop:w-[100%] mx-auto mt-[-73px] desktop:mt-[0px] relative bg-white py-[32px] desktop:py-[40px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] desktop:shadow-[none] rounded-[10px]"
    >
      <div className="w-[86%] desktop:w-[450px] mx-auto relative">
        {planError && (
          <p className="absolute text-[#d33e4c] text-[12px] desktop:text-[14px] desktop:leading-[1.14] font-['Ubuntu-Bold'] top-[90px] desktop:top-[85px]">
            Please select a plan to proceed
          </p>
        )}
        <p className="text-[#022959] text-[24px] desktop:text-[32px] font-['Ubuntu-Bold'] desktop:leading-[1.16]">
          Select your plan
        </p>

        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] desktop:mt-[11px] leading-[1.56]">
          You have the option of monthly or yearly billing.
        </p>

        <div className="desktop:flex desktop:gap-[18px] desktop:mt-[35px]">
          <input
            type="radio"
            id="arcade"
            name="plan"
            value="Arcade"
            className="hidden peer/arcade"
            checked={plan === "Arcade"}
            onChange={handlePlanChange}
          />
          <label
            htmlFor="arcade"
            className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/arcade:outline-[#483EFF] peer-checked/arcade:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[14px] desktop:pt-[99px] pb-[15px] desktop:pb-[14px] pl-[70px] desktop:px-[16px] pr-[14px] relative mt-[22px] desktop:mt-0 desktop:flex-[1_1_100%]"
          >
            <img
              src={arcade}
              alt="arcade"
              className="absolute top-[17px] desktop:top-[20px] left-[16px] desktop:left-[16px]"
            />
            <div className="text-[#022959] text-[16px] font-['Ubuntu-Medium'] leading-[1.125]">
              Arcade
            </div>
            <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] mt-[7px] mb-[3px] desktop:mb-[6px] leading-[1.429] desktop:leading-[1.143]">
              {billing === "Yearly" ? "$90/yr" : "$9/mo"}
            </div>
            <div className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] leading-[1.83] desktop:leading-[1.9]">
              {billing === "Yearly" && "2 months free"}
            </div>
          </label>
          <input
            type="radio"
            id="advanced"
            name="plan"
            value="Advanced"
            className="hidden peer/advanced"
            checked={plan === "Advanced"}
            onChange={handlePlanChange}
          />
          <label
            htmlFor="advanced"
            className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/advanced:outline-[#483EFF] peer-checked/advanced:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[14px] desktop:pt-[99px] pb-[15px] desktop:pb-[14px] pl-[70px] desktop:px-[16px] pr-[14px] relative mt-[12px] desktop:mt-0 desktop:flex-[1_1_100%]"
          >
            <img
              src={advanced}
              alt="advanced"
              className="absolute top-[17px] desktop:top-[20px] left-[16px] desktop:left-[16px]"
            />
            <div className="text-[#022959] text-[16px] font-['Ubuntu-Medium'] leading-[1.125]">
              Advanced
            </div>
            <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] mt-[7px] mb-[3px] desktop:mb-[6px] leading-[1.429] desktop:leading-[1.143]">
              {billing === "Yearly" ? "$120/yr" : "$12/mo"}
            </div>
            <div className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] leading-[1.83] desktop:leading-[1.9]">
              {billing === "Yearly" && "2 months free"}
            </div>
          </label>
          <input
            type="radio"
            id="pro"
            name="plan"
            value="Pro"
            className="hidden peer/pro"
            checked={plan === "Pro"}
            onChange={handlePlanChange}
          />
          <label
            htmlFor="pro"
            className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/pro:outline-[#483EFF] peer-checked/pro:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[14px] desktop:pt-[99px] pb-[15px] desktop:pb-[14px] pl-[70px] desktop:px-[16px] pr-[14px] relative mt-[12px] desktop:mt-0 desktop:flex-[1_1_100%]"
          >
            <img
              src={pro}
              alt="pro"
              className="absolute top-[17px] desktop:top-[20px] left-[16px] desktop:left-[16px]"
            />
            <div className="text-[#022959] text-[16px] font-['Ubuntu-Medium'] leading-[1.125]">
              Pro
            </div>
            <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] mt-[7px] mb-[3px] desktop:mb-[6px] leading-[1.429] desktop:leading-[1.143]">
              {billing === "Yearly" ? "$150/yr" : "$15/mo"}
            </div>
            <div className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] leading-[1.83] desktop:leading-[1.9]">
              {billing === "Yearly" && "2 months free"}
            </div>
          </label>
        </div>

        <div className="relative bg-[#F8F9FF] rounded-[8px] flex gap-[86px] justify-center h-12 items-center mt-[24px] desktop:mt-[32px]">
          <input
            type="radio"
            id="monthly"
            name="billing"
            value="Monthly"
            className="hidden peer/monthly"
            checked={billing === "Monthly"}
            onChange={handleBillingChange}
          />

          <input
            type="radio"
            id="Yearly"
            name="billing"
            value="Yearly"
            className="hidden peer/Yearly"
            checked={billing === "Yearly"}
            onChange={handleBillingChange}
          />

          <label
            htmlFor="monthly"
            className="  peer-checked/monthly:text-[#022959] text-[14px] font-['Ubuntu-Medium'] peer-checked/Yearly:text-[#9699AA] cursor-pointer"
          >
            Monthly
          </label>

          <button
            onClick={toggleBiling}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[38px] h-[20px] bg-[#022959] rounded-full"
          ></button>
          <button
            onClick={toggleBiling}
            className="absolute top-[50%] left-[50%] peer-checked/monthly:translate-x-[-15px] translate-y-[-50%] h-[12px] w-[12px] bg-white rounded-full transform transition-transform duration-300 peer-checked/Yearly:translate-x-[3px]"
          ></button>

          <label
            htmlFor="Yearly"
            className=" peer-checked/Yearly:text-[#022959] text-[14px] font-['Ubuntu-Medium'] peer-checked/monthly:text-[#9699AA] cursor-pointer"
          >
            Yearly
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlanSelectForm;
