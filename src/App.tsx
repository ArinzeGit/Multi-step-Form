import { useState, Dispatch, SetStateAction, createContext } from "react";
import AddOnsForm from "./components/AddOnsForm";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PlanSelectForm from "./components/PlanSelectForm";
import SideBar from "./components/SideBar";
import StepControls from "./components/StepControls";
import SummaryPage from "./components/SummaryPage";
import useMultistepForm from "./utils/useMultistepForm";
import ThankYouPage from "./components/ThankYouPage";

interface ContextValue {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  plan: string;
  setPlan: Dispatch<SetStateAction<string>>;
  billing: string;
  setBilling: Dispatch<SetStateAction<string>>;
  selectedAddOns: string[];
  setSelectedAddOns: Dispatch<SetStateAction<string[]>>;
  steps: React.ReactElement[];
  currentStepIndex: number;
  next: () => void;
  back: () => void;
  goTo: (index: number) => void;
}

export const formDataContext = createContext<ContextValue>({
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  phoneNumber: "",
  setPhoneNumber: () => {},
  plan: "",
  setPlan: () => {},
  billing: "",
  setBilling: () => {},
  selectedAddOns: [],
  setSelectedAddOns: () => {},
  steps: [],
  currentStepIndex: 0,
  next: () => {},
  back: () => {},
  goTo: () => {},
});

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [plan, setPlan] = useState("Arcade"); //make empty string later
  const [billing, setBilling] = useState("Monthly");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const { step, steps, currentStepIndex, next, back, goTo } = useMultistepForm([
    <PersonalInfoForm />,
    <PlanSelectForm />,
    <AddOnsForm />,
    <SummaryPage />,
    <ThankYouPage />,
  ]);
  return (
    <div className="bg-[#EFF5FF] min-h-[100vh]">
      <formDataContext.Provider
        value={{
          name,
          setName,
          email,
          setEmail,
          phoneNumber,
          setPhoneNumber,
          plan,
          setPlan,
          billing,
          setBilling,
          selectedAddOns,
          setSelectedAddOns,
          steps,
          currentStepIndex,
          next,
          back,
          goTo,
        }}
      >
        <SideBar />
        {step}
        <div className="h-[144px]"></div>
        {!(currentStepIndex === steps.length - 1) && <StepControls />}
      </formDataContext.Provider>
    </div>
  );
};

export default App;
