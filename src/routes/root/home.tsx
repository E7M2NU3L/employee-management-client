import Features from "@/components/root/Features"
import Introduction from "@/components/root/Introduction"
import LogoTicker from "@/components/root/LogoTicker"
import Cta from "@/components/root/cta"
import Faq from "@/components/root/faq"
import Hero from "@/components/root/hero"

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Faq />
      <Cta />
    </div>
  )
}

export default Home