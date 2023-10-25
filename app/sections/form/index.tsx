import Input from "../../components/input";
import { w } from "../../functions/w";
import { CheckIcon } from "@heroicons/react/24/solid";
import useBillingAddress from "./store/billingAddress";
import BillingAddressSetter from "./billingAddressSetter";

export default function Form({ className }: { className?: string }) {

    if (false)
        return (
            <>
                <div className={w(
                    "rounded-3xl border-2",
                    "border-green-300",
                    "p-4 md:p-8 max-md:py-12",
                    "grid place-items-center",
                    className
                )}>
                    <div
                        className={w(
                            "flex flex-col gap-2 items-center justify-center",
                            "text-center"
                        )}
                    >
                        <div className={w(
                            'grid place-items-center',
                            'p-4',
                            'rounded-full border-2 border-green-500'
                        )}>
                            <CheckIcon className="text-green-500 w-10 h-auto" />
                        </div>
                        <span className="text-lg md:text-xl">
                            Your payment has been submitted.
                        </span>
                        <span>
                            A copy of your receipt has been sent to your email.
                        </span>
                    </div>
                </div>
            </>
        )

    return (
        <form className={w(
            "grid gap-2",
            "rounded-3xl border-2",
            "p-4 md:p-8",
            "flex flex-col gap-8",
            className
        )}>
            <div>
                <h2 className="text-lg font-semibold">Select Payment Method</h2>
                <div className="flex justify-between border rounded-xl p-1 font-semibold">
                    <Input
                        required
                        type="radio"
                        name='method'
                        value='card'
                        defaultChecked
                        label={<div className={w(
                            "px-4 py-2",
                            "h-full w-full",
                            "grid place-items-center",
                            "text-zinc-500",
                            "peer-checked:bg-purple-950 peer-checked:text-white",
                            "rounded-lg",
                            "transition-all ease-in",
                            "pointer-events-none"
                        )}>Card</div>}
                        showLabel={true}
                        inputClassName="hidden peer"
                        className="w-full cursor-pointer"
                    />
                    <Input
                        required
                        type="radio"
                        name='method'
                        value='ach'
                        label={<div className={w(
                            "px-4 py-2",
                            "h-full w-full",
                            "grid place-items-center",
                            "text-zinc-500",
                            "peer-checked:bg-purple-950 peer-checked:text-white",
                            "rounded-lg",
                            "transition-all ease-in",
                            "pointer-events-none"
                        )}>ACH</div>}
                        showLabel={true}
                        inputClassName="hidden peer"
                        className="w-full cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Contact Information</span>
                <div className="flex gap-2">
                    <Input
                        required type="text" placeholder="First Name" label={<span className="sr-only">First Name</span>} className="w-1/2" />
                    <Input
                        required type="text" placeholder="Last Name" label={<span className="sr-only">Last Name</span>} className="w-1/2" />
                </div>
                <Input
                    required type="email" placeholder="Email" label={<span className="sr-only">Email</span>} className="w-full" />
                <Input
                    required type="text" placeholder="Phone Number (optional)" label={<span className="sr-only">Phone Number (optional)</span>} className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Home Address</span>
                <Input
                    required type="text" placeholder="Address Line 1" label={<span className="sr-only">Address Line 1</span>} className="w-full" />
                <Input
                    required type="text" placeholder="Address Line 2 (optional)" label={<span className="sr-only">Address Line 2 (optional)</span>} className="w-full" />
                <div className="flex gap-2">
                    <Input
                        required type="text" placeholder="City" label={<span className="sr-only">City</span>} className="w-1/3" />
                    <Input
                        required type="text" placeholder="State" label={<span className="sr-only">State</span>} className="w-1/3" />
                    <Input
                        required type="text" placeholder="Zipcode" label={<span className="sr-only">Zipcode</span>} className="w-1/3" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Card Information</span>
                <Input
                    required type="text" placeholder="Name on Card" label={<span className="sr-only">Name on Card</span>} className="w-full" />
                <div className="flex gap-2">
                    <Input
                        required type="text" placeholder="Card number" label={<span className="sr-only">Card number</span>} className="w-2/3" />
                    <Input
                        required type="text" placeholder="MM/YY" label={<span className="sr-only">MM/YY</span>} className="w-1/6" />
                    <Input
                        required type="text" placeholder="CVV" label={<span className="sr-only">CVV</span>} className="w-1/6" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Billing Address</span>
                <BillingAddressSetter />
                {
                    useBillingAddress.getState().type === "custom" && (
                        <div className="flex flex-col gap-2 ">
                            <Input required type="text" placeholder="Address Line 1" label={<span className="sr-only">Address Line 1</span>} className="w-full" />
                            <Input required type="text" placeholder="Address Line 2 (optional)" label={<span className="sr-only">Address Line 2 (optional)</span>} className="w-full" />
                            <div className="flex gap-2">
                                <Input required type="text" placeholder="City" label={<span className="sr-only">City</span>} className="w-1/3" />
                                <Input required type="text" placeholder="State" label={<span className="sr-only">State</span>} className="w-1/3" />
                                <Input required type="text" placeholder="Zipcode" label={<span className="sr-only">Zipcode</span>} className="w-1/3" />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="flex flex-col gap-4">
                <button className="bg-purple-950 text-white rounded px-4 py-2 w-full mt-4">Pay $100.00 USD</button>
                <p className="text-xs text-center max-w-xs mx-auto">
                    By submitting this payment you agree to the <span className="text-purple-600">privacy policy</span>, <span className="text-purple-600">refund policy</span>, and <span className="text-purple-600">terms of service</span>.
                </p>
            </div>
        </form>
    )
}