import React, { InputHTMLAttributes, FC } from 'react';
import { w } from "../functions/w";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: React.ReactNode;
    error?: string;
    showLabel?: boolean;
    inputClassName?: string;
}

const Input: FC<InputProps> = ({
    placeholder,
    className,
    type = 'text',
    label,
    error = '',
    inputClassName,
    showLabel = false,
    ...props
}) => {
    return (
        <label className={w(className)}>
            <input
                type={type}
                placeholder={placeholder}
                className={w(
                    "border rounded-lg",
                    'bg-sky-50/40',
                    'p-2',
                    'w-full',
                    'invalid:bg-orange-50/50 invalid:border-orange-100',
                    inputClassName
                )}
                {...props}
            />
            {showLabel && label}
            {error && <div><span className="text-xs text-orange-600">{error}</span></div>}
        </label>
    );
}

export default Input;
