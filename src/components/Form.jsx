import React from "react";
import Button from "./Button";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "./InputText";
import { InputTextArea } from "./InputTextArea";
import {InputNumber} from "./InputNumber";
import { Link } from "react-router-dom";

const Form = () => {


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   trigger,
  //   control,
  //   watch,
  //   reset,
  // } = useForm();
  const { handleSubmit, control, register, trigger, reset, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      surname: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset()
  });
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="p-4 md:p-10 bg-slate-100 w-full md:w-[30rem] rounded-xl flex flex-col gap-5 shadow-lg shadow-[white]   max-w-screen-md mx-auto "
      >
        <Controller
          control={control}
          name="name"
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputText
              id="name"
              value={value ?? ""}
              label="Nombre"
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              containerClassName="sm:col-span-4"
            />
          )}
        />
        <Controller
          control={control}
          name="lastName "
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputText
              id="lastName"
              value={value ?? ""}
              label="Apellido"
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              containerClassName="sm:col-span-4"
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputText
              id="email"
              value={value ?? ""}
              label="Email"
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              containerClassName="sm:col-span-4"
            />
          )}
        />
         <Controller
          control={control}
          name="number"
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputNumber
              id="number"
              value={value ?? ""}
              label="Telefono"
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              containerClassName="sm:col-span-4"
            />
          )}
        />
        <Controller
          control={control}
          name="textArea"
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputTextArea
              id="textArea"
              value={value ?? ""}
              label=""
              rows={5}
              onChange={onChange}
              onBlur={onBlur}
              error={error?.message}
              containerClassName="sm:col-span-4"
            />
          )}
        />
        <div className="flex justify-start items-center gap-1">
        <input
              type="checkbox"
              id="politicas"
              {...register("politicas", {
                required: {
                  value: true,
                  message:
                    "Debe aceptar las politicas de privacidad y los Terminos y condiciones",
                },
              })}
              className="w-[1em] h-[1.25em] border-[#D1D5DB] accent-[#2A5B45]"
              onBlur={()=>trigger('politicas')}
            />
          <label
              htmlFor="politicas"
              className="text-[0.9em] not-italic font-normal text-[#374151] w-full flex gap-[0.3em] justify-center items-center"
            >
              Acepto las
              <Link to={"/politica_de_privacidad"}>
                <p className="text-[0.8em] not-italic font-semibold text-[#374151]">
                  Política de Privacidad
                </p>
              </Link>
              y los
              <Link to={"/terminos_y_condiciones"}>
                <p className="text-[0.8em] not-italic font-semibold text-[#374151]">
                  Términos y condiciones.
                </p>
              </Link>
            </label>
         
        </div>
          {errors.politicas && (
            <span className="text-[red] text-[0.7em]">
              {errors.politicas?.message}
            </span>
          )}
        <div>
          <Button intent="primary" roundness="round">Enviar</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
