import Input from "../components/input";
import { w } from "../functions/w";

export default function Form({className}: {className?: string}) {
    return (
        <form className={w(
            "grid gap-2",
            "rounded-3xl border",
            "p-4 md:p-8",
            "flex flex-col gap-8",
            className
        )}>
            <div>
                <h2 className="text-lg font-semibold">Select Payment Method</h2>
                <div className="flex justify-between border rounded-xl p-1 font-semibold">
                    <button className="bg-purple-950 text-white rounded-lg px-4 py-2 w-full">CARD</button>
                    <button className="rounded px-4 py-2 w-full">ACH</button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Contact Information</span>
                <div className="flex gap-2">
                    <Input type="text" placeholder="First Name" label="First Name" className="w-1/2" />
                    <Input type="text" placeholder="Last Name" label="Last Name" className="w-1/2" />
                </div>
                <Input type="email" placeholder="Email" label="Email" className="w-full" />
                <Input type="text" placeholder="Phone Number (optional)" label='Phone Number (optional)' className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Home Address</span>
                <Input type="text" placeholder="Address Line 1" label="Address Line 1" className="w-full" />
                <Input type="text" placeholder="Address Line 2 (optional)" label="Address Line 2 (optional)" className="w-full" />
                <div className="flex gap-2">
                    <Input type="text" placeholder="City" label="City" className="w-1/3" />
                    <Input type="text" placeholder="State" label="State" className="w-1/3" />
                    <Input type="text" placeholder="Zipcode" label="Zipcode" className="w-1/3" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Card Information</span>
                <Input type="text" placeholder="Name on Card" label="Name on Card" className="w-full" />
                <div className="flex gap-2">
                    <Input type="text" placeholder="Card number" label="Card number" className="w-2/3" />
                    <Input type="text" placeholder="MM/YY" label="MM/YY" className="w-1/6" />
                    <Input type="text" placeholder="CVV" label='CVV' className="w-1/6" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Billing Address</span>
                <label className="flex items-center">
                    <Input type="checkbox" className="mr-2 accent-purple-950" />
                    Same as Home Address
                </label>
                <Input type="text" placeholder="Address Line 1" label="Address Line 1" className="w-full" />
                <Input type="text" placeholder="Address Line 2 (optional)" label="Address Line 2 (optional)" className="w-full" />
                <div className="flex gap-2">
                    <Input type="text" placeholder="City" label="City" className="w-1/3" />
                    <Input type="text" placeholder="State" label="State" className="w-1/3" />
                    <Input type="text" placeholder="Zipcode" label="Zipcode" className="w-1/3" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <button className="bg-purple-950 text-white rounded px-4 py-2 w-full mt-4">Pay $100.00 USD</button>
                <p className="text-xs text-center">By submitting this payment you agree to the privacy policy, refund policy, and terms of service.</p>
            </div>
        </form>
    )
}