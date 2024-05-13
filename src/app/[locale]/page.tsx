import Layout from '@/components/Layout/Layout.component'
import { getDictionary } from './dictionaries/dictionaries'
import Page from '@/shared/types/Page'
import Hero from '@/components/Hero/Hero.component'

export default async function Home({ params: { locale } }: Page) {
  const { hero } = await getDictionary(locale, 'home')
  const { menu } = await getDictionary(locale, 'common')

  return (
    <Layout menu={menu}>
      <Hero title={hero.title} paragraph={hero.paragraph} />
    </Layout>
  )
}
