import Image from "next/image";
import Link from "next/link";
import { Lexend } from 'next/font/google';

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
          Random Build
        </Link>
        <Link href={"/about"} className="bg-green-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
          About Me
        </Link>
      </div>
      <div className="bg-white flex-grow grid grid-cols-2">
        <div className="bg-teal-300 grid grid-cols-3">
          <Link href={"/build-1"} className="bg-blue-100 hover:border-pink-500 hover:border-2 hover:underline">
            <div className="relative h-2/3 bg-black">
              <Image 
                src= "/slayer-cropped.png"
                alt= "A picture of the Slayer Ascendancy"
                layout="fill"
                objectFit="cover"
              />

            </div>
            <div className="h-1/3 bg-black">
              <h2 className="font-bold text-white text-center"> Frost Blades of Katabasis Slayer</h2>

            </div>
          </Link>
          <Link href={"/build-1"} className="bg-blue-100 hover:border-pink-500 hover:border-4">
            <div className="relative h-2/3 bg-black">
              <Image 
                src= "/slayer-cropped.png"
                alt= "A picture of the Slayer Ascendancy"
                layout="fill"
                objectFit="cover"
              />

            </div>
            <div className="h-1/3 bg-white">
              <h2 className="font-bold text-black text-center"> Frost Blades of Katabasis Slayer</h2>

            </div>
          </Link>
          <Link href={"/build-1"} className="bg-blue-100 hover:border-pink-500 hover:border-4">
            <div className="relative h-2/3 bg-black">
              <Image 
                src= "/slayer-cropped.png"
                alt= "A picture of the Slayer Ascendancy"
                layout="fill"
                objectFit="cover"
              />

            </div>
            <div className="h-1/3 bg-white">
              <h2 className="font-bold text-black text-center"> Frost Blades of Katabasis Slayer</h2>

            </div>
          </Link>
          <Link href={"/build-1"} className="bg-blue-100 hover:border-pink-500 hover:border-4">
            <div className="relative h-2/3 bg-black">
              <Image 
                src= "/slayer-cropped.png"
                alt= "A picture of the Slayer Ascendancy"
                layout="fill"
                objectFit="cover"
              />

            </div>
            <div className="h-1/3 bg-white">
              <h2 className="font-bold text-black text-center"> Frost Blades of Katabasis Slayer</h2>

            </div>
          </Link>
          <Link href={"/build-1"} className="bg-blue-100 hover:border-pink-500 hover:border-4">
            <div className="relative h-2/3 bg-black">
              <Image 
                src= "/slayer-cropped.png"
                alt= "A picture of the Slayer Ascendancy"
                layout="fill"
                objectFit="cover"
              />

            </div>
            <div className="h-1/3 bg-white">
              <h2 className="font-bold text-black text-center"> Frost Blades of Katabasis Slayer</h2>

            </div>
          </Link>
          <Link href={"/build-1"} className="bg-blue-100 hover:border-pink-500 hover:border-4">
            <div className="relative h-2/3 bg-black">
              <Image 
                src= "/slayer-cropped.png"
                alt= "A picture of the Slayer Ascendancy"
                layout="fill"
                objectFit="cover"
              />

            </div>
            <div className="h-1/3 bg-white">
              <h2 className="font-bold text-black text-center"> Frost Blades of Katabasis Slayer</h2>

            </div>
          </Link>


        </div>

      </div>
    </div>
  );

}
