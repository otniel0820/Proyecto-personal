import React from "react";
import { InputBase, getInputClassName } from "./InputBase";



export const InputNumber = ({
  id,
  label,
  error,
  value,
  placeholder,
  disabled,
  onChange,
  onBlur,
  containerClassName,
  inputClassName,
  spanChild,
  min,
  max,
  step,
}) => {
  const calculatedInputClassnames = getInputClassName({
    error,
    label,
    spanChild,
    className: inputClassName,
  });
  return (
    <InputBase
      id={id}
      label={label}
      error={error}
      className={containerClassName}
      spanChild={spanChild}
    >
      <input
        className={calculatedInputClassnames}
        id={id}
        type="number"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        step={step || undefined}
        min={min}
        max={max}
      />
    </InputBase>
  );
};