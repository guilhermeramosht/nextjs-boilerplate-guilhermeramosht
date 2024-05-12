import Layout from '@/components/Layout/Layout.component'
import { getDictionary } from './dictionaries/dictionaries'
import Page from '@/shared/types/Page'

export default async function Home({ params: { locale } }: Page) {
  const dict = await getDictionary(locale, 'home')
  return (
    <Layout>
      <h1>{dict.title}</h1>
    </Layout>
  )
}
