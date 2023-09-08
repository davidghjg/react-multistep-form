import React, { useContext, useEffect } from "react";
import { FormContext } from "../../App";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-cyan-700", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="w-2/3 flex flex-row items-center justify-center px-20 py-16 text-white">
      <div className="stepper-item font-bold flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
        1
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item font-bold  flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
        2
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item  font-bold flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
        3
      </div>
    </div>
  );
}

export default Stepper;
