import { useContext } from "react";
import { formDataContext } from "../App";

const SummaryPage = () => {
  const { plan, billing, selectedAddOns, goTo } = useContext(formDataContext);

  const plans = {
    Arcade: { Monthly: 9, Yearly: 90 },
    Advanced: { Monthly: 12, Yearly: 120 },
    Pro: { Monthly: 15, Yearly: 150 },
  };

  const planCost =
    plans[plan as keyof typeof plans][
      billing as keyof (typeof plans)["Arcade"]
    ]; //the "as keyof typeof" tell typescript all the possible values of plan and billing so that it is sure they will be valid indexes

  let totalCost = 0;
  totalCost += planCost;

  const addOns = {
    "Online service": { Monthly: 1, Yearly: 10 },
    "Larger storage": { Monthly: 2, Yearly: 20 },
    "Customizable profile": { Monthly: 2, Yearly: 20 },
  };

  return (
    <div className=" w-[min(91.5%,400px)] mx-auto mt-[-73px] relative bg-white py-[32px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] rounded-[10px]">
      <div className="w-[86%] mx-auto">
        <p className="text-[#022959] text-[24px] font-['Ubuntu-Bold']">
          Finishing up
        </p>

        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] leading-[1.56]">
          Double check everything looks OK before confirming.
        </p>

        <div className=" bg-[#F8F9FF] mt-[22px] p-[16px] rounded-[8px]">
          <div className="flex justify-between items-center border-b border-b-[#9699AA] pb-[12px]">
            <div>
              <div className="text-[#022959] text-[14px] font-['Ubuntu-Medium'] leading-[1.14]">
                {`${plan} (${billing})`}
              </div>
              <button
                onClick={() => goTo(1)}
                className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] leading-[1.43] mt-[3px] underline hover:text-[#483EFF]"
              >
                Change
              </button>
            </div>
            <div className="text-[#022959] text-[14px] font-['Ubuntu-Bold'] leading-[1.43]">
              {`$${planCost}/${billing == "Yearly" ? "yr" : "mo"}`}
            </div>
          </div>

          {selectedAddOns.map((addOn) => {
            const addOnCost =
              addOns[addOn as keyof typeof addOns][
                billing as keyof (typeof addOns)["Online service"]
              ];
            totalCost += addOnCost;
            return (
              <div
                key={addOn}
                className="flex justify-between items-center mt-[12px]"
              >
                <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] leading-[1.43] ">
                  {addOn}
                </div>
                <div className="text-[#022959] text-[14px] font-['Ubuntu-Regular'] leading-[1.43]">
                  {`+$${addOnCost}/${billing == "Yearly" ? "yr" : "mo"}`}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center px-[16px] mt-[24px]">
          <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] leading-[1.43] ">
            {`Total (per ${billing == "Yearly" ? "year" : "month"})`}
          </div>
          <div className="text-[#483EFF] text-[16px] font-['Ubuntu-Bold'] leading-[1.25]">
            {`$${totalCost}/${billing == "Yearly" ? "yr" : "mo"}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
