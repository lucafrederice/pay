import { w } from "../functions/w"

export default function Input({
    placeholder,
    className,
    type,
    label,
    labelHidden = true,
    error = '',
    ...props
}: {
    placeholder?: string,
    className: string,
    type: string,
    label?: React.ReactNode,
    labelHidden?: boolean,
    error?: string,
}) {
    return (
        <label className={w(className)}>
            <span className={w(labelHidden && 'sr-only')}>{label}</span>
            <input type={type} placeholder={placeholder} className={w(
                "border rounded-lg",
                'bg-sky-50/40',
                'p-2',
                'w-full',
                'invalid:bg-orange-50/50 invalid:border-orange-100'
            )} {...props} />
            <div><span className="text-xs text-orange-600">{error}</span></div>
        </label>
    )
}