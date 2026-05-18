import { Hero } from '@/components/Hero';
import { Logos } from '@/components/Logos';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { CaseStudy } from '@/components/CaseStudy';
import { Founder } from '@/components/Founder';
import { Guarantee } from '@/components/Guarantee';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <CaseStudy />
      <Founder />
      <Guarantee />
      <FAQ />
      <CTA />
    </>
  );
}
