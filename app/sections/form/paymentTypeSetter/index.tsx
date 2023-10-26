'use client'

import Input from "@/app/components/input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { createQueryString, removeQueryString } from "@/app/functions/mutateQueryString"
import { w } from "@/app/functions/w"

export default function PaymentTypeSetter({
    name,
    value,
}: {
    name: string,
    value: string
}) {
    const searchParams = useSearchParams()!
    const router = useRouter()
    const pathname = usePathname()

    return (
        <Input
            type="checkbox"
            value={value}
            name={name}
            label={<div className={w(
                "px-4 py-2",
                "h-full w-full",
                "grid place-items-center",
                "text-zinc-500",
                "peer-checked:bg-purple-950 peer-checked:text-white",
                "rounded-lg",
                "transition-all ease-in",
                "pointer-events-none",
                "capitalize"
            )}>{value}</div>}
            showLabel={true}
            inputClassName="hidden peer"
            className="w-full cursor-pointer"
            checked={ value === "ach" ? searchParams.get("ptype") === "ach" : searchParams.get("ptype") !== "ach"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                router.push(
                    (pathname === "" ? "/" : pathname) + '?' + (searchParams.get('ptype') === "ach" ? removeQueryString("ptype", searchParams) : createQueryString('ptype', "ach", searchParams)),
                    {
                        scroll: false
                    }
                )
            }}
        />
    )
}