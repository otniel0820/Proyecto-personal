import React from "react";
import { InputBase, getInputClassName } from "./InputBase";



export const InputPassword= ({
  id,
  label,
  error,
  value,
  placeholder,
  disabled,
  onChange,
  onBlur,
  containerClassName,
  spanChild,
}) => {
  const inputClassName = getInputClassName({ error, label, spanChild });
  return (
    <InputBase
      id={id}
      label={label}
      error={error}
      className={containerClassName}
      spanChild={spanChild}
    >
      <input
        className={inputClassName}
        id={id}
        type="password"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputBase>
  );
};