import { useContext } from "react";
import { formDataContext } from "../App";

const PersonalInfoForm = () => {
  const { name, setName, email, setEmail, phoneNumber, setPhoneNumber } =
    useContext(formDataContext);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className=" w-[min(91.5%,400px)] mx-auto mt-[-73px] relative bg-white pt-[32px] pb-[32px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] rounded-[10px]">
      <div className="w-[86%] mx-auto">
        <p className="text-[#022959] text-[24px] font-['Ubuntu-Bold']">
          Personal info
        </p>
        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] leading-[1.56]">
          Please provide your name, email address, and phone number.
        </p>
        <label
          htmlFor="name"
          className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] block mt-[22px] mb-[3px]"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="outline outline-1 outline-[#D6D9E6] focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] px-[16px] h-[40px] block rounded-[4px] w-[100%]"
        />
        <label
          htmlFor="email"
          className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] block mt-[16px] mb-[3px]"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="outline outline-1 outline-[#D6D9E6] focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] px-[16px] h-[40px] block rounded-[4px] w-[100%]"
        />
        <label
          htmlFor="phone"
          className="text-[#022959] text-[12px] font-['Ubuntu-Regular'] block mt-[16px] mb-[3px]"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="outline outline-1 outline-[#D6D9E6] focus:outline-[#483EFF] text-[#9699AA] text-[15px] font-['Ubuntu-Medium'] px-[16px] h-[40px] block rounded-[4px] w-[100%]"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
