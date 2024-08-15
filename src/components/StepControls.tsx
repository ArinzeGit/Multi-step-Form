import { useContext } from "react";
import { formDataContext } from "../App";

const StepControls = () => {
  const { steps, currentStepIndex, next, back } = useContext(formDataContext);
  const length = steps.length;

  return (
    <div className="fixed bottom-0 bg-white w-[100%] h-[72px]">
      <div className="w-[min(91.5%,400px)] h-[100%] mx-auto relative">
        {!(currentStepIndex === 0) && (
          <button
            onClick={back}
            className="absolute left-0 top-[50%] translate-y-[-50%] text-[#9699AA] text-[14px] font-['Ubuntu-Medium'] hover:text-[#022959]"
          >
            Go Back
          </button>
        )}
        {currentStepIndex === length - 2 ? (
          <button
            onClick={next}
            className="absolute right-0 top-[50%] translate-y-[-50%] bg-[#483EFF] text-white text-[14px] font-['Ubuntu-Medium'] w-[97px] h-[40px] rounded-[4px] hover:bg-[#928CFF]"
          >
            Confirm
          </button>
        ) : (
          <button
            onClick={next}
            className="absolute right-0 top-[50%] translate-y-[-50%] bg-[#022959] text-white text-[14px] font-['Ubuntu-Medium'] w-[97px] h-[40px] rounded-[4px] hover:bg-[#164A8A]"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
};

export default StepControls;
