'use client'

import Input from "@/app/components/input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { createQueryString, removeQueryString } from "@/app/functions/mutateQueryString"

export default function BillingAddressSetter() {
    const searchParams = useSearchParams()!
    const router = useRouter()
    const pathname = usePathname()

    return (
        <Input
            required
            type="checkbox"
            className="accent-purple-950 flex items-center gap-2 w-fit"
            inputClassName="w-fit"
            label={<span>Same as Home Address</span>}
            showLabel
            checked={searchParams.get("type") === "custom"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                router.push(
                    pathname + '?' + (searchParams.get('type') === "custom" ? removeQueryString("type", searchParams) : createQueryString('type', "custom", searchParams)),
                    {
                        scroll: false
                    }
                )
            }}
        />
    )
}