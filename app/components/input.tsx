import { w } from "../functions/w"

export default function Input({
    placeholder,
    className,
    type,
    label,
    labelHidden = true,
    ...props
}: {
    placeholder?: string,
    className: string,
    type: string,
    label?: React.ReactNode,
    labelHidden?: boolean
}) {
    return (
        <label className={w(className)}>
            <span className={w(labelHidden && 'sr-only')}>{label}</span>
            <input type={type} placeholder={placeholder} className={w(
                "border rounded-lg",
                'bg-zinc-50',
                'p-2',
                'w-full'
            )} {...props} />
        </label>
    )
}