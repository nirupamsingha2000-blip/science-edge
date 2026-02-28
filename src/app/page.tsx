import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Features } from '@/components/Features'
import { Courses } from '@/components/Courses'
import { Pricing } from '@/components/Pricing'
import { Schedule } from '@/components/Schedule'
import { Teachers } from '@/components/Teachers'
import { Blog } from '@/components/Blog'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Newsletter } from '@/components/Newsletter'
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
      <Teachers />
      <Blog />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTA />
    </>
  )
}
