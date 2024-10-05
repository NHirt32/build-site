import Image from "next/image";
import Link from "next/link";
import { Lexend } from 'next/font/google';
import Card from "@/components/Card"

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    // Not really liking hover:bold but I don't know of a better way to handle this.
    <div className="flex flex-col min-h-screen">
      <div className="bg-purple-400 w-full h-15 grid-cols-3 justify-center grid space-x-4">
        <Link href={"/builds"} className="bg-red-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
          3.25 Builds
        </Link>
        <Link href={"/random"} className="bg-blue-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
          Build Archive
        </Link>
        <Link href={"/about"} className="bg-green-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
          Random Build
        </Link>
      </div>
      <div className="bg-white flex-grow grid grid-cols-2">
        <div className="bg-teal-300 grid grid-cols-3 space-x-4 space-y-1">
          
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            className="ml-4 mt-1"
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
          />
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
          />
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
          />

          


        </div>

      </div>
    </div>
  );

}
