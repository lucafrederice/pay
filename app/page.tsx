import { w } from "./functions/w";
import Footer from "./sections/footer";
import Form from "./sections/form";
import Summary from "./sections/summary";

export default function Home() {
  return (
    <div>
      <div className={w(
        "w-full max-w-7xl mx-auto",
        "p-6",
        "grid md:grid-cols-2 md:grid-rows-2 gap-8"
      )}>
        <Summary />
        <Form className="md:row-span-2" />
        <Footer className="self-end" />
      </div>
    </div>
  )
}
