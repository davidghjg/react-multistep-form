import { createContext, useState } from "react";
import Step from "./components/Step/Step";
import Stepper from "./components/Stepper";
import { Forma } from "./components/Forms";
export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      <div className="w-screen h-screen flex flex-col bg-slate-900 items-center justify-start">
        <Stepper />
        <Step />
      </div>
    </FormContext.Provider>
  );
}

export default App;
