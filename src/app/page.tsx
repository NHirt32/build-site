import Image from "next/image";
import Link from "next/link";
import { Lexend } from 'next/font/google';
import Card from "@/components/Card"
import Header from "@/components/Header"
import Slider from "@/components/Slider"
import CardHolder from "@/components/CardHolder"

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
      <div className="bg-white flex-grow grid grid-cols-2 mt-2">
        <CardHolder/>
      </div>
    </div>
  );

}
