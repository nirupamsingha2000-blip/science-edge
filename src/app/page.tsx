import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Courses } from '@/components/Courses'
import { Stats } from '@/components/Stats'
import { Pricing } from '@/components/Pricing'
import { Schedule } from '@/components/Schedule'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Courses />
      <Pricing />
      <Schedule />
      <Testimonials />
      <CTA />
    </>
  )
}
