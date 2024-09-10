import { useContext } from "react";
import { formDataContext } from "../App";

const SummaryPage = () => {
  const { plan, billing, selectedAddOns, goTo } = useContext(formDataContext);

  const plans = {
    Arcade: { Monthly: 9, Yearly: 90 },
    Advanced: { Monthly: 12, Yearly: 120 },
    Pro: { Monthly: 15, Yearly: 150 },
  };

  let totalCost = 0;
  let planCost = 0;

  if (plan) {
    planCost =
      plans[plan as keyof typeof plans][
        billing as keyof (typeof plans)["Arcade"]
      ]; //the "as keyof typeof" tell typescript all the possible values of plan and billing so that it is sure they will be valid indexes

    totalCost += planCost;
  }

  const addOns = {
    "Online service": { Monthly: 1, Yearly: 10 },
    "Larger storage": { Monthly: 2, Yearly: 20 },
    "Customizable profile": { Monthly: 2, Yearly: 20 },
  };

  return (
    <div
      data-testid="summaryPageComponent"
      className=" w-[min(91.5%,400px)] desktop:w-[100%] mx-auto mt-[-73px] desktop:mt-[0px] relative bg-white py-[32px] desktop:py-[40px] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.095)] desktop:shadow-[none] rounded-[10px]"
    >
      <div className="w-[86%] desktop:w-[450px] mx-auto">
        <p className="text-[#022959] text-[24px] desktop:text-[32px] font-['Ubuntu-Bold'] desktop:leading-[1.16]">
          Finishing up
        </p>

        <p className="text-[#9699AA] text-[16px] font-['Ubuntu-Regular'] mt-[9px] desktop:mt-[11px] leading-[1.56]">
          Double check everything looks OK before confirming.
        </p>

        <div className=" bg-[#F8F9FF] mt-[22px] desktop:mt-[35px] p-[16px] desktop:px-[24px] desktop:pb-[24px] rounded-[8px]">
          <div className="flex justify-between items-center border-b border-b-[#9699AA] pb-[12px] desktop:pb-[24px]">
            <div>
              <div className="text-[#022959] text-[14px] desktop:text-[16px] font-['Ubuntu-Medium'] leading-[1.14] desktop:leading-[1.125]">
                {`${plan} (${billing})`}
              </div>
              <button
                onClick={() => goTo(1)}
                className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] leading-[1.43] mt-[3px] desktop:mt-[7px] underline hover:text-[#483EFF]"
              >
                Change
              </button>
            </div>

            <div className="text-[#022959] text-[14px] desktop:text-[16px] font-['Ubuntu-Bold'] leading-[1.43] desktop:leading-[1.125]">
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
                className="flex justify-between items-center mt-[12px] desktop:mt-[16px]"
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

        <div className="flex justify-between items-center px-[16px] desktop:px-[24px] desktop:py-[1px] mt-[24px]">
          <div className="text-[#9699AA] text-[14px] font-['Ubuntu-Regular'] leading-[1.43] ">
            {`Total (per ${billing == "Yearly" ? "year" : "month"})`}
          </div>

          <div className="text-[#483EFF] text-[16px] desktop:text-[20px] font-['Ubuntu-Bold'] leading-[1.25] desktop:leading-[1]">
            {`$${totalCost}/${billing == "Yearly" ? "yr" : "mo"}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
