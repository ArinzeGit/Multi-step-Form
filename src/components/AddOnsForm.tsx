import { useContext } from "react";
import { formDataContext } from "../App";

const AddOnsForm = () => {
  const { billing, selectedAddOns, setSelectedAddOns } =
    useContext(formDataContext);

  const handleAddOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelectedAddOns((prevSelectedAddOns) => {
      const updatedAddOns = event.target.checked
        ? [...prevSelectedAddOns, value]
        : prevSelectedAddOns.filter((item) => item !== value);

      return updatedAddOns;
    });
  };

  return (
    <div className=" w-[min(91.5%,400px)] desktop:w-[100%] mx-auto mt-[-73px] desktop:mt-[0px] relative bg-white py-[32px] desktop:py-[40px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] desktop:shadow-[none] rounded-[10px]">
      <div className="w-[86%] desktop:w-[450px] mx-auto">
        <p className="text-[#022959] text-[24px] desktop:text-[32px] font-['Ubuntu-Bold'] desktop:leading-[1.16]">
          Pick add-ons
        </p>
        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] desktop:mt-[11px] leading-[1.56]">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="relative">
          <input
            type="checkbox"
            id="onlineService"
            name="addOns"
            value="Online service"
            onChange={handleAddOnChange}
            checked={selectedAddOns.includes("Online service")}
            className="peer/onlineService cursor-pointer absolute top-[50%] translate-y-[-50%] left-[16px] desktop:left-[24px] w-[20px] h-[20px] z-[1] appearance-none outline outline-[1px] outline-[#D6D9E6] rounded-[4px] checked:bg-[#483EFF] checked:bg-[url('/src/assets/images/icon-checkmark.svg')] checked:bg-no-repeat checked:bg-center checked:outline-[0] "
          />
          <label
            htmlFor="onlineService"
            className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/onlineService:outline-[#483EFF] peer-checked/onlineService:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[11px] desktop:pt-[16px] pb-[12px] desktop:pb-[20px] pl-[52px] desktop:pl-[68px] pr-[16px] desktop:pr-[24px] relative mt-[22px] desktop:mt-[35px]"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#022959] text-[14px] desktop:text-[16px] font-['Ubuntu-Medium'] leading-[1.14] desktop:leading-[1.125]">
                  Online service
                </div>
                <div className="text-[#9699AA] text-[12px] desktop:text-[14px] font-['Ubuntu-Regular'] leading-[1.67] desktop:leading-[1.429] mt-[3px] desktop:mt-[7px]">
                  Access to multiplayer games
                </div>
              </div>
              <div className="text-[#483EFF] text-[12px] desktop:text-[14px] font-['Ubuntu-Regular'] leading-[1.67] desktop:leading-[1.429]">
                {billing === "Yearly" ? "+$10/yr" : "+$1/mo"}
              </div>
            </div>
          </label>
        </div>

        <div className="relative">
          <input
            type="checkbox"
            id="largerStorage"
            name="addOns"
            value="Larger storage"
            onChange={handleAddOnChange}
            checked={selectedAddOns.includes("Larger storage")}
            className="peer/largerStorage cursor-pointer absolute top-[50%] translate-y-[-50%] left-[16px] desktop:left-[24px] w-[20px] h-[20px] z-[1] appearance-none outline outline-[1px] outline-[#D6D9E6] rounded-[4px] checked:bg-[#483EFF] checked:bg-[url('/src/assets/images/icon-checkmark.svg')] checked:bg-no-repeat checked:bg-center checked:outline-[0]"
          />
          <label
            htmlFor="largerStorage"
            className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/largerStorage:outline-[#483EFF] peer-checked/largerStorage:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[11px] desktop:pt-[16px] pb-[12px] desktop:pb-[20px] pl-[52px] desktop:pl-[68px] pr-[16px] desktop:pr-[24px] relative mt-[12px] desktop:mt-[16px]"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#022959] text-[14px] desktop:text-[16px] font-['Ubuntu-Medium'] leading-[1.14] desktop:leading-[1.125]">
                  Larger storage
                </div>
                <div className="text-[#9699AA] text-[12px] desktop:text-[14px] font-['Ubuntu-Regular'] leading-[1.67] desktop:leading-[1.429] mt-[3px] desktop:mt-[7px]">
                  Extra 1TB of cloud save
                </div>
              </div>
              <div className="text-[#483EFF] text-[12px] desktop:text-[14px] font-['Ubuntu-Regular'] leading-[1.67] desktop:leading-[1.429]">
                {billing === "Yearly" ? "+$20/yr" : "+$2/mo"}
              </div>
            </div>
          </label>
        </div>

        <div className="relative">
          <input
            type="checkbox"
            id="customizableProfile"
            name="addOns"
            value="Customizable profile"
            onChange={handleAddOnChange}
            checked={selectedAddOns.includes("Customizable profile")}
            className="peer/customizableProfile cursor-pointer absolute top-[50%] translate-y-[-50%] left-[16px] desktop:left-[24px] w-[20px] h-[20px] z-[1] appearance-none outline outline-[1px] outline-[#D6D9E6] rounded-[4px] checked:bg-[#483EFF] checked:bg-[url('/src/assets/images/icon-checkmark.svg')] checked:bg-no-repeat checked:bg-center checked:outline-[0]"
          />
          <label
            htmlFor="customizableProfile"
            className="block outline outline-[1px] outline-[#D6D9E6] rounded-lg cursor-pointer transition-colors duration-300 peer-checked/customizableProfile:outline-[#483EFF] peer-checked/customizableProfile:bg-[#F8F9FF] hover:outline-[#483EFF] pt-[11px] desktop:pt-[16px] pb-[12px] desktop:pb-[20px] pl-[52px] desktop:pl-[68px] pr-[16px] desktop:pr-[24px] relative mt-[12px] desktop:mt-[16px]"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#022959] text-[14px] desktop:text-[16px] font-['Ubuntu-Medium'] leading-[1.14] desktop:leading-[1.125]">
                  Customizable profile
                </div>
                <div className="text-[#9699AA] text-[12px] desktop:text-[14px] font-['Ubuntu-Regular'] leading-[1.67] desktop:leading-[1.429] mt-[3px] desktop:mt-[7px]">
                  Custom theme on your profile
                </div>
              </div>
              <div className="text-[#483EFF] text-[12px] desktop:text-[14px] font-['Ubuntu-Regular'] leading-[1.67] desktop:leading-[1.429]">
                {billing === "Yearly" ? "+$20/yr" : "+$2/mo"}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddOnsForm;
