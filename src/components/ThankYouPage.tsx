import thankYOu from "../assets/images/icon-thank-you.svg";

const ThankYouPage = () => {
  return (
    <div className="w-[min(91.5%,400px)] desktop:w-[100%] mx-auto mt-[-73px] desktop:mt-[0px] relative bg-white py-[79px] desktop:py-[165px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] desktop:shadow-[none] rounded-[10px]">
      <div className="w-[86%] desktop:w-[450px] mx-auto text-center">
        <img
          className="inline-block w-[56px] desktop:w-[80px] h-[56px] desktop:h-[80px]"
          src={thankYOu}
          alt="Thank you"
        />
        <p className="text-[#022959] text-[24px] desktop:text-[32px] font-['Ubuntu-Bold'] mt-[24px] desktop:mt-[32px] leading-[1.17] desktop:leading-[1.156]">
          Thank you!
        </p>
        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] desktop:mt-[14px] leading-[1.56]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
