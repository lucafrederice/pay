import { w } from "../functions/w"

export default function Input({
    placeholder,
    className,
    type,
    ...props
}: {
    placeholder?: string,
    className: string,
    type: string
}) {
    return (
        <input type={type} placeholder={placeholder} className={w(
            "border rounded-lg",
            'bg-zinc-50',
            'p-2',
            className
        )} {...props} />
    )
}