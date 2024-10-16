import Header from "@/components/Header"
import CardHolder from "@/components/CardHolder"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="grid gap-4 mt-10 px-20">
        <CardHolder className="grid-cols-1 mt-10"/>
      </div>
    </div>
  );

}
