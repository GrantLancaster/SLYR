import Button from "./components/button";
import Image from "next/image";
import testImage from "../../public/window.svg"

export default function Home() {


  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image 
        src={testImage}
        alt="Just a test"
        width={300}
        height={200}
      />
      <Button 
        className="bg-orange-500 text-white font-[family-name:var(--font-geist-sans)] p-1"
        buttonText="I work now"
      />
    </div>
  );
}
