import React from 'react'

export default function Button({ className, style, btnText, props,onClick }) {
    return (
        <button style={style} className={className} {...props} onClick={onClick}>{btnText}</button>
    )
}
        