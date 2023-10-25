import { w } from "../functions/w";

export default function Summary({ className }: { className?: string }) {
    return (
        <div className={w(
            'flex flex-col',
            'gap-4',
            className
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
    )
}