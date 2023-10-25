import Icon from "../brand/icon";
import { w } from "../functions/w";

export default function Footer({className}: {className?: string}) {
    return (
        <footer className={w(
            'font-semibold',
            className
        )}>
            <span className="text-xs">
                Powered by
                <Icon alt="Pay Theory" className="h-auto w-24 -mt-3 not-sr-only" />
                <span className="sr-only">Pay Theory</span>
            </span>
            <p className="text-xs mt-2">Pay Theory is an inclusive payments provider. <a href="" className="text-purple-600">Learn more about inclusive payments.</a></p>
        </footer>
    )
}