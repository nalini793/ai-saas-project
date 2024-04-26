import { LandingContent } from "@/components/landing-content"
import { LandingHero } from "@/components/landing-hero"
import { LandingNavbar } from "@/components/landingNavbar"

const LandingPage = () => {
  return (
    <div className=" h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent/>
    </div>
  )
}

export default LandingPage