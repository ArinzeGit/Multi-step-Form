import { useState, Dispatch, SetStateAction, createContext } from "react";
import AddOnsForm from "./components/AddOnsForm";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PlanSelectForm from "./components/PlanSelectForm";
import SideBar from "./components/SideBar";
import StepControls from "./components/StepControls";
import SummaryPage from "./components/SummaryPage";
import useMultistepForm from "./utils/useMultistepForm";
import ThankYouPage from "./components/ThankYouPage";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface ContextValue {
  contactInfo: ContactInfo;
  setContactInfo: Dispatch<SetStateAction<ContactInfo>>;
  error: Partial<ContactInfo>;
  setError: Dispatch<SetStateAction<Partial<ContactInfo>>>;
  plan: string;
  setPlan: Dispatch<SetStateAction<string>>;
  isPlanSelected: boolean;
  setIsPlanSelected: Dispatch<SetStateAction<boolean>>;
  planError: boolean;
  setPlanError: Dispatch<SetStateAction<boolean>>;
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
  contactInfo: { name: "", email: "", phone: "" },
  setContactInfo: () => {},
  error: {},
  setError: () => {},
  plan: "",
  setPlan: () => {},
  isPlanSelected: false,
  setIsPlanSelected: () => {},
  planError: false,
  setPlanError: () => {},
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
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState<Partial<ContactInfo>>({});
  const [plan, setPlan] = useState("");
  const [isPlanSelected, setIsPlanSelected] = useState(false);
  const [planError, setPlanError] = useState(false);
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
    <>
      <main className="bg-[#EFF5FF] min-h-[100vh] desktop:flex desktop:items-center desktop:justify-center desktop:py-[150px]">
        <formDataContext.Provider
          value={{
            contactInfo,
            setContactInfo,
            error,
            setError,
            plan,
            setPlan,
            isPlanSelected,
            setIsPlanSelected,
            planError,
            setPlanError,
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
          <div className="desktop:min-w-[940px] desktop:flex desktop:py-[16px] desktop:pl-[16px] desktop:bg-[white] desktop:rounded-[15px]">
            <SideBar />
            <div className="desktop:w-[650px] desktop:flex desktop:flex-col justify-between">
              {step}
              <div className="h-[144px] desktop:h-[0]"></div>
              {!(currentStepIndex === steps.length - 1) && <StepControls />}
            </div>
          </div>
        </formDataContext.Provider>
      </main>
      <footer className="relative">
        <div className="text-[11px] absolute bottom-[6rem] left-[50%] transform translate-x-[-50%] text-[#D45526] ">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-[#3388FF] hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/ArinzeGit"
            target="_blank"
            className="text-[#3388FF] hover:underline"
          >
            Arinze Owoh
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default App;
