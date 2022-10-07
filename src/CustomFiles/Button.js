import React from 'react'

export default function Button({ className, style, btnText }) {
    return (
        <button style={style} className={className}>{btnText}</button>
    )
}
