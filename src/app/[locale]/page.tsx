import Layout from '@/components/Layout/Layout.component'
import { getDictionary } from './dictionaries/dictionaries'
import Page from '@/shared/types/Page'
import Hero from '@/components/Hero/Hero.component'
import Section from '@/components/Section/Section.component'
import Image from 'next/image'
import ImageWrapper from '@/components/ImageWrapper/ImageWrapper.component'

export default async function Home({ params: { locale } }: Page) {
  const { hero, aboutUs } = await getDictionary(locale, 'home')
  const { menu } = await getDictionary(locale, 'common')

  return (
    <Layout menu={menu}>
      <Hero title={hero.title} paragraph={hero.paragraph} />
      <div className="md:grid grid-cols-2">
        <Section className="md:py-12 md:px-24" title={aboutUs.title}>
          <p>{aboutUs.paragraph}</p>
        </Section>
        <ImageWrapper className="min-h-64 h-full">
          <Image
            className="object-cover"
            src="/about-us.jpeg"
            alt={aboutUs.title}
            fill
          />
        </ImageWrapper>
      </div>
    </Layout>
  )
}
