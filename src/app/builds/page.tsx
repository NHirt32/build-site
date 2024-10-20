import Header from "@/components/Header"
import CardHolder from "@/components/CardHolder"
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="h-14" />
      <Filter></Filter>
      <div className="grid gap-4 mt-10 px-80">
        <CardHolder className="grid-cols-2 mt-10"/>
      </div>
    </div>
  );

}
