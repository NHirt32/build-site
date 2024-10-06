import Header from "@/components/Header"
import CardHolder from "@/components/CardHolder"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="bg-gray-400 flex-grow grid grid-cols-2 gap-4 mt-10 px-10">
        <CardHolder/>
      </div>
    </div>
  );

}
