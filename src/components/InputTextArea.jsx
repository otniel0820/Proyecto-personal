import React from "react";
import { InputBase, getInputClassName } from "./InputBase";



export const InputTextArea = ({
  id,
  label,
  error,
  value,
  placeholder,
  disabled,
  onChange,
  onBlur,
  containerClassName,
  rows = 1,
  readOnly = false,
}) => {
  const inputClassName = getInputClassName({ error, label });
  return (
    <InputBase
      id={id}
      label={label}
      error={error}
      className={containerClassName}
    >
      <textarea
        className={inputClassName}
        id="exampleFormControlTextarea1"
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
      />
    </InputBase>
  );
};