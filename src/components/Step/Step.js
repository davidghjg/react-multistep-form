import React, { useContext } from "react";
import { FormContext } from "../../App";
import { Basic, Success, Forma } from "../Forms";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Basic />;
      break;
    case 1:
      stepContent = <Forma />;
      break;
    case 2:
      stepContent = <Success />;
      break;

    default:
      break;
  }

  return stepContent;
}

export default Step;
