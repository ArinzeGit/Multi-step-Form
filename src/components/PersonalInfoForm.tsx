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
    <div className=" w-[min(91.5%,400px)] mx-auto mt-[-73px] relative bg-white pt-[32px] pb-[32px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] rounded-[10px]">
      <div className="w-[86%] mx-auto">
        <p className="text-[#022959] text-[24px] font-['Ubuntu-Bold']">
          Personal info
        </p>
        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] leading-[1.56]">
          Please provide your name, email address, and phone number.
        </p>

        <div className="mt-[22px] mb-[3px] flex justify-between">
          <label
            htmlFor="name"
            className="text-[#022959] text-[12px] font-['Ubuntu-Regular']"
          >
            Name
          </label>
          {error.name && (
            <p className="text-[#d33e4c] text-[12px] font-['Ubuntu-Bold'] ">
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
          className={`outline outline-1 ${
            error.name ? "outline-[#d33e4c]" : "outline-[#D6D9E6]"
          } focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] px-[16px] h-[40px] block rounded-[4px] w-[100%]`}
        />

        <div className="mt-[16px] mb-[3px] flex justify-between">
          <label
            htmlFor="email"
            className="text-[#022959] text-[12px] font-['Ubuntu-Regular']"
          >
            Email Address
          </label>
          {error.email && (
            <p className="text-[#d33e4c] text-[12px] font-['Ubuntu-Bold'] ">
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
          className={`outline outline-1 ${
            error.email ? "outline-[#d33e4c]" : "outline-[#D6D9E6]"
          } focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] px-[16px] h-[40px] block rounded-[4px] w-[100%]`}
        />

        <div className="mt-[16px] mb-[3px] flex justify-between">
          <label
            htmlFor="phone"
            className="text-[#022959] text-[12px] font-['Ubuntu-Regular']"
          >
            Phone Number
          </label>
          {error.phone && (
            <p className="text-[#d33e4c] text-[12px] font-['Ubuntu-Bold'] ">
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
          className={`outline outline-1 ${
            error.phone ? "outline-[#d33e4c]" : "outline-[#D6D9E6]"
          } focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] px-[16px] h-[40px] block rounded-[4px] w-[100%]`}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
