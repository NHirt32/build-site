import Image from "next/image";
import Link from "next/link";
import { Lexend } from 'next/font/google';
import Card from "@/components/Card"
import Header from "@/components/Header"
import Slider from "@/components/Slider"

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    // Not really liking hover:bold but I don't know of a better way to handle this.
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="bg-white flex-grow grid grid-cols-2">
        <div className="bg-teal-300 grid grid-cols-3 gap-4">
          
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={70}
            potential={100}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={70}
            potential={100}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={70}
            potential={100}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />

          


        </div>
      </div>
    </div>
  );

}
