import { useContext } from "react";
import Number from "./Number";
import { formDataContext } from "../App";

const SideBar = () => {
  const { currentStepIndex } = useContext(formDataContext);
  return (
    <div className="bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] md:bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] min-h-[172px] bg-cover bg-no-repeat bg-center pt-8 relative">
      <div className="space-x-4 absolute left-[50%] translate-x-[-50%]">
        <Number number="1" highlighted={currentStepIndex === 0} />
        <Number number="2" highlighted={currentStepIndex === 1} />
        <Number number="3" highlighted={currentStepIndex === 2} />
        <Number number="4" highlighted={currentStepIndex >= 3} />
      </div>
    </div>
  );
};
export default SideBar;
