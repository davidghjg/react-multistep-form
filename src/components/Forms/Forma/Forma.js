import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

const styles = {
  inputClass:
    "mt-2 flex h-12 w-full items-center justify-center rounded-xl border-2 bg-white/0 p-3 border-inherit text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white",
  labelClass: "font-bold text-xl mb-4 block text-primary dark:text-white mt-5",
  buttonClass:
    "rounded-md ml-5 bg-blue-500 hover:bg-blue-600 text-white py-2 mt-2 px-4 font-medium",
};



function Forma() {  
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

    const seleccionUno = (event) => {
      console.log(event.target);
      console.log('button clicked');
      setActiveStepIndex(activeStepIndex + 1);
    };
  return (
    <>
            <div className="">
          <h4 className=" mb-6 mr-5 ml-4 text-4xl font-bold dark:text-white">
            Elige tu metodo de recuperación
          </h4>
        </div>
        <button type="submit" onClick={seleccionUno} className={styles.buttonClass}>
          Correo electronico
        </button>
        <p className=" mt-5 mb-5 font-bold ml-5 mr-4 text-l text-gray-600 dark:text-gray-400">
            Ingresa tu usuario para identificar la gestión de recuperación de cuenta.
          </p>
        <button type="submit" onClick={seleccionUno} className={styles.buttonClass}>
          x
        </button>
    </>
  );
}

export default Forma;
