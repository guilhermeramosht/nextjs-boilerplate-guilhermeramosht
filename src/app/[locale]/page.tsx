import Layout from '@/components/Layout/Layout.component'
import { getDictionary } from './dictionaries/dictionaries'
import Page from '@/shared/types/Page'

export default async function Home({ params: { locale } }: Page) {
  const dict = await getDictionary(locale, 'home')
  const { menu } = await getDictionary(locale, 'common')

  return (
    <Layout menu={menu}>
      <h1>{dict.title}</h1>
    </Layout>
  )
}
