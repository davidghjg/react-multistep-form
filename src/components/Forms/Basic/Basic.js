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

function Basic() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
  });

  return (
    <>
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-start items-start h-96">
        <div className="">
          <h4 className=" mb-6 mr-5 ml-4 text-4xl font-bold dark:text-white">
            ¿Tienes problemas para iniciar sesión?
          </h4>
          <p className="mb-2 font-bold ml-5 mr-4 text-l text-gray-600 dark:text-gray-400">
            Ingresa tu usuario para identificar la gestión de recuperación de cuenta.
          </p>
        </div>
        <div className="flex flex-col items-start mb-6 ml-5">
          <label htmlFor="name" className={styles.labelClass}>
            Nombre
          </label>
          <ErrorMessage name="name" render={renderError} />
          <Field
            name="name"
            id="name"
            className={styles.inputClass}
            placeholder="Ingresa tu usuario"
          />
        </div>
        
        <button type="submit" className={styles.buttonClass}>
          Continuar
        </button>
      </Form>
      
    </Formik>
    <p className="text-sm font-medium text-gray-500 hover:text-blueshover dark:text-white dark:hover:text-[#2770B4]">
              Volver al inicio de sesion
            </p>
    
    </>
  );
}

export default Basic;