import React from "react";
export default function InputField({ type, placeholder, name, value, onChange, className, style }) {
    return (
        <>
            <input
                type={type}
                className={className}
                style={style}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    )
}