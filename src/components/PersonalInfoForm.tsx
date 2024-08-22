import { ChangeEvent, useContext } from "react";
import { formDataContext } from "../App";

const PersonalInfoForm = () => {
  const { contactInfo, setContactInfo, error } = useContext(formDataContext);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const newContactInfo = {
      ...contactInfo,
      [event.target.name]: event.target.value,
    };
    setContactInfo(newContactInfo);
  }

  return (
    <div className=" w-[min(91.5%,400px)] desktop:w-[100%] mx-auto mt-[-73px] desktop:mt-[0px] relative bg-white py-[32px] desktop:py-[40px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] desktop:shadow-[none] rounded-[10px]">
      <div className="w-[86%] desktop:w-[450px] mx-auto">
        <p className="text-[#022959] text-[24px] desktop:text-[32px] font-['Ubuntu-Bold'] desktop:leading-[1.16]">
          Personal info
        </p>
        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] desktop:mt-[11px] leading-[1.56]">
          Please provide your name, email address, and phone number.
        </p>

        <div className="mt-[22px] desktop:mt-[35px] mb-[3px] desktop:mb-[8px] flex justify-between">
          <label
            htmlFor="name"
            className="text-[#022959] text-[12px] desktop:text-[14px] desktop:leading-[1.14]  font-['Ubuntu-Regular']"
          >
            Name
          </label>
          {error.name && (
            <p className="text-[#d33e4c] text-[12px] desktop:text-[14px] desktop:leading-[1.14] font-['Ubuntu-Bold'] ">
              {error.name}
            </p>
          )}
        </div>

        <input
          id="name"
          name="name"
          type="text"
          value={contactInfo.name}
          onChange={handleInput}
          placeholder="e.g. Stephen King"
          className={`outline outline-1 ${
            error.name ? "outline-[#d33e4c]" : "outline-[#D6D9E6]"
          } focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] leading-[1.56] px-[16px] h-[40px] desktop:h-[48px] block rounded-[4px] w-[100%]`}
        />

        <div className="mt-[16px] desktop:mt-[24px] mb-[3px] desktop:mb-[8px] flex justify-between">
          <label
            htmlFor="email"
            className="text-[#022959] text-[12px] desktop:text-[14px] desktop:leading-[1.14] font-['Ubuntu-Regular']"
          >
            Email Address
          </label>
          {error.email && (
            <p className="text-[#d33e4c] text-[12px] desktop:text-[14px] desktop:leading-[1.14] font-['Ubuntu-Bold'] ">
              {error.email}
            </p>
          )}
        </div>

        <input
          id="email"
          name="email"
          type="email"
          value={contactInfo.email}
          onChange={handleInput}
          placeholder="e.g. stephenking@lorem.com"
          className={`outline outline-1 ${
            error.email ? "outline-[#d33e4c]" : "outline-[#D6D9E6]"
          } focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] leading-[1.56] px-[16px] h-[40px] desktop:h-[48px] block rounded-[4px] w-[100%]`}
        />

        <div className="mt-[16px] desktop:mt-[24px] mb-[3px] desktop:mb-[8px] flex justify-between">
          <label
            htmlFor="phone"
            className="text-[#022959] text-[12px] desktop:text-[14px] desktop:leading-[1.14] font-['Ubuntu-Regular']"
          >
            Phone Number
          </label>
          {error.phone && (
            <p className="text-[#d33e4c] text-[12px] desktop:text-[14px] desktop:leading-[1.14] font-['Ubuntu-Bold'] ">
              {error.phone}
            </p>
          )}
        </div>

        <input
          id="phone"
          name="phone"
          type="text"
          value={contactInfo.phone}
          onChange={handleInput}
          placeholder="e.g. +1 234 567 890"
          className={`outline outline-1 ${
            error.phone ? "outline-[#d33e4c]" : "outline-[#D6D9E6]"
          } focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] leading-[1.56] px-[16px] h-[40px] desktop:h-[48px] block rounded-[4px] w-[100%]`}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
