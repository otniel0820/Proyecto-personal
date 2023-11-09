import React from "react";
import { InputBase, getInputClassName } from "./InputBase";



export const InputText  = ({
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
                type="text"
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
            />
        </InputBase>
    );
};