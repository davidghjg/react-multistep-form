import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

const emialRegex = /[A-Za-z0-9._-]+@stratega-it\.com/;
const inputClass =
  "mt-2 flex h-12 w-full items-center justify-center rounded-xl border-2 bg-white/0 p-3 border-inherit text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white";
const labelClass = "block text-primary dark:text-white mt-5";

function Basic() {
//   const formik = useFormik({
//     initialValues:{
//       email: ""
//   },
//   validationSchema: yup.object({
//     email: yup.string()
//       .matches(emialRegex, "Ingresa un correo válido")
//       .required("Completa el campo")
//   }),
  
// })
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
  });

  return (
    <>
    <div className="block mt-[20vh] w-11/12 h-full px-4 xl:max-w-[500px] flex-col items-center justify-center mx-4 ">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          ¿Tienes problemas para iniciar sesión?
        </h4>
        <p className="mb-2 text-l text-gray-600 dark:text-gray-400">
          Ingresa tu usuario o correo para identificar la gestión de recuperación de cuenta.
        </p>



        <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Name</label>
          <Field
            name="name"
            className="rounded-md border-2 p-2"
            placeholder="John Doe"
          />
        </div>
        <ErrorMessage name="name" render={renderError} />
        <button
          className=" bg-blue-500 rounded-lg font-medium text-white my-2 p-4"
          //bg-blueshover dark:bg-blues rounded-lg text-white p-4
          type="submit"
        >
          Continue
        </button>
      </Form>
    </Formik>
      </div>

    
    </>
  );
}

export default Basic;
