import { PageWrapper } from "../components/PageWrapper"
import { Hero } from "../sections/Hero"
import { VisionMissionMotto } from "../sections/VisionMissionMotto"
import { BrandStory } from "../sections/BrandStory"
import { ProcessSection } from "../sections/ProcessSection"
import { FeaturedSweets } from "../sections/FeaturedSweets"
import { FounderTeaser } from "../sections/FounderTeaser"
import { QuizTeaser } from "../sections/QuizTeaser"
import { ContactUs } from "../sections/ContactUs"

export function Landing() {
  return (
    <PageWrapper>
      <div className="-mt-[76px]">
        <Hero />
      </div>
      <VisionMissionMotto />
      <BrandStory />
      <FeaturedSweets />
      <ProcessSection />
      <FounderTeaser />
      <QuizTeaser />
      <ContactUs />
    </PageWrapper>
  )
}
