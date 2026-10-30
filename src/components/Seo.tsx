import Head from 'next/head'
import { canonicalUrl } from '../config/site'

type SeoProps = {
  title: string
  description: string
  path: string
}

export default function Seo({ title, description, path }: SeoProps) {
  const url = canonicalUrl(path)
  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={url} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={url} />
    </Head>
  )
}
