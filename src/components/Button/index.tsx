import React, { ButtonHTMLAttributes, CSSProperties, StyleHTMLAttributes } from 'react';
import { useState } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    loading?: boolean
    color?: string
    backgroundColor?: string,
    fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal" | "bolder",
    fontSize?: number | string,
    css?: CSSProperties
    outline?: boolean
    outlineColor?: string
    outlineWidth?: string
    ghost?: boolean
    rounded?: boolean
    variation: "primary" | "light" | "warning" | "danger"
    size?: "small" | "medium" | "large"
    leftIcon?: React.ReactNode | JSX.Element
    rightIcon?: React.ReactNode | JSX.Element
}

const Button: React.FC<IButton> = ({
    title,
    loading,
    color,
    backgroundColor,
    fontWeight,
    fontSize,
    css,
    outline,
    outlineColor,
    outlineWidth,
    ghost,
    rounded,
    variation,
    size,
    leftIcon,
    rightIcon,
    ...rest
}) => {
    const [hoverOpacity, setHoverOpacity] = useState(false)

    const backgroundVariations = {
        primary: "#000",
        light: "#ddd",
        warning: "orange",
        danger: "red",
        info: "#007bff"
    }

    const colorVariations = {
        primary: "#fff",
        light: "#222",
        warning: "#222",
        danger: "#222",
        info: "#fff"
    }

    const sizeOptions = {
        "small": "0.8rem",
        "medium": "1rem",
        "large": "1.5rem"
    }
    const sizePadding = {
        "small": "0.25rem 0.5rem",
        "medium": "0.25rem 0.5rem",
        "large": "0.5rem 0.75rem"
    }

    const stylesHover: CSSProperties = {
        backgroundColor: "blue"
    }

    let styles: CSSProperties = {
        ...css,
        backgroundColor: css?.backgroundColor || backgroundColor || (ghost ? "transparent" : (outline ? "#FFF" || css?.backgroundColor : backgroundVariations[variation || "primary"])),
        color: css?.color || color || (outline || ghost ? backgroundVariations[variation || "primary"] || css?.color : (colorVariations[variation || "primary"] || css?.color)),
        border: css?.border || (!ghost && outline ?
            `${outlineWidth || '1px'} solid ${outlineColor || backgroundVariations[variation || "primary"]}` :
            "none"),
        borderWidth: css?.borderWidth || outline ? outlineWidth || css?.borderWidth || "1px" : css?.borderWidth,
        borderColor: css?.borderWidth || outline ? outlineColor || backgroundVariations[variation] || css?.borderColor : css?.borderColor,
        outline: "inherit",
        padding: css?.padding || sizePadding[size || "medium"] || "0.25rem 0.5rem",
        fontSize: css?.fontSize || sizeOptions[size || "medium"] || fontSize || "1rem",
        fontWeight: css?.fontWeight || fontWeight,
        borderRadius: rounded ? "24px" : css?.borderRadius,
        display: "flex",
        gap: "0.25rem",
        opacity: hoverOpacity ? 0.85 : 1,
        cursor: "pointer",

    }


    return (
        <button {...rest} style={styles}
            onMouseLeave={() => setHoverOpacity(false)}
            onMouseOver={() => setHoverOpacity(true)}>

            {loading && <span className='loader'></span>}

            {!loading && leftIcon && <span> {leftIcon} </span>}

            {!loading && title}

            {!loading && rightIcon && <span> {rightIcon} </span>}
        </button>
    );
}

export default Button;