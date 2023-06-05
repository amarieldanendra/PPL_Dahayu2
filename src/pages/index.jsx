import Hero from "@/components/landingPage/Hero"
import ExploreCategory from "@/components/landingPage/ExploreCategory"
import dynamic from "next/dynamic";

const BestProduct = dynamic(() => import("@/components/landingPage/BestProduct"), { ssr: false });
  
export default function Home() {
  return (
    <main>
      <Hero />
      <ExploreCategory />
      <BestProduct />
    </main>
  )
}
