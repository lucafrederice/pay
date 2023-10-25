import Icon from "./brand/icon";
import Input from "./components/input";
import { w } from "./functions/w";

export default function Home() {
  return (
    <div>
      <div className={w(
        "w-full max-w-7xl mx-auto",
        "p-6",
        "grid md:grid-cols-2 md:grid-rows-2 gap-8"
      )}>
        <div className={w(
          'flex flex-col',
          'gap-4'
        )}>
          <p className="text-gray-600 font-semibold md:py-4">[Merchant Name]</p>
          <p className="text-gray-600">Pay [Merchant Name]</p>
          <h1 className="text-4xl text-gray-900"><b>$100.00</b> <small className="text-gray-600">USD</small></h1>
          <div className={w(
            "py-6 md:py-12",
            "flex flex-col gap-2"
          )}>
            <h2 className="font-semibold text-lg">Order Summary</h2>
            <div className={w(
              "border rounded-3xl",
              "px-6 py-4"
            )}>
              <div className="flex justify-between">
                <p>Item Name</p>
                <p>$100.00 USD</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>$100.00 USD</p>
              </div>
            </div>
          </div>
        </div>
        <form className={w(
          "grid gap-2",
          "md:row-span-2",
          "rounded-3xl border",
          "p-4 md:p-8",
          "flex flex-col gap-8"
        )}>
          <div>
            <h2 className="text-lg font-semibold">Select Payment Method</h2>
            <div className="flex justify-between border rounded-xl p-1 font-semibold">
              <button className="bg-purple-500 text-white rounded-lg px-4 py-2 w-full">CARD</button>
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
              <Input type="checkbox" className="mr-2 accent-purple-900" />
              Same as Home Address
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <button className="bg-purple-500 text-white rounded px-4 py-2 w-full mt-4">Pay $100.00 USD</button>
            <p className="text-xs text-center">By submitting this payment you agree to the privacy policy, refund policy, and terms of service.</p>
          </div>
        </form>
        <footer className="self-end">
          <span className="text-xs">
            Powered by
            <Icon alt="Pay Theory" className="h-auto w-24 -mt-3 not-sr-only" />
            <span className="sr-only">Pay Theory</span>
          </span>
          <p className="text-xs mt-2">Pay Theory is an inclusive payments provider. <a href="" className="text-purple-700">Learn more about inclusive payments.</a></p>
        </footer>
      </div>
    </div>
  )
}
